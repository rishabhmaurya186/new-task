import React from 'react'
import HeaderLogo from '../assets/image/image-2LogoImg.png'

function Header({setSidenav,sidenavHidden}) {
  return (
    <div><div className='w-[100%] py-[3%] px-[3%] lg:px-28 h-[15vh]  lg:py-0 flex justify-between items-center lg:block'><img src={HeaderLogo} />
     <button onClick= {()=>{
      setSidenav(prev => !prev)
      
    }} >
      {setSidenav && (sidenavHidden ?<i className="fa-solid fa-bars lg:hidden text-3xl "></i>:<i className="fa-solid fa-xmark text-3xl"></i>)}
      </button>
     
      
      </div>
    </div>
  )
}

export default Header