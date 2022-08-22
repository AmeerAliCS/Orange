import React from 'react';
import {Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FaqsData from '../../pages/faqs_data'


export default function Faqs () {
    const initialState = FaqsData;
  
  const [state, setState] = React.useState(initialState);
  const clickButton = (index) => {
    // 1. Make a shallow copy of the array
    let temp_state = [...state];
    
    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[index] };
    
    // 3. Update the property you're interested in
    temp_element.st = temp_element.st==true?false:true;
    
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[index] = temp_element;
    
    // 5. Set the state to our new copy
    setState( temp_state );
    // console.log(id)
  }

    return (
        <>
        <Typography variant='h5' sx={{textAlign: 'center', marginTop: '4rem', marginBottom: '2rem'}}>الاسئلة الشائعة</Typography>
        {state.map((data,index) => (
          <List key={data.id}
      sx={{marginLeft: '5rem', marginRight: '5rem', marginBottom: '1rem' , borderColor: '#3E424B', borderStyle: 'solid', borderWidth: 'thin', borderRadius: '0.5rem', textAlign: 'center', maxWidth: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={()=>{clickButton(index)}}>
        <ListItemIcon>
          {data.st ? <MinimizeIcon /> : <AddIcon />}
        </ListItemIcon>
        <Typography variant='h6' sx={{direction: 'rtl',textAlign:"right",width:1,color:"black"}}>{data.question}</Typography>
      </ListItemButton>
      <Collapse in={data.st} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemText sx={{color:"black" ,direction: 'rtl',textAlign:"right",width:1}} primary={data.answer} />
        </List>
      </Collapse>
    </List>
        ))}
      
        </>
    );
}