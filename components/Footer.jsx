import {Avatar, Box, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import {FacebookOutlined, Instagram, Mail} from "@mui/icons-material";
import {ORANGE_EMAIL} from "../public/orangeData/orangeData";


const MyTitle = styled("span")(({theme}) => {
    return {
        fontWeight: 900,
        color: "white",
        lineHeight: "1em",
        fontSize: "28px",
        [theme.breakpoints.only('sm')]: {
            fontSize: '18px',
            lineHeight: ".9em",
            fontWeight: 800,

        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px',
            lineHeight: ".7em",
            fontWeight: 900,

        },
    }
});

const StyledBox = styled(Box)(({xxs, ssx, theme}) => {
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
            lineHeight: "1.9em",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '10px',
            letterSpacing: "0.08rem",
            lineHeight: "1.9em",
            ...xxs
        }
    })
});


const StyledAvatar = styled(Avatar)(({ssx, theme}) => {
    return {
        ...ssx,
        [theme.breakpoints.only('sm')]: {
            width: 35,
            height: 35,
        },
        [theme.breakpoints.only('xs')]: {
            width: 25,
            height: 25,
            fontSize: "1rem",
        }
    }
});



const SocialMedia = ({sx, fontSize}) => {
    return (<Stack direction="row" spacing={0} justifyContent="space-around" sx={{
        ...sx
    }}>
        <Link href="https://google.com">
            <a><StyledAvatar sx={{backgroundColor: "white"}}><Mail fontSize={fontSize}
                                                                   htmlColor="#FC9338"/></StyledAvatar></a>
        </Link>
        <Link href="https://google.com">
            <a><StyledAvatar sx={{backgroundColor: "white"}}><Instagram fontSize={fontSize}
                                                                        htmlColor="#FC9338"/></StyledAvatar></a>
        </Link>
        <Link href="https://google.com">
            <a><StyledAvatar sx={{backgroundColor: "white"}}><FacebookOutlined fontSize={fontSize}
                                                                               htmlColor="#FC9338"/></StyledAvatar></a>
        </Link>
    </Stack>);
}


const LogoAboute = ({socialStyle}) => {
    return (
        <StyledBox>
            <Image height="46px" width={186} sx={{
                width: {sm: "150px", xs: "130px", md: "186px"},
            }} alt="orange logo" src="/orange.svg"/>
            <br/>
            شركة اورنج العالمية<br/>

            <br/>

            <SocialMedia sx={socialStyle}/>

        </StyledBox>
    );
}


export default function Footer() {
    return (
        <Box
            component="div"
            sx={{
                bgcolor: "#3E424B",
                height: {sm: "280px", md: "357px"},
                mt: "5em",
                mb: "0px",
            }}>

            <Stack
                direction="row"
                justifyContent="space-around"
                // alignItems="center"
                spacing={0}
                paddingTop={{xs: 2, sm: 7}}>
                <StyledBox>
                    <MyTitle>للعمل معنا</MyTitle>
                    <br/>
                    <Link href={"mailto:".concat(ORANGE_EMAIL)}>hr@orange.com</Link>

                </StyledBox>

                <StyledBox>
                    <MyTitle>المساعدة</MyTitle>
                    <br/>
                    <Link href={"mailto:".concat(ORANGE_EMAIL)}>الدعم الفني</Link>
                    <br/>
                    <Link href={"mailto:".concat(ORANGE_EMAIL)}>الإبلاغ عن مشكلة</Link>
                    <br/>
                </StyledBox>


                <StyledBox>
                    <MyTitle>حول اورنج</MyTitle>
                    <br/>
                    <Link href="/faqs">الاسئلة الشائعة</Link>
                    <br/>
                    <Link href="/projects">مشاريعنا</Link>
                    <br/>
                </StyledBox>

                <Box
                    sx={{
                        display: {xs: "none", sm: "flex"}
                    }}>
                    <LogoAboute/>
                </Box>

            </Stack>


            <Box
                sx={{
                    display: {xs: "flex", sm: "none"},
                    justifyContent: "center",
                    alignItems: "center",
                    p: "auto",
                    m: "auto"
                }}>
                <LogoAboute socialStyle={{
                    display: "none"
                }}/>
            </Box>

            <SocialMedia sx={{
                display: {xs: "flex", sm: "none"},
                justifyContent: "center",
                gap: 5
            }} fontSize="1erm"/>

            <Typography sx={{
                textAlign: "center",
                color: "white",
                py: 1,
                fontSize: {xs: "1em", md: "1.3em"},
            }}>
                © Copyright 2022 Orange Platform
            </Typography>

        </Box>
    )
}
