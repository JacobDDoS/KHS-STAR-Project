import React, {useState} from 'react'
import '../css/pages/Recruitment.css'

const Recruitment = () => {
    const[recruitmentActivityInfo, setRecruitmentActivityInfo] = useState([
        'Summer stampede'
        ,'Four members set up a stand to attract memebers during summer stampede. We gained 100 members and we are also now the biggest student-body group in all of history.'
/*pic*/ ,'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc='
        ,'March 10, 2013'
        ,'Title(2)'
        ,'Description'
/*pic*/ ,'https://media.istockphoto.com/id/1364253107/photo/dog-and-cat-as-best-friends-looking-out-the-window-together.jpg?b=1&s=170667a&w=0&k=20&c=u1xPaiM1NNVHPtvPVhh0vKCoU0wycUeQD61v6NpVBWI='
        ,'Date'
    ])
  return (
    <div>
        <div className='recruitment-center-div'>
            <h1 className='main-title'>Recruitment</h1>

            {
          recruitmentActivityInfo.map((string, index) => {
            if(index % 4 === 0){
              return<div className='recruitment-secondary-div'>
                      <h2 className='recruitment-secondary-header'>{recruitmentActivityInfo[index]} </h2>
                      <h3 className='recruitment-content'>{recruitmentActivityInfo[index + 1]}</h3>
                      <img className='recruitment-content' src ={recruitmentActivityInfo[index + 2]} alt = {recruitmentActivityInfo[index]}></img>
                      <h3 className='recruitment-content'>{recruitmentActivityInfo[index + 3]}</h3>
                    </div>
            }
          })
        }
        </div>
    </div>
  )
}

export default Recruitment