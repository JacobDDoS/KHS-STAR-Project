import React, {useState} from 'react'
import '../css/pages/Membership.css'

const Membership = () => {
  const [membershipInfo, setMembershipInfo] = useState([
    'Benifets'
    ,'Prices'
    ,'Deadlines'
  ])

  const [membershipTeams, setMembershipTeams] = useState([
    'Team 1 officer'
    ,'Team 1 Members'
    ,'Score'
    ,'Team 2 officer'
    ,'Team 2 members'
    ,'Score'
  ])

  const [membershipMilestones, setMembershipMilestones] = useState([
    'year'
    ,'Member Count'
    ,'Competative Event Count'
    ,'More about {this year}...'
  ])

  return (
    <div>
      <div className='membership-center-div'>
          <h1 className='main-title'>Membership</h1>

        {
          membershipTeams.map((string, index) => {
            if(index % 3 === 0){
              return<div className='membership-secondary-div'>
                      <h2 className='membership-secondary-header'>Teams</h2>
                      <h3 className='membership-content'>{membershipTeams[index]}</h3>
                      <h3 className='membership-content'>{membershipTeams[index + 1]}</h3>
                      <h3 className='membership-content'>{membershipTeams[index + 2]}</h3>
                    </div>
            }
          })
        }

        {
          membershipMilestones.map((string, index) => {
            if(index == 0){
              return<div className='membership-secondary-div'>
                      <h2 className='membership-secondary-header'>Milestones</h2>
                      <h3 className='membership-content'>{membershipMilestones[index]}</h3>
                      <h3 className='membership-content'>{membershipMilestones[index + 1]}</h3>
                      <h3 className='membership-content'>{membershipMilestones[index + 2]}</h3>
                      <h3 className='membership-content'>{membershipMilestones[index + 3]}</h3>
                    </div>
            }
          })
        }

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

      </div>
    </div>
  )
}

export default Membership