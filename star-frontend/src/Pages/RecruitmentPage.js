import React, {useEffect, useState} from 'react'
import '../css/pages/Recruitment.css'
import Recruitment from '../Components/Recruitment/Recruitment'
import { getRecruitment } from '../data/getRecruitment'

const RecruitmentPage = () => {
    const[RecruitmentData, setRecruitmentData] = useState([])

    useEffect(() => {
      getRecruitment().then((data) => {
        setRecruitmentData(data)
      })
    }, [])

  return (<>
        <div className='recruitment-center-div'>
          <h1 className='main-title'>Recruitment</h1>
        </div>
        <Recruitment data={RecruitmentData}/>
      </>
  )
}

export default RecruitmentPage