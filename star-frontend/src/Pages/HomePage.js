import { useState } from 'react'
import '../css/pages/Home.css'

import FCCLAPromotionalVideo from '../media/videos/FCCLAPromotional.mp4'

const HomePage = () => {
  const [announcments, setAnnouncements] = useState(["OMG!! COOL THING WOW ON MM/DATE CLICK TO GO TO FULL DETAILS", "OMG!! COOL THING WOW ON MM/DATE CLICK TO GO TO FULL DETAILS", "OMG!! COOL THING WOW ON MM/DATE CLICK TO GO TO FULL DETAILS", "OLDER ANNOCUMENTS WOOOO! CLICK TO MORE DETAILS", "OLDER ANNOCUMENTS WOOOO! CLICK TO MORE DETAILS", "OLDER ANNOCUMENTS WOOOO! CLICK TO MORE DETAILS"])

  const [events, setEvents] = useState(["Oct 11 - FUN Thing for a fun event - 7pm", "Oct 15 - BIG MEETING THIS DAY - 4pm", "Oct 25 - Committee Meeting - 4pm", "Oct 31 - HALLOWEEN WEEE! - 6pm"])
  return (
    <div className="main-body">
      <div className="montage-container">
        <div className="montage-backdrop">
        </div>
        <h1 className='montage-text'>This is KEARNEY FCCLA</h1>
        <video id="montage" src={FCCLAPromotionalVideo} autoPlay loop muted/>
      </div>

      <div className='section'>
          <h2>Announcements</h2>
          <div className="info-container">
              {
                announcments.map((announcment) => {
                  return <div className="announcment">
                    <p>{announcment}</p>
                  </div>
                })
              }
          </div>
          {/* <div style={{"backgroundColor": "red"}}>
              <h2>All Announcements</h2>
          </div> */}
      </div>

      <div className="section">
        <h2>Up Coming Events</h2>
        <div className="info-container">
          <div className="event">
          {
            events.map((event) => {
              return <h3>{event}</h3>
            })
          }
          </div>
        </div>
      </div>

    </div>
  )
}


export default HomePage