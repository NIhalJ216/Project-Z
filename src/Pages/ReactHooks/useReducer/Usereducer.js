import React, { useReducer } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
}

function Usereducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='h5'>useReducer</Typography>
            </Grid>
            <Grid item>
                <Typography>{state.count}</Typography>
                <Button variant='outlined' color='primary'
                    onClick={() => {
                        dispatch({ type: 'INCREMENT' });
                        dispatch({ type: 'toggleShowText' })
                    }}
                >Click here</Button>
                {state.showText && <Typography variant='body2'>TEXT</Typography>}
            </Grid>
        </Grid>
    )
}

export default Usereducer
