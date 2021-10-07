import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'

function Child({ returnComment }) {
    useEffect(() => {
        console.log('Function called')
    }, [returnComment]);
    return (
        <Grid container direction='column' alignItems='center'>
            <Grid items>
                <Typography variant='h4'>{returnComment('here')}</Typography>
            </Grid>
        </Grid>
    )
}

export default Child
