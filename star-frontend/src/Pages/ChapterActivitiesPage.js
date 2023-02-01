import React from 'react'
import ChapterActivities from '../Components/ChapterActivities'

import '../css/pages/ChapterActivities.css'

const ChapterActivitiesPage = () => {
  return (
    <div>
        <h1>Chapter Activities</h1>
        <iframe src="https://calendar.google.com/calendar/embed?src=kearneyhighfccla%40gmail.com&ctz=America%2FChicago" style={{"border": "0"}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        <ChapterActivities/>
    </div>
  )
}

export default ChapterActivitiesPage