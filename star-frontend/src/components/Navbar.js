import React, { useState } from 'react'
import '../css/components/navbar.css';
import MyImage from '../media/photos/FCCLA_logo.png'
const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  
  return (
    <div>
        <div className='navbar'>
                <img className='logo' src={MyImage} alt ="logo"/> 
            <div className={`pageDisplay ${isMenueOpen ? "pageDisplayOpen" : ""}`}>
                <div className='link-div'>
                    <a className='link' href='http://localhost:3000/'>Home</a>
                    <a className='link' href='http://localhost:3000/FCCLA-info'>FCCLA info</a>
                    <a className='link' href='http://localhost:3000/FCCLA-leadership'>Chapter Leaders</a>
                    <a className='link' href='http://localhost:3000/FCCLA-membership'>Membership</a>
                </div>
            </div>
        </div>
        <i className={`fa-solid fa-bars ${isMenueOpen ? "fa-xmark" : ""}`} onClick={() => setIsMenueOpen(!isMenueOpen)}></i>
        {/* <i className='fa-solid fa-bars' onClick={() => setIsMenueOpen(!isMenueOpen)}></i>    */}
    </div>
    )
}

export default Navbar
