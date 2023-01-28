import React from 'react'
import ProgramOfWorkEvent from './ProgramOfWorkEvent'
import '../../css/pages/ProgramOfWork.css'

const ProgramOfWork = ({data}) => {
  return (
    <div>
      {
        data.map((programOfWork, idx) => {
          return <div key={programOfWork.id}> 
            <ProgramOfWorkEvent data={programOfWork} key={programOfWork.id}/>
            {idx !== data.length-1 ? <div key={idx} className='line'></div> : null}
          </div>
        })
      }
    </div>
  )
}

export default ProgramOfWork