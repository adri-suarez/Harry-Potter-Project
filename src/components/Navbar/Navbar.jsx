import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='Nav'>
      <Link to='/'>
      <p>Home</p>
      </Link>
      <h3 className='Title'>Harry Potter Characters</h3>
      <Link to='/about'>
      <p>About</p>
      </Link>
      </div>
  )
}

export default Navbar