import React, { useRef } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';


function Useref() {
    const textRef = useRef(null);
    const clrRef = useRef(null);
    const change = () => {
        // console.log(textRef.current.value);
        textRef.current.focus();
    };
    const clear = () => {
        clrRef.current.value = "";
    };

    return (
        <Grid container direction='column' alignItems="flex-start">
            <Grid item>
                <Typography variant='h5'>useRef Hook</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h5'>AutoFocus on Click</Typography>
                <TextField size='small' variant='outlined' placeholder='Enter here' inputRef={textRef} />
                <Button variant='contained' color='primary' onClick={change}>Click</Button>
            </Grid>
            <Grid item>
                <Typography variant='h5'>Clear Input</Typography>
                <TextField size='small' variant='outlined' placeholder='Enter here' inputRef={clrRef} />
                <Button variant='contained' color='primary' onClick={clear}>Clear</Button>
            </Grid>

        </Grid>
    )
}

export default Useref
