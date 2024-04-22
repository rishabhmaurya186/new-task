import React from 'react'

function Mybutton({text}) {
  return (
    <div className="flex items-center justify-center mt-3">
              <button type="submit" className="w-[50%] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white shadow-lg  "  
               style={{
                backgroundColor: '#FAA43C',
                transition: 'background-color 0.3s ease', // Adding transition for smooth effect
              }}
              // Add hover effect
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f88826')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#FAA43C')}
             
             >
                {text}
              </button>
            </div>
  )
}

export default Mybutton