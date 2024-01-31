import React, {useEffect, useState} from 'react'
import '../css/pages/ClubInfo.css'

import WhatIsFCCLA from '../media/photos/WhatIsFCCLA.png'
import WhyIsFCCLA from '../media/photos/WhyIsFCCLA.png'
import Image8 from '../media/photos/Image8.png'
import Image9 from '../media/photos/Image9.png'
import Image10 from '../media/photos/Image10.png'
import Image4 from '../media/photos/Image4.png'
import Star3 from '../media/photos/Star3.png'

import WhatIsFCCLAText from '../media/photos/Hexagon.png'
import WhyIsFCCLAText from '../media/photos/WhyIsFCCLAText.png'

const ClubInfoPage = () => {
    return <div className='main-body'>
        <div className="section">
            <div className="section-header">
                <img src={WhatIsFCCLAText} alt="" />
            </div>
            <div className="flex-middle">
                <div>
                    <img src={WhatIsFCCLA} alt="FCCLA Members having fun at a fundraiser" />
                </div>
                <div className='info-text'>
                    Family, Career and Community Leaders of America (FCCLA) is a national Career and Technical Student Organization (CTSO) for students in Family and Consumer Sciences (FCS) education. There are nearly 200,000 student members in 46 states and the District of Columbia, the American Virgin Islands, and Puerto Rico! Through FCCLA members receive leadership opportunities along with the chance to travel through competitive events.
                </div>
            </div>
        </div>
        <div className="section">
            <div className="section-header">
                <img src={WhyIsFCCLAText} alt="" />
            </div>
            <div className="flex-middle">
                <div className='info-text'>
                    To promote personal growth and leadership development through Family and Consumer Sciences education. Focusing on the multiple roles of family member, wage earner, and community leader, members develop skills for life through character development, creative and critical thinking, interpersonal communication, practical knowledge, and career preparation.
                </div>
                <div>
                    <img src={WhyIsFCCLA} alt="Two FCCLA members advocating for teenagers to drive safely with a poster" />
                </div>
            </div>
        </div>
        <div className="section" style={{"margin": "100px 300px"}}>
            <div className="section-header">
                <h1>OUR...</h1>
            </div>
            <div className="about-banner">
                <h2>Motto</h2>
                <h2>Tagline</h2>
            </div>
            <div className="flex-middle">
                <div className="about-info-container">
                    <h2>Toward New Horizons</h2>
                </div>
                <div className="about-info-container">
                    <h2>The Ultimate Leader Experience</h2>
                </div>
            </div>
            <div className="section-break"></div>
            <div className="about-banner">
                <h2>Creed</h2>
            </div>
            <div className="flex-middle">
                <div className="about-info-container">
                    <h3>We are the Family, Career and Community Leaders of America. We face the future with warm courage and high hope. For we have the clear consciousness of seeking old and precious values. For we are the builders of homes, homes for America's future, homes where living will be the expression of everything that is good and fair, homes where truth and love and security and faith will be realities, not dreams. We are the Family, Career and Community Leaders of America. We face the future with warm courage and high hope.</h3>
                </div>
                
            </div>
            <div className="section-break"></div>
            <div className="about-banner">
                <h2>Purposes</h2>
            </div>
            <div className="flex-middle">
            <div className="about-info-container">
                    <ol>
                        <li>To provide opportunities for personal development and preparation for adult life</li>
                        <li>To strengthen the function of the family as a basic unit of society</li>
                        <li>To encourage democracy through cooperative action in the home and community</li>
                        <li>To encourage individual and group involvement in helping achieve global cooperation and harmony</li>
                        <li>To promote greater understanding between youth and adults</li>
                        <li>To provide opportunities for making decisions and for assuming responsibilites</li>
                        <li>To prepare for the multiple roles of men and women in today's society</li>
                        <li>To promote Family and Consumer Sciences and related occupations</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="section-header">
                <h1>Why Join FCCLA?</h1>
            </div>
            <div className="about-img-container">
                <img src={Image9} alt="Two FCCLA members playing shadow boxing" />
                <img src={Image10} alt="Two FCCLA members on go-karts being pushed by two more members in a race" />
                <img src={Image8} alt="A group of FCCLA members decorating Christmas cookies" />
            </div>
            <div className="about-img-container" style={{"backgroundColor": "var(--primary-white)", "height": "auto"}}>
                <h2>Participate in MEANINGFUL and FUN activites</h2>
                <h2>Learn and grow with your peers</h2>
                <h2>Participate in Competitions related to FCS</h2>
            </div>
        </div>
        <div className="section">
            <div className="section-header flex" style={{"justifyContent": "space-between"}}>
                <img src={Star3} alt="Cool, red star" />
                <h1 style={{"fontSize": "var(--fs-900)"}}>JOIN NOW!!</h1>
                <img src={Star3} alt="Cool, red star" />
            </div>
            <div className="about-img-container" style={{"height": "500px", "backgroundColor": "var(--primary-white)"}}>
                <img style={{"aspectRatio": "auto"}} src={Image4} alt="Chapter Meeting with members posing with their FCCLA posters" />
            </div>
            <div>
                <h2>Visit Mrs. Kreutzer in room E108 or talk to a chapter officer to get a membership slip!</h2>
            </div>
        </div>
    </div>
}

export default ClubInfoPage