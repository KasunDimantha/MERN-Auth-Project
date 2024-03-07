const express = require('express');
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController');


const router = express.Router();


//get all workout
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router;