const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/user");
const Task = require("../../src/models/tasks");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "John Doe",
  email: "jogndoe@testing.com",
  password: "testingwithjohn3!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "Anthony",
  email: "antoine@testing.com",
  password: "testingwithjohn3!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "task one",
  completed: false,
  owner: userOne._id,
};
//
const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "task Two",
  completed: false,
  owner: userOne._id,
};
//
const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "task three",
  completed: true,
  owner: userTwo._id,
};
//
const taskFour = {
  _id: new mongoose.Types.ObjectId(),
  description: "task four",
  completed: true,
  owner: userTwo._id,
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
  await new Task(taskFour).save();
};

module.exports = {
  userOne,
  userTwo,
  userOneId,
  userTwoId,
  taskOne,
  taskTwo,
  taskThree,
  taskFour,
  setupDatabase,
};
