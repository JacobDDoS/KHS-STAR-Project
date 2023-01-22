import React from 'react'
import '../../css/pages/ClubInfo.css'

const ClubInfoEvent = ({data}) => {

  return (
    <div className='trivia-center-div'>
        
        {/* FACT */}
        <div className='trivia-content-div'>

            {/* Image */}
            <img className='trivia-image' src={data.image || ""} alt={data.heading}/>

            {/* Heading */}
            <h1 className='trivia-header'>{data.heading}</h1>

            {/* Text */}
            <h3 className='trivia-body-text'>{data.text}</h3>

        </div>
    </div>
  )
}

export default ClubInfoEvent