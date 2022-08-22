import React from 'react';
import {Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FaqsData from '../../pages/faqs_data'


export default function Faqs () {
    const [open, setOpen] = React.useState(false);
    const initialState = [
      {
        id: 0,st:true,
        question: 'ماهي منصة اورنج ؟',
        answer: 'منصة orange للحلول التقنية والبرمجية نقدم خدمات وانظمة اداريه في مختلف المجالات نتميز بكوننا نقدم خدمة عمل المشاريع الخاصه (نظام اداري خاص ، تطبيق موبايل اندرويد و IOS ,عمل موقع ويب خاص ...) باسرع وقت واقل تكلفه متواجدين 7/24 كل ما عليك هو اعطاء المعلومات اللازمة ونحن نتكفل في الباقي',
    },
    {
        id: 1,st:true,
        question: 'كيف يمكنني طلب خدمة ؟',
        answer: 'يمكنك طلب خدمة من خلال مراسلتنا عبر الوسائل المتوفرة داخل الموقع مثل الايميل او الفورم او من خلال وسائل التواصل الاجتماعي',
    },
    {
        id: 2,st:false,
        question: 'هل بإمكاني إلغاء الطلب ؟',
        answer: 'يمكنك إلغاء الطلب في حال لم نقم بالبدء به وقبل دفع العربون وخلاف ذلك سيسقط حقك في المطالبة بالعربون المتفق عليه بين طالب الخدمة ومنصة اورنج',
    },
    {
        id: 3,st:false,
        question: 'ماهو العربون ؟',
        answer: 'هو مبلغ مالي يمثل 50% من من سعر المشروع يتم دفعه من قبل الزبون إلى منصة اورنج لضمان حق الطرفين وعدم الاخلال بالاتفاق',
    },
    {
        id: 4,st:false,
        question: 'كيف تحمي Orange خصوصيتي وتحافظ على أمان معلوماتي؟',
        answer: 'نعلم أن الأمان والخصوصية هما عاملان مهمان بالنسبة إليك مثلما هو الأمر بالنسبة إلينا أيضًا. ونضع ضمن أولوياتنا توفير أمان قوي وجعلك واثقًا من أمان معلوماتك وإمكانية وصولك إليها عند الحاجة.',
    },
    
    ];
  
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
  const handleClick = () => {
    
    setOpen(!open);
  };
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