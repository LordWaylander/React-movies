import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <nav>
        <ul>
          <NavLink to='/' className={(nav)=> nav.isActive ? 'nav-active' : ''}>
            <li>Acceuil</li>
          </NavLink>
          <NavLink to='/userlist' className={(nav)=> nav.isActive ? 'nav-active' : ''}>
            <li>coup de coeur</li>
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  )
}

export default Header;