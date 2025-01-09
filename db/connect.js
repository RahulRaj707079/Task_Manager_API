const mongoose = require('mongoose')



/*
//The below mentioned scenerio does not work in sync because
//the server is ready to serve but the database connection is
// building after the server initialization
//So we must optimize in such a way that the database connection
// is build first then the server is getting ready to serve
mongoose
     .connect(connectionString)
     .then(()=>console.log('CONNECTED TO DB...'))
     .catch((err)=>console.log('Something went wrong ',err))

*/
const connectDB = (url)=>{
     console.log('CONNECTED TO DB...');
     return mongoose.connect(url)
}

module.exports = connectDB