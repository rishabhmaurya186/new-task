import React from 'react';
import CustomButton from '../MyComponents/CustomButton';
import CustomOutlineBtn from '../MyComponents/CustomOutlineBtn';
import { NavLink } from 'react-router-dom';

function MyTable({ searchQuery }) {
    


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
    



    return (
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
                {[...Array(10)].map((_, index) => (
                     <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
                    <td className="px-8 py-4">{index + 1}</td>
                    <td className="px-8 py-4">Division {index + 1}</td>
                    <td className="px-8 py-4">10-10-2023, 10:30 AM</td>
                    <td className="px-8 py-4">4</td>
                    <td className="px-8 py-4">
                        <div className='flex gap-2'>
                           <NavLink to={'associate-client'}><CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                           <NavLink to={'update'} ><CustomOutlineBtn buttonText={'Update'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                           <NavLink to={'delete'} ><CustomOutlineBtn buttonText={'Delete'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MyTable;
