import React, {useEffect, useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import WorkoutDetails from '../components/WorkoutDetail'
import WorkoutForm from '../components/WorkoutForm'

function Home() {

    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()

            if (response.ok){
              dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [])


  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home