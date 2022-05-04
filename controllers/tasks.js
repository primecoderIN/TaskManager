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
    // const {id} = req.params; //Commented it because why to create extra variables
    try{
       const task = await Task.findOne({id: req.params.id})
       res.status(200).send({task})
    }catch(err){
        res.status(500).send({message: "Something went wrong, please try again later"})
    }
}

const updateTask = (req,res)=> {
    res.send("updating task")
}

const deleteTask = (req,res)=> {
    res.send("deleting task")
}

const createNewTask = async (req,res)=> {

    try{
        const task = await Task.create(req.body)
        res.status(201).send({task})
    }catch(err){
        res.status(500).send({message: "Something went wrong, please try again later"})
    }
   
    
}

module.exports = {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTask
}