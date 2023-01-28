import React from 'react'
import ClubInfoEvent from './ClubInfoEvent'
import '../../css/pages/ClubInfo.css'

const ClubInfo = ({data}) => {
  return (
    <div>
      {
        data.map((clubInfo, idx) => {
          return <div key={idx} className='line'> 
            <ClubInfoEvent data={clubInfo} key={clubInfo.id}/>
            {idx !== data.length-1 ? <div key={idx} className='line'></div> : null}
          </div>
        })
      }
    </div>
  )
}

export default ClubInfo