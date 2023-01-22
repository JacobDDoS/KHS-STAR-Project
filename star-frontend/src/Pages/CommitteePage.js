import React, {useEffect, useState} from 'react'
import Committee from '../Components/Committee/Committee'
import '../css/pages/Committee.css'
import { getCommittee } from '../data/getCommittee'

const CommitteePage = () => {
    const[CommiteeData, setCommitteeData] = useState([])

    useEffect(() =>{
      getCommittee().then((data) => {
        setCommitteeData(data)
      })
    },[])
  return (<>
        <div className='recruitment-center-div'>
            <h1 className='main-title'>Recruitment</h1>
        </div>
        <Committee data={CommiteeData}/>
        </>
  )
}

export default CommitteePage 