import React from 'react';
import CustomButton from '../../MyComponents/CustomButton';
import CustomOutlineBtn from '../../MyComponents/CustomOutlineBtn';
import { NavLink } from 'react-router-dom';

function ListedWarehouseTable({searchQuery}) {
  return (
    <table className="w-full">
    <thead className="border-b border-gray-300 ">
        <tr>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Warehouse ID</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Site</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Main Warehouse</th>
          <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Listed On Date & Time</th>
          <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Action</th>
            
        </tr>
    </thead>
    <tbody>
        {[...Array(10)].map((_, index) => (
         
         searchQuery ? (index + 1).toString().startsWith(searchQuery) ? (
            <tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
            <td className="px-8 py-4">{index + 1}</td>
            { index %2 ==0 ?<td className="px-8 py-4">169th St, Bayside, NY</td>:<td className="px-8 py-4">Main Warehouse</td>}
            <td className="px-8 py-4">No</td>
            <td className='px-8 py-4'>10-10-2023, 10:30 AM</td>
               
                <td className="px-10 py-4">
                    <div className='flex gap-2 '>
                        <NavLink to={'/profile/warehouse/viewSite'}>
                            <CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} />
                            
                        </NavLink>
                        
                        
                       

                      
                       
                    </div>
                </td>
                </tr>
            ) : null :<tr key={index} style={index % 2 == 1 ? { backgroundColor: '#ffa00714' } : null}>
            <td className="px-8 py-4">{index + 1}</td>
            { index %2 ==0 ?<td className="px-8 py-4">169th St, Bayside, NY</td>:<td className="px-8 py-4">Main Warehouse</td>}
            <td className="px-8 py-4">No</td>
            <td className='px-8 py-4'>10-10-2023, 10:30 AM</td>
               
                <td className="px-10 py-4">
                    <div className='flex gap-2 '>
                        <NavLink to={'/profile/warehouse/viewSite'}>
                            <CustomButton buttonText={'View'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} />
                            
                        </NavLink>
                        
                        
                       

                      
                       
                    </div>
                </td>
                </tr>
        ))}
    </tbody>
</table>
  )
}

export default ListedWarehouseTable