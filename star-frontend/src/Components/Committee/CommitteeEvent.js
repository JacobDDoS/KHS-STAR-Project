import React from 'react'
import '../../css/pages/Committee.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const CommitteeEvent = ({data}) => {
  const startDate = new Date(data.startTime)

  let endDate = ""

  if(data.endTime != ""){
  endDate = new Date(data.endTime)
  }

  return (
    <div className='recruitment-center-div'>
        
        {/* Commitee(BIG) */}
        <div className='Committee-secondary-div'>

            {/* CommitteeName */}
            <h2 className='Committee-secondary-header'>{data.committeeName} </h2>

            {/* Members */}
            <h3 className='Committee-content'>{data.members}</h3>

            {/* startTime */}
            <h3>{numberToMonth(startDate.getUTCMonth())} {startDate.getUTCDate()} {startDate.getFullYear()}</h3>

            {/* endTime */}
            {endDate ? <h3>{numberToMonth(endDate.getUTCMonth())} {endDate.getUTCDate()} {endDate.getFullYear()}</h3> : ""}

            {/* Description */}
            <h3 className='Committee-content'>{data.description}</h3>

            {/* Image */}
            <img className='Committee-content' src={data.image} alt={data.committeeName}/>

            {/* Accomplishments */}
            <h3 className='Committee-content'>{data.accomplishments}</h3>

        </div>
    </div>
  )
}

export default CommitteeEvent