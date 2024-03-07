const express = require('express');
const Workout = require('../models/WorkoutModel');

const router = express.Router();


//get all workout
router.get('/', (req, res) => {
    res.json({ message: 'Get All Workout' });
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'Get a single workout' });
})

// post a new workout
router.post('/', async (req, res) => {
    const { title, reps, load} = req.body;

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    res.json({ message: 'Post a new workout' });
})

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete a workout' });
})

// Update a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a workout' });
})

module.exports = router;