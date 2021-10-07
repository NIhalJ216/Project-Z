import React from 'react'
import { Grid, Container, InputLabel } from '@mui/material'
import TextField from '../../Components/TextField'
import { Formik, Form } from 'formik'

const INITIAL_FORM_SATE = {
    firstName: '',
    lastName: ''
}

function EmployeeForm() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth='md'>
                    <Formik
                        initialValues={{ ...INITIAL_FORM_SATE }}
                    >
                        <Form>
                            <Grid container spacing={4}>
                                <Grid item xs={6}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={3}>
                                            <InputLabel>
                                                Name
                                            </InputLabel>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                name='firstName'
                                                label='First Name'
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name='lastName'
                                        label='Last Name'
                                    />
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
