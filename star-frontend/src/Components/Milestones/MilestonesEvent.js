import React from 'react'
import '../../css/pages/Milestones.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const MilestonesEvent = ({data}) => {
  const date = new Date(data.year)

  return (
    <div className='center-div'>

        {/* Mlestone */}
        <div className='milestone-div'>

            {/* Year */}
            <h3 className='milestone-content'>Year: {numberToMonth} {date.getFullYear()}</h3>

            {/* Member Count */}
            <h3 className='milestone-content'>Members: {data.numberOfMembers}</h3>

            {/* Event Count */}
            <h3 className='milestone-content'>Competitive Events: {data.numberOfCompetitiveEvents}</h3>

        </div>
    </div>
  )
}

export default MilestonesEvent