import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/Favourite'}>Favoritos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
