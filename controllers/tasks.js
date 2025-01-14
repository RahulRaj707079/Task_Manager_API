const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../Errors/customErrorHandler')

const getAllTasks = asyncWrapper(async (req,res)=>{
          const tasks = await Task.find({})
          res.status(200).json({tasks});
     })

const getSingleTask = asyncWrapper(async (req,res,next)=>{
          const {id:taskId} = req.params
          const task = await Task.findOne({_id:taskId})
          if(!task) {
               return next(createCustomError(`No Task  with ${taskId} exists...`,404))
          }
          res.status(200).json({task})
     })

const createTask = asyncWrapper(async (req,res)=>{
          const task = await Task.create(req.body) 
          res.status(201).json({task})
})

const updateTask = asyncWrapper(async (req,res)=>{
          const {id:taskId} = req.params
          const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
               new:true,
               runValidators:true
          })
          if(!task) {
               return next(createCustomError(`No Task  with ${taskId} exists...`,404))
          }
          res.status(203).json({task})
})

const deleteTask = asyncWrapper(async(req,res)=>{
          let {id:taskId} = req.params
          const task = await Task.findOneAndDelete({_id:taskId});
          if(!task) {
               return next(createCustomError(`No Task  with ${taskId} exists...`,404))
          }
          res.status(200).json({success: true,Deleted: `${task.name}`})
})

module.exports = {getAllTasks,
               getSingleTask,
               createTask,
               deleteTask,
               updateTask}