import React from 'react'

import PDF from '../media/pdfs/KHS_FCCLA_Officer_Expectations.pdf'

const OfficerExpectation = () => {
  return (
    <div className='main-body'>
        <iframe style={{"margin": "50px"}} src={PDF} width="80%" height="1000px" />
    </div>
  )
}

export default OfficerExpectation