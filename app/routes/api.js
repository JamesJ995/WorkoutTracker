const db = require('../models/Workout');
const router = require('express').Router();
const path = require('path');

router.get('/api/workouts', (req, res) => {
  db.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/api/workouts', (req, res) => {
  db.create({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/api/workouts/range', (req, res) => {
  db.create({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  db.findByIdAndUpdate(
    params.id,
    { 
      $inc: { totalDuration: body.duration },
      $push: { exercises: body } 
    },
    { new: true, runValidator: true }
  )
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET Home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET Exercise Page
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// GET Stats Page
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
