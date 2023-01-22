import React, { useEffect, useState } from 'react'
import ProgramOfWork from '../Components/ProgramOfWork/ProgramOfWork';
import { getProgramOfWork } from '../data/getProgramOfWork';
import '../css/pages/ProgramOfWork.css'

const preprocessing = (ProgramOfWorkEvents) => {
    function custom_sort(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    
    let DataSortedByMonth = []

        for(let i = 0; i < 12; i++){
            DataSortedByMonth.push([]);
        }
        
        for(let i = 0; i < ProgramOfWorkEvents; i++){
            let MonthOfEvent = new Date(ProgramOfWorkEvents[i].date).getMonth();
            DataSortedByMonth[MonthOfEvent-1].push(ProgramOfWorkEvents[i]);
        }
        
    DataSortedByMonth.sort(custom_sort);
    console.log(DataSortedByMonth);
    return DataSortedByMonth;
}

const ProgramOfWorkPage = () => {
    const [ProgramOfWorkdata, setProgramOfWorkdata] = useState([]);

    useEffect(()=>{
        //Get and set ProgramOfWork data
        getProgramOfWork().then((data) => {
            setProgramOfWorkdata(data);
        });
    }, [])

    return (<>
        <div className='title-container'>
            <h1>Awards/Recognition</h1>
        </div>
        <ProgramOfWork data={ProgramOfWorkdata}/>
        </>
    )
}

export default ProgramOfWork