const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const redis = require("./redis");
const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

redis.setAsync("added_todos", 0);

app.use("/", indexRouter);
app.use("/todos", todosRouter);

module.exports = app;
