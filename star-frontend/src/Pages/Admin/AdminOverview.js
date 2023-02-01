import React from 'react'
import { useNavigate } from 'react-router-dom';
import { allComponentsInfo } from '../../data/getAllComponentsInfo';

const AdminOverview = () => {
    let navigate = useNavigate();
    const changeRoute = (path) => {
        navigate(path);
    }
    return (
        <div>
            <h2>Admin Overview</h2>
            {
                allComponentsInfo.map((component)=>{
                    return <div style={{"border": "2px solid red", "width": "50%", "margin": "auto"}} onClick={()=>changeRoute(`/admin/${component[1]}`)}>
                        <img src={component[2]} alt="" style={{"width:": "50px", "height": "50px"}}/>    
                        <h3>{component[0]}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default AdminOverview