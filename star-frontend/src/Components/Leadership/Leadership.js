import React from 'react'
import LeadershipEvent from './LeadershipEvent'
import '../../css/pages/Leadership.css'

const Leadership = ({data}) => {
  return (
    <div>
      {
        data.map((Leadership, idx) => {
          return <div key={idx} className='line'> 
            <LeadershipEvent data={Leadership} key={Leadership.id}/>
          </div>
        })
      }
    </div>
  )
}

export default Leadership