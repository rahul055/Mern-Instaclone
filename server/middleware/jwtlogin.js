const User = require("../models/user.js");
require("dotenv").config;
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!authorization)
    return res.status(401).json({ error: "User must be logged in" });

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ error: "User must be logged in" });
    const { _id } = payload;

    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });

    // const userid = await User.findById(_id);
    // req.user = userid;
  });
};
