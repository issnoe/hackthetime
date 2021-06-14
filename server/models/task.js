const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  status: Number,
  sort: Number,
});

mongoose.model('task', taskSchema);
