import React, { Component } from 'react';
import { Grid, Container, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

class Appgetdata extends Component {
  state = {
    firstName: '',
    LastName: '',
    email: '',
    phone: '',
    rollno: '',
    age: '',
    gender: '',
    address: ''
  }

  getValue = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handlesubmit = (event) => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phone = this.state.phone;
    const email = this.state.email;
    const rollno = this.state.rollno;
    const age = this.state.age;
    const gender = this.state.gender;
    const address = this.state.address;


    console.log('FirstName on Submit: ', firstName)
    console.log('lastName on Submit: ', lastName)
    console.log('phone on Submit: ', phone)
    console.log('email on Submit: ', email)
    console.log('rollno on Submit: ', rollno)
    console.log('age on Submit: ', age)
    console.log('gender on Submit: ', gender)
    console.log('address on Submit: ', address)
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant='h5'>
                      Employee Details
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type='text'
                      name='firstName'
                      label="First Name"
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type='text'
                      name='lastName'
                      label="Last Name"
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='text'
                      name='email'
                      label="Email"
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type='text'
                      name='phone'
                      label="Contact Number"
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type='text'
                      name='rollno'
                      label="Roll Number"
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type='text'
                      name='age'
                      label="Enter your age"
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined" fullWidth='true'>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={this.state.value}
                        name='gender'
                        onChange={this.getValue}
                        label="Gender"
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='address'
                      label='Address'
                      multiline={true}
                      rows={4}
                      variant="outlined"
                      fullWidth='true'
                      onChange={this.getValue}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth='true' onClick={this.handlesubmit}>
                      Submit Form
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    )
  }
}

export default Appgetdata;