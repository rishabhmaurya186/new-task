import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function CheckBox({ sx, name, id }) {
  return (
    <Checkbox
      id={id}
      sx={{ color: '#FAA43C', ...sx }} // Apply custom styles
      inputProps={{ 'aria-label': 'controlled' }} // Accessibility label
    />
  );
}

export default CheckBox;
