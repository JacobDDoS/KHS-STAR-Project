import React from 'react'
import Award from './Award'
import '../../css/Components/awards.css'

const Awards = ({data}) => {
  return (
    <div id='awards'>
      {
        data.map((award, idx) => {
          return <> 
            <Award data={award} key={award.id}/>
            {idx !== data.length-1 ? <div key={idx} className='line'></div> : null}
          </>
        })
      }
    </div>
  )
}

export default Awards