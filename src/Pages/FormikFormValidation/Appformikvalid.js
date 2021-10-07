import Header from './Components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from './Components/FormsUI/TextField';
import Select from './Components/FormsUI/Select';
import DateTimePicker from './Components/FormsUI/DateTimePicker';
import Checkbox from './Components/FormsUI/Checkbox';
import Button from './Components/FormsUI/Button';
import Countries from './Data/Countries.json';

// const useStyles = makeStyles((theme) => ({
//   formWraper: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(8),
//   },
// }))
// className={classes.formWraper

/* For Formik tag*/
const INITIAL_FORM_SATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  rollno: '',
  gender: '',
  age: '',
  dob: '',
  address: '',
  termsOfService: false
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required field'),
  lastName: Yup.string()
    .required('Required field'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Required Field'),
  phone: Yup.number()
    .integer()
    .typeError('Please Enter valid phone number')
    .required('Required'),
  rollno: Yup.number()
    .integer()
    .typeError('Please Enter valid Rollno')
    .required('Required'),
  gender: Yup.string()
    .required('Required field'),
  age: Yup.number()
    .integer()
    .typeError('Please Enter valid Age')
    .required('Required'),
  dob: Yup.date()
    .required('Required'),
  address: Yup.string()
    .required('Required field'),
  termsOfService: Yup.boolean()
    .oneOf([true], 'Terms and conditions must be accepted.')
    .required('Required Field')
})

function App() {
  // const classes = useStyles();
  return (
    <Grid Container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div>
            <Formik
              initialValues={{ ...INITIAL_FORM_SATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant='h4' align='center'>

                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name='firstName'
                      label='First Name'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name='lastName'
                      label='Last Name'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name='email'
                      label='Email'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name='phone'
                      label='Contact Number'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name='rollno'
                      label='Roll Number'
                    />
                  </Grid><Grid item xs={6}>
                    <Select
                      name='gender'
                      label='Gender'
                      options={Countries}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name='age'
                      label='Enter your Age'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name='dob'
                      label='Date of Birth'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name='address'
                      label='Address'
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      name='termsOfService'
                      legend='terms of Service'
                      label='I agree'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>

                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;