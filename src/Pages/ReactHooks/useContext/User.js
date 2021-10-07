import React, { useContext } from 'react'
import { AppContext } from './Usecontext'
import { Grid, Typography } from '@material-ui/core'

function User() {
    const { username } = useContext(AppContext)
    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='body1'>User:{username}</Typography>
            </Grid>
        </Grid>
    )
}

export default User
