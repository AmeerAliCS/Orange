import Head from "next/head";
import Hero from "../components/home/Hero";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ORANGE_EMAIL } from "../public/orangeData/orangeData";
import { Stack } from "@mui/system";
const ContactImg = "/images/contact-us.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const facbookUrl = "www.facebook.com/fb.oranjs";
const telegramUrl = "https://t.me/tel_orange";
const emailUrl = "info.orange.com";
const instgramUrl = "www.instagram.com/i.oranjs";

export default function Contact() {
  return (
    <>
      <Head>
        <title>تواصل معنا</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg " />
      </Head>

      <Hero
        imgUrl={ContactImg}
        text="تمتاز المشاريع المبرمجة من قبل منصة اورنج بأنها برمجيات عالية الجودة والسرعة وتمت برمجتها بأحدث التقنيات والمعايير العالمية
           وكذلك تمتاز التصاميم المقدمة من منصتنا بأنها تصاميم عصرية تواكب التطور "
        disabledButton={true}
      />

      <Box
        sx={{
          fontSize: { xs: 22, sm: 30 },
          direction: "rtl",
          mt: 6,
        }}
      >
        <Typography
          sx={{ color: "#3c3a54", ml: { xs: 5 }, mr: { xs: 5 } }}
          textAlign="center"
          fontSize="inherit"
        >
          يمكنكم طلب خدمة من خلال مراسلتنا عبر الايميل
        </Typography>
        <Typography
          sx={{ color: "#3c3a54", ml: { xs: 5 }, mr: { xs: 5 } }}
          fontSize={{ xs: 16, sm: 22 }}
          display="block"
          textAlign="center"
        >
          <a href="mailto:info.oranjs@gmail.com">{emailUrl}</a>
        </Typography>

        <Typography
          sx={{ color: "#3c3a54", ml: { xs: 5 }, mr: { xs: 5 } }}
          textAlign="center"
          mt={5}
          fontSize="inherit"
        >
          او من خلال مراسلتنا عبر مواقع التواصل الاجتماعي فيس بوك انستغرام.
        </Typography>
        <Stack direction="column" width={1} alignItems="center" sx={{ mt: 5 }}>
          <Stack direction="column" alignItems="flex-end">
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
              spacing={1}
            >
              <Typography
                sx={{ color: "#3c3a54", ml: { xs: 2 }, mr: { xs: 5 } }}
                fontSize={{ xs: 14, sm: 22 }}
                textAlign="center"
              >
                <a href="mailto:info.oranjs@gmail.com">{emailUrl}</a>
              </Typography>
              <EmailIcon fontSize="large" htmlColor="#FC9338" />
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
              spacing={1}
            >
              <Typography
                sx={{ color: "#3c3a54", ml: { xs: 2 }, mr: { xs: 5 } }}
                fontSize={{ xs: 14, sm: 22 }}
                textAlign="center"
              >
                <a href="https://www.facebook.com/fb.oranjs?_rdc=1&_rdr">
                  {facbookUrl}
                </a>
              </Typography>
              <FacebookIcon fontSize="large" htmlColor="#FC9338" />
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
              spacing={1}
            >
              <Typography
                sx={{ color: "#3c3a54", ml: { xs: 2 }, mr: { xs: 5 } }}
                fontSize={{ xs: 14, sm: 22 }}
                textAlign="center"
              >
                <a href="https://www.instagram.com/i.oranjs/">{instgramUrl}</a>
              </Typography>
              <InstagramIcon fontSize="large" htmlColor="#FC9338" />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
              spacing={1}
            >
              <Typography
                sx={{ color: "#3c3a54", ml: { xs: 2 }, mr: { xs: 5 } }}
                fontSize={{ xs: 14, sm: 22 }}
                textAlign="center"
              >
                <a href="https://t.me/tel_orange">{telegramUrl}</a>
              </Typography>
              <TelegramIcon fontSize="large" htmlColor="#FC9338" />
            </Stack>
          </Stack>
        </Stack>
        {/* <Typography
          sx={{ color: "#3c3a54", ml: { xs: 5 }, mr: { xs: 5 } }}
          textAlign="center"
          mt={3}
          fontSize="inherit"
        >
          كما يمكنكم طلب الخدمة من خلال الاستمارة التالية
        </Typography>

        <Box
          dir="rtl"
          sx={{
            textAlign: "center",
            pt: 5,
            width: "70%",
            margin: "auto",
          }}
        >
          <div>
            <TextField
              placeholder="اسمك"
              type="text"
              sx={{
                width: "35%",
              }}
            />
            <TextField
              placeholder="البريد الالكتروني"
              type="email"
              sx={{
                width: "60%",
                mr: "5%",
              }}
            />
          </div>
          <div>
            <TextField
              placeholder="نوع الخدمة التي تريدها"
              type="text"
              sx={{
                pt: 3,
                width: "100%",
              }}
            />
          </div>

          <div>
            <TextField
              placeholder="تفاصيل الخدمة"
              multiline
              rows={4}
              fullWidth={true}
              sx={{ pt: 3 }}
            />
          </div>

          <div>
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#FF7700",
                fontSize: "25px",
                width: "150px",
                marginTop: "5vh",
              }}
              variant="contained"
            >
              ارسال
            </Button>
          </div>
        </Box> */}
      </Box>
    </>
  );
}
