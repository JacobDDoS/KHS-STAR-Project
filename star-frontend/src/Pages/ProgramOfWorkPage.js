import React, {useEffect, useState} from 'react'
import ProgramOfWork from '../Components/ProgramOfWork/ProgramOfWork'
import '../css/pages/ProgramOfWork.css'
import { getProgramOfWork } from '../data/getProgramOfWork'

const ProgramOfWorkPage = () => {
    const[ProgramOfWorkData, setProgramOfWork] = useState([])

    useEffect(() =>{
      getProgramOfWork().then((data) => {
        console.log(data);
        data.sort((a, b) => {
          const aDate = new Date(a.date);
          const bDate = new Date(b.date);
          return aDate.getTime() - bDate.getTime()
        })
        console.log(data);
        setProgramOfWork(data)
      })
    },[])
  return (<>
        <div className='center-div'>
            <h1 className='main-title'>Program Of Work</h1>
        </div>
        <ProgramOfWork data={ProgramOfWorkData}/>
        </>
  )
}

export default ProgramOfWorkPage 