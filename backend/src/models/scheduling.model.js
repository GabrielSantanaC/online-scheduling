const mongoose = require("mongoose");

const SchedulingSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    note: String,
    birth: Date,
    dateScheduling: Date,
    timeScheduling: Date,
    priority: Boolean,
    completed: Boolean,
  },
  {
    timestamps: true,
  }
);

const SchedulingModel = mongoose.model("scheduling", SchedulingSchema);

module.exports = SchedulingModel;
