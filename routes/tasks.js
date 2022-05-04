const express = require("express");
const router = express.Router()

const {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTask
} = require("../controllers/tasks")

// router.route("/").get(getAllTasks)
// router.route("/").post(createNewTask)
// router.route("/:id").delete(deleteTask)
// router.route("/:id").patch(updateTask)
// router.route("/:id").get(getTask)

router.route("/").get(getAllTasks).post(createNewTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router; //This will be imported in index.js 