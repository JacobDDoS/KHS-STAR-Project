import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IndividualData } from '../../Components/Admin/IndividualData';
import { allDataComponentsExamples } from '../../data/allDataComponents';
import { componentNameToIndex } from '../../helpers/componentNameToIndex';
import { handleRequest } from '../../helpers/handleRequest';

export const AdminAddData = () => {
  const [data, setData] = useState({});
  const {component} = useParams();
  const index = JSON.parse(JSON.stringify(componentNameToIndex(component)))
  const exampleData = allDataComponentsExamples[index];

  let navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  }
  useEffect(()=>{
    console.log("ran")
    
    Object.entries(exampleData).forEach((entry) => {
        if (!(Date.parse(entry[1]) && entry[1].includes(":"))) {
            exampleData[entry[0]] = "";
        }
    })
    console.log(exampleData);
    setData(exampleData);
  }, [])

  return (
    <div>
        <h2>AdminAddData</h2>
        <IndividualData data={data} setData={setData} component={component}/>
        <button onClick={()=>{
            handleRequest("POST", `/api/add/${component}`, data)
            setData(exampleData);
        }}>Add {component} Data</button>
    </div>
  )
}
