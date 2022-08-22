import React from 'react';
import {Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FaqsData from '../../pages/faqs_data'


export default function Faqs () {
  
  const [state, setState] = React.useState(FaqsData);
  const color = "#3F3D56";
  const clickButton = (index) => {
    // 1. Make a  copy of the array
    let temp_state = [...state];
    
    // 2. Make a  copy of the element you want to change it
    let temp_element = { ...temp_state[index] };
    
    // 3. Update the property you're interested in
    temp_element.state = temp_element.state==true?false:true;
    
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[index] = temp_element;
    
    // 5. Set the state to our new copy
    setState( temp_state );
    // console.log(id)
  }

    return (
        <>
        <Typography variant='h5' sx={{color: {color}, fontWeight: 'Bold', textAlign: 'center', marginTop: {xs: '2.5rem', md: '4rem'}, marginBottom: {xs: '2rem', md: '2rem'}}}>الاسئلة الشائعة</Typography>
        {state.map((data,index) => (
          <List key={data.id}
      sx={{marginLeft: {xs: '1.5rem', md: '6rem'}, marginRight: {xs: '1.5rem', md: '6rem'}, marginBottom: '1rem' , borderColor: {color}, borderStyle: 'solid', borderWidth: 'thin', borderRadius: '0.5rem', textAlign: 'center', maxWidth: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={()=>{clickButton(index)}}>
        <ListItemIcon>
          {data.state ? <MinimizeIcon style={{color: color}}/> : <AddIcon style={{color: color}}/>}
        </ListItemIcon>
        <Typography variant='h6' sx={{direction: 'rtl',textAlign:"right",width:1,color: {color}, fontWeight: {md: 'Bold'}}}>{data.question}</Typography>
      </ListItemButton>
      <Collapse in={data.state} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemText sx={{paddingRight: '1rem',paddingLeft: '1rem', paddingTop: '0.2rem', color: {color}, fontSize: '29' ,direction: 'rtl',textAlign:"right",width:1}} primary={data.answer} />
        </List>
      </Collapse>
    </List>
        ))}

        <Typography variant='h5' sx={{color: {color}, textAlign: 'center', marginTop: {xs: '2.5rem', md: '4rem'}, marginBottom: {xs: '2rem', md: '2rem'}}}>هل لديك اسئلة اخرى ؟ راسلنا من هنا</Typography>

      
        </>
    );
}