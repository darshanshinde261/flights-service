const {  FlightRepository } = require("../repositories")
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

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


module.exports = {
    createFlight,
};