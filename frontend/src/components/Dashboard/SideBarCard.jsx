import React from 'react'

import './Sidenav.css'
function SideBarCard({svg,svg1,text}) {
  return (
    <div className='h-[30px] xl:h-[40px] w-[86%] ml-[7%]  rounded-lg flex items-center lg:h-[10%] pl-3 mt-2'>
      <img src={svg1} alt="" className='white'/>
      <img src={svg} alt="" className='black'/>
      <p className='ml-4 font-normal' style={{fontWeight:'300'}}>{ text}</p>
      
    </div>
  )
}

export default SideBarCard