
const Task = require("../models/task")
const getAllTasks = async (req,res)=> {

    try{
    const tasks =  await  Task.find({}) //If you leave the object empty it will give you all the data
        res.status(200).send({tasks})
    }catch(err){
        res.status(500).send({message: "Something went wrong, please try again later"})
    }
}

const getTask = async (req,res)=> {
    const {id: TaskID} = req.params; 
    try{
       const task = await Task.findOne({_id: TaskID})

       console.log(task)
      //If there is no task with provided id
      if(!task){
          return res.status(404).send({message: `No task exists with id ${TaskID}`})
      }
       res.status(200).send({task})
    }catch(err){
        res.status(500).send({message: "Something went wrong, please try again later"})
    } 
}

const updateTask = async (req,res)=>  {
    const {id: TaskID} = req.params;
    try{
      const task=  await Task.findOneAndUpdate({_id:TaskID},req.body, {
          new: true, // I wanna get updated data in response so
          runValidators: true  // I again want to validate what user enters so
      })  //It returns us the old task so we need to pass an option to get new
      if(!task){
        return res.status(404).send({message: `No task exists with id ${TaskID}`})
      }
      res.status(200).json(task)
    }catch(err){
        res.status(500).send({message: "Something went wrong, please try again later"})
    }
}

const deleteTask = async (req,res)=> {
  const {id: TaskID} = req.params;
  try{
    const response = await Task.findOneAndDelete({_id: TaskID})  //Do not use delete one method. We have to first check then delete
    if(!response) {
        return res.status(400).send({message: `No task exists with id ${TaskID}`})
    }
    // res.status(200).send() we can do this also
    res.status(200).send({success: true, message: "Task deleted"})
  }catch(err){
    res.status(500).send({message: "Something went wrong, please try again later"})
  }
}

const createNewTask = async (req,res)=> {

    try{
        const task = await Task.create(req.body)
        res.status(201).send({task})
    }catch(err){
        res.status(500).send({message: "Something went wrong, please try again later"})
    }
   
    
}

const editTask = async (req,res)=> {
    const {id: TaskID} = req.params;
    try{
       const response = await Task.findOneAndUpdate({_id: TaskID}, req.body, {
           overwrite: true,
           new: true,
           runValidators: true
       })
    }catch(err) {

    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTask,
    editTask
}