import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';


export default function Faqs () {
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    return (
        <>
      <List
      sx={{ width: '100%', textAlign: 'center', maxWidth: 660, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {open ? <MinimizeIcon /> : <AddIcon />}
        </ListItemIcon>
        {/* <ListItemText primary="ماهي منصة اورنج ؟"  /> */}
        <Typography variant='h6' sx={{direction: 'rtl',textAlign:"right",width:1,color:"black"}}>ماهي منصة اورنج</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4}}>
            تيست تيست
            <ListItemText sx={{color:"black" ,direction: 'rtl',textAlign:"right",width:1}} primary="منصة orange للحلول التقنية والبرمجية نقدم خدمات وانظمة اداريه في مختلف المجالات نتميز بكوننا نقدم خدمة عمل المشاريع الخاصه (نظام اداري خاص ، تطبيق موبايل اندرويد و IOS ,عمل موقع ويب خاص ...) باسرع وقت واقل تكلفه متواجدين 7/24 كل ما عليك هو اعطاء المعلومات اللازمة ونحن نتكفل في الباقي" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        </>
    );
}