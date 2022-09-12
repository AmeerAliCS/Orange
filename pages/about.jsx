import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Aboutus1 from "../public/images/aboutUs1.svg";
import Aboutus2 from "../public/images/aboutUs2.svg";

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg" />
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
              منصة orange لخدمات البرمجة والتصميم ومشاريع التخرج نقدم لكم برامج
              بأحدث التقنيات البرمجية وتصاميم عصرية بأنسب الاسعار وافضل جودة
              وسرعة في التسليم مع خدمة العملاء المتوفرة على مدار الساعة (24/7){" "}
            </Typography>
          </Box>
          <Image priority height="500rem" alt="Faqs Image" src={Aboutus1} />
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
              لدينا برامج ومشاريع تخرج جاهزة للبيع وتتوفر لدينا خدمة البرمجة
              الخاصة حسب الطلب (نقوم بتحويل اي فكرة في عقلك الى مشروع حقيقي على
              شكل موقع الكتروني او تطبيق موبايل او برنامج سطح مكتب) كما تتوفر
              لدينا خدمة التصاميم بجميع انواعها الطباعية وغير الطباعية
              كالبوسترات وتصميم الشعارات وتصميم الكروت الشخصية وبطاقات الدعوة
              وتصاميم الفلكسات والفليرات وتصميم المجلات والبروشرات وتصاميم ال
              UI/UX{" "}
            </Typography>
          </Box>
          <Image priority height="500rem" alt="Faqs Image" src={Aboutus2} />
        </Stack>
      </Box>
    </>
  );
}
