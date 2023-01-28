import React, {useEffect, useState} from 'react'
import '../css/pages/Membership.css'
import { getMembershipInfo } from '../data/getMembershipInfo'

const Membership = () => {
  const [membershipInfo, setMembershipInfo] = useState([
    'Benifets'
    ,'Prices'
    ,'Deadlines'
    //Not a loop, just fill out the first 3
  ])

  useEffect(()=>{
    getMembershipInfo().then((data)=>setMembershipInfo(data))
  }, [])

  return (
    <div>
      <div className='membership-center-div'>
          <h1 className='main-title'>Membership</h1>
          <div className='membership-secondary-div'>
            <h2 className='membership-secondary-header'>Info</h2>
            <h3 className='membership-content'>{membershipInfo.cost}</h3>
            <h3 className='membership-content'>{membershipInfo.benefits}</h3>
            <h3 className='membership-content'>{membershipInfo.deadline}</h3>
          </div>  
      </div>
    </div>
  )
}

export default Membership