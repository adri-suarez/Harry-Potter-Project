import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='Nav'>
      <Link to='/'>
      <p>Home</p>
      </Link>
      <Link to='/about'>
      <p>About</p>
      </Link>
      </div>
  )
}

export default Navbar