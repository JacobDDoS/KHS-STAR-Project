import React, {useEffect, useState} from 'react'
import Home from '../Components/Home/Home'
import '../css/pages/Home.css'
import { getHomeImages } from '../data/Home/getHomeImages'
import { getHomeQA } from '../data/Home/getHomeQA'

const HomePage = () => {
  const[HomeQAData, setHomeQAData] = useState([])
  const[HomeImageData, setHomeImageData] = useState([])

  useEffect(() =>{
    getHomeQA().then((data) => {
      setHomeQAData(data)
    
    getHomeImages().then((ImageData) => {
      setHomeImageData(ImageData)
    })
    })

  }, [])

  return (<>
        <div className='center-div'>
            <h1 className='home-main-title'>Kearney FCCLA</h1>

            <Home data={HomeQAData} ImageData={HomeImageData}/>

            <div className='creed-div'>
              <h3 className='creed'>For we are the builders of homes, homes for America's future, homes where living will be the expression of everything that is good and fair, homes where truth and love and security and faith will be realities, not dreams. We are the Family, Career and Community Leaders of America.</h3>
            </div>
        </div>
  </>
  )
}


export default HomePage