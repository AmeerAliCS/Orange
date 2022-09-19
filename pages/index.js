import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";
import CustomersReview from "../components/home/CustomersReview";
import Head from "next/head";
const heroGif = "/images/heroImage.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>منصة اورنج لخدمات البرمجة والتصميم</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="منصة اورنج لخدمات البرمجة والتصميم | نقدم لكم خدمات مميزة لبرمجة تطبيقات الموبايل والمواقع الالكترونية وبرامج سطح المكتب ومشاريع التخرج ونقدم خدمة التصاميم العصرية بجميع انواعها الطباعية وغير الطباعية" />
        <meta name="robots" content="index" />
        <link rel="shortcut icon" href="icon.svg" />
      </Head>

      <Hero
        imgUrl={heroGif}
        alt="منصة اورنج لخدمات البرمجة والتصميم"
        text="اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى
              جودة واحدث التقنيات وبأنسب الاسعار"
      />
      <Testimonial />
      <ProgrammingService />
      <DesignService />
      <Features />
      <CustomersReview />
    </>
  );
}
