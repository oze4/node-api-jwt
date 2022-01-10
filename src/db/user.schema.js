"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("./connection");

const User = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// salt password before saving
// this cannot be an arrow function!!!
User.pre("save", function (next) {
  const salt = bcrypt.genSaltSync(11);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

// validate password
// this cannot be an arrow function!!!
User.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = db.model("User", User, "users");
