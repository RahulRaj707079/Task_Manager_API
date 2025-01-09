const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const error_handler = require('./middleware/error_handler')

//requiring .env module
require('dotenv').config() //config is used to configure the dotenv file

const port = process.env.PORT || 5000



app.use(express.json())


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(error_handler)


//Requests to be made
/*
api.get('/api/v1/tasks',(req,res)=>{})            get all tasks
api.get('/api/v1/tasks/:id',(req,res)=>{})         get single task
api.post('/api/v1/tasks',(req,res)=>{})           post single task
api.patch('/api/v1/tasks/:id',(req,res)=>{})      update task
api.delete('/api/v1/tasks:id',(req,res)=>{})      delete task
*/

const start = async ()=>{
     try{
          await connectDB(process.env.MONGO_URI)
          app.listen(port,()=>{
               console.log(`Server is listening on ${port}`)
          })
     }catch(err){
          console.log('error',err)
     }
}
start();
