import React from 'react'
import Award from './Award'

const Awards = ({data}) => {
  return (
    <div>
      {
        data.map((award) => {
          return <Award data={award} key={award.id}/>
        })
      }
    </div>
  )
}

export default Awards