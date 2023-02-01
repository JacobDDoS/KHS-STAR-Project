import React from 'react'
import '../../css/pages/Teams.css'

const TeamsEvent = ({data}) => {

  return (
    <div className='center-div'>
        
        {/* team(BIG) */}
        <div className='teams-secondary-div'>

            {/* Captians */}
            <div className='teams-tertiary-div'>
              <h2 className='teams-header'>Captains:</h2>
              <p className='teams-content'>{data.teamCaptains}</p>
            </div>

            {/* Members */}
            <div className='teams-tertiary-div'>
              <h2 className='teams-header'>Members: </h2>
              <p className='teams-content'>Members: {data.members}</p>
            </div>
            {/* Score */}
            <div className='teams-tertiary-div'>
            <h2 className='teams-header'>Score: </h2>
            <p className='teams-content'>{data.score}</p>
          </div>
        </div>
    </div>
  )
}

export default TeamsEvent