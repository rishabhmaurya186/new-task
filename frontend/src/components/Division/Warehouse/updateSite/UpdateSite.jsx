import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DivisionHeader from '../../../MyComponents/DivisionHeader';
import DivisionInputs from '../../DivisionComponents/DivisionInputs';
import SingleInput from '../../DivisionComponents/SingleInput';
import PhoneInput from 'react-phone-input-2';
import { Checkbox } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';


function UpdateSite() {
  const navigate = useNavigate()
  let { id } = useParams(); 
  const divisionOptions = [
    { value: 'division1', label: 'Division 1' },
    { value: 'division2', label: 'Division 2' },
    { value: 'division3', label: 'Division 3' },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event, setFieldValue) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    setFieldValue('mainWarehouse', newValue); // Update the value of mainWarehouse
  };
  
  const goBack = () => {
    window.history.back(); // This will take you back one route
  };

  const initialValues = {
    title: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    division: '',
    mainWarehouse: false,
    description: ''
  };

  const validationSchema = Yup.object().shape({
    // Validation schema remains unchanged
  });

  const handleSubmit = async (values) => {
    try {
      const value = JSON.stringify(values);
      const response = await axios.patch(`http://localhost:3001/api/warehouse/${id}`, value, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true // Ensure credentials are sent with the request
      });
      
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        navigate("/profile/warehouse")
       
      } else {
        console.error("Request failed with status:", response.status);
        // Handle other status codes, if needed
      }
  
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div className='mx-10 mb-14'>
      <DivisionHeader text={'Update Site'} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <SingleInput title={'Title*'} name="title" />
            <h1 className='mt-8 font-semibold'>Address:</h1>
            <DivisionInputs title1={'Country'} title2={'Street Address'} name1="country" name2="streetAddress" />
            <DivisionInputs title1={'City'} title2={'State'} name1="city" name2="state" />
            <SingleInput title={'Postal Code'} name="postalCode" />
            <h1 className='mt-8 font-semibold'>Contact Name:</h1>
            <DivisionInputs title1={'First'} title2={'Last'} name1="firstName" name2="lastName" />
            <div className='w-[49%] mt-7'>
              <label htmlFor=""> Phone Number</label>
              <Field
                name='mobileNumber'
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'in'}
                    inputClass="form-control"
                    containerClass="phone-input-container"
                    onChange={value => setFieldValue('mobileNumber', value)}
                    inputProps={{
                      name: 'mobileNumber',
                      required: true,
                      placeholder: 'Mobile Number',
                      style: { width: '100%', border: '1px solid #ccc', borderRadius: '4px', paddingLeft: '48px', height:'53px' },
                    }}
                  />
                )}
              />
              <ErrorMessage name='mobileNumber' component="div" className="text-red-600" />
            </div>
            <div className='flex justify-between mt-7'>
              <div className='w-[49%]'>
                <label htmlFor="division">Division</label>
                <Field
                  name="division"
                  as={Select}
                  variant="outlined"
                  className='w-[100%] '
                  defaultValue="" 
                  displayEmpty 
                >
                  <MenuItem value="" disabled style={{ color: 'gray !important' }}>Select Division</MenuItem> 
                  {divisionOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage name="division" component="div" className="text-red-600" />
              </div>  
            </div>
            <div className='mt-4'>
              <Checkbox 
                name='mainWarehouse' 
                id='mainWarehouse' 
                checked={isChecked} 
                onChange={(event) => handleCheckboxChange(event, setFieldValue)} 
                style={{color:'#FAA43C',padding:'0'}} 
              />
              <label htmlFor="mainWarehouse" className="ml-2  "> <div className=' inline-block mt-2 '>Main Warehouse</div></label>
            </div>
            <div className='mt-5'>Description</div>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows="8"
              maxLength={480}
              className="mt-1 block w-[49%] border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-5"
            />
            <ErrorMessage name='description' component="div" className="text-red-600" />
            <div className='w-[49%]'> </div>
            <div className='flex gap-4 mt-5'>
              <button
                type="button"
                className='bg-[#D6D2D2] w-[280px] h-[50px] rounded-lg text-xl hover:bg-[#d6d2d2b7]'
                onClick={goBack}
                disabled={isSubmitting}
              >Cancel</button>
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

export default UpdateSite;
