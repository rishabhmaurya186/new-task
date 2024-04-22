
import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

function CustomButton({ buttonText, width, height,fontSize,padding,bgColor,px,py}) {
  
  const defaultBgColor = '#FAA43C';

    return (
      <Button variant="contained" color="primary" className={`rounded-lg w-[${width}] h-[${height}] px-[${px}] py-[${py}]`} style={{
        // Set your custom width here
        // Set your custom height here
        fontSize: { fontSize },
        padding: {padding},
        borderRadius:'10px',
        backgroundColor: bgColor || defaultBgColor,
        textTransform: 'none'
      }
      
      } >
          {buttonText}
      </Button>
  );
  
}

export default CustomButton