const mongoose = require("mongoose");




  const connectToDB = (URI)=> {
      return mongoose  //Here we are returning a promise
      .connect(URI)
      .then((res) => console.log("Connected"))
      .catch((err) => console.log(err));
  }

  module.exports = connectToDB;

