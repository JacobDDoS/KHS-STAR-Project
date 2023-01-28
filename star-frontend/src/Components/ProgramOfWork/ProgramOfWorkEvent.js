import React from 'react'
import '../../css/pages/ProgramOfWork.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const ProgramOfWorkEvent = ({data}) => {
  const date = new Date(data.date);

  return (
    <div className='center-div pow-event-container'>
      <div className='pow-circle-container'>
        <h2 className='pow-event-date'>{date.getDate()}</h2>
      </div>
      <div className='pow-description-container'>
        <h2 className='pow-event-description'>{data.description}</h2>
      </div>
    </div>
  )
}

export default ProgramOfWorkEvent