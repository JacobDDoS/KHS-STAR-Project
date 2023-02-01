import React, {useEffect, useState} from 'react'
import { Dropdown } from '../Components/Home/Dropdown'
import ProgramOfWork from '../Components/ProgramOfWork/ProgramOfWork'
import '../css/pages/Home.css'
import { getProgramOfWork } from '../data/getProgramOfWork'
import { getHomeImages } from '../data/Home/getHomeImages'
import ProgramOfWorkPage from './ProgramOfWorkPage'
import Membership from '../Components/Membership/Membership.js'
import { getMembershipInfo } from '../data/getMembershipInfo'

const HomePage = () => {
  const [homeImageData, setHomeImageData] = useState([])
  const [indexOfImage, setIndexOfImage] = useState(0);
  const [programOfWorkData, setProgramOfWorkData] = useState([]);
  const [membershipData, setMembershipData] = useState([]);
  const [showLeftSideBar, setShowLeftSideBar] = useState(false);
  const [dropdownInfo, setDropDownInfo] = useState([
    //Subtitle, content
    ["Motto", "Toward New Horizons"],
    ["Tagline", "The Ultimate Leadership Experience"],
    ["Purposes", "1. To provide opportunities for personal development and preparation for adult life.\n2. To strengthen the function of the family as a basic unit of society.\n3. To encourage democracy through cooperative action in the home and community.\n4. To encourage individual and group involvement in helping achieve global cooperation and harmony.\n5. To promote greater understanding between youth and adults.\n6. To provide opportunities for making decisions and for assuming responsibilities.\n7. To prepare for the multiple roles of men and women in today's society.\n8. To promote Family and Consumer Sciences and related occupations."],
    ["Creed", "We are the Family, Career and Community Leaders of America. We face the future with warm courage and high hope. For we have the clear consciousness of seeking old and precious values. For we are the builders of homes, homes for America's future, homes where living will be the expression of everything that is good and fair, homes where truth and love and security and faith will be realities, not dreams. We are the Family, Career and Community Leaders of America. We face the future with warm courage and high hope."], 
  ])

  useEffect(() =>{
    getHomeImages().then((ImageData) => {
      setHomeImageData(ImageData)
    })
    getProgramOfWork().then((data)=> {
      setProgramOfWorkData(data);
    })
    getMembershipInfo().then((data) => {
      setMembershipData(data)
    })
    window.addEventListener("resize", handleResize, false);
    setInterval(() => {
      setIndexOfImage((oldIndex)=> {
        return oldIndex+1;
      })
    }, 2000);
  }, [])


  const handleResize = () => {
    if (window.innerWidth >= 1700) {
      setShowLeftSideBar(true);
    } else {
      setShowLeftSideBar(false);
    }
  }

  return (<div>
        {/* Only show if width at least 1700  */}
        { window.innerWidth >= 1700 ? 
        <div className='left-sidebar'>
          <ProgramOfWorkPage/>
        </div>
        : null}      
        <div className='center-div'>
          <div className='home-title-div'>
            <h1 className='home-main-title'>Kearney High FCCLA</h1>
          </div>

            <div>
              <div className='center-div'>

                {/* Image Cycle */}
                {homeImageData.length !== 0 ? <img className='display-img' src={homeImageData[indexOfImage%homeImageData.length].urltoPicture}/> : null }

                <div>
                  <div className='fccla-question-subtitle'>
                      <h3 id='abt-k-fccla'>Who is FCCLA?</h3>
                  </div>
                  <div className='fccla-answer'>
                    <p>Family, Career and Community Leaders of America (FCCLA) is a national Career and Technical Student Organization (CTSO) for students in Family and Consumer Sciences (FCS) education. There are nearly 200,000 student members in 46 states and the District of Columbia, the American Virgin Islands, and Puerto Rico! Through FCCLA members receive leadership opportunities along with the chance to travel through competitive events. </p>
                  </div>
                </div>

                <div>
                  <div className='fccla-question-subtitle'>
                      <h3 id='abt-k-fccla'>Why is FCCLA?</h3>
                  </div>
                  <div className='fccla-answer'>
                    <p>To promote personal growth and leadership development through Family and Consumer Sciences education. Focusing on the multiple roles of family member, wage earner, and community leader, members develop skills for life through character development, creative and critical thinking, interpersonal communication, practical knowledge, and career preparation.</p>
                  </div>
                </div>

                {/* What is FCCLA?  */}
                <div>
                  <div className='fccla-question-subtitle'>
                      <h3 id='abt-k-fccla'>What is FCCLA?</h3>
                  </div>
                  <div className='fccla-answer'>
                    {
                      dropdownInfo.map((dropdown) => {
                        return <Dropdown subtitle={dropdown[0]} content={dropdown[1]}/>
                      })
                    }
                  </div>
                </div>

                {/* Why Join FCCLA  */}
                <div>
                  <div className='fccla-question-subtitle'>
                      <h3 id='abt-k-fccla'>Why Join FCCLA?</h3>
                  </div>
                  <div className='fccla-answer'>
                    <Membership data={membershipData} />
                  </div>
                </div>

                {/* Contact Us  */}
                <div>
                  <div className='fccla-question-subtitle'>
                      <h3 id='abt-k-fccla'>Contact Us!</h3>
                  </div>
                  <div className='fccla-answer'>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                      <form action="mailto:kearneyhighfccla@gmail.com" method="post" encType="text/plain">
                      <h3>Enter your message below or email us at kearneyhighfccla@gmail.com</h3>
                      <br/><textarea name="" id="" cols="60" rows="10"></textarea><br/>
                      <input type="submit" value="Send Message"/>
                    </form>
                  </div>
                </div>
              

              </div>
            </div>
        </div>
  </div>
  )
}


export default HomePage