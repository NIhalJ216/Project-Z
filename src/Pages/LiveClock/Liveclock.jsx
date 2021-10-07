import React, { useState } from 'react'
import { Typography } from '@material-ui/core';

function Liveclock() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000);
    //<button className="lbutton" onClick={UpdateTime}>get time</button>
    return (
        <div>
            <Typography variant='h1' align='center'>{ctime}</Typography>
        </div>
    )
}

export default Liveclock
