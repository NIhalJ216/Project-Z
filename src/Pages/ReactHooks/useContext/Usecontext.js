import React, { useState, createContext } from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

function Usecontext() {
    const [username, setUsername] = useState('');
    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='h5'>useContext Hook</Typography>
            </Grid>
            <Grid item>
                <AppContext.Provider value={{ username, setUsername }}>
                    <Login />
                    <User />
                </AppContext.Provider>
            </Grid>
        </Grid>
    )
}

export default Usecontext
