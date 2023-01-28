import React from 'react'
import HomeEvent from './HomeEvent'
import '../../css/pages/Home.css'

const Home = ({data, ImageData}) => {
  return (
    <div>
      <HomeEvent data={data} ImageData={ImageData}/>
    </div>
  )
}

export default Home