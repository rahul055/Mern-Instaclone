const mongoose = require("mongoose");

const requiredString = {
  type: String,
  require: true,
};
const userSchema = new mongoose.Schema({
  name: requiredString,
  email: requiredString,
  password: requiredString,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
