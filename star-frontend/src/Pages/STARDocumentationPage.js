import React, { useEffect, useState } from 'react'
import { getSources } from '../data/getSources'

const STARDocumentationPage = () => {
  const [SourcesData, setSourcesData]=useState([])

  useEffect(()=>{
    getSources().then((data) => {
      setSourcesData(data)
    })
  },[])

  console.log(SourcesData)
  return (
    <div>
        <h1>STAR Events Documentation.</h1>
        <div>
            <h3>Project Identification Page: </h3>
            <p><b>Participants: </b>Jacob Dimmitt, Alejandro Ciprian, Adan Ciprian</p>
            <p><b>Chapter Name: </b>Kearney High School FCCLA</p>
            <p><b>School: </b>Kearney High School</p>
            <p><b>City and State: </b>Kearney, Nebraska</p>
            <p><b>Project Title: </b>Kearney FCCLA Chapter Website</p>
            <h3><a href='https://drive.google.com/file/d/1DUAL3it6MU0ZIqeJp41NNSrABOC4n6PY/view'>Link to FCCLA Planning Process Summary Page</a></h3>
            <h3>Photo of Evidence of Online Project Summary Submission: </h3>
            <img style={{"width": "50%"}} src="https://cdn.discordapp.com/attachments/1035338679771734130/1069770520154865734/CamScanner_01-30-2023_18.04_1.jpg" alt="" />
            <h3>References</h3>
            {
            SourcesData.map((source, idx) => {
              console.log(source)

              let result = source.source.indexOf("http");
              let link = source.source.substring(result);
              let name = source.source.substring(0,result);

                return <p key={idx}>{name}<a href={link} >{link}</a></p>
              })
            }
        </div>
    </div>
  )
}

export default STARDocumentationPage