const Task = require("../models/task");

// Create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      difficulty: req.body.difficulty,
      xpReward: 50,
      coinReward: 10,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
};
