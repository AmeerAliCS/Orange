import React from 'react';
import {Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FaqsData from '../../pages/faqs_data'


export default function Faqs () {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
    return (
        <>
        <Typography variant='h5' sx={{textAlign: 'center', marginTop: '4rem', marginBottom: '2rem'}}>الاسئلة الشائعة</Typography>
        {FaqsData.map((data) => (
          <List key={data.id}
      sx={{marginLeft: '5rem', marginRight: '5rem', marginBottom: '1rem' , borderColor: '#3E424B', borderStyle: 'solid', borderWidth: 'thin', borderRadius: '0.5rem', textAlign: 'center', maxWidth: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {open ? <MinimizeIcon /> : <AddIcon />}
        </ListItemIcon>
        <Typography variant='h6' sx={{direction: 'rtl',textAlign:"right",width:1,color:"black"}}>{data.question}</Typography>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemText sx={{color:"black" ,direction: 'rtl',textAlign:"right",width:1}} primary={data.answer} />
        </List>
      </Collapse>
    </List>
        ))}
      
        </>
    );
}