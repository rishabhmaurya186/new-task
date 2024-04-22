import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import DivisionHeader from '../MyComponents/DivisionHeader';
import DivisionInputs from '../Division/DivisionComponents/DivisionInputs';
import { TextField } from '@mui/material';
import add from '../../assets/image/add.png'
import { NavLink, Outlet } from 'react-router-dom';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Checkbox from '@mui/material/Checkbox';
import SingleInput from '../Division/DivisionComponents/SingleInput';
function UpdateParts() {

  const divisionOptions = [
    { value: 'division1', label: 'Division 1' },
    { value: 'division2', label: 'Division 2' },
    { value: 'division3', label: 'Division 3' },
  ];

  const initialValues = {
    division: '',
    partNumber: '',
    description:''
  };

  const validationSchema = Yup.object().shape({
    division: Yup.string().required('Please select division.'),
    partNumber: Yup.string().required('Please enter part number.'),
    description: Yup.string().min(8,'Part number must be at least 8 characters long.').required('Please enter description.')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='mx-10'>
      <Outlet/>
      <DivisionHeader text={"Update Part"} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
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
              

             
      <div className='w-[49%]'>
        <label htmlFor='partNumber'>Part Number*</label>
        <Field
          name='partNumber'
         
          as={TextField}
          variant="outlined"
          className='w-[100%] mx-[1%]'
         
          inputProps={{ maxLength: 60 }}
         
        
        />
        <ErrorMessage name='partNumber' component="div" className="text-red-600" />
      </div>  
 
              
          </div>
            
          
            {/* <DivisionInputs title1={'Division'} name1='division' title2={'Part Number*'} name2='partNumber' /> */}



            

         






            <div className='mt-14'>Part Description</div>
            <Field
              as="textarea"
              id="description"
              name="description"
              maxLength= '480'
              rows="8"
              className="mt-1 block w-[49%] border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-5"
            />
            <ErrorMessage  name="description" component="div" className="text-red-600" />
            <br/>
            <Checkbox
        sx={{ color: '#FAA43C',padding:'0','&.Mui-checked': {
          color: '#FAA43C', // Color of the fill when checked
        }, }} // Custom styling using sx prop
        name="serialized"
        id="serialized"
      />
            
            <label htmlFor="serialized" className="ml-2">Serialized</label>
            
     
            <br />
            <NavLink to={'media'} ><img src={add} className='mt-6' /></NavLink>
           
            

      <div className='flex gap-4 mt-9'>
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

export default UpdateParts;


