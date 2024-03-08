import React from 'react'

function WorkoutDetail({workout}) {
  return (
    <div>
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
      </div>
    </div>
  )
}

export default WorkoutDetail
