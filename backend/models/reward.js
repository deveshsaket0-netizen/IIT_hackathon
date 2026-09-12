const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  cost: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    enum: ["Physical", "Digital", "Special"],
    default: "Digital",
  },
});

module.exports = mongoose.model("Reward", rewardSchema);
