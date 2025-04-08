const express=require('express');
const app=express();
const task=require('./src/route/tasks')
const PORT=process.env.PORT || 5000;
require('dotenv').config();
const connectdb=require('./src/db/connect');
const not_found = require('./src/middleware/not_found');

//middleware
app.use(express.json())

//router
app.get('/tasks',(req,res)=>{
    res.send("TASK MANAGER ");
})
app.use(not_found)
app.use('/api/v1/task',task);



const start=async()=>{
    try {
     await connectdb(process.env.MONGO_URI);
      app.listen(PORT, ()=>{
      console.log("hello ")
        })
    } 
    catch (error) {
     console.log(error)
    }
}


start();