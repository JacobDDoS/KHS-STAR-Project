import React, {useState} from 'react'
import '../css/pages/Committee.css'

const Committee = () => {
    const[committeeInfo, setCommitteeInfo] = useState([
        'Committee Name'
        ,'List of members'
        ,'Discription' //include year started
/*pic*/ ,'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc='
        ,'Achievements'
        ,'FACTS'
        ,'Cazbi Velazquez, Shayne Donovan, Addyson Jones, Arabella Young, Isobel Zayas, Joseph Vyvlecka, Kassidy Clark, Kimberly Gomez-Galicia, Cheyenne Seybold, Adan Ciprian'
        ,'Since, the beggining of time, the FACTS (fires accross comunist territories and states) has been commiting acts of arson for the greater good of this god-blessed country *eagle screch*' //include year started
/*pic*/ ,'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc='
        ,'Saved the world 900 times, the galaxy twice, the universe 4 times, this timeline once, the fabric of our reality 6 times, 5 star Micheline review, scored a 10 on the Egypt-O-meter'
    ])
  return (
    <div>
        <div className='recruitment-center-div'>
            <h1 className='main-title'>Recruitment</h1>

            {
          committeeInfo.map((string, index) => {
            if(index % 5 === 0){
              return<div className='Committee-secondary-div'>
                      <h2 className='Committee-secondary-header'>{committeeInfo[index]} </h2>
                      <h3 className='Committee-content'>Members: {committeeInfo[index + 1]}</h3>
                      <h3 className='Committee-content'>{committeeInfo[index + 2]}</h3>
                      <img className='Committee-content' src ={committeeInfo[index + 3]} alt = {committeeInfo[index]}></img>
                      <h3 className='Committee-content'>{committeeInfo[index + 4]}</h3>
                    </div>
            }
          })
        }
        </div>
    </div>
  )
}

export default Committee 