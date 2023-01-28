import React, { useState } from 'react'
import '../css/Components/navbar.css';
import MyImage from '../media/photos/FCCLA_logo.png'
const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  
  return (
    <div>
        <div className='navbar'>
                <img className='logo' src={MyImage} alt ="logo"/> 
            <div className={`pageDisplay ${isMenueOpen ? "pageDisplayOpen" : ""}`}>
                <div className='link-div'>
                    <a className='link' href='/'>Home</a>
                    <a className='link' href='/FCCLA-info'>FCCLA info</a>
                    <a className='link' href='/FCCLA-leadership'>Chapter Leaders</a>
                    <a className='link' href='/FCCLA-membership'>Membership</a>
                    <a className='link' href='/awards'>Awards</a>
                </div>
            </div>
        </div>
        <i className={`fa-solid fa-bars ${isMenueOpen ? "fa-xmark" : ""}`} onClick={() => setIsMenueOpen(!isMenueOpen)}></i>
        {/* <i className='fa-solid fa-bars' onClick={() => setIsMenueOpen(!isMenueOpen)}></i>    */}
    </div>
    )
}

export default Navbar 