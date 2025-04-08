const task=require('../model/task')

const getalltask=async(req,res)=>{
   try {
    const data=await task.find();
    res.send({data})
   }
    catch (error) {
    console.log(error)
   }
}
const createtask=async(req,res)=>{
    try {
        const Task=await task.create(req.body)
        res.json({Task})
    }
     catch (error) {
    res.status(500).send({msg:error})
    }
}

const getTask=async(req,res)=>{
  try {
    const {id:taskID}=req.params
    const data=await task.findOne({_id:taskID})
    if(!data) {res.status(500).json({msg:"no data is found",taskID})}
    res.json({data});
  } 
  catch (error) {
    res.status(500).send({error})
  }
}
const updatetask=async(req,res)=>{
    try {
        const {id:TaskID}=req.params;
        const data=await task.findOneAndUpdate({_id:TaskID},req.body,{new:true,runValidators:true})
        if(!data) {res.status(500).json({msg:"no data is found",TaskID})}
        res.json({data});

    } catch (error) {
        console.log(error)
    }
}

const deletetask=async(req,res)=>{
try {
    const {id:TaskID}=req.params;
    const data=await task.findOneAndDelete({_id:TaskID})
    if(!data){res.send({msg:`data is not found ${data}`})}
    res.status(200).send({data})
} 
catch (error) {
    console.log(error)
}
}

module.exports={
    getalltask,
    createtask,
    getTask,
    updatetask,
    deletetask,
    
};