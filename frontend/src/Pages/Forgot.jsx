import React, { useRef } from 'react'
import HeaderLogo from '../assets/image/image-2LogoImg.png'
import lock from '../assets/image/FramelockPng.png'


import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Mybutton from '../components/MyComponents/Mybutton';
//import LoginSchema from './LoginSchema';
import MyField from '../components/MyComponents/MyField';
import Header from '../components/Header';
const LoginSchema = Yup.object().shape({
  email: Yup.string().matches(/^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/,'Please enter valid email.').required('Please enter email.'),

});

function Forgotten() {
  const forgottenOTPBtn = useRef('')

  return (
    <>
   
    <div className="w-full bg-white    rounded-lg ">
                <h1 className="  mb-6  mt-20" style={{fontSize:'35px'}}>Forgot Password</h1>
                <p className='text-gray-500 mb-10' style={{ fontSize:'18px', fontWeight:'400'}} >Please enter your registered email here and we will send OTP to reset your password.</p>
      <Formik
        initialValues={{ email: ''}}
        validationSchema={
         LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
            forgottenOTPBtn.current.click()
            setSubmitting(false);
          }}
      >
        {({ errors, touched }) => (
          <Form className="">
      
            <div className='mb-9'>  <MyField errors={errors.email} name={'email'} touched={touched.email} text={'Email'} placeholderText={'Email'} labelName={'Email'} />
            </div>
            
            
          
           
            <Mybutton text={'Send'} />

           

                  

            <div className='flex justify-center   mt-9 '>
                        Back to <NavLink to={'/login'} style={{ color: '#FAA43C' }} className='font-bold ml-1 underline'>Login</NavLink>
                        
            </div>
            <NavLink to={'/otpverification'} style={{display:'none'}} className='font-bold ml-1 ' ref={forgottenOTPBtn}>Login</NavLink>
           


          </Form>
        )}
      </Formik>
    </div>
       
    </>
  )
}

export default Forgotten
