import React from 'react';
import './Sidenav.css'

const ShoppingCart = ({  brandName, subscriberCount,bg,icon }) => {
    return (
        <div className="w-[90%]  md:w-[31%]   mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          
            <div className= { `flex items-center justify-between p-4  text-white h-[150px] ${bg}`} >
                <div className="flex items-center">
                  <div className='mt-3'><img src={ icon} /></div>  
                
                    <div className='flex flex-col  justify-start ' style={{color:'black'}} >
                        <p className="  ml-7 text-[20px] font-thin   " style={{fontWeight:'300'}}>{brandName}</p>
                        <h1 className="text-3xl font-semibold ml-7 mt-4" style={{fontWeight:'300'}}>{ subscriberCount }</h1>
                    </div>
                   
                </div>
                
            </div> 
        </div>
    );
};

export default ShoppingCart;
