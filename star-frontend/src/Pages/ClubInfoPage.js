import React, {useEffect, useState} from 'react'
import ClubInfo from '../Components/ClubInfo/ClubInfo'
import { getClubInfo } from '../data/getClubInfo'
import '../css/pages/ClubInfo.css'

const ClubInfoPage = () => {
    const [ClubInfoData, setClubInfoData] = useState([])
 
    useEffect(()=>{
        getClubInfo().then((data) => {
            setClubInfoData(data)
        })
    }, [])

  return (<>
        <div className='center-div'>
            <h1 className='main-title'>FCCLA info</h1>
        </div>
        <ClubInfo data={ClubInfoData}/>
        </>
  )
}

export default ClubInfoPage