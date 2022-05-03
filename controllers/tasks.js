const Task = require("../models/task")
const getAllTasks = (req,res)=> {
   res.send("getting all task")
}

const getTask = (req,res)=> {
    res.send("getting one task")
}

const updateTask = (req,res)=> {
    res.send("updating task")
}

const deleteTask = (req,res)=> {
    res.send("deleting task")
}

const createNewTask = async (req,res)=> {
    const task = await Task.create(req.body)
    res.status(201).send({task})
    
}

module.exports = {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTask
}