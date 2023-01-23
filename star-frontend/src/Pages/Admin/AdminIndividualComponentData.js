import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IndividualData } from '../../Components/Admin/IndividualData';
import { handleRequest } from '../../helpers/handleRequest';

export const AdminIndividualComponentData = () => {
  const [data, setData] = useState({});
  const {component, id} = useParams();
  let navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  }
  useEffect(()=>{
    handleRequest("GET", `/${component}`)
    .then((data)=> {
        let dataArray = data;
        if (!Array.isArray(data)) {
            dataArray = [data];
        } 

        for (let i=0;i<dataArray.length;i++) {
            if (dataArray[i].id == id) {
                setData(dataArray[i]);
            }
        }
    })
  }, [])

  console.log(component, ": ", id);
  console.log(data);
  return (
    <div>
        <h2>{component} - id #{id}</h2>
        <IndividualData setData={setData} data={data} component={component}/>
        <button onClick={()=>{
            handleRequest("PUT", `/api/update/${component}/${id}`, data)
        }}>Update</button>
        <br/>
        <button onClick={()=>{
            handleRequest("DELETE", `/api/delete/${component}/${id}`, data)
        }}>Delete</button>
    </div>
  )
}
