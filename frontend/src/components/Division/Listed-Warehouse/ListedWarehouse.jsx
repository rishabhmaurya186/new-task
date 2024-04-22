import React, { useState, useEffect, useRef } from 'react';
import DivisionHeader from '../../MyComponents/DivisionHeader';
import { NavLink } from 'react-router-dom';
import CustomButton from '../../MyComponents/CustomButton';
import Select from '@mui/material/Select';
import ListedWarehouseTable from './ListedWarehouseTable';
import { ErrorMessage, Field, Formik } from 'formik';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
function ListedWarehouse() {
  const [openForm ,setOpenForm] = useState(false)
  const searchInputRef = useRef('')
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  let [divisionOptions, setDivisionOptions] = useState([{ value: 'division1', label: 'Division 1' },
  { value: 'division2', label: 'Division 2' },
  { value: 'division3', label: 'Division 3' },])
    
 
  // Load search history from localStorage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Update search history in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Update suggestions whenever searchQuery changes
  useEffect(() => {
    // Filter search history based on the search query
    const filteredSuggestions = searchHistory.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [searchQuery, searchHistory]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      // Add the new search query to the search history
      setSearchHistory([searchQuery, ...searchHistory.filter(item => item !== searchQuery)]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    searchInputRef.current.value = suggestion
  };
  
  
  const [responseData, setResponseData] = useState(null);


    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/warehouse', {
          
        });
        
        if (response.status === 200) {
          setResponseData(response.data.sites);
          let options = []
          response.data.sites.map((item, index) => {
            
            const value = item.title
            let newValue = {value:value, label:value}
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

    const goBack = () => {
      window.history.back(); // This will take you back one route
    };
  // Render suggestions
  const renderSuggestions = () => {
    return (
      <div className='ml-3 mt-3'>
        {suggestions.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleSuggestionClick(item)}>{item}</button>
          </div>
        ))}
      </div>
    );
  };

  return (<>
    <div className='mx-10'>
      <DivisionHeader text={'Sites'} />
      <div className="flex justify-between  py-5 border-b-[1px] border-gray-300">
        <div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="text"
              placeholder="Search by index"
              ref={searchInputRef}
              style={{
                padding: '8px 50px 8px 10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '400px',
                height: '50px',
                boxSizing: 'border-box',
                fontSize: '16px',
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}
              onClick={handleSearchSubmit}
            ></i>
          </div>
          {isFocused && renderSuggestions()}
        </div>
        <div onClick={() => {
          fetchData()
          setOpenForm(true)
        }} > <CustomButton buttonText={'Add Warehouse'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></div>
      </div>
      <ListedWarehouseTable searchQuery={searchQuery} />
    </div>
{responseData && console.log(responseData)}
{openForm && responseData && <div className="fixed top-0 left-0 w-[100vw] h-full  bg-[#ffa00700] flex justify-center items-center z-200000 ">
<Formik
  initialValues={{
    division: ''
  }}
  onSubmit={(values, actions) => {
    // Handle form submission
    console.log(values);
    actions.setSubmitting(false);
  }}
>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="fixed top-0 left-0 w-full h-full bg-[#bfbfbf85] flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px]">
        <h1 className="text-center">Add warehouse</h1>
        <br />
        <div className="w-[49%]">
          
          <Field
            name="division"
            as={Select}
            variant="outlined"
            className="w-[200%]"
            defaultValue=""
            displayEmpty
          >
            <MenuItem value="" disabled style={{ color: 'gray !important' }}>Select Warehouse</MenuItem>
            {divisionOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name="division" component="div" className="text-red-600" />
              </div>
              
              <div className='flex justify-between mt-4'>
              <div
                
                className='bg-[#D6D2D2] w-[45%] h-[50px] rounded-lg text-xl hover:bg-[#d6d2d2b7] flex items-center justify-center '
                onClick={()=>setOpenForm(false)}
                
              >Cancel</div>
              <button
                type="submit"
                className='bg-[#FAA43C] w-[45%] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9]'
                
              > Add </button>
              </div>
            
      </div>
    </form>
  )}
</Formik>
        </div>}
        </>
  );
}

export default ListedWarehouse;
