import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import AddImage from './AddImage';
import DivisionInputs from './DivisionInputs';

function AddClientCard({ saveBtn }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Please enter title.'),
    division: Yup.string().required('Please enter division.'),
    mediaFile: Yup.mixed().required('Please upload an image file.')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  const handleKeyPressLast = (e) => {
    if (e.target.value.length >= 60) {
      e.preventDefault();
    }
    
  };
  return (
    <div>
      

      <Formik
        initialValues={{
          title: '',
          division: '',
          mediaFile:''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <AddImage />
            <DivisionInputs title1={'Title'} name1='title' title2={'Division'} name2='division' handleKeyPress1={handleKeyPressLast} handleKeyPress2={handleKeyPressLast} />

            

            <div className='flex gap-4 mt-5'>
              <button
                type="submit"
                className='bg-[#FAA43C] w-[280px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                disabled={isSubmitting}
              > {saveBtn} </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddClientCard;
