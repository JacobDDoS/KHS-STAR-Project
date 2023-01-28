import React from 'react'
import CommitteeEvent from './CommitteeEvent'
import '../../css/pages/Committee.css'

const Committee = ({data}) => {
  return (
    <div>
      {
        data.map((committee, idx) => {
          return <div key={committee.id}> 
            <CommitteeEvent data={committee} key={committee.id}/>
            {idx !== data.length-1 ? <div key={idx} className='line'></div> : null}
          </div>
        })
      }
    </div>
  )
}

export default Committee