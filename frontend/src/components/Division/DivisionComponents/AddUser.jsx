import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DivisionHeader from '../../MyComponents/DivisionHeader';
import DivisionInputs from './DivisionInputs';
import SingleInput from './SingleInput'
import SingleBtn from './SingleBtn';
import MyField from '../../MyComponents/MyField';
import { TextField } from '@mui/material';

function AddUser() {
  const [passwordType,setPasswordType] = useState('password')
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2,'Name must be at least 2 characters long. ').required('Please enter name.'),
    email: Yup.string().email('Please enter valid email.').required('Please enter email.'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[!@#$%^&*()\-_=+{};:,<.>]/, 'Password must contain at least one special character.')
    .matches(/\d/, 'Password must contain at least one number.')
    .required('Please enter password.'),
    client: Yup.string().required('Please enter client.')
  });
  const handleKeyPress = (e) => {
    if (e.target.value.length >= 60) {
      e.preventDefault();
    }
    if(e.target.value === ''){
      if (e.key === ' ') {
        e.preventDefault();
      }
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='mx-10'>
      <DivisionHeader text={'Add Users'} />

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          client: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <DivisionInputs title1={'Name'} name1='name' title2={'Email'} name2='email' handleKeyPress1={handleKeyPress} handleKeyPress2={handleKeyPress}/>
            

            <div className='flex justify-between mt-7'>
              <div className='w-[49%]'>
              <label htmlFor='password'>Password</label>
            <Field
                as={TextField}
                name='password'
                variant="outlined"
                fullWidth
               
                type={passwordType}
                
                />
                
                <div className='flex'>
                  {/* {passwordType === 'text' ? <i className="fa-regular fa-eye relative top-[-35px] left-[90%]" onClick={() => (setPasswordType('password'))}></i> : <i className="fa-regular fa-eye-slash relative top-[-35px] left-[90%]" onClick={() => (setPasswordType('text'))}></i>} */}
                  
                <ErrorMessage name='password' component="div" className="text-red-600 "  />
               
               
                </div>
             
            
              </div>
              
              



              
                <div className='w-[49%]'>
        <label htmlFor='client'>Client</label>
        <Field
          name='client'
          as={TextField}
          variant="outlined"
          className='w-[100%] mx-[1%]'
                  onKeyPress={handleKeyPress}
                  inputProps={{ maxLength: 60 }}
        />
        <ErrorMessage name='client' component="div" className="text-red-600" />
      </div>  
             


              
              </div>
            

            <div className='flex gap-4 mt-5'>
              <button
                type="submit"
                className='bg-[#FAA43C] w-[280px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                disabled={isSubmitting}
              > Add </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;
