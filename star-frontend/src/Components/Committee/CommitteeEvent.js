import React from 'react'
import '../../css/pages/Committee.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const CommitteeEvent = ({data}) => {

  return (
    <div className='recruitment-center-div'>
        
        {/* Commitee(BIG) */}
        <div className='Committee-secondary-div'>

            {/* CommitteeName */}
            <h2 className='Committee-secondary-header'>{data.name} </h2>

            {/* Members */}
            <h3 className='Committee-content'>{data.members}</h3>

            {/* runtime */}
            <h3>{data.runTime}</h3>

            {/* Description */}
            <h3 className='Committee-content'>{data.description}</h3>

            {/* Image */}
            <img className='Committee-content' src={data.photoURL} alt={data.name}/>

            {/* Accomplishments */}
            <h3 className='Committee-content'>{data.accomplishments}</h3>

        </div>
    </div>
  )
}

export default CommitteeEvent