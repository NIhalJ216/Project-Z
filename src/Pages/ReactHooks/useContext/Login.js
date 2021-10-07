import React, { useContext } from 'react'
import { AppContext } from './Usecontext'
import { Grid, Typography, TextField } from '@material-ui/core'

function Login() {
    const { setUsername } = useContext(AppContext)
    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <TextField
                    size='small'
                    variant='outlined'
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                ></TextField>
            </Grid>
        </Grid>
    )
}

export default Login
