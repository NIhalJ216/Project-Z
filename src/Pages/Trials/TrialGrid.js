import React from 'react';
import { Grid, Typography, TextField, Accordion, AccordionSummary, AccordionDetails, Button, FormGroup } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';

function Trial() {
    const countries = [
        { label: 'Saudi Arabia', value: 'Saudi Arabia' },
        { label: 'Qatar', value: 'Qatar' },
        { label: 'Oman', value: 'Oman' },
        { label: 'Kuwait', value: 'Kuwait' },
        { label: 'Iraq', value: 'Iraq' },
        { label: 'Bahrain', value: 'Bahrain' }
    ];

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        Invoice List
                    </Typography>
                </Grid>
                {/* Filter section Start */}
                <Grid
                    container
                    spacing={3}
                    style={{ marginTop: '0px', marginLeft: '10px', marginRight: '10px', marginBottom: '10px' }}
                >
                    <Grid item xs={12}>
                        <Accordion style={{ boxShadow: 'none' }} fullWidth>
                            <AccordionSummary
                                style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
                                expandIcon={<ArrowRight />}
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                            >
                                <Typography variant="h6">Filters</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* Autocompletewidget grid container start */}
                                <Grid Container spacing={3} style={{ display: 'flex' }}>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Proj.Inv.OnAc.No" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <TextField fullWidth label="Customer" size="small" />
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <Button variant="contained" size="small">
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                                {/* Autocompletewidget grid container end */}
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                {/* Filter section Container end */}
            </Grid>
            {/* Container end */}
            <Grid container style={{ display: 'flex' }}>
                <Grid item xs={2} sm={2}>
                    <Button variant="contained" size="small">
                        Print all on page
                    </Button>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Button variant="contained" size="small">
                        Print all on page UAE
                    </Button>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Button variant="contained" size="small">
                        Issue all on page
                    </Button>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <Button variant="contained" size="small">
                        Export to Excel
                    </Button>
                </Grid>
                <Grid item xs={4} sm={6}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Trial
