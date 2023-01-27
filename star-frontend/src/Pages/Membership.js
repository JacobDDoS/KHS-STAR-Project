import React, {useState} from 'react'
import '../css/pages/Membership.css'

const Membership = () => {
  const [membershipInfo, setMembershipInfo] = useState([
    'Benifets'
    ,'Prices'
    ,'Deadlines'
    //Not a loop, just fill out the first 3
  ])

  const [membershipTeams, setMembershipTeams] = useState([
    ,'Team Name (1)'
    ,'Team 1 officer'
    ,'Team 1 Members'
    ,'Score'
    ,'Team Name (2)'
    ,'Team 2 officer'
    ,'Team 2 members'
    ,'Score'
    ,'Team Name (3)'
    ,'Team 3 officer'
    ,'Team 3 Members'
    ,'Score'
    ,'Team Name (4)'
    ,'Team 4 officer'
    ,'Team 4 members'
    ,'Score'
  ])

  const [membershipMilestones, setMembershipMilestones] = useState([
    'year'
    ,'Member Count'
    ,'Competative Event Count'
    ,'More about {this year}...'
    //Not a loop, just fill out the first 4
  ])

  return (
    <div>
      <div className='membership-center-div'>
          <h1 className='main-title'>Membership</h1>
          
        {
          membershipTeams.map((string, index) => {
            if(index % 4 === 0){
              return<div className='membership-secondary-div'>
                      <h2 className='membership-secondary-header'>{membershipTeams[index - 3]} </h2>
                      <h3 className='membership-content'>{membershipTeams[index - 2]}</h3>
                      <h3 className='membership-content'>{membershipTeams[index - 1]}</h3>
                      <h3 className='membership-content'>{membershipTeams[index]}</h3>
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