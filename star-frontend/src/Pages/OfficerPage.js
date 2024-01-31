import React, { useState } from 'react'
import '../css/pages/Officer.css';

import Officer1 from '../media/photos/Officer1.png'
import Officer2 from '../media/photos/Officer2.png'
import Officer3 from '../media/photos/Officer3.png'
import Officer4 from '../media/photos/Officer4.png'
import Officer5 from '../media/photos/Officer5.png'
import Officer6 from '../media/photos/Officer6.png'
import Officer7 from '../media/photos/Officer7.png'

const OfficerPage = () => {
  const [officers, setOfficers] = useState([
    [Officer1, "President", "Adan Ciprian", "Hi, everybody! I'm Adan Ciprian and I have been involved in FCCLA since I was a Freshman. Serving as the chapter and state president is a journey that I am beyond excited for. I can't wait to get this party started!"], 
    [Officer2, "First Vice-President", "Evelin Muñoz-Galicia", "Hi! I'm Evelin Muñoz-Galicia and this year I am serving as the 1st Vice-President. This year I'm very excited to work alongside the President and the State Peer Officer Team! I hope to see growth within our chapter and see who will step up into their positions."],
    [Officer3, "VP of Competitive Events", "Katie Jurado", "Hey everyone!! I'm Katie Jurado, a senior this year. I am involved in NHS, Tri-M, Band, Choir, and of course, FCCLA! I'm so excited to start this competitive season started! Feel free to ask any questions or even say, “Hi!” whenever you see me!"], 
    [Officer4, "VP of Public Events", "Kassidy Clark", "Hi everyone! I'm Kassidy Clark and I am a Junior this year. I am involved in Colorguard, Orchestra, Tri-M, NHS, and FCCLA! This year I am the VP of Public Relations. I am so excited to share what our chapter does with our community as well as other chapters around the state on social media!"],
    [Officer5, "VP of Community Service", "Jahlin Parker", "Hello! I'm Jahlin Parker, I'm a Sophomore this year. I'm involved in choir, band and theater along with FCCLA. I'm the officer of community service. This year I'm excited to work alongside the other officers as well as meet new people who are also involved and interested in FCCLA!"], 
    [Officer6, "VP of Membership", "Joseph Vyvlecka", "Hello, my name is Joseph Vyvlecka and I am a Senior. I am involved in many activities at KHS including FCCLA. As the VP of Membership I am excited to see the accomplishments of our members and chapter as a whole."],
    [Officer7, "VP of National Programs", "Cazbi Velazquez", "Hello! I'm Cazbi Velazquez and I'm a senior this year. I am VP of National Programs, basically I make sure that our chapter is educated on the 8 National Programs and encourage the Officer Team to implement the programs into our chapter activities. This year, I am so excited to meet new members, both in our chapter and in others across the state!!"]
  ])
  return (
    <div className='main-body'>
        <div className="section chapter-goals">
            <h1>Our Chapter Goals</h1>
            <h2>i: Have 50% of membership show up at each chapter meeting.</h2>
            <h2>ii: Complete community service projects that impact local, state, and/or national communities.</h2>
            <h2>iii: Have a team of members and officers complete a Nebraska Youth Health Equity Project.</h2>
            <h2>iv: At least 15 members will complete a STAR project.</h2>
            <h2>v: Have 50% of members complete each unit within Power of One.</h2>
            <h2>vi: Raise $4,000 in fundraising.</h2>
        </div>
        <div className="section">
            <h1>Note</h1>
            <h3>This years officer team is serving at more than just the local level. Adan Ciprian, Evelin Muñoz-Galicia, and Katie Jurado are serving as the State President, State Peer Officer, and District President respectively. They have made a huge impact across the state through their time in office. Kassidy Clark is also running for office on the State Peer Education Team.</h3>
        </div>
        <div className="section">
            {
                officers.map((officer) => {
                    return <div className="officer-container">
                        <div className='officer-img'>
                            <img src={officer[0]} alt="" className="officer-img" />
                        </div>
                        <div className='officer-info-container'>
                            <div className='officer-info-heading'>
                                <h1>{officer[1]}</h1>
                                <h1>{officer[2]}</h1>
                            </div>
                            <div className='officer-info-statement'>
                                <h2>{officer[3]}</h2>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="section">
            <h2>Officer Responsibilites</h2>
            <a href="/FCCLA-officer-expectations" style={{"color": "blue"}}>Link To PDF</a>
        </div>
    </div>
  )
}

export default OfficerPage