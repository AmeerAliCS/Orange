import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";
import CustomersReview from "../components/home/CustomersReview";
import Head from "next/head";
import heroGif from "../public/images/heroImage.svg";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Facebook from "../components/faceboo";

export default function Home() {
  return (
    <>
      <Head>
        <title>منصة اورنج</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg" />
      </Head>
      <Hero
        imgUrl={heroGif}
        text="اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى
              جودة واحدث التقنيات وبأنسب الاسعار"
      />
      <Testimonial />
      <ProgrammingService />
      <DesignService />
      <Features />
      <CustomersReview />
      {/* <MessengerCustomerChat
        pageId="110388588223967"
        appId="644175826978240"
        // htmlRef="<REF_STRING>"
      /> */}
      <Facebook />
    </>
  );
}
