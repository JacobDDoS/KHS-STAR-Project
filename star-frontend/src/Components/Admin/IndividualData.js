import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';

export const IndividualData = ({data, setData, component}) => {
    const copyOfData = JSON.parse(JSON.stringify(data));
    console.log(data, " ", component);

    const handleChange = (e) => {
        copyOfData[e.target.id] = e.target.value;
        setData(copyOfData);
    }

    return (
    <div>
        {
            Object.entries(copyOfData).map((entry)=>{
                if (entry[0] === "id") return;
                return <div>
                    <label>{entry[0]}</label>
                    {Date.parse(entry[1]) && entry[1].includes(':') ? 
                    <>
                    <br/>
                    <br/>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="DateTimePicker"
                        value={entry[1]}
                        onChange={(newValue) => {
                            copyOfData[entry[0]] = newValue.toDate();
                            setData(copyOfData);
                        }}
                        />
                    </LocalizationProvider>
                    <br/>
                    <br/>
                    
                    </>
                    :
                    <textarea name={entry[0]} id={entry[0]} cols="30" rows="10" value={entry[1]} onChange={handleChange}></textarea>
                    }
                    <br/>
                </div>
            })
        }
    </div>
  )
}
