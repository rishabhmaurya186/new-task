import  { useRef } from 'react';

import lock from '../assets/image/FramelockPng.png'

import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
  const dashboardButton = useRef('');

  return (
    <div className='mt-3'>
      <Header/>
      <div className='lg:flex '>
        <div className='lg:w-[65%] xl:w-[50%] lg:px-28 lg:py-10 px-10' >
          <div className=" flex  to-teal-300">
               <Outlet/>
          </div>
        </div >
        <div className='flex justify-center items-center lg:w-[35%] xl:w-[50%] px-10 mt-9 mb-10 lg:mb-0 lg:mt-0 '>
          <img src={lock} alt="" />
        </div>
      </div>
    </div>
  )
};

export default HomeLayout;
