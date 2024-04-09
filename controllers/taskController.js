const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");
const User = require("../models/userModel");

// @desc Get tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.send(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc Set task
// @route POST /api/tasks
// @access Private
const setTask = asyncHandler(async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
    user: req.user._id,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
});

module.exports = {
  getTasks,
  setTask,
};
