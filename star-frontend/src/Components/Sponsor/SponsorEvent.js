import React from 'react'
import '../../css/pages/Sponsor.css'

const SponsorEvent = ({data}) => {

  return (
    <div className='center-div'>
        
        {/* Sponsor */}
        <div className='sponsor-secondary-div'>

            {/* Company name */}
            <p className='sponsor-header'>{data.companyName}</p>

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