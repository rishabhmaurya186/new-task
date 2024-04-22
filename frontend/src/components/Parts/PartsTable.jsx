import React from 'react';
import CustomButton from '../MyComponents/CustomButton';
import CustomOutlineBtn from '../MyComponents/CustomOutlineBtn';
import { NavLink } from 'react-router-dom';
import cross from '../../assets/image/cross.png'
import pic from '../../assets/image/pic.png'

function PartsTable() {
  return (
    <table className="w-full">
    <thead className="border-b border-gray-300 ">
        <tr>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Part Number</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Division</th>
            <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Part Description</th>
          <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Serialized</th>
          <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Thumbnail</th>
          <th className="px-8 py-4 text-start font-normal text-lg text-gray-500">Action</th>
         
            
        </tr>
    </thead>
    <tbody>
        {[...Array(15)].map((_, index) => (
            <tr key={index} style={index % 2 ==1 ? {backgroundColor:'#ffa00714'}:null}>
            <td className="px-8 py-4">77-S204</td>
            <td className="px-8 py-4">Phillipes connect</td>
            <td className="px-8 py-4">PCT Air Tank Sensor Tee Fitting</td>
                <td className='px-8 py-4 '><img  src={cross} /></td>
                <td className='px-8 py-4'><img src={ pic} /></td>
               
                <td className="px-10 py-4">
                    <div className='flex gap-2 '>
                       
                        
                        <NavLink to={'/profile/parts/update'}>
                            <CustomButton buttonText={'Edit'} width={'176px'} height={'32px'} fontSize={'16px'} padding={'10px 30px 10px 30px'} />
                            
                        </NavLink>
                        
                        <NavLink to={'/profile/parts/delete'} >
                            <CustomOutlineBtn buttonText={'Delete'} />
                        </NavLink>
                       

                      
                       
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default PartsTable