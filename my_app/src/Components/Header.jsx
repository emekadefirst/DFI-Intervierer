import React from 'react'
import coinlogo from '../assets/coinlogo.png' // Assuming you have a logo image
import './Header.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <div className="headerContainer">
    <div className="headerWrapper">
      <div className="logo">
        <h1 className='textlogo'>Bollax</h1>
        <img src={coinlogo} alt=""  className='coinlogo'/>
      </div>
      <Link to="/contact" className='headerButton'>
             contact us 
      </Link>
    </div>
   </div>
  )
}

export default Header
