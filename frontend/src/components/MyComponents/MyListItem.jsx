import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function MyListItem({text,svg}) {
  return (
    
    <ListItem 
    className='rounded-lg '  disablePadding sx={{color:'black'  }}>
      <ListItemButton  >
        <ListItemIcon className='ListItems'>
            <img src={svg}/>
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
      </ListItem>
    
  )
}

export default MyListItem