const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
require("dotenv").config;
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(422).json({ error: "Please add all the fields" });

  try {
    const savedUser = await User.findOne({ email: email });
    if (savedUser) {
      return res.status(422).json({ error: "email already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 12);

    await new User({
      name: name,
      email: email,
      password: hashedPass,
    }).save();
    res.json({ message: "user saved" });
  } catch (error) {
    console.log(error);
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).json({ error: "Please add all the fields" });
  const JWT_SECRET = process.env.JWT_SECRET;

  try {
    const savedUser = await User.findOne({ email: email });
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    const matchPassword = await bcrypt.compare(password, savedUser.password);
    if (!matchPassword)
      return res.status(422).json({ error: "Invalid email or password" });

    //jwt authentication part responding token to user

    const token = await jwt.sign({ _id: savedUser._id }, JWT_SECRET);
    res.status(202).json({ token });
  } catch (error) {
    console.log(error);
  }
};
exports.protected = (req, res) => {
  res.json({ message: "hello user" });
};
