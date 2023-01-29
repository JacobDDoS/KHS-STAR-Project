import React from 'react'
import RecruitmentEvent from './RecruitmentEvent'
import '../../css/pages/Recruitment.css'

const Recruitment = ({data}) => {
  return (
    <div>
      {
        data.map((Recruitment, idx) => {
          return <div key={idx} className='line'> 
            <RecruitmentEvent data={Recruitment} key={Recruitment.id}/>
          </div>
        })
      }
    </div>
  )
}

export default Recruitment