import { Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
const ErrorImg = "/images/404.svg";

export default function Error() {
  return (
    <>
      <Head>
        <title>الصفحة غير موجودة 404</title>
        <meta name="og:title" content="" />
        <meta
          name="og:description"
          content=""
        />
        <meta
          name="keywords"
          content=""
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
