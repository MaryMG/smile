
const Post = require ('../models/Post')

exports.getPost = async (req, res) => {
  const post = await Post.find().populate("tasks");
  res.status(200).json({ post });
};

exports.createPost = async (req, res) => {
  console.log(req.body)
  const { title, description } = req.body
  const { _id } = req.user;
    console.log(req.user)
  const post = await Post.create({
    title,
    description,
    creatorID: _id
  })
  const populatedPost = await Post.findById(post._id).populate('creatorID')
  res.status(201).json(populatedPost)
};

exports.updatePost = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const post = Post.findByIdAndUpdate(id, { title, description });
  res.status(200).json(post);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted" });
};