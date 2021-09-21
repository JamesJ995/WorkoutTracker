const db = require("../Models/workouts.js");
const router = require("express").Router();

router.get("/api/exercise", (req, res) => {

    db.Workouts.find({}).then(workoutDB => {
        workoutDB.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;

        });

        res.json(workoutDB);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;