import React, {useState} from 'react'
import '../css/pages/Membership.css'

const Membership = () => {
  return (
    <div>
      <div className='membership-center-div'>
          <h1 className='main-title'>Membership</h1>
        <a href='/FCCLA-recruitment'>| Recruitment Activities |</a>
        <a href='/FCCLA-committee'> Committees |</a>
        <a href='/FCCLA-milestones'> Milestones |</a>
        <a href='/FCCLA-teams'> Teams and Scores |</a>
      </div>
    </div>
  )
}

export default Membership