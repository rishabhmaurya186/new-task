
 
import React from 'react'

function DeleteParts() {
  const goBack = () => {
    window.history.back(); // This will take you back one route
  };
  return (
    <div className='bg-[#00000089] h-[100vh] w-[100vw] fixed top-0 left-0 flex justify-center items-center ' style={{ zIndex: '100' }}>
      
      <div className='w-[430px] h-[250px] bg-white rounded-xl flex flex-col  items-center px-4'>
       
        <div className=' border-b-2 border-gray-200 w-[100%] text-center text-xl py-4 flex justify-center' style={{fontWeight:'400'}}>Delete Part <div className=' relative left-[25%]  ' onClick={goBack}><i class="fa-solid fa-xmark"></i></div></div>
        
        <div className='text-[20px] h-[40%] items-center flex'>Are you sure you want to delete this Part?</div>
        <div className='flex gap-4 mt-5'>
        <button
          className='bg-[#D6D2D2] w-[150px] h-[50px] rounded-lg text-xl hover:bg-[#d6d2d2b7]'
          onClick={goBack}
        >Cancel</button>
        <button
          className='bg-[#FAA43C] w-[150px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9] '
        
          onClick={goBack}
        > Yes </button>
     
       
      </div>
       </div>
    </div>
  )
}

export default DeleteParts