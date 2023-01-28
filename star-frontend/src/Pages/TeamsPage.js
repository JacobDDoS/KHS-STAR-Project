import React, {useEffect, useState} from 'react'
import Teams from '../Components/Teams/Teams'
import '../css/pages/Teams.css'
import { getTeams } from '../data/getTeams'

const TeamsPage = () => {
    const[TeamsData, setTeamsData] = useState([])

    useEffect(() =>{
      getTeams().then((data) => {
        setTeamsData(data)
      })
    },[])
  return (<>
        <div className='center-div'>
            <h1 className='main-title'>Teams</h1>
        </div>
        <Teams data={TeamsData}/>
        </>
  )
}

export default TeamsPage 