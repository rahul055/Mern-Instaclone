const express = require("express");
const Post = require("../models/post");

exports.createpost = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body)
    return res.status(422).json({ error: "Please add all the fields." });

  req.user.password = undefined;

  const post = await new Post({
    title,
    body,
    postedBy: req.user,
  }).save();

  res.status(201).json({ post });
};

exports.allposts = async (req, res) => {
  try {
    var post = await Post.find().populate("postedBy", "_id name");
    res.json({ post });
  } catch (err) {
    console.log(err);
  }
};

exports.myposts = async (req, res) => {
  try {
    const post = await Post.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "_id name"
    );
    res.json({ post });
  } catch (error) {
    console.log(err);
  }
};
