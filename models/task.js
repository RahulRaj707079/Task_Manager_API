const mongoose = require('mongoose')

//DATABASE CREATION

const TaskSchema = new mongoose.Schema({
     /*
     //The below mentioned props are just simple text
     //which can cause inconsistent data
     name:String,
     completed: Boolean
     */
    //This can be fixed with adding properties to each data part
    name:{
     type: String,
     //For simple approach
     //required: true

     //For precise approach
     //required: [validator(boolean), message on failure]
     required: [true, 'Must provide name!'],

     //trim the unwanted whitespace
     trim: true,
     //maxlength
     maxlength: [20,'name cannot exceed 20 characters']
    },
    completed: {
     type: Boolean,
     default: false
    }
})

module.exports = mongoose.model('Task',TaskSchema)