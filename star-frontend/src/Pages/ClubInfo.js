import React, {useState} from 'react'
import '../css/pages/ClubInfo.css'

const ClubInfo = () => {
    const [triviaInfo, setTriviaInfo] = useState(["https://media.istockphoto.com/id/1324993565/photo/vintage-looking-modern-mirrorless-camera-isolated-on-white-background-front-view.jpg?b=1&s=170667a&w=0&k=20&c=01oLlpkdzBEeS4MdKO8AC2RNgFaybMCKRzFoL9ZozpU=","heading", "text"
,'https://media.istockphoto.com/id/1419935827/photo/dog-wearing-self-made-paper-party-hat-with-thanksgiving-turkey-background-for-holiday-card-or.jpg?b=1&s=170667a&w=0&k=20&c=GiYzNLWwMYdCVy8knX5L9n10HPZnV4mbmUIY39OcXxM=', "Turkey-Dog Spotted", "After 100 years of silence, the turkey dog made an appearence at the annual turkey-dog appreciation parade."
,'https://media.istockphoto.com/id/1426996087/photo/cute-corgi-dog-in-fancy-black-hat-sitting-in-autumn-park-with-pumpkin-for-halloween.jpg?b=1&s=170667a&w=0&k=20&c=M67BTVncRL6C1Daij9kvgqYmxekGjYh9UyqUJG8caXo=', 'fall dog', 'pilgrim dog is in forest. it is a corgi'
,'https://media.istockphoto.com/id/1349321709/photo/full-length-shot-of-an-adorable-dog-lying-on-the-sofa-at-home.jpg?b=1&s=170667a&w=0&k=20&c=QNW8aqRyNqrKDxmWPgA29775-lML_lJOH5YYl9vGBxk=', "dog on couch", "big dog, tiny couch. Smaller ball"
])
  return (
    <div>
        <div className='trivia-center-div'>
            <h1 className='main-title'>FCCLA info</h1>
                {
                triviaInfo.map((string, index) => {
                    if(index % 3 === 0 && index != triviaInfo.length-1){     
                        if(index % 6 === 0){
                        return<div className='trivia-content-div'>
                                    <img className='trivia-image'src = {triviaInfo[index]} alt = {triviaInfo[index]}/>
                                    <h1 className='trivia-header'>{triviaInfo[index + 1]}</h1>
                                    <h3 className='trivia-body-text'>{triviaInfo[index + 2]}</h3>  
                            </div>
                        }else{
                            return<div className='trivia-content-div'>
                                    <img className='trivia-image'src = {triviaInfo[index]} alt = {triviaInfo[index]}/>
                                    <h1 className='trivia-header'>{triviaInfo[index + 1]}</h1>
                                    <h3 className='trivia-body-text'>{triviaInfo[index + 2]}</h3>  
                            </div>
                        }
                    }
                })
                }

        </div>
    </div>
  )
}

export default ClubInfo