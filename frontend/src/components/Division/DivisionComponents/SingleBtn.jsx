import React from 'react'

function SingleBtn({ btnText }) {
  const goBack = () => {
    window.history.back(); // This will take you back one route
  };
  return (
    <div className='flex gap-4 mt-5'>
   
    <button
      className='bg-[#FAA43C] w-[200px] h-[50px] rounded-lg text-white text-xl hover:bg-[#faa43cd9] '
    
      onClick={goBack}
    > {btnText} </button>
 
   
  </div>
  )
}

export default SingleBtn