import React, { useRef, useImperativeHandle } from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import UseButton from './UseButton';

function Useimperative() {
    const buttonRef = useRef(null);

    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='h5'>useIperativeHandle Hook</Typography>
            </Grid>
            <Grid item>
                <Box>
                    <Button
                        variant='contained'
                        onClick={() => { buttonRef.current.alterToggle() }}
                    >
                        Parent Button</Button>
                    <UseButton ref={buttonRef} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Useimperative
