const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Connect database success");
  } catch (error) {
    console.log("Connect database fail", error);
  }
}

module.exports = connectDatabase;