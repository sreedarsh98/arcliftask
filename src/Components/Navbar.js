import React from 'react'
import './Navbar.css';


function Navbar() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <img src='./image/blue.png' />
          <div className='logopara'>
            <span className='text-blue'>Business</span> <span className='text-orange'>Consulting</span>
          </div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="">What we do</a></li>
          <li><a href="">About Us</a></li>
          <li className='consultantbutton'><a href="">Consultant</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar