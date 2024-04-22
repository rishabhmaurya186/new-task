import { Button } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../components/MyComponents/CustomButton'
import PartsTable from '../components/Parts/PartsTable'
import { NavLink, Outlet } from 'react-router-dom'

function Parts() {

   const [sortby,setSortBy] = useState('Sort by');
   

  return (
    <div className='bg-gray-100'>
      <Outlet />
      <div className="h-[90px] bg-gray-100 flex justify-end items-center">
        <NavLink to={'add'}><Button variant="outlined" style={{
      
      color: '#000', // Text color
      borderColor: '#000', // Border color
      borderWidth: '2px', // Border width
      borderStyle: 'solid', // Border styl
      textTransform: 'none',
        borderRadius:'10px',
          // Button font size
  }} >+ Add Parts</Button></NavLink>
      </div>
      
      <div className='rounded-t-lg bg-white px-10' >

        <div className="flex justify-between  py-5 border-b-[1px] border-gray-300">
          <div className='flex gap-10'>
          <div style={{ position: 'relative', display: 'inline-block' }} >
            <input
                type="text"
                placeholder="Search by part number or description"
                style={{
                    padding: '8px 50px 8px 10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  width: '400px',
                    height:'50px',
                    boxSizing: 'border-box',
                    fontSize: '16px',
                }}
            />
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}></i>

            
        </div>
        <div className='border-gray-200 border-solid border-2  flex rounded-lg items-center px-3'>
            
              <select className='outline-none px-5' id='sort'>
              <option value='none' className=' border-none'  >Sort by</option>
              <option value="name" className=' border-none  '>Name</option>
              <option value="price" className=' border-none  '>Price</option>
              </select>
              </div>
              </div>
     
       
        <CustomButton buttonText={'Download CSV'}/>
       
        </div>
        
        <PartsTable />
        
      </div>
    </div>
  )
}

export default Parts