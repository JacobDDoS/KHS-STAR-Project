import React from 'react'
import '../../css/pages/Leadership.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const LeadershipEvent = ({data}) => {
    const startDate = new Date(data.startTime)
    const endDate = new Date(data.endTime)

  return (
    <div>
        
        {/* Leader */}
        <div className='leadership-content-div'>

            {/* Image */}
            <img className='leadership-img'src = {data.photoURL} alt = {data.officerName}/>

            {/* Name */}
            <h1 className='leadership-name'>{data.officerName}</h1>

            {/* Title */}
            <h3 className='leadership-title'>{data.officerPosition}</h3>

            {/* Responsibilities */}
            <h3>{data.chapterResponsibilities}</h3>

            {/* goals */}
            <h3 className='leadership-goals'>{data.chapterServiceOrCareerGoals}</h3>

            {/* Start time */}
            <h3 className='leadership-date'>{numberToMonth(startDate.getUTCMonth())} {startDate.getUTCDate()} {startDate.getFullYear()}</h3>

            {/* End time */}
            <h3 className='leadership-date'>{numberToMonth(endDate.getUTCMonth())} {endDate.getUTCDate()} {endDate.getFullYear()}</h3>

            {/* Email */}
            <h3 className='leadership-email'>{data.email}</h3>

        </div>
    </div>
  )
}

export default LeadershipEvent