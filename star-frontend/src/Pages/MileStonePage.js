import React, {useEffect, useState} from 'react'
import Milestones from '../Components/Milestones/Milestones'
import '../css/pages/Milestones.css'
import { getMilestones } from '../data/getMilestones'

const MilestonesPage = () => {
    const[MilestonesData, setMilestonesData] = useState([])

    useEffect(() =>{
      getMilestones().then((data) => {
        setMilestonesData(data)
      })
    },[])
  return (<>
        <div className='center-div'>
            <h1 className='main-title'>Milestones</h1>
        </div>
        <Milestones data={MilestonesData}/>
        </>
  )
}

export default MilestonesPage 