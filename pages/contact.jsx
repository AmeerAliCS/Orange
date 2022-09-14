import Head from "next/head";
import Hero from "../components/home/Hero";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ORANGE_EMAIL } from "../public/orangeData/orangeData";
const ContactImg = "/images/contact-us.svg";

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
        <Typography textAlign="center" fontSize="inherit">
          يمكنكم طلب خدمة من خلال مراسلتنا عبر الايميل
        </Typography>
        <Typography
          fontSize={{ xs: 16, sm: 22 }}
          display="block"
          textAlign="center"
        >
          <a href="mailto:info@orange.com">{ORANGE_EMAIL}</a>
        </Typography>

        <Typography textAlign="center" mt={5} fontSize="inherit">
          او من خلال مراسلتنا عبر مواقع التواصل الاجتماعي فيس بوك انستغرام.
        </Typography>
        <Typography textAlign="center" mt={3} fontSize="inherit">
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
        </Box>
      </Box>
    </>
  );
}
