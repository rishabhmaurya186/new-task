import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';

function SingleInput({ title, name, handleKeyPress = null, type = 'text', ml }) {
  const mlx = ml || 60
  return (
    <div className='flex justify-between mt-7'>
      <div className='w-[49%]'>
        <label htmlFor={name}>{title}</label>
        <Field
          name={name}
          type={type}
          as={TextField}
          variant="outlined"
          className='w-[100%] mx-[1%]'
          onKeyPress={handleKeyPress}
          inputProps={{ maxLength: mlx }}
         
        
        />
        <ErrorMessage name={name} component="div" className="text-red-600" />
      </div>  
    </div>
  );
}

export default SingleInput;
