const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Please provide a name"],
          trim: true,  // To disable getting values like  "     John   "
          maxlength: [20, "Name can not be more than 20 characters"]
     },
     completed: {
          type: Boolean,
          //In case of put method remove default value then put method will work
          default: false //Set default value to false

     }
})  //Schema with basic validation

//Only the properties that we mention in the schema will be passed to DB extras will be ignored

module.exports = mongoose.model("Task",taskSchema)  //This is model to interact with DB and do crud operations

//Instance of model is called document




// const taskSchema = new mongoose.Schema({
//      name: String,
//      completed: Boolean
// })  //Schema defines the structure of a document in mongoDB

//This does not have any validation so setting up a basic validation in schema