import React from 'react'

import '../css/Components/footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
        {/* Copyright  */}
        <div className='footer-copyright-container'>
            <div>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0">
                <img alt="Creative Commons License" style={{"borderWidth":"0"}} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
            </a>
                <br />
                This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0">Creative Commons Attribution 4.0 International License
            </a>
            </div>
        </div>

        {/* Social Media Links  */}
        <div className='footer-social-container'>
            <a href="https://www.instagram.com/kearneyfccla/">
                <i className="fa-brands fa-instagram fa-3x"></i>
            </a>
        </div>

        {/* View Counter */}
        <div className='footer-view-counter-container'>
        <h3 style={{"marginRight": "10px"}}>View Counter:</h3>
        <a href="https://www.freecounterstat.com" title="web counter">
            
            <img src="https://counter5.optistats.ovh/private/freecounterstat.php?c=zkdz1cl5p46zfx6mef117q92qj9p3ja5" border="0" title="web counter" alt="web counter"/>
        </a>
        </div>
    </div>
  )
}
