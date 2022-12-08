const mongoose = require('mongoose');
// Task schema
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
// TASK
taskSchema.pre('save', async function (next) {
  const task = this;
  console.log('Task updated or posted');

  next();
});
// CREATE A MODEL STEP
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
