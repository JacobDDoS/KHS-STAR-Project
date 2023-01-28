import React from 'react'
import '../../css/pages/Recruitment.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const RecruitmentEvent = ({data}) => {
    const date = new Date(data.date)

  return (
    <div>
        
        {/* Recruitment Activity(BIG) */}
        <div className='recruitment-center-div'>

            {/* Recruitment Activity(Event) */}
            <h2 className='recruitment-secondary-header'>{data.event}</h2>

            {/* Description */}
            <h3 className='recruitment-content'>{data.description}</h3>

            {/* Image */}
            <img className='recruitment-content' src ={data.image} alt = {data.event}></img>

            {/* Time */}
            <h3 className='recruitment-content'>{numberToMonth(date.getUTCMonth())} {date.getUTCDate()} {date.getFullYear()}</h3>

        </div>
    </div>
  )
}

export default RecruitmentEvent