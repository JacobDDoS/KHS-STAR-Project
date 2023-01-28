import React, { useEffect, useState } from 'react'
import ProgramOfWorkEvent from './ProgramOfWorkEvent'
import '../../css/pages/ProgramOfWork.css'
import { numberToMonth } from '../../helpers/numberToMonth';

const ProgramOfWork = ({data}) => {
  let [dataSortedByMonth, setDataSortedByMonth] = useState([]);
  useEffect(()=>{
    dataSortedByMonth = [];
    let currentMonth = -1;
    for (let i=0;i<data.length;i++) {
      const dataDate = new Date(data[i].date);

      if (currentMonth == -1 || currentMonth != dataDate.getMonth()) {
        currentMonth = dataDate.getMonth();
        dataSortedByMonth.push([]);
      }
      dataSortedByMonth[dataSortedByMonth.length-1].push(data[i]);
    }
    setDataSortedByMonth(dataSortedByMonth);
  }, [data])
  return (
    <div>
      {
        dataSortedByMonth.map((dataForThatMonth, idx) => {
          if (dataForThatMonth.length > 0) {
            const dataDate = new Date(dataForThatMonth[0].date);
            return <div key={idx}>
              <h2>{numberToMonth(dataDate.getMonth())}</h2>
              {
                dataForThatMonth.map((oneEvent) => {
                  return <ProgramOfWorkEvent data={oneEvent} key={oneEvent.id} />
                })
              }
            </div>
          }
        })
      }
      {/* {
        data.map((programOfWork, idx) => {
          return <div key={programOfWork.id}> 
            <ProgramOfWorkEvent data={programOfWork} key={programOfWork.id}/>
          </div>
        })
      } */}
    </div>
  )
}

export default ProgramOfWork