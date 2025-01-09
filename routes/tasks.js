const express= require('express')
const {getAllTasks,
     getSingleTask,
     createTask,
     deleteTask,
     updateTask} = require('../controllers/tasks') //This will be used to fetch the controllers for different actions
const router = express.Router()



router.route('/')
     .get(getAllTasks)
     .post(createTask)

router.route('/:id')
     .get(getSingleTask)
     .patch(updateTask)
     .delete(deleteTask)

module.exports= router;

//These routes will be used in index.js to create path for different portions and actions of website