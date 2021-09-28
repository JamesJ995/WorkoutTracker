const db = require('../models');
const router = require('express').Router();
const path = require("path");

//get workouts route
router.get("/api/workouts", (req, res) => {
	db.Workout.find()
		.then((workoutDB) => {
			res.json(workoutDB);
		})
		.catch((err) => {
			res.json(err);
		});
});

//add exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((workoutDB) => {
			res.json(workoutDB);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get("/api/workouts/range", (req, res) => {
	db.Workout.find()
		.then((workoutDB) => {
			res.json(workoutDB);
		})
		.catch((err) => {
			res.json(err);
		});
});

// GET Home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET Exercise Page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET Stats Page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;
