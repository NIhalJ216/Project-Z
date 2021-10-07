import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Grid, Typography, Button } from '@material-ui/core';

function Usememo() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data)
            })
    }, [])

    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = ""
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name
            if (currentName.length > longestName.length) {
                longestName = currentName
            }
        }
        console.log('This was Computed')

        return longestName;
    }
    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <Grid container direction='column' alignItems='flex-start'>
            <Grid item>
                <Typography variant='h5'>useMemo Hook</Typography>
            </Grid>
            <Grid item xs={12}>
                {getLongestName}
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant='contained'
                    onClick={() => { setToggle(!toggle) }}
                >
                    {" "}
                    Toggle
                </Button>
                {toggle && <h1>Toggle</h1>}
            </Grid>
        </Grid>
    )
}

export default Usememo
