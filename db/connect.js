const mongoose = require("mongoose");




  const connectToDB = (URI)=> {
      return mongoose
      .connect(URI)
      .then((res) => console.log("Connected"))
      .catch((err) => console.log(err));
  }

  module.exports = connectToDB;

