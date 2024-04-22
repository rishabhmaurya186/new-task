// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';
// import { TextField } from '@mui/material';
// import { NavLink, useNavigate } from 'react-router-dom';
// import Mybutton from '../components/MyComponents/Mybutton';
// import SignUpSchema from '../components/YupSchema/FormikSchema';

// import avatar from '../assets/image/blue-circle-with-white-user_78370-4707.avif';

// const SignUpForm = () => {

//   const navigate = useNavigate()
//   const handleKeyPress = (e) => {
//     if (e.target.value.length >= 60 || e.key === ' ') {
//       e.preventDefault();
//     }
//   };

//   const handleKeyPressLast = (e) => {
//     if (e.target.value.length >= 60 || e.key === ' ') {
//       e.preventDefault();
//     }
//   };

//   const handleSubmit = async (values) => {

//     try {
//       const value = JSON.stringify(values)
//       const response = await fetch('http://localhost:8080/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: value
//       });
//       const data = await response.json();

//       console.log(data);

//       navigate('/profile/dashboard')

//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error, e.g., display an error message

//     }
//   };

//   return (
//     <div className="w-[100%] bg-white rounded-lg">
//       <div className="text-center font-medium text-xl mb-6">Sign Up</div>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//           mobileNumber: '',
//           password: '',
//           confirmPassword: '',
//         }}
//         validationSchema={SignUpSchema}
//         onSubmit={(values)=>handleSubmit(values) }
//       >
//         {({ setFieldValue }) => (
//           <Form className=" " action="£">

//             <div className='mb-4'>
//             <Field
//                 as={TextField}
//                 name="firstName"
//                 label="First Name"
//                 variant="outlined"
//                 fullWidth

//                 onKeyPress={handleKeyPress}
//               />
//               <ErrorMessage name="firstName" component="div" className="text-red-600" />
//             </div>
//             <div className='mb-4'>
//             <Field
//                 as={TextField}
//                 name="lastName"
//                 label="Last Name"
//                 variant="outlined"
//                 fullWidth

//                 onKeyPress={handleKeyPressLast}
//               />
//               <ErrorMessage name="lastName" component="div" className="text-red-600" />
//             </div>
//             <div className='mb-4'>
//             <Field
//               name="email"
//               as={TextField}
//               label="Email"
//               variant="outlined"
//               fullWidth

//             />
//             <ErrorMessage name="email" component="div" className="text-red-600" />
//             </div>
//             <div className='mb-4'>
//             <Field
//               name="mobileNumber"
//               render={({ field }) => (
//                 <PhoneInput
//                   {...field}
//                   country={'in'}
//                   inputClass="form-control"
//                   containerClass="phone-input-container"
//                   onChange={(value) => {
//                     setFieldValue('mobileNumber', value);
//                   }}
//                   inputProps={{
//                     name: 'mobileNumber',
//                     required: true,
//                     placeholder: 'Mobile Number',
//                     style: {
//                       width: '100%',
//                       border: '1px solid #ccc',
//                       borderRadius: '4px',
//                       paddingLeft: '48px',
//                       height: '53px',
//                     },
//                   }}
//                 />
//               )}
//             />
//             <ErrorMessage name="mobileNumber" component="div" className="text-red-600" />
//             </div>
//             <div className='mb-4'>
//             <Field
//               name="password"
//               as={TextField}
//               label="Password"
//               variant="outlined"
//               fullWidth

//               type="password"
//             />
//             <ErrorMessage name="password" component="div" className="text-red-600" />
//             </div>
//             <div className='mb-4'>
//             <Field
//               name="confirmPassword"
//               as={TextField}
//               label="Confirm Password"
//               variant="outlined"
//               fullWidth

//               type="password"
//             />
//             <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
//             </div>

//             <Mybutton text={'Sign Up'} />

