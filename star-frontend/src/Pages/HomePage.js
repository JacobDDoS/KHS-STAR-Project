import React, { useState } from 'react'
import '../css/pages/Home.css'

const Home = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(["Question", "Ans" , "Why is FCCLA the best club in kearney?", "CLUB?? WE ARE AN ORGANIZATION!"])
  const [imageCycle, setImageCycle] = useState([
    "https://media.istockphoto.com/id/108226626/photo/feline.jpg?b=1&s=170667a&w=0&k=20&c=4xt1rp_HSGLPUiKoioQOgTJgj3NXVUjMCEoaQ7ZROr8=", "cat",
    "https://media.istockphoto.com/id/1426156694/photo/a-dog-dressed-as-a-halloween-ghost-a-golden-retriever-sits-in-an-autumn-park-with-orange.jpg?b=1&s=170667a&w=0&k=20&c=3U7TsMXQ9gzgRw1rhVbQm8pQPvG7_3b3tLTW02YjjZM=", "dog",
  ])
  return (
    <div>
        <div className='center-div'>
{/* Add on click function to the title as an example, then add a div to click on to change image (like next button) */}
            <h1 className='home-main-title'>Kearney FCCLA</h1>

            <div className='display-case'>
                {
                  imageCycle.map((string, index) =>{
                    if(index % 2 === 0 && index < 2){
                      return <img className = 'display-img' src={string}/>
                    }else if (index % 2 === 1 && index <= 2){
                      return <p className='subtitle'>{string}</p>
                    }
                  })
                }
            </div>

            <div id='abt-fccla-title'>
                <h3 id='abt-k-fccla'>About FCCLA</h3>
            </div>
            
            <div id='abt-fccla-text'>

            <section className='QA-list'>
              {
              questionsAndAnswers.map((string , index) =>{
                if(index % 2 === 0){
                  return <div className='question-div'>
                      <h3 className='question'>{string}</h3>
                    </div>;
                }else{
                  return <div className='answer-div'>
                    <h3 className='answer'>{string}</h3>
                  </div>;
                }
              })
              }
            </section>
            </div>

            <div className='creed-div'>
              <h3 className='creed'>For we are the builders of homes, homes for America's future, homes where living will be the expression of everything that is good and fair, homes where truth and love and security and faith will be realities, not dreams. We are the Family, Career and Community Leaders of America.</h3>
            </div>
        </div>
    </div>
  )
}

export default Home