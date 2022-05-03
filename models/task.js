const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
     name: String,
     completed: Boolean
})  //Schema defines the structure of a document in mongoDB

//Only the properties that we mention in the schema will be passed to DB extras will be ignored

module.exports = mongoose.model("Task",taskSchema)  //This is model to interact with DB and do crud operations

//Instance of model is called document