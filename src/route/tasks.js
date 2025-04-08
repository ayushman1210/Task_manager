const express=require('express');
const {getalltask,createtask,getTask,updatetask,deletetask} = require('../controller/tasks');
const router=express.Router();

router.route('/').get(getalltask).post(createtask)
router.route('/:id').get(getTask).patch(updatetask).delete(deletetask)

module.exports=router;