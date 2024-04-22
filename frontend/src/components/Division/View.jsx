import React from 'react'
import DivisionHeader from '../MyComponents/DivisionHeader'

import CustomButton from '../MyComponents/CustomButton'
import { NavLink, Outlet } from 'react-router-dom'
import ViewTable from './ViewTable'


function View() {
  return (

    <>
      <div className='flex bg-gray-100 '>
        <NavLink to={'associate-client'} className={({ isActive }) => `${isActive ? `text-[#FAA43C] bg-white` : "black"} px-5 py-3 rounded-t-lg `}>Associate Client</NavLink> 
        <NavLink to={"/profile/division/warehouse"}   className={({ isActive }) => `${isActive ? `text-[#FAA43C] bg-white` : "black"} px-5 py-3 rounded-t-lg `}>Listed Warehouse</NavLink>
        
        <NavLink to={'division-users'} className={({ isActive }) => `${isActive ? `text-[#FAA43C] bg-white` : "black"} px-5 py-3 rounded-t-lg `}
        >Division Users</NavLink>
       </div>
      
      
      
      {/* <div className='mx-10'>
    

      
    <div className='mb-3'>
    
      <DivisionHeader text={'Division Detail Screen'} />
  
    </div>
     <div  className="flex justify-between   py-4 border-b-[1px] border-gray-300">
        <div className='text-black  ' style={{fontWeight:'400'}}>
        Division Detail Screen
        </div>
        <NavLink to={'create'} > <CustomButton buttonText={'Add Client'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  /></NavLink>
      
      </div>
       <ViewTable/>
      </div> */}
      <Outlet/>
      
       </>
   
  )
}

export default View