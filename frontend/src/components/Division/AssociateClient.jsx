import React from 'react'
import DivisionHeader from '../MyComponents/DivisionHeader'
import { NavLink } from 'react-router-dom'
import CustomButton from '../MyComponents/CustomButton'
import ViewTable from './ViewTable'

function AssociateClient() {
  return (
     <div className='mx-10'>
    

      
    <div className='mb-3'>
    
      <DivisionHeader text={'Division Detail Screen'} />
  
    </div>
     <div  className="flex justify-between   py-4 border-b-[1px] border-gray-300">
        <div className='text-black  ' style={{fontWeight:'400'}}>
        Division Detail Screen
        </div>
        <NavLink to={'/profile/division/add-client'} > <CustomButton buttonText={'Add Client'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  /></NavLink>
      
      </div>
       <ViewTable/>
      </div> 
  )
}

export default AssociateClient