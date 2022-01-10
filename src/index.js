require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const attachApiRouter = require("./api");

// make sure we have env vars set
if (!process.env.PORT) {
  console.error("missing env var PORT");
  process.exit(1);
}

// create app
const app = express();

// add middleware
app.use(helmet()) // adds "hardened" headers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// attach routers
attachApiRouter(app);

// home page route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home page</h1>");
});

// 404 catchall
app.use('*', (_req, res, _next) => {
  res.status(404).json({ status: "error", message: "rnf" }); // rnf = route not found
});

// connect to database and start server
app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});
