const CrudRepository = require('./crud-repository')
const { flight,Airplane,Airport,City } = require("../models")
const {Sequelize} = require("sequelize");
const db = require('../models');
const {addRowLockOnFlights} = require('./queries')

class FlightRepository extends CrudRepository {
    constructor(){
        super(flight);
    }

    async getAllFlights(filter,sort){
        const response = await flight.findAll({
            where:filter,
            order:sort,
            include:[
            {
                model:Airplane,
                require:true,
                as:'airplaneDetail'
            },
            {
                model:Airport,
                require:true,
                as:'departureAirport',
                on:{
                    call:Sequelize.where(Sequelize.col('flight.departureAirportId'),'=',Sequelize.col('departureAirport.code'))
                },
                include:{
                    model:City,
                    require:true,
                }
            },
            {
                model:Airport,
                require:true,
                as:'arrivalAirport',
                on:{
                    call:Sequelize.where(Sequelize.col('flight.arrivalAirportId'),'=',Sequelize.col('arrivalAirport.code'))
                },
                include:{
                    model:City,
                    require:true,
                }
            }
        ]
        });
        return response;
    }

    async updateReaminingSeats(flightId,seats,dec=true){
        await db.sequelize.query(addRowLockOnFlights(flightId))
        const Flight = await flight.findByPk(flightId)
        if(parseInt(dec)){
            await Flight.decrement('totalSeats',{by:seats});
        }else{
            await Flight.increment('totalSeats',{by:seats});
        }
        return Flight;
    }
}

module.exports = FlightRepository