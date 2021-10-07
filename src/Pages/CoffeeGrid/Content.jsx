import React from 'react';
import Prodcard from './Prodcard';
import { Grid } from '@material-ui/core';
import coffeeList from './Constants';


function Content() {

    const getcoffeemakercard = (coffeemakerobj) => {
        return (
            <Grid item xs={12} sm={4}>
                <Prodcard {...coffeemakerobj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            {coffeeList.map(coffeemakerobj => getcoffeemakercard(coffeemakerobj))}
        </Grid>
    )
}

export default Content
