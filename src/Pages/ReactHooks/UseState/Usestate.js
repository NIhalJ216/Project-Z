import React, { useState } from 'react'
import { Grid, Button, Typography, TextField } from '@material-ui/core';
import Message from './Message';
import EmpData from './EmpData';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    topmargin: {
        marginTop: 10,
    }
})

function Usestate() {
    const classes = useStyle();
    const [name, setName] = useState({ firstName: '', lastName: '' })
    const [counter, setCounter] = useState(0)
    const initialcount = 0
    const [count, setCount] = useState(initialcount)
    const incbyfive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Grid item>
                    <Typography variant='h5'>Counter example</Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => setCounter(count + 1)}
                    >
                        <Typography variant='button'>Count {counter}</Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid item className={classes.topmargin}>
                <Grid item>
                    <Typography variant='h5'>Text Change example</Typography>
                </Grid>
                <Grid item>
                    <Message />
                </Grid>
            </Grid>

            <Grid item className={classes.topmargin}>
                <Grid item>
                    <Typography variant='h5'>Counter example</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>Count: {count}</Typography>
                    <Button variant='outlined' color='primary' onClick={() => setCount(initialcount)}>Reset</Button>
                    <Button variant='outlined' color='primary' onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
                    <Button variant='outlined' color='primary' onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
                    <Button variant='outlined' color='primary' onClick={incbyfive}>+5</Button>
                </Grid>
            </Grid>

            <Grid item className={classes.topmargin}>
                <Grid item>
                    <Typography variant='h5'>Text example</Typography>
                </Grid>
                <Grid item>
                    <form>
                        <TextField
                            variant='outlined'
                            size='small'
                            type="text"
                            value={name.firstName}
                            onChange={e => setName({ ...name, firstName: e.target.value })}
                        />
                        <TextField
                            variant='outlined'
                            size='small'
                            type="text"
                            value={name.lastName}
                            onChange={e => setName({ ...name, lastName: e.target.value })}
                        />
                        <h2>Your Name: {name.firstName}</h2>
                        <h2>Your Surname: {name.lastName}</h2>
                    </form>
                </Grid>
            </Grid>

            <Grid item className={classes.topmargin}>
                <Grid item>
                    <Typography variant='h5'>Employee data example</Typography>
                </Grid>
                <Grid item>
                    <EmpData />
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Usestate
