const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        reuqire:true,
        unique:false,
        maxlength:[8,"user name not greater than 8"]
    
    },
})

const task=mongoose.model('task',TaskSchema);

module.exports=task;