//             <div className="mt-6 text-center">
//               Already have an account?{' '}
//               <NavLink to={'/login'} className="font-bold" style={{ color: '#FAA43C' }}>
//                 Login
//               </NavLink>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignUpForm;
import { useRef, useState } from "react";
import PencilIcon from "../components/Cropper/PencilIcon";
import Modal from "../components/Cropper/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { TextField } from "@mui/material";
import { NavLink,useNavigate } from "react-router-dom";
import Mybutton from "../components/MyComponents/Mybutton";
import "react-image-crop/dist/ReactCrop.css";
import avatar from "../assets/image/blue-circle-with-white-user_78370-4707.avif";
import HeaderLogo from "../assets/image/image-2LogoImg.png";
import lock from "../assets/image/FramelockPng.png";
import SignUpSchema from "../components/YupSchema/FormikSchema";
import Header from "../components/Header";

const SignUpForm = () => {
  const dashboardButton = useRef("");
  const avatarUrl = useRef(avatar);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };
  const imgbtn = useRef(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  };

  const handleKeyPress = (e) => {
    if (e.target.value.length >= 60 || e.key === " ") {
      e.preventDefault();
    }
  };
  const handleKeyPressLast = (e) => {
    if (e.target.value.length >= 60) {
      e.preventDefault();
    }
    if (e.target.value === "") {
      if (e.key === " ") {
        e.preventDefault();
      }
    }
  };
  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    avatarUrl.current = event.currentTarget.files[0];
    if (file && file.type.startsWith("image/")) {
      setFieldValue("profilePic", file);
      updateAvatar(URL.createObjectURL(file));
    }
  };
const navigate = useNavigate()
  const handleSubmit = async (values) => {
    try {
      const value = JSON.stringify(values);
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: value,
        credentials: 'include'
      });
      const data = await response.json();

      console.log(data);

      navigate("/profile/dashboard");
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div className="  w-[100%] bg-white  rounded-lg ">
      <div className="text-center font-medium text-xl mb-6">Sign Up</div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ setFieldValue }) => (
          <Form className=" " action="£">
            <div className="text-center  flex  justify-center min-h-20 ">
              <div className="flex flex-col items-center ">
                <div
                  className="relative"
                  onClick={() => imgbtn.current.click()}
                >
                  <img
                    src={avatarUrl.current}
                    alt="Avatar"
                    className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center my-7 ">
              <Field name="image">
                {({ field, form: { setFieldValue } }) => (
                  <input
                    type="file"
                    accept="image/*"
                    name="profilePic"
                    className="hidden"
                    ref={imgbtn}
                    onChange={(event) => handleFileChange(event, setFieldValue)}
                  />
                )}
              </Field>

              <ErrorMessage
                name="profilePic"
                component="div"
                className="ErrorMessge"
              />
            </div>

            <div className="flex gap-8 ">
              <div className="w-[50%]">
                <Field
                  as={TextField}
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onKeyPress={handleKeyPress}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="ErrorMessge"
                />
              </div>
              <div className="w-[50%]">
                <Field
                  as={TextField}
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onKeyPress={handleKeyPressLast}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="ErrorMessge"
                />
              </div>
            </div>

            <div className="mb-3">
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="ErrorMessge"
              />
            </div>

            <div className="mb-2">
              <Field
                name="mobileNumber"
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={"in"}
                    inputClass="form-control"
                    containerClass="phone-input-container"
                    onChange={function n(value) {
                      setFieldValue("mobileNumber", value);
                    }}
                    inputProps={{
                      name: "mobileNumber",
                      required: true,
                      placeholder: "Mobile Number",
                      style: {
                        width: "100%",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        paddingLeft: "48px",
                        height: "53px",
                      },
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="ErrorMessge"
              />
            </div>

            <div>
              <Field
                name="password"
                as={TextField}
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="ErrorMessge"
              />
            </div>

            <div>
              <Field
                name="confirmPassword"
                as={TextField}
                label="Confirm Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="ErrorMessge"
              />
            </div>

            <Mybutton text={"Sign Up"} />
            <div className="mt-6 text-center ">
              {" "}
              Already have an account?
              <NavLink
                to={"/login"}
                className=" font-bold"
                style={{ color: "#FAA43C" }}
              >
                {" "}
                Login
              </NavLink>
              <NavLink
                to={"/profile/dashboard"}
                className=" font-bold"
                style={{ display: "none" }}
                ref={dashboardButton}
              ></NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
