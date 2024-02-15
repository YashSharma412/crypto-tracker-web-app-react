import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
import TemporaryDrawer from './Drawer';
const Header = () => {
  return (
    <nav className='navbar'>
        <h1 className='logo'>CryptoTracker<span>.</span></h1>
        <ul className='navbar__links'>
          <li>
            <NavLink>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink>
              WatchList
            </NavLink>
          </li>
          <li>
            <NavLink>
              Compare
            </NavLink>
          </li>
          <li>
            <NavLink>
              Dashboard
            </NavLink>
          </li>
        </ul>
        <div className='mobile__drawer'>
          <TemporaryDrawer />
        </div>
    </nav>
  )
}

export default Header