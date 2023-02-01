import React, { useState } from 'react'
import { useEffect } from 'react';
import '../css/Components/navbar.css';
import MyImage from '../media/photos/FCCLA_logo.png'
const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const [links, setLinks] = useState([
    //hrefLink, logo, name
    ["/", "https://lh3.googleusercontent.com/pw/AMWts8CFAge4DLgmfp4u3gF48SAgCUPpA15f5ylpeopzQ9415XgXlD5c2fKPl7Kueia5k5HUS7BFa7pJ-YkMOb8cick6b-8Nfc8Ok2cvNp4HHVwNOeV4DOfA4v0iGbFWIWyMv2tVSwH5bDNJwOK1Vi6jli5Y=w582-h600-no?authuser=0", "Home"],
    ["/FCCLA-info","https://lh3.googleusercontent.com/pw/AMWts8ArwVB3sDicFdDU0-N5fsAyvPFTQZ5q7tPj64IAA0js8bEr4uTsfquF1esKD4ER4dv7WafX73udsIGfs5sPHCZAWjDnLhlFpnhOHptnLqkMeYc3Lyum-aKBbouJ4NMysnzeltXlCR0oDw_dVMM0teaM=s225-no?authuser=0","FCCLA Information"],
    ["/FCCLA-leadership","https://lh3.googleusercontent.com/pw/AMWts8Cg2CHQSnYkO-NL15lJ1ovCGbgz_r5bCaxeKrQYckdrS8UxuhAG75UGIsLmeIwNZRF5zu807IwaS0m-TtNoRKia678d_QUWMYj9GTzp7FHQ4nhLn1_5haBA3DwL75AsYFN_2Ff110yuL_GNbtG6xr53=s975-no?authuser=0","Chapter Leaders"],
    ["/FCCLA-membership","https://lh3.googleusercontent.com/pw/AMWts8B1yVpIOFpD3PdrTtCFQaD7AGMYt8uBpPbIdakyEFDX8FqcX9rtWLqI-UIGzx4fpgU6rtH-UVUid3tQqkXwNz1KZxqcaOAPAXFj-G6owsMZtkCSEy9ISQsqsz0mRpIj_ajagYaX3wKCRDQMy5fqD3K5=s300-no?authuser=0","Membership Information"],
    ["/awards","https://lh3.googleusercontent.com/pw/AMWts8AtuPVKBpN_ktKqpbA-jyApOQWI0g5JjTOaLZSJckU6v97nZdETO5ysqIeOemtHXygJla00f3RbA7XwbC-QrOGAsg8e8xdM-QxDregqKf864480hBnHz43ph6d0nmSnV3qPdKr40jVKu_lLs9hALD0Y=s975-no?authuser=0","Awards"],
    ["/FCCLA-recruitment","https://lh3.googleusercontent.com/pw/AMWts8BiTjZmJ2RFS07ifHmAK4wwjsULFtXnBhXgHopkp2KS_IYEHM-67YAVYMBtKxAnwtFkPG6xrjtIkmKaNwydkbVyV5ykYHgQUXuZXFdJ_pdNXOysSCA06SP_1Mgetyon7eKjxhFONPDkHXwiqnmMX6OO=s975-no?authuser=0","Recruitment Information"],
    ["/FCCLA-committee","https://lh3.googleusercontent.com/pw/AMWts8Anmgd0J65qNtKjS7cJTCDBj6fVKOaHrmNziG8jcqJ8GYtnJ-tPRVDMH66s2ou2X7bcs3ITua_vjMkMYt87Zi_INiC2Dgvw4i-zEYYuzFD00of5E7PJCb6AjebfrV0u79UYPQ3i6W4SwW2-vujh8goq=w225-h224-no?authuser=0","Committees"],
    ["/FCCLA-programOfWork","https://lh3.googleusercontent.com/pw/AMWts8AE0BUkfmUlW2FXQ0TfF_xgXToHVoyhmanIDdMJEmiQ2zgb5m3UnbDNNuVE8VdQQjoH1ARuBr07Fjdwiw2vSzuco_iEdePj_A2vY0q8coHHkUuuo63N71p36kOdG9TVz8kxZMbSyPYzc9TozQiNFmNN=s820-no?authuser=0","Program of Work"],
    ["/FCCLA-milestones","https://lh3.googleusercontent.com/pw/AMWts8BRZPOKMJFpproW6iUzyMnm_fxiGybhmy7ogTyz1kE_muu8j4Gt3CaFgHlFHp6H_3z4xrGldSF4waZFoYS8INWvbJ591Bzs_yEnjVIxTh1z9ZtxfsTqNwkTXHV3ePRZdf_5Dfv-KHVRF8rOL-WXlaBw=w973-h975-no?authuser=0","Milestones"],
    ["/FCCLA-teams","https://lh3.googleusercontent.com/pw/AMWts8AFyctSewkS0m_M4GWs_t2KIPCPhwlAOfA44yVvruWNeujCA4rmIa-qS6AJM0nXd3mNLfxEb1RUSJjwjvhrL7JM_1156DTDgh8ls0P1ftXjsqlqE9uxI6ZH92cIenrZd5JiSlamMwqz2E8rxNaVhppk=s975-no?authuser=0","Teams"],
    ["/FCCLA-sponsors","https://lh3.googleusercontent.com/pw/AMWts8Aaji3Jk8FJvDp5OmsWnnt4JOD9eiibjj248YDmfX1-EJjBbEytOL-JU7tYINHtuAslu02zfjxRLec9cKpfVzr0E8o20Ad2yx0VzOkx4jW-WDOVdDBuWOKYbES8mryuyF7tEpvRFZPrLWppJhzhJbvs=s800-no?authuser=0","Chapter Sponsers"],
    ["/FCCLA-chapterActivities","https://lh3.googleusercontent.com/pw/AMWts8Bd-4682YDvJJZX6DV3tSJOiGijYn27Ac0rg92OigQWLpTUGrNQ1K5tA7rBqOE9hHvkwK3sNvSf3ASBI15ojMcjMRvn5CuDH6WhlvC5kRaTOjVW9OzE881xKmIlcq186y6ykhqDNN5MAIkzxmhx63Py=w255-h300-no?authuser=0","Chapter Activities"],
    ["/FCCLA-STARDocumentation","https://lh3.googleusercontent.com/pw/AMWts8C6V2uiLMD3AqlLiLVzuxWozpPKOlLeYBym9E6FuMy4PwIM7a6eItFQ731jmFC2Z3tkqMIUR4Qmw4xVRMe7Av-AnmCw9pDRGR4cK_kYH7UDoQbmQiqHaxypwVOri_IF2_EdlyQ0eq83hgQrJQt5fiMj=s225-no?authuser=0","Star Documentation"],
    ["/design","https://lh3.googleusercontent.com/pw/AMWts8CkER4Whi0LNAAeQ41go8I3qPXk7ckyymp77MCc4Zh-J-fZ3Zc4yB2rrPwPeWfd8LsIrrA1vneqY-gxjrjJUbgAMgbxCIq-PaYGqAaSz6_sp6U4lxBXX0bRSO2vKOXOW-6xXQkFpmf6WLtAZ98Qz17I=s225-no?authuser=0","Website Design"],
    ["/login","https://lh3.googleusercontent.com/pw/AMWts8DamLYgqQq4o5LceOFl1KrrDZCwAzAG60sig9llLoF6lBTw-WsxIP87W6oGdfd3gisn0wiTlNIzB0IPYQxhIONJw1jIKvEYLJnvinz4oE-jwhj4f3yToKHV1BYePTryBK1KeK0C3Df54NCeouOhizh3=s225-no?authuser=0","Admin Login"],
    ["/admin","https://lh3.googleusercontent.com/pw/AMWts8AF5YExc0ZWbB1Aytd5ZTnHOYQwH0df1grvhb0Ijc71f6HHaCBD-OwpA9vldZCurCDaWHyAS1I5fVs5t_KO0rpY-5tVcozGVnttiYHKhIzjbVrUOho9VPPuBbR24bL5wGbwgcKu0wdsFAG9TGcbaHEY=s225-no?authuser=0","Admin Page"],
  ])
  
  useEffect(()=>{
    if (window.innerWidth >= 1700) {
        setIsMenueOpen(true);
      }
  }, [])

  return (
    <div>
        <div className='navbar'>
            <div style={{"width": "1em"}}>
                <img className='logo' src={MyImage} alt ="logo"/> 
            </div>
            <h2>Kearney High</h2>
            <div className={`pageDisplay ${isMenueOpen ? "pageDisplayOpen" : ""}`}>
                <div className='sidebar-top'>
                    <i style={{"margin": "80px 0px 0px 0px"}} className='navbar-icon fa-solid fa-bars fa-xmark' onClick={() => setIsMenueOpen(!isMenueOpen)} />
                </div>
                <div className='link-div'>
                    {
                        links.map((link) => {
                            return <a href={link[0]} className="link">
                                <img src={link[1]} alt={`Logo of ${link[2]}`} />
                                <p>{link[2]}</p>
                            </a>
                        })
                    }
                </div>
            </div>
        </div>
        {!isMenueOpen ? <i className='fa-solid fa-bars navbar-icon' onClick={() => setIsMenueOpen(!isMenueOpen)} /> : null}
        {/* <i className={`fa-solid fa-bars ${isMenueOpen ? "fa-xmark" : ""}`} onClick={() => setIsMenueOpen(!isMenueOpen)}></i> */}
        {/* <i className='fa-solid fa-bars' onClick={() => setIsMenueOpen(!isMenueOpen)}></i>    */}
    </div>
    )
}

export default Navbar 