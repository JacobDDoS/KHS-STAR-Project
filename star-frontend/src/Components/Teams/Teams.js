import React from 'react'
import TeamsEvent from './TeamsEvent'
import '../../css/pages/Teams.css'

const Teams = ({data}) => {
  return (
    <div>
      {
        data.map((teams, idx) => {
          return <div key={teams.id}> 
            <TeamsEvent data={teams} key={teams.id}/>
            {idx !== data.length-1 ? <div key={idx} className='line'></div> : null}
          </div>
        })
      }
    </div>
  )
}

export default Teams