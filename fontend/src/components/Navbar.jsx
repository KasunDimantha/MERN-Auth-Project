import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
            <Link to='/'><h1>Workout Buddy</h1></Link>
            <nav>
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
