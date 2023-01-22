import React from 'react'
import '../../css/pages/ProgramOfWork.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const ProgramOfWorkEvent = ({data}) => {
  const date = new Date(data.date);

  return (
    <div>ProgramOfWorkEvent
      
      {/*month*/}
      <div className='programOfWork-'></div>
    </div>
  )
}

export default ProgramOfWorkEvent