import React from 'react'
import '../../css/pages/Milestones.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const MilestonesEvent = ({data}) => {

  return (
    <div className='center-div' style={{"marginTop": "30px", "width": "100%"}}>

        {/* Mlestone */}
        <div className='milestone-div'>

            {/* Year */}
            <h3 className='milestone-content'>Year: {data.year}</h3>

            {/* Member Count */}
            <h3 className='milestone-content'>Members: {data.numberOfMembers}</h3>

            {/* Event Count */}
            <h3 className='milestone-content'>Competitive Events: {data.numberOfCompetitiveEvents}</h3>

            <h3>Accomplishments: {data.yearlyAccomplishments} </h3>

            {/* Highlighted Members */}
            <h3>Highlighted/New Members: </h3>
            <div style={{"width": "100%", "overflow": "auto"}}>
              <p>{data.highlightedMembers}</p>
            </div>
        </div>
    </div>
  )
}

export default MilestonesEvent