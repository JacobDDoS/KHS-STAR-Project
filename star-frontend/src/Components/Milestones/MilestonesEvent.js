import React from 'react'
import '../../css/pages/Milestones.css'

const MilestonesEvent = ({data}) => {

  return (
    <div className='center-div' style={{"marginTop": "30px", "width": "100%"}}>

        {/* Mlestone */}
        <div className='milestone-div'>

            {/* Year */}
            <p className='milestone-content'>Year: {data.year}</p>

            {/* Member Count */}
            <p className='milestone-content'>Members: {data.numberOfMembers}</p>

            {/* Event Count */}
            <p className='milestone-content'>Competitive Events: {data.numberOfCompetitiveEvents}</p>

            {/* Accomplishments */}
            <p className='milestone-content'>Yearly Accomplishments: {data.yearlyAccomplishments}</p>

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