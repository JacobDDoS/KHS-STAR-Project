import React from 'react'
import '../../css/pages/Milestones.css'

const MilestonesEvent = ({data}) => {
  console.log(data)
  return (
    <div className='center-div'>

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

        </div>
    </div>
  )
}

export default MilestonesEvent