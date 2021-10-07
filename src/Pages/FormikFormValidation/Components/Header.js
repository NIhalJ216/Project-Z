import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typostyle: {
        flex: 1,
        fontSize: 18,
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typostyle}>Employee Form</Typography>
                {/*<AccountBoxIcon />*/}
            </Toolbar>
        </AppBar>
    )
}

export default Header
