import Head from "next/head";
import Hero from "../components/home/Hero";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
const ContactImg = "/images/contact-us.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const hrefUrl = "https://orange2.vercel.app/contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>تواصل معنا</title>
        <meta name="description" content="يحتوي هذا القسم على وسائل للتواصل مع منصة اورنج" />

        <meta
          name="og:title"
          content="منصة اورنج لخدمات البرمجة والتصميم | تواصل معنا"
        />
        <meta
          name="og:description"
          content="يحتوي هذا القسم على وسائل للتواصل مع منصة اورنج"
        />
        <meta
          name="keywords"
          content="منصة اورنج,تواصل معنا"
        />
        <link rel="canonical" href={hrefUrl} />
      </Head>

      <Hero
        imgUrl={ContactImg}
        alt="منصة اورنج لخدمات البرمجة والتصميم | تواصل معنا"
        text="تمتاز المشاريع المبرمجة من قبل منصة اورنج بأنها برمجيات عالية الجودة والسرعة وتمت برمجتها بأحدث التقنيات والمعايير العالمية
           وكذلك تمتاز التصاميم المقدمة من منصتنا بأنها تصاميم عصرية تواكب التطور "
        disabledButton={true}
      />

      <Box
        sx={{
          fontSize: { xs: 22, sm: 30 },
          // direction: "rtl",
          mt: 6,
        }}
      >
        <Typography
          sx={{ color: "#3c3a54", ml: { xs: 5 }, mr: { xs: 5 } }}
          textAlign="center"
          mt={5}
          fontSize="inherit"
        >
          يمكنكم التواصل معنا لطلب خدمة من خلال الوسائل التالية{" "}
        </Typography>
        <Stack
          direction="row"
          width={1}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Link href="https://www.facebook.com/fb.oranjs">
            <a target="_blank">
              <FacebookIcon fontSize="large" htmlColor="#FC9338" />
            </a>
          </Link>

          <Link href="https://www.instagram.com/i.oranjs">
            <a target="_blank">
              <InstagramIcon fontSize="large" htmlColor="#FC9338" />
            </a>
          </Link>

          <Link href="https://t.me/tel_orange">
            <a target="_blank">
              <TelegramIcon fontSize="large" htmlColor="#FC9338" />
            </a>
          </Link>

          <Link href="mailto:info.oranjs@gmail.com">
            <a target="_blank">
              <EmailIcon fontSize="large" htmlColor="#FC9338" />
            </a>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
