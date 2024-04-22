import React, { useState } from 'react'
import DivisionHeader from '../../MyComponents/DivisionHeader'
import { NavLink } from 'react-router-dom'
import CustomButton from '../../MyComponents/CustomButton'
import DivisionUserTabel from './DivisionUserTabel'


function DivisionUsers() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className='mx-10'>
      <DivisionHeader text={'Division Details'} />
      <div className='text-xl mt-3' style={{fontWeight:'400'}}>Division Detail Screen</div>
      <div className="flex justify-between  py-5 border-b-[1px] pr-6 border-gray-300">
        
      <div  style={{ position: 'relative', display: 'inline-block' }}>
      <input
            type="text"
            placeholder="Search by index"
            style={{
              padding: '8px 50px 8px 10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '400px',
              height: '50px',
              boxSizing: 'border-box',
              fontSize: '16px',
            }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}></i>
          
          
       
        </div>
        <NavLink to={'/profile/division/add-user'} > <CustomButton buttonText={'Add User'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  /></NavLink>
        </div>

      <DivisionUserTabel searchQuery={searchQuery} />
      

    </div>
  )
}

export default DivisionUsers