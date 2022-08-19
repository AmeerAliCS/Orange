import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

export default function About() {
  return (
        <Box>
    <Stack sx={{ml:10,mr:10, pt: 15 }} direction="row-reverse" justifyItems="center"  justifyContent="space-around">
      <Box width="50%">
        <Typography variant="h2" color="#FF7700" textAlign="center" sx={{pt:10,pb:5
         }}>
          من نحن
        </Typography>
        <Typography variant="body1" color="#000" sx={{pl:10,pr:10,pb:5,direction: 'rtl',
         }} textAlign="justify" fontSize={25} >
         منصة orange للحلول التقنية والبرمجية نقدم خدمات وانظمة اداريه في مختلف المجالات نتميز بكوننا نقدم خدمة عمل المشاريع الخاصه (نظام اداري خاص ، تطبيق موبايل اندرويد و IOS ,عمل موقع ويب خاص ...) باسرع وقت واقل تكلفه متواجدين 7/24 كل ما عليك هو اعطاء المعلومات اللازمة ونحن نتكفل في الباقي
        </Typography>
      </Box>
      <Box component="img"  width={500}
      src="/images/aboutUs1.svg"
      />
    </Stack>
    <Stack sx={{ml:10,mr:10,pt:5 }} direction="row" justifyItems="center"  justifyContent="space-around">
      <Box width="50%">
      
        <Typography variant="body1" color="#000" sx={{pl:10,pr:10,pb:5,direction: 'rtl',
         }} textAlign="justify" fontSize={25} >
نقدم ايضا خدمات التصميم حيث نقوم بتصميم الهويات البصرية مثل الشعار وتصاميم السوشيال ميديا وايضا تصميم البرشور وتصميم الكرنقدم ايضا خدمات التصميم حيث نقوم بتصميم الهويات البصرية مثل الشعار وتصاميم السوشيال ميديا وايضا تصميم البرشور وتصميم الكروت الشخصية وتصاميم UI|UX
بالاضافة الى العديد من الخدمات الاخرى مثل ادارة الصفحات وادارة الاعلانات وتصميم كافة البوسترات الخاصه بعملك لتكن مميزا دوماوت الشخصية وتصاميم UI|UX
بالاضافة الى العديد من الخدمات الاخرى مثل ادارة الصفحات وادارة الاعلانات وتصميم كافة البوسترات الخاصه بعملك لتكن مميزا دوما        </Typography>
      </Box>
      <Box component="img"  width={500}
      src="/images/aboutUs2.svg"
      />
    </Stack>
      </Box>
  );
}
