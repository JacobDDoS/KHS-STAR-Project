import React, { useState } from 'react'
import { useEffect } from 'react';
import '../css/Components/navbar.css';
import MyImage from '../media/photos/FCCLA_logo.png'
const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const [links, setLinks] = useState([
    //hrefLink, logo, name
    ["/", "http://www.clker.com/cliparts/F/T/1/3/S/Q/house-logo-red-hi.png", "Home"],
    ["/FCCLA-info","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPGx3TLT4Q4ZfeKs9fyE5Eu0nWC9gwwQy5Q&usqp=CAU","FCCLA Information"],
    ["/FCCLA-leadership","https://img.freepik.com/premium-vector/simple-leadership-logo-like-team-work-concept-win-suit-with-tie-unity-triumph-collaboration-work-discrimination-winner-society-flat-style-trend-brand-graphic-design-white-background_117142-684.jpg?w=2000","Chapter Leaders"],
    ["/FCCLA-membership","https://www.bcit.cc/cms/lib/NJ03000372/Centricity/Domain/190/FCCLA.png","Membership Information"],
    ["/awards","https://static.vecteezy.com/system/resources/previews/010/365/771/original/eps10-red-trophy-cup-line-icon-isolated-on-white-background-winner-trophy-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-ui-and-mobile-application-vector.jpg","Awards"],
    ["/FCCLA-recruitment","https://static.vecteezy.com/system/resources/previews/005/363/014/original/letterhead-flat-design-long-shadow-glyph-icon-official-document-silhouette-illustration-paperwork-deskwork-symbol-company-certificate-corporate-newsletter-financial-statement-legal-paper-vector.jpg","Recruitment Information"],
    ["/FCCLA-committee","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU1AkIlkyAnN1hl56OIvb8qW0w4l-cpXd6A&usqp=CAU","Committees"],
    ["/FCCLA-programOfWork","https://img.favpng.com/3/6/18/computer-icons-clip-art-calendar-date-image-jpeg-png-favpng-7n10fTngSyqiC53NR3Geq36iW.jpg","Program of Work"],
    ["/FCCLA-milestones","https://previews.123rf.com/images/bentosi/bentosi1812/bentosi181200031/127097316-red-gps-pin-icon-vector.jpg","Milestones"],
    ["/FCCLA-teams","https://static.vecteezy.com/system/resources/previews/011/747/380/original/eps10-red-group-of-3-people-or-crowd-solid-icon-isolated-on-white-background-a-squad-of-person-symbols-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg","Teams"],
    ["/FCCLA-sponsors","https://thumbs.dreamstime.com/b/charity-shop-red-flat-design-long-shadow-glyph-icon-charitable-sale-nonprofit-organization-collecting-money-social-causes-198425623.jpg","Chapter Sponsers"],
    ["/FCCLA-chapterActivities","http://www.clker.com/cliparts/m/X/I/B/P/R/man-running-red-md.png","Chapter Activities"],
    ["/FCCLA-STARDocumentation","data:image/png;base64,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","Star Documentation"],
    ["/design","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX+AAD2AAD8AAjWkZP1AADemZnyAADurbT8AwPno6L5AwX9AAf5BAD6AAjdmpzVkpbzt7zrsLTtAADZkIvZkIfd+/7+2ub719f60dj6zMz8wMD8vs/tqanmoqHdl53fmJz3trH0tcH6rrfh4ub5qKTbhX3tp53bj5HtnZzbjJD4ARH0AxPYjpblxs41BTSdAAADR0lEQVR4nO3dbW/aMBiFYdu4rrGdAil7h0LbMUbW/f+/N4dAodPKyzTUncfn+hJVCiR3nJiqRI169/7Dx0+fvwyz0Wg06U/709ZN66pzlw0Gg965Bq272dUh6+1Mj+n3+5Pr40aj4b758H7+8Ki+1pnbZ611VtsdnXT+Wf+V9mX2CG3dkTXcaV6uV7s2baG+uRCSCkopH2P0Zs2bKrSLTuyYc21eF/3r2tXWmzoqnCB61dq8t1XWaTtWExcboxqzTthWVJ3nd/c+pXTKNl7YHqBDO/7blg4esM1B2y3MbhG7FbqF93nrplJV4+0yj2GOztnqdZs9PbDG/2W3v1HpsZrWunG++uPR7y6l1Nkuz3fgMk2bLZ19fpzA+VAle6u+2xTsNvsfO3oZXpRTKazH0EWjEs4peDqffIi6p/rOGBVkFqpgWAiNhfjKKcyfFpGFmHZnqfRC+WN4Yz0LQZVTeGW9UVp8YXjrvbmEl2P41ntzCSzEx+sQHwvxFVbImQYSC/EVVsiZBhIL8RVWyJkGEgvxFVbImQbSXmEl+6/6Mx291Hui9gvjW+/OBWwLezbXCS/0wsdwIP4sZSGu5+tQy72DdltoAgsxsRAfC/GxEB8L8bEQHwvxsRAfC/GxEB8L8bEQHwvxlVM40FF+YZL93RMLcZXzDenAGumF2gg/S2faC/+0KOLOPRaC4h20+FiIr7BCzjSQWIivsELONJBYiK+wQs40kFiIj9chPhbiK6yQMw0kFuIrrJAzDaRy/mP5zfosZSGivcJKduHMGumFmoWonp8zY6U/70n+E61YiIuF+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4yimciC+8diHKvnOPhbj2CoXfX8pCXCzEx0J8LMTHQnwsxMdCfCzEx0J8LMTHQnwsxMdCfCzEx0J85RSOrBf+DenI+eiFF0bhYzh00s9SFuLaL5Q90+RCw0JMLMTHQny7wpQLZd5B67vC2lXKOS9P7VMVbE/NXZurkjz5dzUT06obwyDwEY/5Mkwh2bG6r+vGV0GgptI/Gvek5nWeZvKIGnFCTE2wK/VQO62tlsdabZ12C/W4GC/Ht+OePMvV+Gm1+PkLM1yKzVSza6MAAAAASUVORK5CYII=","Website Design"],
    ["/login","https://www.freeiconspng.com/thumbs/login-icon/login-key-icon-lock-locked-login-15.png","Admin Login"],
    ["/admin","data:image/png;base64,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","Admin Page"],
  ])
  
  useEffect(()=>{
    if (window.innerWidth >= 1700) {
        setIsMenueOpen(true);
      }
  }, [])

  return (
    <div>
        <div className='navbar'>
            <div style={{"width": "1em"}}>
                <img className='logo' src={MyImage} alt ="logo"/> 
            </div>
            <h2>Kearney High</h2>
            <div className={`pageDisplay ${isMenueOpen ? "pageDisplayOpen" : ""}`}>
                <div className='sidebar-top'>
                    <i style={{"margin": "80px 29px 0px 0px"}} className='navbar-icon fa-solid fa-bars fa-xmark' onClick={() => setIsMenueOpen(!isMenueOpen)} />
                </div>
                <div className='link-div'>
                    {
                        links.map((link) => {
                            return <a href={link[0]} className="link">
                                <img src={link[1]} alt={`Logo of ${link[2]}`} />
                                <p>{link[2]}</p>
                            </a>
                        })
                    }
                </div>
            </div>
        </div>
        {!isMenueOpen ? <i className='fa-solid fa-bars navbar-icon' onClick={() => setIsMenueOpen(!isMenueOpen)} /> : null}
        {/* <i className={`fa-solid fa-bars ${isMenueOpen ? "fa-xmark" : ""}`} onClick={() => setIsMenueOpen(!isMenueOpen)}></i> */}
        {/* <i className='fa-solid fa-bars' onClick={() => setIsMenueOpen(!isMenueOpen)}></i>    */}
    </div>
    )
}

export default Navbar 