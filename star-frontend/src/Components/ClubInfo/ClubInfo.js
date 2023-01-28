import React from 'react'
import ClubInfoEvent from './ClubInfoEvent'
import '../../css/pages/ClubInfo.css'

const ClubInfo = ({data}) => {
  return (
    <div>
        <div className='line'> 
          <ClubInfoEvent data={data} key={data.id}/>
        </div>
    </div>
  )
}

export default ClubInfo