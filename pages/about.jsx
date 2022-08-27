import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg " />
      </Head>
      <Box>
        <Stack
          sx={{ pt: { md: 5, xs: "12%" }, mr: { md: 10 }, ml: { md: 10 } }}
          direction={{ md: "row-reverse", xs: "column" }}
          justifyItems="center"
        >
          <Box width={{ md: "50%", xs: 1 }}>
            <Typography
              variant="h2"
              color="#FF7700"
              textAlign="center"
              sx={{ pt: { md: 5, xs: 2 } }}
            >
              من نحن
            </Typography>
            <Typography
              variant="body1"
              color="#000"
              sx={{ p: 5, direction: "rtl" }}
              textAlign="justify"
              fontSize={25}
            >
              منصة orange للحلول التقنية والبرمجية نقدم خدمات وانظمة اداريه في
              مختلف المجالات نتميز بكوننا نقدم خدمة عمل المشاريع الخاصه (نظام
              اداري خاص ، تطبيق موبايل اندرويد و IOS ,عمل موقع ويب خاص ...)
              باسرع وقت واقل تكلفه متواجدين 7/24 كل ما عليك هو اعطاء المعلومات
              اللازمة ونحن نتكفل في الباقي
            </Typography>
          </Box>
          <Box
            component="img"
            src="/images/aboutUs1.svg"
            width={{ md: "50%", xs: 1 }}
          />
        </Stack>
        <Stack
          sx={{ mr: { md: 10 }, ml: { md: 10 } }}
          direction={{ md: "row", xs: "column" }}
          justifyItems="center"
        >
          <Box width={{ md: "50%", xs: 1 }}>
            <Typography
              variant="body1"
              color="#000"
              sx={{ p: 5, direction: "rtl" }}
              textAlign="justify"
              fontSize={25}
            >
              نقدم ايضا خدمات التصميم حيث نقوم بتصميم الهويات البصرية مثل الشعار
              وتصاميم السوشيال ميديا وايضا تصميم البرشور وتصميم الكرنقدم ايضا
              خدمات التصميم حيث نقوم بتصميم الهويات البصرية مثل الشعار وتصاميم
              السوشيال ميديا وايضا تصميم البرشور وتصميم الكروت الشخصية وتصاميم
              UI|UX بالاضافة الى العديد من الخدمات الاخرى مثل ادارة الصفحات
              وادارة الاعلانات وتصميم كافة البوسترات الخاصه بعملك لتكن مميزا
              دوماوت الشخصية وتصاميم UI|UX بالاضافة الى العديد من الخدمات الاخرى
              مثل ادارة الصفحات وادارة الاعلانات وتصميم كافة البوسترات الخاصه
              بعملك لتكن مميزا دوما{" "}
            </Typography>
          </Box>
          <Box
            component="img"
            src="/images/aboutUs2.svg"
            width={{ md: "50%", xs: 1 }}
          />
        </Stack>
      </Box>
    </>
  );
}
