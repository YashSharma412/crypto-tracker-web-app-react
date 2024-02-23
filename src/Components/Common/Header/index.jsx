import React from 'react';
import "./style.css"
import TemporaryDrawer from './Drawer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  return (
    <nav className='navbar'>
        <h1 className='logo' onClick={()=>navigate("/")}>CryptoTracker<span>.</span></h1>
        <Navbar />
        <div className='mobile__drawer'>
          <TemporaryDrawer />
        </div>
    </nav>
  )
}

export default Header