import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
const Aboutus1 = "/images/aboutUs1.svg";
const Aboutus2 = "/images/aboutUs2.svg";

const hrefUrl = "https://orange2.vercel.app/about";

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن</title>
        <meta
          name="og:title"
          content="منصة اورنج لخدمات البرمجة والتصميم | من نحن"
        />
        <meta
          name="og:description"
          content="نقدم لكم خدمات مميزة لبرمجة تطبيقات الموبايل والمواقع الالكترونية وبرامج سطح المكتب ومشاريع التخرج ونقدم خدمة التصاميم العصرية بجميع انواعها"
        />
        <meta
          name="keywords"
          content="تطبيقات موبايل, تطبيقات سطح المكتب, مواقع الكترونية, انظمة ادارية, مشاريع تخرج, برامج مطاعم, برامج صيدلية. برامج سوبر ماركت, برامج مخازن, تصميم بوسترات, تصميم شعارات, تصميم هوية بصرية, تصميم فلكس, تصميم رولات, تصميم اعلانات, تصاميم سوشيال ميديا, منصة اورنج,"
        />
        <link rel="canonical" href={hrefUrl} />
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
          <Box width={{ md: "50%", xs: 1 }}>
            <Image
              height="600rem"
              alt="منصة اورنج لخدمات البرمجة والتصميم | من نحن"
              src={Aboutus1}
              width="600rem"
              layout="intrinsic"
            />
          </Box>
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
              UI/UX
            </Typography>
          </Box>
          <Box width={{ md: "50%", xs: 1 }}>
            <Image
              height="400rem"
              alt="   لدينا برامج ومشاريع تخرج جاهزة للبيع وتتوفر لدينا خدمة البرمجة
              الخاصة حسب الطلب (نقوم بتحويل اي فكرة في عقلك الى مشروع حقيقي على"
              src={Aboutus2}
              width="600rem"
              layout="intrinsic"
              style={{ marginBottom: "100px" }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
