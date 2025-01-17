var createError = require("http-errors");
var express = require("express");
require("dotenv").config();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var employeesRouter = require("./routes/employees");
var delivryRouter = require("./routes/delivery");
var alertRouter = require("./routes/alert");
const mongoose = require("mongoose");

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect(
  "mongodb+srv://SachinAyeshmantha:4OnsYYMBlwft6iBa@cluster0.zcokbta.mongodb.net/User_Registration?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB and back-end is working properly.");
});

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/employees", employeesRouter);
app.use("/delivery", delivryRouter);
app.use("/alert", alertRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
