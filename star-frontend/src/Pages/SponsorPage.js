import React, {useEffect, useState} from 'react'
import Sponsor from '../Components/Sponsor/Sponsor'
import '../css/pages/Sponsor.css'
import { getSupporters } from '../data/getSupporters'

const SponsorPage = () => {
    const[SponsorData, setSponsorData] = useState([])

    useEffect(() =>{
      getSupporters().then((data) => {
        setSponsorData(data)
      })
    },[])
  return (<>
        <div className='center-div'>
            <h1 className='main-title'>Sponsors</h1>
        </div>
        <Sponsor data={SponsorData}/>
        </>
  )
}

export default SponsorPage 