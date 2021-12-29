const mongoose = require('mongoose');
const match = require('nodemon/lib/monitor/match');
const todoSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        
       
    },
    age:{
        type:Number,
        required:true,
        // min:18,
        // max:90
        enum:[1,9,4,3,7]
    },

    description:{
        type:String,
        required:false,
    },
    deadline:{
        type:Date,
        required:true,
        default:Date.now
    },
    isCompleted:{
        type:Boolean,
        required:true,
    },
});
const Todo=mongoose.model('todo',todoSchema);
module.exports= Todo;