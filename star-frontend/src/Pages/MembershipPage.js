import React, {useEffect, useState} from 'react'
import '../css/pages/Membership.css'

import Hexagon from '../media/photos/Hexagon1.png'
import Triangle from '../media/photos/Triangle1.png'
import YanneyPhoto from '../media/photos/Recruit1.png'

const MembershipPage = () => {

  const [recruitmentActivites, setRecruitmentActivites] = useState([
    ["Yanney Park", YanneyPhoto, "In the beginning of the school year we held a event for new members to learn what FCCLA is and take part in fun activities with their class mates"],
    ["Activity Fair", null, "We part take in our schools activity fair and tell students about FCCLA"],
    ["Bearcat Stampede", null, "During new student enrollment, we recruit incoming freshmen to join the first meeting of FCCLA to learn more about it and join"],
    ["Poster outside FCS Rooms", null, "FCCLA posters are hung outside of FCS class to encourage students to join a club that fits their interest with the class"] 
  ]);

  const [memberRetentionActivites, setMemberRetentionActivites] = useState([
    ["Remind Announcements", null, "We send out reminders for all of our events through remind. Join with the code @khs-fccla"],
    ["Instagram", null, "We post everything from reminders to fun pictures. Follow us @kearneyfccla."],
    ["Email List", null, "We send out opportunities and reminders through the email list. Let an officer or advisor know if you would like to be added."]
  ])

  return <div className='main-body member-body'>
    <div className="member-heading-1">
      <h1>Recruitment Activites</h1>
      <img src={Hexagon} alt="Cool Red Hexagon" />
    </div>

    {
      recruitmentActivites.map((activity) => {
        return <> 
          <div className="member-heading-2">
            <h2>{activity[0]}</h2>
            <img src={Triangle} alt="Cool Red Triangle" />
          </div>
          <div className="section member-section">
            {activity[1] !== null ? <img src={activity[1]} alt={"Picture of the chapter recruiting at " + activity[0]} /> : null}
            <h3>{activity[2]}</h3>
          </div>
        </>
      })
    }
    
    <div className="member-heading-1">
      <h1>Member Retention</h1>
      <img src={Hexagon} alt="Cool Red Hexagon" />
    </div>
    {
      memberRetentionActivites.map((activity) => {
        return <> 
          <div className="member-heading-2">
            <h2>{activity[0]}</h2>
            <img src={Triangle} alt="Cool Red Triangle" />
          </div>
          <div className="section member-section">
            {activity[1] !== null ? <img src={activity[1]} alt="Picture of the recruiting method" /> : null}
            <h3>{activity[2]}</h3>
          </div>
        </>
      })
    }

    <div className="about-banner" style={{"marginTop": "150px"}}>
        <h2>Cost</h2>
        <h2>Benefits</h2>
    </div>
    <div className="flex-middle" style={{"marginBottom": "250px"}}>
        <div className="about-info-container">
            <h2>$25</h2>
        </div>
        <div className="about-info-container">
            <h2>An IncREDible experience!</h2>
        </div>
    </div>

  </div>
}

export default MembershipPage 