const { StatusCodes } = require('http-status-codes')

const info = (req,res) =>{
    return res.Status(StatusCodes.OK).json({
        success:true,
        message:"API IS LIVE",
        error:{},
        data:{}
    });
};

module.exports = {
    info,
};