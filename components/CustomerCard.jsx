import React from 'react';
import {Avatar, Box, CardContent, Stack, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";

export default function CustomerCard(props) {
  return (
      <Box sx={{ width: 370, height: 435, bgcolor:"red", position: "relative" }}>
        ~

          <Typography sx={{
              textAlign: "center",
              mt: "10px",
              px: "20%"
          }}>
              خدمة ممتازة جدا انصح بكم وبشدة شغل سريع وجميل والسعر مناسب كلش اتمنالكم التوفيق والتميز الدائم
          </Typography>

          {/*<div style={{*/}
          {/*    position: 'absolute',*/}
          {/*    color: 'white',*/}
          {/*    paddingTop: "170px",*/}
          {/*    top: 8,*/}
          {/*    left: '50%',*/}
          {/*    transform: 'translateX(-50%)'*/}
          {/*}} >Your text</div>*/}
          <Avatar sx={{
              position: 'absolute',
              width: "100px",
              height: "100px"
          }}>Hello</Avatar>
          <Image layout="fill" src="/images/blue-vector.svg"/>

    </Box>

    // <Card>
    //     <div>
    //         <CardContent>
    //             <div style={{position: 'relative'}} >
    //                 <CardMedia
    //                     component="img"
    //                     image="https://www.w3schools.com/css/img_lights.jpg"
    //                 />
    //                 <div style={{
    //                     position: 'absolute',
    //                     color: 'white',
    //                     top: 8,
    //                     left: '50%',
    //                     transform: 'translateX(-50%)'
    //                 }} >Your text</div>
    //             </div>
    //         </CardContent>
    //     </div>
    // </Card>
  );
}