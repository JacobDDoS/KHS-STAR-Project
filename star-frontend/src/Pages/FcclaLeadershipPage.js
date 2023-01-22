import React, {useState} from 'react'
import '../css/pages/FcclaLeadership.css'

const FcclaLeadership = () => {
    const[leadershipInfo, setLeadershipInfo] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOR5KFiOGzzVOu7HR9nhCY5TnjD6zY3edmJ7_kV_scesu6EgGvMcjS-IL_gpeycDcc2w&usqp=CAU'
        , 'Barack Obama'
        , 'Former President'
        , 'Serve with Dignity, and Honor. Be a good president. Will be good'
        , 'Jan 20, 2009 - Jan 20, 2017'
        ,'https://twistedsifter.com/wp-content/uploads/2021/05/present-day-abraham-lincoln.jpg'
        , 'Abraham Lincoln'
        , 'Former President'
        , 'Pinky swear to not take the slaves from the south ;)... Will also be cool and wear big hats.'
        , 'Mar 4, 1861 - Apr 15, 1865'
    ])
  return (
    <div>

        <h1 className='main-title'>FCCLA Leadership</h1>
            {
            leadershipInfo.map((string, index) => {
                if(index % 5 === 0 && index != leadershipInfo.length-1){     
                    if(index % 8 === 0){
                    return<div className='leadership-content-div'>
                                <img className='leadership-img'src = {leadershipInfo[index]} alt = {leadershipInfo[index]}/>
                                <h1 className='leadership-name'>{leadershipInfo[index + 1]}</h1>
                                <h3 className='leadership-title'>{leadershipInfo[index + 2]}</h3> 
                                <h3 className='leadership-goals'>{leadershipInfo[index + 3]}</h3>
                                <h3 className='leadership-date'>{leadershipInfo[index + 4]}</h3> 
                        </div>
                    }else{
                        return<div className='leadership-content-div'>
                                <img className='leadership-img'src = {leadershipInfo[index]} alt = {leadershipInfo[index]}/>
                                <h1 className='leadership-name'>{leadershipInfo[index + 1]}</h1>
                                <h3 className='leadership-title'>{leadershipInfo[index + 2]}</h3>
                                <h3 className='leadership-goals'>{leadershipInfo[index + 3]}</h3>
                                <h3 className='leadership-date'>{leadershipInfo[index + 4]}</h3>   
                        </div>
                    }
                }
            })
            }
        </div>
  )
}

export default FcclaLeadership