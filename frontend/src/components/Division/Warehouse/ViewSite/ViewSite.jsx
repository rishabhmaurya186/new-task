import React, { useEffect, useState } from 'react'
import DivisionHeader from '../../../MyComponents/DivisionHeader'
import { useParams } from 'react-router-dom';
function ViewSite() {

  
  let { id } = useParams(); 
  const [warehouseData, setWarehouseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/warehouse/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data.site);
        setWarehouseData(data.site);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
    
  }, [id]);
  

  return (
    <div className='mx-10 mb-14 '>
      <DivisionHeader text={'View Site'} />
      <div className=' bg-[#f4a21f1e] p-3 mt-6 '>
      <table className='w-full justify-between'>
  <tr className='text-lg text-[#0000009c]' style={{ fontWeight: "300"}}>
    <td className='w-[25%] pb-4' style={{ verticalAlign: "top" }}>Name</td>
    <td className='w-[25%]' style={{ verticalAlign: "top" }}>Phone Number</td>
    <td className='w-[25%]' style={{ verticalAlign: "top" }}>Division</td>
    <td className='w-[25%]' style={{ verticalAlign: "top" }}>Address</td>
  </tr>
  <tr>
    <td className='w-[25%] pb-6' style={{ verticalAlign: "top" }}>{warehouseData && warehouseData.title}</td>
    <td className='w-[25%]' style={{ verticalAlign: "top" }}>{warehouseData && ("+" + warehouseData.mobileNumber)}</td>
    <td className='w-[25%]' style={{ verticalAlign: "top" }}>{warehouseData && warehouseData.division}</td>
    <td className='w-[25%]' style={{ verticalAlign: "top" }}>{warehouseData && (`${warehouseData.streetAddress}, ${warehouseData.city}, ${warehouseData.country}`)}</td>
          </tr>
          <br />
  <tr className=''>
    <td className='' style={{ verticalAlign: "top" }}>Mainwarehouse</td>
    <td style={{ verticalAlign: "top" }}>Description</td>
  </tr>
  <tr>
    <td className='pb-6' style={{ verticalAlign: "top" }}>{warehouseData && warehouseData.mainWarehouse ? "Yes" : "No"}</td>
    <td style={{ verticalAlign: "top" }}>{warehouseData && warehouseData.description}</td>
  </tr>
</table>

      </div>
      </div>
  )
}

export default ViewSite