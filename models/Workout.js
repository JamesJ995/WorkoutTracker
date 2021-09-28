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
  duration: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
