const asyncWrapper = (fn)=>{
     return async(req,res,next)=>{
          try {
               await fn(req,res,next)
          } catch (error) {
               //This next will pass the argument to next middleware in use to define the\
               //structure of the manual error handling
              next(error) 
              //It will make sure that the errors are handled gracefully and in a synchronized way
              //The next middleware is not-found.js for this function
          }
     }
}

module.exports = asyncWrapper