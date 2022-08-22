import React from 'react';
import {Avatar, Box, CardContent, Stack, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";


import CardActions from '@mui/material/CardActions';
import {styled} from "@mui/material/styles";

const StyledBox = styled(Box)(({theme}) => {
    return ({
        width: 270,
        height: 330,
        borderRadius: 15,
        fontSize: 20,
        [theme.breakpoints.only('xs')]: {
            width: 235,
            height: 300,
        },
    });

});

export default function CustomersReviewCard({text, vector, userImage, color}) {
    return (
        <StyledBox>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{fontSize: 40, lineHeight: 1, color: color}}>
                        “
                    </Typography>

                    <Typography sx={{
                        textAlign: "center",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        px: "18%",
                        pb: "3%"
                    }}>
                        {text}
                    </Typography>
                </CardContent>

                <CardActions sx={{
                    p: 0, display: "flex",
                    justifyContent: "center"
                }}>

                    <Avatar src={userImage}
                            sx={{
                                width: 90,
                                height: 90,
                                zIndex: 1,
                                position: "absolute",
                                border: "2px solid white",
                                mb: 7,
                            }}>H</Avatar>

                    <Box component="img" alt="vector" src={vector}
                         sx={{width: "100%", height: "auto"}}/>
                </CardActions>
            </Card>
        </StyledBox>
    );
}


// export default function CustomersReviewCard(props) {
//     return (
//         <Box sx={{width: 240, height: 300, bgcolor: "red"}}>
//             ~
//
//             <Typography sx={{
//                 textAlign: "center",
//                 mt: "10px",
//                 px: "20%"
//             }}>
//                 خدمة ممتازة جدا انصح بكم وبشدة شغل سريع وجميل والسعر مناسب كلش اتمنالكم التوفيق والتميز الدائم
//             </Typography>
//
//             {/*<div style={{*/}
//             {/*    position: 'absolute',*/}
//             {/*    color: 'white',*/}
//             {/*    paddingTop: "170px",*/}
//             {/*    top: 8,*/}
//             {/*    left: '50%',*/}
//             {/*    transform: 'translateX(-50%)'*/}
//             {/*}} >Your text</div>*/}
//
//
//             <Box sx={{
//                 display: "flex",
//                 justifyContent: "center"
//             }}>
//                 <Avatar sx={{
//                     width: "80px",
//                     height: "80px",
//                     zIndex: 1,
//                     mt: "10px",
//                     border: "3px solid white"
//                 }}>H</Avatar>
//             </Box>
//
//
//             <br/>
//                 <Image style={{
//                     marginTop: "90px",
//                     position: "static",
//                     paddingTop: "180px",
//                 }}
//                        width="240px"
//                        height="100%"
//                        alt="vector"
//                        src="/images/blue-vector.svg"/>
//             </Box>
//
//
//
//         // <Card>
//         //     <div>
//         //         <CardContent>
//         //             <div style={{position: 'relative'}} >
//         //                 <CardMedia
//         //                     component="img"
//         //                     image="https://www.w3schools.com/css/img_lights.jpg"
//         //                 />
//         //                 <div style={{
//         //                     position: 'absolute',
//         //                     color: 'white',
//         //                     top: 8,
//         //                     left: '50%',
//         //                     transform: 'translateX(-50%)'
//         //                 }} >Your text</div>
//         //             </div>
//         //         </CardContent>
//         //     </div>
//         // </Card>
//     );
// }