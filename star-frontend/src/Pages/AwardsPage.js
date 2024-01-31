import React, { useEffect, useState } from 'react'
import '../css/pages/Awards.css'

import Award1 from '../media/photos/Award1.png'
import Award2 from '../media/photos/Award2.png'

const AwardsPage = () => {
    const [awards, setAwards] = useState([
        ["Sports Nutrition Level 3", "Elizabeth & Dylan", "District: Gold\nState: Gold\nNational: Gold (2nd)", "Elizabeth Stewart and Dylan Wall spent their time preparing a meal plan for a Kearney High Swimmer. They tracked this person's performance and well being to determine the effects of their meal plan.", Award1], 
        ["Chapter in Review Level 3", "Andy & Alivia", "District: Gold\nState: Gold\nNational: Gold (6th)", "Andy Nguyen and Alivia Olson tracked down every photo and detail of the Kearney High Chapter in order to get a full picture of what this chapter has accomplished.", Award2]
    ])

    return <div className="main-body">
        <h1 style={{"margin": "auto", "fontSize": "var(--fs-900)"}}>Star Awards</h1>
        {
            awards.map((award) => {
                return <div className="award-container">
                    <h2>{award[0]}</h2>
                    <div className="award-info-container">
                        <div className="award-info">
                            <h2>{award[2]}</h2>
                            <h4>{award[3]}</h4>
                        </div>
                        <div className="award-names-and-img">
                            <h2>{award[1]}</h2>
                            <img src={award[4]} alt={award[1] + " posing with their awards"} />
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}

export default AwardsPage