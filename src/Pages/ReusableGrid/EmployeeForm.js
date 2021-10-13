import React from 'react'
import { Grid, Container, InputLabel, FormGroup, Typography, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles';
import TextField from '../../Components/TextField'
import Select from '../../Components/Select'
import Gender from '../../Data/Gender.json'
import { Formik, Form } from 'formik'

const useStyles = makeStyles({
    topmargin: {
        marginTop: 20,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        padding: 20
    },
    labelmt: {
        marginTop: 3,
    }
})

const INITIAL_FORM_SATE = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    rollno: '',
    gender: '',
    dob: '',
    age: '',
}

function EmployeeForm() {
    const classes = useStyles()
    return (
        <Grid container >
            <Grid item xs={12}>
                <Container maxWidth='md' className={classes.topmargin}>
                    <Formik
                        initialValues={{ ...INITIAL_FORM_SATE }}
                    >
                        <Form>
                            <Typography variant='h3' align='center' mb={1}>Employee Form</Typography>
                            <Divider />
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={6}>
                                    <FormGroup row='true'>
                                        <Grid item xs={4}>
                                            <InputLabel className={classes.labelmt}>
                                                <Typography variant='h6'>Firstname:</Typography>
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                name='firstName'
                                            />
                                        </Grid>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormGroup row='true'>
                                        <Grid item xs={4}>
                                            <InputLabel className={classes.labelmt}>
                                                <Typography variant='h6'>Lastname:</Typography>
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                name='lastName'
                                            />
                                        </Grid>
                                    </FormGroup>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormGroup row='true'>
                                        <Grid item xs={4}>
                                            <InputLabel className={classes.labelmt}>
                                                <Typography variant='h6'>Contact:</Typography>
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                name='contact'
                                            />
                                        </Grid>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormGroup row='true'>
                                        <Grid item xs={4}>
                                            <InputLabel className={classes.labelmt}>
                                                <Typography variant='h6'>Email:</Typography>
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                name='email'
                                            />
                                        </Grid>
                                    </FormGroup>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormGroup row='true'>
                                        <Grid item xs={4}>
                                            <InputLabel className={classes.labelmt}>
                                                <Typography variant='h6'>Roll Number:</Typography>
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                name='rollno'
                                            />
                                        </Grid>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormGroup row='true'>
                                        <Grid item xs={4}>
                                            <InputLabel className={classes.labelmt}>
                                                <Typography variant='h6'>Gender:</Typography>
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select
                                                name='gender'
                                                options={Gender}
                                            />
                                        </Grid>
                                    </FormGroup>
                                </Grid>

                            </Grid>
                        </Form>
                    </Formik>
                </Container>
            </Grid>
        </Grid>
    )
}

export default EmployeeForm
