import React from 'react'
import ProgramOfWorkEvent from '../ProgramOfWork/ProgramOfWorkEvent'
import '../../css/pages/ProgramOfWork.css'

const ProgramOfWork = ({data}) => {
  return (
    <div>ProgramOfWork
    {
        data.map((programOfWork, idx) => {
            return <> 
            <ProgramOfWorkEvent data={programOfWork} key={programOfWork.id}/>
            {idx !== programOfWork.length-1 ? <div key={idx} className='line'></div> : null}
            </>
        })
    }
    </div>
  )
}

export default ProgramOfWork