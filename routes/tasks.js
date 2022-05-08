const express = require("express");
const router = express.Router()

const {
    getAllTasks,
    createNewTask,
    deleteTask,
    updateTask,
    getTask,
    editTask
} = require("../controllers/tasks")

// router.route("/").get(getAllTasks)
// router.route("/").post(createNewTask)
// router.route("/:id").delete(deleteTask)
// router.route("/:id").patch(updateTask)
// router.route("/:id").get(getTask)

router.route("/").get(getAllTasks).post(createNewTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask).put(editTask)


module.exports = router; //This will be imported in index.js 


//Put is used to replace the existing entry
//Patch is used for partial update. Whatever we send in the body only that portion will be updated in the entry