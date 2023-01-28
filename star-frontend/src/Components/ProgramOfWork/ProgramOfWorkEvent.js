import React from 'react'
import '../../css/pages/ProgramOfWork.css'
import { numberToMonth } from '../../helpers/numberToMonth'

const ProgramOfWorkEvent = ({data}) => {
  const date = new Date(data.date);
  console.log("PoW: " + data.description);

  return (
    <div className='center-div'>
      
      {/* Jan */}

      
      {/* Feb */}


      {/* March */}


      {/* April */}


      {/* May */}


      {/* June */}


      {/* July */}


      {/* Aug */}


      {/* Sept */}


      {/* Oct */}


      {/* Nov */}


      {/* Dec */}

      
    </div>
  )
}

export default ProgramOfWorkEvent