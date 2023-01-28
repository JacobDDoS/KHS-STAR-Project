import React, {useState} from 'react'
import '../css/pages/Membership.css'

const Membership = () => {
  const [membershipInfo, setMembershipInfo] = useState([
    'Benifets'
    ,'Prices'
    ,'Deadlines'
    //Not a loop, just fill out the first 3
  ])

  return (
    <div>
      <div className='membership-center-div'>
          <h1 className='main-title'>Membership</h1>

          {
          membershipInfo.map((string, index) => {
            if(index == 0){
              return<div className='membership-secondary-div'>
                      <h2 className='membership-secondary-header'>Info</h2>
                      <h3 className='membership-content'>{membershipInfo[index]}</h3>
                      <h3 className='membership-content'>{membershipInfo[index + 1]}</h3>
                      <h3 className='membership-content'>{membershipInfo[index + 2]}</h3>
                    </div>  
            }
          })
        }
        <a href='/FCCLA-recruitment'>| Recruitment Activities |</a>
        <a href='/FCCLA-committee'> Committees |</a>
        <a href='/FCCLA-milestones'> Milestones |</a>
        <a href='/FCCLA-teams'> Teams and Scores |</a>
      </div>
    </div>
  )
}

export default Membership