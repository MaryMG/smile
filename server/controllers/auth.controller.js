const User = require('../models/User')
const express = require("express");
const router = express.Router();
const passport = require("passport");

exports.signup = (req, res) => {
  User.register({...req.body}, req.body.password)
        .then(user => res.status(201).json({ user }))
        .catch(err => res.status(500).json({ err }))
}

exports.login = (req, res) => {
  const { user } = req;
  res.status(200).json({ user })
}
exports.logout = (req, res) => {
  req.logout();
  res.json({ msg: "The user logout successfully" });
}

/*
exports.getProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({ user })
}*/
exports.loggedin = (req, res, next) => {
  console.log(req.user._id)
  User.findById(req.user._id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }));
}

exports.edit = async (req, res) => {
  const {username} = req.body
  await User.findByIdAndUpdate(req.user._id, { username })
      .then(user => res.status(200).json({ user }))
      .catch(err => console.log(err));
}

exports.upload = async (req, res) => {
  if (req.file) {
      const { secure_url } = req.file;
      await User.findByIdAndUpdate(req.user._id, { image: secure_url });
  }
}



