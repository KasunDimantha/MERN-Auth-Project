const express = require('express');
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth')


const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

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