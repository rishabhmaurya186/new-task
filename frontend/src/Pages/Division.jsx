import React, { useEffect, useState } from 'react';
import CustomButton from '../components/MyComponents/CustomButton';
import MyTable from '../components/Division/MyTable';
import { NavLink, Outlet } from 'react-router-dom';

import CustomOutlineBtn from '../components/MyComponents/CustomOutlineBtn';




function division() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allDivision, setAllDivision] = useState(null);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).split('/').join('-'); // Replace "/" with "-"

    const hour = date.getHours();
    const minute = date.getMinutes();
    const formattedHour = (hour % 12 === 0 ? 12 : hour % 12); // Convert 0 to 12 for 12-hour format
    const formattedMinute = minute < 10 ? '0' + minute : minute; // Add leading zero if minute is single digit
    const meridiem = hour >= 12 ? 'PM' : 'AM'; // Determine AM/PM

    const formattedTime = `${formattedHour}:${formattedMinute}`;

    return `${formattedDate}, ${formattedTime} ${meridiem}`;
  };


  useEffect(() => {
    { (searchQuery && searchQuery.length>1)  ? 
      
      fetch(`http://localhost:3001/api/warehouse?searchQuery=${searchQuery}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        // Handle the data received from the server
        
        setAllDivision(data); // For example, log the data to the console
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      }):fetch("http://localhost:3001/api/division")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        // Handle the data received from the server
        console.log(data);
        setAllDivision(data.division); // For example, log the data to the console
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })}
  }, [searchQuery]);
  
  
  return (
    <>
      
     
     <Outlet/>



      
      <div  className="flex justify-between px-10 py-5 border-b-[1px] border-gray-300">
      <div style={{ position: 'relative', display: 'inline-block' }}>
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
        <NavLink to={'create'} > <CustomButton buttonText={'Create New Division'} width={'176px'} height={'50px'} fontSize={'16px'} padding={'10px 30px 10px 30px'}  /></NavLink>
       
     </div>
      <div className='pt-10 px-8'>
      <table className="w-full">
            <thead className="border-b border-gray-300">
                <tr>
                    <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Division ID</th>
                    <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Division Name</th>
                    <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Listed On Date & Time</th>
                    <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">No. of Warehouse</th>
                    <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Action</th>
                </tr>
            </thead>
            <tbody>
                {allDivision &&  allDivision.map((data, index) => (
                     <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
                    <td className="px-8 py-4">{data.divisionId}</td>
                    <td className="px-8 py-4">{ data.title}</td>
                    <td className="px-8 py-4">{ formatDate(data.dateAndTime)}</td>
                    <td className="px-8 py-4">{data.warehouses.length && data.warehouses.length}</td>
                    <td className="px-8 py-4">
                        <div className='flex gap-2'>
                           <NavLink to={'associate-client'}><CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                           <NavLink to={`update/${data._id}`} ><CustomOutlineBtn buttonText={'Update'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                           <NavLink to={'delete'} ><CustomOutlineBtn buttonText={'Delete'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
     
            
          
 
    </>
  )
}

export default division