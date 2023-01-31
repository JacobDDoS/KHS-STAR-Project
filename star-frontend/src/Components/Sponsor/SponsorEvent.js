import React from 'react'
import '../../css/pages/Sponsor.css'

const SponsorEvent = ({data}) => {

  return (
    <div className='center-div'>
        
        {/* Sponsor */}
        <div className='sponsor-secondary-div'>

            {/* Company name */}
            <h2 className='sponsor-header'>{data.companyName}</h2>

            {/* Image */}
            <img src={data.logoURL} alt={data.companyName} className='sponsor-img'/>

            {/* Description */}
            <h3 className='sponsor-content'>{data.description}</h3>

            {/* link */}
            <a className='sponsor-content' href={data.link}>{data.companyName}</a>

        </div>
    </div>
  )
}

export default SponsorEvent