import React from 'react'




function DivisionHeader({ text }) {
  const goBack = () => {
    window.history.back(); // This will take you back one route
  };
  return (
    <div className='border-b-2 border-gray-300 text-xl py-5 ' style={{fontWeight:'400'}}>
    
        <i class="fa-solid fa-arrow-left mr-5" onClick={goBack} ></i>
        {text}
      
    </div>
  )
}

export default DivisionHeader