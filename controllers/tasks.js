const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require("../errors/CustomError")

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); //If you leave the object empty it will give you all the data
  res.status(200).send({ tasks });
  //Instead of setting up try catch block here we are usinh async wrappers
  //If req is successful then tasks will be returned else error with be catched in the async wrappers
});

const getTask = asyncWrapper(async (req, res,next) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOne({ _id: TaskID });
  //If there is no task with provided id
  if (!task) {

    return next(createCustomError(`No task exists with id ${TaskID}`,404 ))
    // return res
    //   .status(404)
    //   .send({ message: `No task exists with id ${TaskID}` });
  }
  res.status(200).send({ task });
});

const updateTask = asyncWrapper(async (req, res,next) => {
  const { id: TaskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
    new: true, // I wanna get updated data in response so
    runValidators: true, // I again want to validate what user enters so
  }); //It returns us the old task so we need to pass an option to get new
  if (!task) {
    return next(createCustomError(`No task exists with id ${TaskID}`,404 ))
    // return res
    //   .status(404)
    //   .send({ message: `No task exists with id ${TaskID}` });
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res,next) => {
  const { id: TaskID } = req.params;
  const response = await Task.findOneAndDelete({ _id: TaskID }); //Do not use delete one method. We have to first check then delete
  if (!response) {
    return next(createCustomError(`No task exists with id ${TaskID}`,404 ))
    // return res
    //   .status(400)
    //   .send({ message: `No task exists with id ${TaskID}` });
  }
  // res.status(200).send() we can do this also
  res.status(200).send({ success: true, message: "Task deleted" });
});

const createNewTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ task });
});

const editTask = asyncWrapper(async (req, res,next) => {
  const { id: TaskID } = req.params;
  const response = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
    overwrite: true,
    new: true,
    runValidators: true,
  });
  if (!response) {
    return next(createCustomError(`No task exists with id ${TaskID}`,404 ))
    // return res
    //   .status(404)
    //   .send({ message: `No task exists with id ${TaskID}` });
  }
  res.status(200).json(response);
});

module.exports = {
  getAllTasks,
  createNewTask,
  deleteTask,
  updateTask,
  getTask,
  editTask,
};
