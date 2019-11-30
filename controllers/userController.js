const User = require("../models/userSchema");

function createUser(req, res, next) {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.status(200).json({ user });
  });
}

function listUser(req, res, next) {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.status(200).json({ users });
  });
}

function deleteUser(req, res, next) {
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    res.status(200).json({ user });
  });
}

function updateUser(req, res, next) {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
    if (err) return next(err);
    res.status(200).json({ user });
  });
}

module.exports = { createUser, listUser, updateUser, deleteUser };
