const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  birthday: {
    type: String,
  },
  role: {
    type: String,
  },
});

//compiler
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
