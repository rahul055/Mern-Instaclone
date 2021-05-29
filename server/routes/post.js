const express = require("express");
const Post = require("../models/post");
const router = express.Router();
const jwtlogin = require("../middleware/jwtlogin");
const {
  createpost,
  allposts,
  myposts,
} = require("../controllers/postcontroller");

router.post("/createpost", jwtlogin, createpost);

router.get("/allposts", allposts);

router.get("/myposts", jwtlogin, myposts);

module.exports = router;
