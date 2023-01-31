import React from 'react'
import '../../css/pages/Committee.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const CommitteeEvent = ({data}) => {
  const startDate = new Date(data.startTime)

  let endDate = ""

  if(data.endTime != ""){
  endDate = new Date(data.endTime)
  }

  console.log(data)
  return (
    <div className='center-div'>
        
        {/* Commitee(BIG) */}
        <div className='Committee-div'>

            {/* Image */}
            <div className='Committee-secondary-div'>
              <img className='Committee-img' src={data.photoURL} alt={data.name}/>
            </div>
          
            {/* CommitteeName & run time*/}
            <div className='Committee-secondary-div'>
              <p className='Committee-secondary-header'>{data.name} </p>
              <p className='Committee-tertiary-header'>{data.runTime}</p>
            </div>

            {/* Members */}
            <div className='Committee-secondary-div'>
              <h2 className='Committee-header'>Members</h2>
              <p className='Committee-content'>{data.members}</p>
            </div>
            
            {/* Description */}
            <div className='Committee-secondary-div'>
              <h2 className='Committee-header'>Description</h2>
              <p className='Committee-content'>{data.description}</p>
            </div>

            {/* Accomplishments */}
            <div className='Committee-secondary-div'>
              <h2 className='Committee-header'>Accomplishments</h2>
              <p className='Committee-content'>{data.accomplishments}</p>
            </div>

        </div>
    </div>
  )
}

export default CommitteeEvent