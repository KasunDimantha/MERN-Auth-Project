import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workouDispatch } = useWorkoutsContext()

    const logout = () => {

        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        workouDispatch({ type: 'SET_WORKOUTS', payload: null })
    }

    return { logout }
}