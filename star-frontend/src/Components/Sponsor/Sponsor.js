import React from 'react'
import SponsorEvent from './SponsorEvent'
import '../../css/pages/Sponsor.css'

const Sponsor = ({data}) => {
  return (
    <div>
      {
        data.map((sponsor, idx) => {
          return <div key={sponsor.id}> 
            <SponsorEvent data={sponsor} key={sponsor.id}/>
            {idx !== data.length-1 ? <div key={idx} className='line'></div> : null}
          </div>
        })
      }
    </div>
  )
}

export default Sponsor