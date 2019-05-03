const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path = require("path");
var socket = require("socket.io");
var http = require("http");

// mongoose.Promise = global.Promise;
const helmet = require("helmet");

const url = "mongodb://localhost:27017/injustice";
const opts = { useNewUrlParser: true };

console.log("url is", url);
mongoose.connect(url, opts);

//for .env file read
require("dotenv").config();

const app = express();
app.use(helmet());

//getting routes

const root = require("./routes/root");

//middlewares
app.use(logger("dev"));
app.use(bodyParser.json());

//serving static files
app.use("/images", express.static(__dirname + "/public"));
// const controller = require("./controllers/upload");
//cross-platform
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type"
  // );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
//using routes
app.use("/", root);

//server
//console.log(process.env)
const port = process.env.PORT || 4000;
var server = http.createServer(app);

const io = socket.listen(server);

global.io = io;
server.listen(port, () => console.log(`server is running at ${port}`));
