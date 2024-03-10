import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

function Navbar() {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <div>
      <header>
        <div className="container">
            <Link to='/'><h1>Workout Buddy</h1></Link>
            <nav>
              <div>
                <button onClick={handleClick}>Log Out</button>
              </div>
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
