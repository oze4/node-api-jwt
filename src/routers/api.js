const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../db/user.schema");
const { loginRequired, findUser } = require("../middleware/auth");

if (!process.env.JWT_SIGNATURE) {
  console.error("missing env var JWT_SIGNATURE");
  process.exit(1);
}

const api = express.Router();

const signJwtAndRespond = (user, res) => {
  const jwtRaw = { id: user._id };
  const jwtOptions = { expiresIn: 60000 };
  const jwtSigned = jwt.sign(jwtRaw, process.env.JWT_SIGNATURE, jwtOptions);
  res.status(200).json({ status: "success", message: "ok", token: jwtSigned });
};

api.post("/user/create", async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(500).json({ status: "error", message: "missing required field" });
  }
  const newUser = new User({ username, password, email });
  try {
    await newUser.save();
    res.status(200).json({ status: "success", message: "use your username and password to login" });
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message });
  }
});

api.post("/user/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("unauthorized");
    }
    const user = await User.findOne({ username });
    if (!user || !user.validPassword(password)) {
      throw new Error("unauthorized");
    }
    signJwtAndRespond(user, res);
  } catch (e) {
    res.status(401).json({ status: "error", message: e.message });
  }
});

api.get("/protected", [loginRequired, findUser], (req, res) => {
  if (!req.user) {
    res.status(401).json({ status: "error", message: "unauthorized" });
    return;
  }
  res.status(200).json({ status: "success", user: req.user });
});

module.exports = attachApiRouter = (expressApp) => {
  expressApp.use("/api", api);
};
