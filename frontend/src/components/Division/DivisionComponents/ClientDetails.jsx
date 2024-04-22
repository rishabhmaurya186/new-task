import React from 'react'
import DivisionHeader from '../../MyComponents/DivisionHeader'
import clientImg from '../../../assets/image/client-details.png'
import { NavLink } from 'react-router-dom'
import CustomButton from '../../MyComponents/CustomButton'
import ClientDetailsTable from './ClientDetailsTable'
function ClientDetails() {
  return (
    <div className='mx-10'>
      <DivisionHeader text={"Client Details"} />
      <div className='border-[#FAA43C] border-2 border-solid h-[240px] w-[100%] rounded-xl mt-6 flex '>
        <img src={clientImg} />
        <div className='mt-14 ml-6'>
          <div>Client Name</div>
          <div className='text-2xl' style={{fontWeight:'400'}}>Division Name</div>
        </div>
      </div>
      <div className='flex justify-between mt-6'>
      <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
                type="text"
                placeholder="Search by division name"
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
        <NavLink to={'/profile/division/add-user'} > <CustomButton buttonText={'Add User'} width={'200px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  /></NavLink>
      </div>

      <hr className='my-4 border-gray-300'/>
      
      <ClientDetailsTable />
    
    </div>
  )
}

export default ClientDetails