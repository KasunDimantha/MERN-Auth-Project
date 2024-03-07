require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/Workouts')


// express app
const app = express()

//midlware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts' , workoutRoutes)


// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => console.log('Connected to DB and Server is listening on port ', process.env.PORT))
    })
    .catch((error) => console.log(error))

