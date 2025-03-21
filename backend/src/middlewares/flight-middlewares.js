const { StatusCodes } = require('http-status-codes')

const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error');
const {compareTime} = require('../utils/helpers/datetime-helper')

function validateCreateRequest(req,res,next) {
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["flightNumber not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["airplaneId not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["arrivalAirportId not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["departureAirportId not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["arrivalTime not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.departureTime){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["departureTime not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.price){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["price not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["totalSeats not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!compareTime(req.body.arrivalTime,req.body.departureTime)){
        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error=new AppError(["the time of arrival should not less than departure time"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
};



function validateUpdateSeatsRequest(req,res,next){
    if(!req.body.seats){
        ErrorResponse.message = "Something went wrong while updating flight";
        ErrorResponse.error=new AppError(["seats not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}