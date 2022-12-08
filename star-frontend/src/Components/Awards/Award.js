import React from 'react'
import '../../css/Components/award.css'
import { numberToMonth } from '../../helpers/numberToMonth';

const Award = ({data}) => {
  const date = new Date(data.date);
  
  return (
    <div className='award-container'>

        {/* Award  */}
        <div className='award-data-container'>

            {/* Photo */}
            <div className='award-photo'>
                <img src={data.pictureOfAwardURL || ""} alt={data.awardName ? "Picture of " + data.awardName : ""} />
                {/* <h3> <span>Recognizing: </span> {data.membersOfAward}</h3> */}
            </div>

            {/* Award Info */}
            <div className='award-info'>
                <h2>{data.awardName}</h2>
                

                {/* Description  */}
                <div className='award-description'>
                    <p>{data.description}</p>
                </div>
            </div>
            
        </div>

        {/* Date  */}
        <div className='award-date'>
            <h3>{numberToMonth(date.getUTCMonth())} {date.getUTCDate()} {date.getFullYear()}</h3>
        </div>
    </div>
  )
}

export default Award