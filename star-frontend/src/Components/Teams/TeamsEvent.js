import React from 'react'
import '../../css/pages/Teams.css'

const TeamsEvent = ({data}) => {

  return (
    <div className='center-div'>
        
        {/* team(BIG) */}
        <div className='teams-secondary-div'>

            {/* Captians */}
            <h2 className='teams-content'>Captains: {data.captain1} , {data.captain2}</h2>

            {/* Members */}
            <h3 className='teams-content'>Members: {data.members}</h3>

            {/* Score */}
            <h3 className='teams-content'>Score: {data.score}</h3>

        </div>
    </div>
  )
}

export default TeamsEvent