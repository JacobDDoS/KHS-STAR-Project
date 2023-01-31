import React, {useEffect, useState} from 'react'
import '../css/pages/Leadership.css'
import Leadership from '../Components/Leadership/Leadership'
import { getLeadership, getOfficers } from '../data/getOfficers'

const LeadershipPage = () => {
    const[LeadershipData, setLeadershipData] = useState([])

    useEffect(() => {
      getOfficers().then((data) => {
            setLeadershipData(data)
        })
    }, [])

  return (<>
    <div>
      <h1 className='main-title'>FCCLA Leadership</h1>  
    </div>
    <Leadership data={LeadershipData}/>
    <div className='leadership-expectations-div'>
        <p className='leadership-expectaions-header'>Officer Expectations</p>
        <p className='leadership-expecations'>Must attend all officer meetings which are held, unless prior notice is given.</p>
        <p className='leadership-expecations'>Must attend Nebraska FCCLA sponsored conferences and leadership trainings with the financial support through KHS sponsored fundraising, which include: Fall Leadership Workshop (1 day inKearney), District 6 Leadership Conference (1 day in Kearney), Peer Education Conference (1 day in Kearney) and State Leadership Conference (3 days in Lincoln).</p>
        <p className='leadership-expecations'>Required to do a STAR project and Power of One</p>
        <p className='leadership-expecations'>At least one officer leads a knowledge bowl team-- especially if you donot qualify for State</p>
        <p className='leadership-expecations'>Actively participate and provide contributions to the KHS Chapter Officer Team through consistent involvement, communication, and responsibility.</p>
        <p className='leadership-expecations'>Be cooperative and dependable</p>
        <p className='leadership-expecations'>Understand and communicate the mission and purposes of FCCLA</p>
        <p className='leadership-expecations'>Be respectful and open-minded</p>
        <p className='leadership-expecations'>Attend and participate in all chapter meetings unless notification is given one week in advance</p>
        <p className='leadership-expecations'>Be organized and on time</p>
        <p className='leadership-expecations'>Follow through with the responsibilities of the elected office</p>
        <p className='leadership-expecations'>Everyone will be expected to help fill out their assigned chapter award applications</p>
        <p className='leadership-expecations'>Everyone will be expected to discuss their own topic at chapter meetings</p>
        <p className='leadership-expecations'>Weekly checkups with advisor</p>
      </div>
  </>
  )
}

export default LeadershipPage