import React, { Component } from 'react'
import { Grid, TextField, Container } from '@material-ui/core'

class Regexform extends Component {
    state = {
        phone: '',
        email: '',
        isValidPhone: false,
        isValidEmail: false
    }
    handlePhone = (e) => {
        const regp = /^(?:([\+]\d{1,2})[ -])?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/g;
        if (e.target.value.match(regp)) {
            this.setState({
                [e.target.name]: e.target.value,
                isValidPhone: true
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value,
                isValidPhone: false
            })
        }
    }
    handleEmail = (e) => {
        const rege = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g;
        if (e.target.value.match(rege)) {
            this.setState({
                [e.target.name]: e.target.value,
                isValidEmail: true
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value,
                isValidEmail: false
            })
        }
    }

    render() {
        return (
            <Grid container xs={12} spacing={4} style={{ marginTop: "20px" }}>
                <Container maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                name='phone'
                                variant='outlined'
                                fullWidth
                                id='phone'
                                autoComplete='off'
                                value={this.state.phone}
                                label='Phone Number'
                                inputProps={{ maxLength: 255 }}
                                onChange={this.handlePhone}
                                required
                                error={!this.state.isValidPhone}
                                helperText={!this.state.isValidPhone ? "Enter Valid Number" : "Valid Number"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='email'
                                variant='outlined'
                                fullWidth
                                id='email'
                                autoComplete='off'
                                value={this.state.email}
                                label='Email-Id'
                                inputProps={{ maxLength: 255 }}
                                onChange={this.handleEmail}
                                required
                                error={!this.state.isValidEmail}
                                helperText={!this.state.isValidEmail ? "Enter Valid Email" : "Valid Email"}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default Regexform
