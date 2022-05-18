const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");

const { initialize } = require("./util/setupCounter");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

initialize();

app.use("/", indexRouter);
app.use("/todos", todosRouter);

module.exports = app;
