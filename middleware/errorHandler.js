const {CustomError} = require("../errors/CustomError")
const errorHandler = (err,req,res,next) => {
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({msg : err.message})
    }
   return res.status(500).json({msg: "Something went wrong"})
}

module.exports = errorHandler;

//This is general error handler