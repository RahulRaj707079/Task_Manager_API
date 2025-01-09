const {customAPIError} = require('../Errors/customErrorHandler')

const error_handler = (err,req,res,next)=>{
     if(err instanceof customAPIError){
          return res.status(err.statusCode).json({msg: err.message})
     }
     return res.status(500).json({msg: err.message})
}

module.exports = error_handler