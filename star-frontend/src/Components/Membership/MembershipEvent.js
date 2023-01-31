import React from 'react'
import '../../css/pages/Membership.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const MembershipEvent = ({data}) => {
  const date = new Date(data.deadline);

  console.log(data)
  return (
    <div className='center-div'>
        
        {/* general info */}
        <div className='membership-generalInfo-div'>

            {/* Benifits */}
            <div className='membership-div'>
                <h1 className='membership-header'>Any benefits of joining?</h1>
                <p className='membership-content'>{data.benefits}</p>
            </div>

            {/* Cost */}
            <div className='membership-div'>
                <h1 className='membership-header'>How much to join?</h1>
                <p className='membership-content'>{data.cost}</p>
            </div>

            {/* Deadlines */}
            <div className='membership-div'>
                <h1 className='membership-header'>I'm in! What's the deadline for shirts?</h1>
                <p className='membership-content'>{numberToMonth(date.getUTCMonth())}</p>
            </div>

        </div>

        {/* More About FCCLA membership */}
        <div className='membership-reasons-div'>
            <h1 className='membership-subject-header'>How To Join</h1>
            <p className='membership-content'>Visit Mrs. Kreutzer in room E108 or talk to a chapter officer to get a membership slip!</p>
            <img className='membership-image' src='https://lh3.googleusercontent.com/pw/AMWts8Df132thEaqBpe2emfK3kCmDmmsec5KK6m9mIWriB99Rv4ZiidkFFPIRWP2FQ7vbqiuTDgYHzIi-FCprZPOl5C-Pgv5o25-dvfN-vxsYIWh0opH2pDnaiQkMHF-jAQfya-ZfHgw5ELT6Tp06BouXNqL=w1236-h928-no?authuser=0'/>
        </div>
        
    </div>
  )
}

export default MembershipEvent