import { Box } from "@mui/material";
import Head from "next/head";
//import Image from "next/image";
const ErrorImg = "/images/404.svg";

export default function Error() {
  return (
    <>
      <Head>
        <title> 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg" />
      </Head>
      <Box
        height={{ md: "600px", xs: "300px" }}
        width={1}
        sx={{ textAlign: "center" }}
      >
        <img priority alt="Faqs Image" src={ErrorImg} width="60%" />
      </Box>
    </>
  );
}
