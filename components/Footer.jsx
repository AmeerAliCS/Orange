import {Avatar, Box, Container, Grid, Paper, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";


const MyTitle = styled("span")(({theme}) => {
    return {
        fontWeight: 900,
        color: "white",
        lineHeight: "1em",
        fontSize: "28px",
        [theme.breakpoints.only('sm')]: {
            fontSize: '18px',
            lineHeight: ".7em",
            fontWeight: 800,

        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px',
            lineHeight: ".6em",
            fontWeight: 900,

        },
    }
});

const StyledBox = styled(Box)(({ssx, theme}) => {
    return ({
        color: "white",
        padding: "1px",
        margin: "1px",
        textAlign: "center",
        fontFamily: "Montserrat",
        letterSpacing: ".1rem",
        lineHeight: "2em",
        display: "block",
        ...ssx,
        fontSize: "20px",
        [theme.breakpoints.only('sm')]: {
            fontSize: '14px',
            letterSpacing: "0.08rem",
            lineHeight: "1.5em",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '10px',
            letterSpacing: "0.08rem",
            lineHeight: "1.5em",
        }
    })
});

const Row = styled(Box)(({ssx}) => {
    return ({
        alignItems: "center",
        display: 'flex',
        justifyContent: 'space-around',
        ...ssx
    });
});


const StyledImg = styled("img")(({ssx, theme}) => {
    return {
        ...ssx,
        [theme.breakpoints.only('xs')]: {
            width: "37px",
            height: "40px",
        }
    }
});
export default function Footer() {
    return (
        <Box
            component="div"
            sx={{
                bgcolor: "#3E424B",
                height: {sm: "300px", md: "357px"},
                mt: "5em",
                mb: "0px",
            }}>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                // alignItems="center"
                spacing={0}>
                
                <Box pt={8}>

                <StyledBox>
                    <MyTitle>سياسة الخصوصية</MyTitle>
                    <Typography>
                        الاحكام والشروط
                    </Typography>
                    
                    <MyTitle>للعمل معنا</MyTitle>
                    <Typography>
                    hr@orange.com
                    </Typography>
                    
                </StyledBox>
                </Box>

                <Box pt={8}>
                <StyledBox>
                    <MyTitle>مركز المساعدة</MyTitle>
                    <Typography>
                    الدعم الفني
                    </Typography>
                    <Typography>
                    الإبلاغ عن مشكلة
                    </Typography>
           
                </StyledBox>
                </Box>


                <Box pt={8}>

                <StyledBox>
                    <MyTitle>حول اورنج</MyTitle>
                    <Typography>
                    الاسئلة الشائعة
                    </Typography>
                    <Typography>
                    مشاريعنا
                    </Typography>
                </StyledBox>
                </Box>

                <Box pt={8}>

                <StyledBox >
                    <StyledImg height="46px"  sx={{
                        width: {sm: "150px", xs: "130px", md: "186px"},
                    }} alt="orange logo" src="/orange.svg"/>
                    <br/>
                    شركة اورنج العالمية<br/>
                    شنو يعني اورنج؟
                    <br/>

                    <br/>
                     <Row ssx={{justifyContent: 'space-evenly'}}>
                       <Link href="https://google.com"><a><Image width="40px" height="60px" alt="instagram-icon" src="/images/instagram.svg"/></a></Link>
                       <Link href="https://google.com"><a><Image width="40px" height="60px" alt="instagram-icon" src="/images/instagram.svg"/></a></Link>
                       <Link href="https://google.com"><a><Image width="40px" height="60px" alt="instagram-icon" src="/images/instagram.svg"/></a></Link>
                    </Row>

                </StyledBox>
                </Box>

            </Stack>
            <StyledBox ssx={{
                fontSize: {xs: "1em", md: "1.5em"}
            }}>
                © Copyright 2022 Orange Platform
            </StyledBox>
        </Box>
    )
}
