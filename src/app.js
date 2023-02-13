const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
// const port = process.env.PORT;

// Access data from postman request body
app.use(express.json());
// user
app.use(userRouter);
//tasks
app.use(taskRouter);

module.exports = app;
