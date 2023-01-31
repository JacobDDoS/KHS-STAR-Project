import React, { useState } from 'react'

import '../../css/Components/dropdown.css'

export const Dropdown = ({subtitle, content}) => {
    const [showContent, setShowContent] = useState(false);
  return (
    <div className='dropdown-container'>
        <div className='dropdown-subtitle-container' onClick={()=>setShowContent(!showContent)}>
            <h3 className='dropdown-subtitle'>{subtitle} {!showContent ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</h3>
        </div>
        <div className={`dropdown-content-container ${!showContent ? 'invisible' : ''}`}>
            <p className='dropdown-content'>{content}</p>
        </div>
    </div>
  )
}
