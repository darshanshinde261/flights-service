const {  FlightRepository } = require("../repositories")
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const {Op} = require('sequelize')

const flightRepository = new FlightRepository();

async function createFlight(data){
    try{
        const city = await flightRepository.create(data);
        return city
    }catch(error){
        if(error.name === 'SequelizeValidationError' || 'SequelizeUniqueContraintError'){
            let explanation = [];
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Connot create a new flight object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllFlights(query){
    // MUM-DEL
    let customFilter = {};
    let sortFilter = {};
    if(query.trips){
        [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        if(customFilter.departureAirportId === customFilter.arrivalAirportId){
            throw new AppError("connot fetch the data of al",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    if(query.price){
        [minPrice,maxPrice] = query.trips.split("-");
        customFilter.price = {
            [Op.between]:[minPrice,(maxPrice == undefined )? 20000:maxPrice]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.between] : [query.tripDate,query.tripDate + "23:59:00"] 
        }
    }
    if(query.sort){
        const params = query.sort.split(",");
        const sortFilters = params.map((param) => param.split("_"))
        sortFilter = sortFilters
    }
    try{
        const flights = await flightRepository.getAllFlights(customFilter);
        return flights;
    }catch(error){
        throw new AppError("connot fetch the data of all the airport",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight (id){
    try{
        const flight = await flightRepository.get(id);
        return flight;
    }catch(error){
        if(error.StatusCodes == StatusCodes.NOT_FOUND){
            throw new AppError('the flight you requested is not present',error.StatusCodes)
        }
        throw new AppError("connot fetch the data of all the airport",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight
};