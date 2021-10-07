import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';


function Useeffect() {
    const [data, setData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            });
    }, [])

    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='h5'>useEffect Hook</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h5'>{data}</Typography>
            </Grid>

        </Grid>
    )
}

export default Useeffect
