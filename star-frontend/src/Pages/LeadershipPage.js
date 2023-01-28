import React, {useEffect, useState} from 'react'
import '../css/pages/Leadership.css'
import Leadership from '../Components/Leadership/Leadership'
import { getLeadership } from '../data/getLeadership'

const LeadershipPage = () => {
    const[LeadershipData, setLeadershipData] = useState([])

    useEffect(() => {
        getLeadership().then((data) => {
            setLeadershipData(data)
        })
    }, [])

  return (<>
    <div>
        <h1 className='main-title'>FCCLA Leadership</h1>  
    </div>
    <Leadership data={LeadershipData}/>
  </>
  )
}

export default LeadershipPage