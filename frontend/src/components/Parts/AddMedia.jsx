// Import necessary modules
import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DivisionHeader from '../MyComponents/DivisionHeader';
import AddImage from '../Division/DivisionComponents/AddImage';

import SingleInput from '../Division/DivisionComponents/SingleInput';

function AddMedia() {
  // Define validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters long.').required('Please enter name.'),
    sortBy: Yup.string().optional(), // SortBy is optional
    mediaFile: Yup.mixed().required('Please upload image.')
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='bg-[#00000089] h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50 overflow-y-auto py-10'>
      <Formik
        initialValues={{
          name: '',
          sortBy: '',
          mediaFile: null
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className='bg-white rounded-xl flex flex-col px-4 py-3' >
            <DivisionHeader text={'Add Media'} />
            <AddImage width='400px' height='180px' />
            

            <div className='w-[200%]'>
              <SingleInput title='Name' name='name' />
              
            </div>

            <div className='w-[200%] mb-6'>
              <SingleInput title='Sort By' name='sortBy' />
              
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-[#FAA43C] w-[280px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                disabled={isSubmitting}
              > Apply </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddMedia;
