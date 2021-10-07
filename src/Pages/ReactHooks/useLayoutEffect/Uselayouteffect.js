import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';


function Uselayouteffect() {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        console.log(textRef.current.value);
    }, []);

    useEffect(() => {
        textRef.current.value = "Hello"
    }, []);

    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='h5'>useLayoutEffect</Typography>
            </Grid>
            <Grid item>
                <TextField variant='outlined' inputRef={textRef} value="Hey" />
            </Grid>
        </Grid>
    )
}

export default Uselayouteffect
