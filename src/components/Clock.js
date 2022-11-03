import React, { useState } from "react";


const Clock = (props)=>{

    const [date, setDate] = useState(new Date());

    setInterval(()=>{
        setDate(new Date());
    }, 1000);

    return (
        <h3>The time is: {date.toLocaleTimeString()}</h3>
    )
}


export default Clock;