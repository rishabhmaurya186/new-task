import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import AddImage from './DivisionComponents/AddImage';

import Select from '@mui/material/Select';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateDivision = ({ saveBtn }) => {
// function DivisionCard({ saveBtn }) {
  let [divisionOptions, setDivisionOptions] = useState([{ value: 'division1', label: 'Division 1' },
  { value: 'division2', label: 'Division 2' },
  { value: 'division3', label: 'Division 3' },])

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title must be at least 2 characters long.').required('Please enter title.'),
    // warehouse: Yup.number().required('Please select warehouse.'),
     mediaFile: Yup.mixed().required("Please upload  image."),
  });

  const handleKeyPress = (e) => {
    if (e.target.value.length >= 60) {
      e.preventDefault();
    }
    if (e.target.value === '') {
      if (e.key === ' ') {
        e.preventDefault();
      }
    }
  };
  const navigate = useNavigate()
  let { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/warehouse/mainwarehouse', {
          
        });
        
        if (response.status === 200) {
          console.log(response.data.warehouse
            )
         
          let options = []
          response.data.warehouse.map((item, index) => {
            console.log(item.title);
            const value = item._id
            const  label = item.title
            let newValue = {value:value, label:label}
            options.push(newValue);
          })
  setDivisionOptions(options);
          
        } else {
          // Handle other status codes if needed
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
},[])








const initialValues = {
  title: '',
  warehouse: '',
  mediaFile: null,
};


  const handleSubmit = async (values, actions) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('warehouse', values.warehouse);
      formData.append('mediaFile', values.mediaFile);

      await axios.patch(`http://localhost:3001/api/division/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      actions.resetForm();
      navigate('/profile/division')
      //alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data.');
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ setFieldValue }) => (
        <Form>

     <AddImage name={'mediaFile'} setFieldValue={setFieldValue}  />
     {/* <div>
            <label htmlFor="mediaFile">Media File:</label>
            <input
              type="file"
              id="mediaFile"
              name="mediaFile"
              onChange={(event) => {
                setFieldValue('mediaFile', event.currentTarget.files[0]);
              }}
            />
          </div> */}
          
<div className='flex justify-between mt-7'>
              <div className='w-[49%]'>
                <label htmlFor="title">Title</label>
                <Field
                  name='title'
                  as={TextField}
                  variant="outlined"
                  className='w-[100%] mx-[1%]'
                  onKeyPress={handleKeyPress}
                  inputProps={{ maxLength: 60 }}
                />
                <ErrorMessage name="title" component="div" className="text-red-600" />
              </div>

              <div className='w-[49%]'>
                <label htmlFor="warehouse">Main Warehouse<span className='text-red-700'>*</span></label>
                <Field
                  name="warehouse"
                  as={Select}
                  variant="outlined"
                  className='w-[100%] '
                  onKeyPress={handleKeyPress}
                  defaultValue=""
                  displayEmpty
                >
                  <MenuItem value="" disabled>Select Warehouse</MenuItem>
                  {divisionOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage name="warehouse" component="div" className="text-red-600" />
              </div>
            </div>

          
          
          <div className='flex gap-4 mt-5'>
              <button
                type='button'
                className='bg-[#D6D2D2] w-[280px] h-[50px] rounded-lg text-xl hover:bg-[#d6d2d2b7]'
                onClick={() => {
                  window.history.back();
                }}
              >Cancel</button>

              <button
                type="submit"
                className='bg-[#FAA43C] w-[280px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                
              > {saveBtn} </button>
            </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateDivision;