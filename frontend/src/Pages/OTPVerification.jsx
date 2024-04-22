import React from 'react'
import HeaderLogo from '../assets/image/image-2LogoImg.png'
import lock from '../assets/image/FramelockPng.png'


import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Mybutton from '../components/MyComponents/Mybutton';
//import LoginSchema from './LoginSchema';
import MyField from '../components/MyComponents/MyField';
import OTPVerification from '../components/OTPVerification';

const LoginSchema = Yup.object().shape({
  OTP: Yup.string().required('Enter valid OTP.'),

});

function ForgottenOTP() {
  return (
    <>
    <div className="w-full bg-white    rounded-lg ">
                <h1 className="  mb-6  mt-20" style={{fontSize:'35px'}}>OTP Verification</h1>
                <p className='text-gray-500 mb-10'>Please enter the 6 digit verification code that was sent to your registered email. The code is valid for 3 minutes.</p>
      <Formik
        initialValues={{ OTP: ''}}
        validationSchema={
         LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
      >
        {({ errors, touched }) => (
          <Form className="">
      
                      <OTPVerification/>
                      <div className='w-[100%]  mr-20 mt-10' >
                       <Mybutton text={'Verify'} /> </div>
            



                  
            <div className='flex w-[100%] justify-center mr-20   mt-6 '>
            I don’t receive a code.<NavLink to={'/otpverification'} style={{color:'#FAA43C'}} className='font-bold ml-1 underline'>Resend</NavLink>
            </div>
            <div className='flex w-[100%] justify-center mr-20  mt-6 '>
               Back to<NavLink to={'/login'} style={{color:'#FAA43C'}} className='font-bold ml-1 underline'>Login</NavLink>
            </div>

           


          </Form>
        )}
      </Formik>
    </div>
    </>
  )
}

export default ForgottenOTP
