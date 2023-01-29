import React from 'react'
import '../../css/pages/Recruitment.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const RecruitmentEvent = ({data}) => {
    const date = new Date(data.date)

  return (
    <div className='recruitment-container'>
        
        {/* Image Container */}
        <div className='recruitment-photo'>
          <img src={data.photoURL} alt={data.title} />
        </div>


        <div className='recruitment-content-container'>
          <h2 className="recruitment-title">{data.title}</h2>
          <p>{data.description}</p>
        </div>

    </div>
  )
}

export default RecruitmentEvent