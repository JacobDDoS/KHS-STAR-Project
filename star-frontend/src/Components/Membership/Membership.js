import React from 'react'
import MembershipEvent from './MembershipEvent'
import '../../css/pages/Membership.css'

const Membership = ({data}) => {
  return (
        <div> 
            <MembershipEvent data={data} key={Membership.id}/>
        </div>
  )
}

export default Membership