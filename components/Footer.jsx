import { Avatar, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { FacebookOutlined, Instagram, Mail } from "@mui/icons-material";
import { ORANGE_EMAIL } from "../public/orangeData/orangeData";
import TelegramIcon from "@mui/icons-material/Telegram";

const year = new Date().getFullYear();

const MyTitle = styled("span")(({ theme }) => {
  return {
    fontWeight: 900,
    color: "white",
    lineHeight: "1em",
    fontSize: "28px",
    [theme.breakpoints.only("sm")]: {
      fontSize: "18px",
      lineHeight: ".9em",
      fontWeight: 800,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "12px",
      lineHeight: ".7em",
      fontWeight: 900,
      fontFamily: "Tajawal ,sans-serif",
    },
  };
});

const StyledBox = styled(Box)(({ xxs, ssx, theme }) => {
  return {
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
      letterSpacing: "0.08rem",
      lineHeight: "1.9em",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "10px",
      letterSpacing: "0.08rem",
      lineHeight: "1.9em",
      ...xxs,
    },
  };
});

const StyledAvatar = styled(Avatar)(({ ssx, theme }) => {
  return {
    ...ssx,
    [theme.breakpoints.only("sm")]: {
      width: 35,
      height: 35,
    },
    [theme.breakpoints.only("xs")]: {
      width: 25,
      height: 25,
      fontSize: "1rem",
    },
  };
});

const SocialMedia = ({ sx, fontSize }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      sx={{
        ...sx,
      }}
    >
      <Link href="https://t.me/Oranjsbot">
        <a target="_blank">
          <StyledAvatar sx={{ backgroundColor: "white" }}>
            <TelegramIcon fontSize={fontSize} htmlColor="#FC9338" />
          </StyledAvatar>
        </a>
      </Link>
      <Link href="https://www.instagram.com/i.oranjs">
        <a target="_blank">
          <StyledAvatar sx={{ backgroundColor: "white" }}>
            <Instagram fontSize={fontSize} htmlColor="#FC9338" />
          </StyledAvatar>
        </a>
      </Link>
      <Link href="https://www.facebook.com/fb.oranjs">
        <a target="_blank">
          <StyledAvatar sx={{ backgroundColor: "white" }}>
            <FacebookOutlined fontSize={fontSize} htmlColor="#FC9338" />
          </StyledAvatar>
        </a>
      </Link>
    </Stack>
  );
};

const LogoAboute = ({ socialStyle }) => {
  return (
    <StyledBox>
      <Image
        draggable="false"
        loading="lazy"
        height="46px"
        width={186}
        sx={{
          width: { sm: "150px", xs: "130px", md: "186px" },
        }}
        alt="منصة اورنج لخدمات البرمجة والتصميم"
        src="/Logo.svg"
      />
      <br />
      <Typography> منصة اورنج لخدمات البرمجة والتصميم</Typography>
      <br />

      <SocialMedia sx={socialStyle} />
    </StyledBox>
  );
};

export default function Footer() {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#3E424B",
        height: { sm: "280px", md: "330px" },
        mt: "5em",
        mb: "0px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={0}
        paddingTop={{ xs: 2, sm: 7 }}
      >
        <StyledBox>
          <Typography>
            <MyTitle>للعمل معنا </MyTitle>
          </Typography>{" "}
          <br />
          <Link href={"mailto:".concat(ORANGE_EMAIL)}>
            <Typography sx={{ cursor: "pointer" }}>
              info.oranjs@gmail.com
            </Typography>
          </Link>
        </StyledBox>

        <StyledBox>
          <Typography>
            <MyTitle>المساعدة</MyTitle>
          </Typography>

          <br />
          <Link href={"mailto:".concat(ORANGE_EMAIL)}>
            <Typography sx={{ cursor: "pointer" }}>الدعم الفني</Typography>
          </Link>
          <br />
          <Link href={"mailto:".concat(ORANGE_EMAIL)}>
            <Typography sx={{ cursor: "pointer" }}>الإبلاغ عن مشكلة</Typography>
          </Link>
          <br />
        </StyledBox>

        <StyledBox>
          <Typography>
            <MyTitle>حول اورنج </MyTitle>
          </Typography>

          <br />
          <Link href="/faqs">
            <Typography sx={{ cursor: "pointer" }}> الاسئلة الشائعة</Typography>
          </Link>
          <br />
          <Link href="/projects">
            <Typography sx={{ cursor: "pointer" }}> مشاريعنا</Typography>
          </Link>
          <br />
        </StyledBox>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <LogoAboute />
        </Box>
      </Stack>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          alignItems: "center",
          p: "auto",
          m: "auto",
        }}
      >
        <LogoAboute
          socialStyle={{
            display: "none",
          }}
        />
      </Box>

      <SocialMedia
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          gap: 1,
        }}
        fontSize="1erm"
      />

      <Typography
        sx={{
          textAlign: "center",
          color: "white",
          py: 1,
          fontSize: { xs: "1em", md: "1.3em" },
          cursor: "default",
        }}
      >
        © Copyright {year} Orange Platform
      </Typography>
    </Box>
  );
}
