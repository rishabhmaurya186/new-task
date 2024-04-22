import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function CustomOutlineBtn({buttonText, width, height,fontSize,padding}) {
  return (
    <Button variant="outlined" style={{
      
    color: '#FAA43C', // Text color
    borderColor: '#FAA43C', // Border color
    borderWidth: '2px', // Border width
    borderStyle: 'solid', // Border styl
      width: { width }, // Set your custom width here
      height: {height}, // Set your custom height here
      fontSize: { fontSize },
      padding: {padding},
      borderRadius:'10px',
      textTransform: 'none'
        // Button font size
}}
    >
       {buttonText}
    </Button>
);
}

export default CustomOutlineBtn