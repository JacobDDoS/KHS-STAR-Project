import React, { useState } from 'react'

import '../css/pages/Calender.css'

const CalenderPage = () => {
  const [data, setData] = useState([
    ["CONCESSIONS - October 23rd - 5pm", "FCCLA will be running concessions. This would be an excellent opportunity for anyone available to earn some money for one's FCCLA expenses!"], 
    [
      "Youth Health Equity Committee - Clean up - October  26th 3:45pm", "Youth Health Equity Committee through FCCLA will be hosting a cigarette and e-cigarette cleanup. We will meet after school at the forum and then travel to Centennial Park. This will count for community service hours."
    ], [
      "MEETING CANCELED FOR OCTOBER 31", "There won't be a meeting due to ongoing snowstorms. It will be postponed to a later date which we will decide soon."
    ]
  ])
  return (
    <div>
        <h1>Calender</h1>
        <iframe src="https://calendar.google.com/calendar/embed?src=kearneyhighfccla%40gmail.com&ctz=America%2FChicago" style={{"border": "0"}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        
      <div className="section">
        <h2>Upcoming Events + Descriptions</h2>
        <div className="info-container">
          {
            data.map((event) => {
              return <div className="chapter-activity">
                <h3>{event[0]}</h3>
                <p>{event[1]}</p>
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}
export default CalenderPage;