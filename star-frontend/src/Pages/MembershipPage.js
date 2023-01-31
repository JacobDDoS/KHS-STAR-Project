import React, {useEffect, useState} from 'react'
import Membership from '../Components/Membership/Membership'
import '../css/pages/Membership.css'
import { getMembershipInfo } from '../data/getMembershipInfo'

const MembershipPage = () => {
    const[MembershipData, setMembershipData] = useState([])

    useEffect(() =>{
      getMembershipInfo().then((data) => {
        setMembershipData(data)
      })
    },[])
  return (<>
        <div className='recruitment-center-div'>
            <h1 className='main-title'>Membership</h1>
        </div>
        <Membership data={MembershipData}/>
        </>
  )
}

export default MembershipPage 