const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const requireString = {
  type: String,
  required: true,
};

const postSchema = new mongoose.Schema({
  title: requireString,
  body: requireString,
  photo: {
    type: String,
    default: "No photo",
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
