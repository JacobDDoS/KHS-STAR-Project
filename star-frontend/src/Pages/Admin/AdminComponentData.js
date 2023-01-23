import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { componentNameToIndex } from '../../helpers/componentNameToIndex';
import { handleRequest } from '../../helpers/handleRequest';

export const AdminComponentData = () => {
  const [data, setData] = useState([]);
  const {component} = useParams();
  let navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  }
  useEffect(()=>{
    handleRequest("GET", `/${component}`)
    .then((data)=> {
        if (!Array.isArray(data)) {
            setData([data])
        } else {
            setData(data);
        }
    })
  }, [])

  console.log(data)
  return (
    <div>
        <h2>{component} Data</h2>
        { data.length !== 0 ?
            data.map((piece) => {
                return <div key={piece.id} className='flex' style={{"border": "2px solid red"}} onClick={()=>changeRoute(`/admin/edit/${component}/${piece.id}`)}>
                    {
                        Object.entries(piece).map((entry) => {
                            return <p>{entry[0]}: {entry[1]}</p>
                        })
                    }
                </div>
            })
            : null
        }
        <button onClick={()=>changeRoute(`/admin/add/${component}`)}>
            Add {component} Data
        </button>
    </div>
  )
}
