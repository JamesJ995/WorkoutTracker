const db = require('../models');
const router = require('express').Router();

//get workouts route
router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    .then((workoutDB) => {
      workoutDB.forEach((workout) => {
        let total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

//add exercise
router.put('/api/workouts/:id', ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
