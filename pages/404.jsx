import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
const ErrorImg = "/images/404.svg";

export default function Error() {
  return (
    <>
      <Head>
        <title> 404</title>
        <meta name="og:title" content="منصة اورنج لخدمات البرمجة والتصميم" />
        <meta
          name="og:description"
          content="نقدم لكم خدمات مميزة لبرمجة تطبيقات الموبايل والمواقع الالكترونية وبرامج سطح المكتب ومشاريع التخرج ونقدم خدمة التصاميم العصرية بجميع انواعها"
        />
        <meta
          name="keywords"
          content="تطبيقات موبايل, تطبيقات سطح المكتب, مواقع الكترونية, انظمة ادارية, مشاريع تخرج, برامج مطاعم, برامج صيدلية. برامج سوبر ماركت, برامج مخازن, تصميم بوسترات, تصميم شعارات, تصميم هوية بصرية, تصميم فلكس, تصميم رولات, تصميم اعلانات, تصاميم سوشيال ميديا, منصة اورنج,"
        />
      </Head>
      <Box
        height={{ md: "600px", xs: "300px" }}
        width={1}
        sx={{ textAlign: "center" }}
      >
        <Image
          draggable="false"
          loading="lazy"
          alt="404 error orange platform"
          src={ErrorImg}
          width="800"
          height="550"
        />
      </Box>
    </>
  );
}
