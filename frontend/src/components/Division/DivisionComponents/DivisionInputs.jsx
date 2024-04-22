import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';

function DivisionInputs({ title1, title2, name1, name2 , handleKeyPress1=null,handleKeyPress2=null , type1='text' , type2='text'}) {
  return (
    <div className='flex justify-between mt-7'>
      <div className='w-[49%]'>
        <label htmlFor={name1}>{title1}</label>
        <Field
          name={name1}
          as={TextField}
          variant="outlined"
          className='w-[100%] mx-[1%]'
          onKeyPress={handleKeyPress1}
          type={type1}
          inputProps={{ maxLength: 60 }} // Set maximum length to 60 characters
        />
        <ErrorMessage name={name1} component="div" className="text-red-600" />
      </div>

      <div className='w-[49%]'>
        <label htmlFor={name2}>{title2}</label>
        <Field
          name={name2}
          as={TextField}
          variant="outlined"
          className='w-[100%] mx-[1%]'
          onKeyPress={handleKeyPress2}
          type={type2}
          inputProps={{ maxLength: 60 }} // Set maximum length to 60 characters
        />
        <ErrorMessage name={name2} component="div" className="text-red-600" />
      </div>
    </div>
  );
}

export default DivisionInputs;
