import React, { useEffect, useState } from 'react'
import Awards from '../Components/Awards/Awards';
import { getAwards } from '../data/getAwards';
import '../css/pages/Awards.css'

const AwardsPage = () => {
    const [awardsData, setAwardsData] = useState([]);


    useEffect(()=>{
        //Get and set awards data
        getAwards().then((data) => {
            setAwardsData(data);
        });
    }, [])

    return (<>
        <div className='title-container'>
            <h1>Awards/Recognition</h1>
        </div>
        <Awards data={awardsData}/>
        </>
    )
}

export default AwardsPage