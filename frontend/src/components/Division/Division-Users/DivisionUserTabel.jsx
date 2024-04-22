import React from 'react';

import { NavLink } from 'react-router-dom';
import CustomOutlineBtn from '../../MyComponents/CustomOutlineBtn';
import CustomButton from '../../MyComponents/CustomButton';

function DivisionUserTabel({searchQuery}) {
  return (
    <table className="w-full">
    <thead className="border-b border-gray-300 ">
        <tr>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">User Name</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Division</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">User ID</th>
            <th className="px-16 py-4 text-end font-normal text-lg text-gray-500">Action</th>
            
        </tr>
    </thead>
    <tbody>
        {[...Array(10)].map((_, index) => (
           
           searchQuery ? (index + 1).toString().startsWith(searchQuery) ? (
            <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
                <td className="px-8 py-4">{index + 1}</td>
            <td className="px-8 py-4">{index%2==0?'Pepsi':'Amazon' }</td>
                <td className="px-8 py-4">Phillips</td>
               
                <td className="px-10 py-4">
                    <div className='flex gap-2 justify-end'>
                        
                       

                       <NavLink to={'/profile/division/edit-user'} ><CustomOutlineBtn buttonText={'Edit'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                       
                    </div>
                </td>
            </tr>):null : <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
                <td className="px-8 py-4">{index + 1}</td>
            <td className="px-8 py-4">{index%2==0?'Pepsi':'Amazon' }</td>
                <td className="px-8 py-4">Phillips</td>
               
                <td className="px-10 py-4">
                    <div className='flex gap-2 justify-end'>
                        
                       

                       <NavLink to={'/profile/division/edit-user'} ><CustomOutlineBtn buttonText={'Edit'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} /></NavLink> 

                       
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default DivisionUserTabel