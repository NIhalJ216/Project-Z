import React, { useState, useCallback } from 'react'
import axios from 'axios'
import Child from './Child';
import { Grid, Typography, Button } from '@material-ui/core';

function Usecallback() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState('Textarea...!!')

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);
    return (
        <Grid container direction='column' alignItems='center'>
            <Grid item>
                <Typography variant='h5'>useCallback Hook</Typography>
            </Grid>
            <Grid item>
                <Child returnComment={returnComment} />
                <Button
                    variant='contained'
                    onClick={() => { setToggle(!toggle) }}
                >
                    {" "}
                    Toggle
                </Button>
                {toggle && <h1>Toggle</h1>}
            </Grid>
        </Grid>
    )
}

export default Usecallback
