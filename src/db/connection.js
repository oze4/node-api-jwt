"use strict";
const mongoose = require("mongoose");

if (!process.env.MONGO_URI) {
  console.error("missing env var MONGO_URI");
}

const db = mongoose.createConnection(process.env.MONGO_URI, { useNewUrlParser: true });
module.exports = db;
