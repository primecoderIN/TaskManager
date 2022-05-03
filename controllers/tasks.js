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

const createNewTask = (req,res)=> {
    res.send("creating new task")
}

module.exports = {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTask
}