import React, {useState} from 'react'
import '../../css/pages/Home.css'

const HomeEvent = ({data, ImageData}) => {
    const [IndexOfImage, setIndexOfImage] = useState(0)
    console.log(ImageData[0])

  return ( 
    <div className='center-div'>

            {/* Image Cycle */}
            {ImageData.length !== 0 ? <img className='display-img' src={ImageData[IndexOfImage].urltoPicture} onClick={()=>setIndexOfImage((IndexOfImage+1)%ImageData.length)}/> : null }
            
            {/* About FCCLA */}
            <div id='abt-fccla-title'>
                <h3 id='abt-k-fccla'>About FCCLA</h3>
            </div>

            {/* Question and Answer */}
            <section className='QA-list'>
            {
                data.length !== 0 ? 
                data.map((value, key) => {
                    return <div key={key}> <div className='question-div'><h3 className='question'>{value.question}</h3></div>
                           <div className='answer-div'><h3 className='answer'>{value.answer}</h3></div>
                </div>})
                : null
            }
            </section>

    </div>
  )
}

export default HomeEvent