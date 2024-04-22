

import React, { useState, useEffect, useRef } from 'react';

const OTPVerification = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(180); // 2 minutes in seconds
  const inputRefs = useRef([]);

  // Function to start the timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timer); // Stop the timer when it reaches 00:00
          return prevSeconds;
        }
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to handle changes in OTP input
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value !== '' && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Function to handle key down events in OTP input
  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  // Format remaining time as minutes:seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div style={{  marginTop: '50px' ,}} className='w-[70%] ml-[10%] '> 
      <h2 className='mb-5'>Enter OTP</h2>
      <div className='flex justify-between w-[100%] '>
        {otp.map((digit, index) => (
          <input
           className='rounded-md w-8 h-8 md:w-14 md:h-14'
            key={index}
            type="text"
            maxLength="1"
            style={{
              
              margin: '0 .3rem',
              border:'1px solid gray',
              fontSize: '20px',
              textAlign: 'center',
            }}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
        
        <div className='relative right-9 top-8 mt-3 md:mt-7  '  style={{color:"#FAA43C"}}> {formatTime(seconds)}
        </div>
       
      </div>
      
    </div>
  );
};

export default OTPVerification;

