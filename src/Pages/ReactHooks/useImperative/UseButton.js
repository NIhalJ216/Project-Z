import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Grid, Button } from '@material-ui/core'

const UseButton = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));

    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Button
                variant='contained'
                color='primary'
            >
                Button From child</Button>
            {toggle && <span><h1>Toggle</h1></span>}
        </Grid>
    )
})

export default UseButton
