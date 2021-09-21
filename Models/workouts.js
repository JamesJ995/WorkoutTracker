const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for the workout',
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
    required: 'Enter a weight',
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
  },
});

const Workouts = mongoose.model('Workouts', workoutSchema);

module.exports = Workouts;
