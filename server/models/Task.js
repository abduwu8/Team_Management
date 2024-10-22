const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['todo', 'in progress', 'done'],
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Task', TaskSchema);
