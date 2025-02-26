const {StatusCodes} = require('http-status-codes')

const {ErrorResponse} = require('../utils/common')
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next) {
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error=new AppError(["airport name not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error=new AppError(["airport code not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.cityId){
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error=new AppError(["cityId not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
};
function validateUpdateRequest(req,res,next){
    if(!req.body.name || !req.body.code || !req.body.cityId || !req.body.address){
        ErrorResponse.message = "Something went wrong while updating airplane";
        ErrorResponse.error=new AppError(["require data to update not found in the request"],StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}