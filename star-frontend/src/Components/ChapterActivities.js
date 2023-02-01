import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getChapterActivities } from '../data/getChapterActivities'
import { numberToMonth } from '../helpers/numberToMonth'

const ChapterActivities = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getChapterActivities().then((data)=> {
            data.sort((a, b) => {
          const aDate = new Date(a.startDate);
          const bDate = new Date(b.startDate);
          return  bDate.getTime() - aDate.getTime()
        })
        console.log(data)
        setData(data)
        })
    }, [])
  return (
    <div>
        {
            data.map((activity)=> {
                const startDate = new Date(activity.startDate);
                const endDate = new Date(activity.endDate);
                return <div key={activity.id} className="chapterActivity-main-container">
                    {/* Photo */}
                    <div className='chapterActivity-image'>
                        <img src={activity.photoURL} alt={activity.description} />
                    </div>

                    {/* Name of Activity and Dates  */}
                    <div className='chapterActivity-text-container'>
                        <h2 className='chapterActivity-title'>{activity.nameOfActivity}</h2>
                        {/* Description  */}
                        <div className='chapterActivity-date-container'>
                            <p>Started: {numberToMonth(startDate.getMonth())} {startDate.getUTCDate()} {startDate.getFullYear()}</p>
                        </div>

                        { activity.endDate ?
                        <div className='chapterActivity-date-container'>
                            <p>Ended: {numberToMonth(endDate.getMonth())} {endDate.getUTCDate()} {endDate.getFullYear()}</p>
                        </div>
                        : null}

                        <div className='chapterActivity-description-container'>
                                <p className='chapterActivity-description'>{activity.description}</p>
                        </div>
                    </div>

                </div>
         })
        }
    </div>
  )
}

export default ChapterActivities