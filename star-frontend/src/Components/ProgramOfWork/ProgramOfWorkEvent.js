import React from 'react'
import '../../css/pages/ProgramOfWork.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const ProgramOfWorkEvent = ({data}) => {
  const date = new Date(data.date);

  return (
    <div className='center-div'>
      <h3>{data.description} - {date.getDate()}</h3>
    </div>
  )
}

export default ProgramOfWorkEvent