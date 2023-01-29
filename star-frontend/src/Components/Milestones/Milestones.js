import React from 'react'
import MilestonesEvent from './MilestonesEvent'
import '../../css/pages/Milestones.css'

const Milestones = ({data}) => {
  return (
    <div>
      {
        data.map((milestones, idx) => {
          return <div key={milestones.id}> 
            <MilestonesEvent data={milestones} key={milestones.id}/>
          </div>
        })
      }
    </div>
  )
}

export default Milestones