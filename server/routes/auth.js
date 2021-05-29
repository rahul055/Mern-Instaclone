const express = require("express");
const router = express.Router();
const jwtlogin = require("../middleware/jwtlogin.js");

const {
  signup,
  signin,
  protected,
} = require("../controllers/authcontroller.js");

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/protected", jwtlogin, protected);

module.exports = router;
