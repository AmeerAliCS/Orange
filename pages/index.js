import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";
import CustomersReview from "../components/home/CustomersReview";
import Head from "next/head";
const heroGif = "/images/heroImage.svg";

const hrefUrl = "https://orange-hbiqsa047-aliadel199.vercel.app/";
export default function Home() {
  return (
    <>
      <Head>
        <title>منصة اورنج لخدمات البرمجة والتصميم</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" content="منصة اورنج لخدمات البرمجة والتصميم" />
        <meta
          name="og:description"
          content="نقدم لكم خدمات مميزة لبرمجة تطبيقات الموبايل والمواقع الالكترونية وبرامج سطح المكتب ومشاريع التخرج ونقدم خدمة التصاميم العصرية بجميع انواعها"
        />
        <meta
          name="keywords"
          content="تطبيقات موبايل, تطبيقات سطح المكتب, مواقع الكترونية, انظمة ادارية, مشاريع تخرج, برامج مطاعم, برامج صيدلية. برامج سوبر ماركت, برامج مخازن, تصميم بوسترات, تصميم شعارات, تصميم هوية بصرية, تصميم فلكس, تصميم رولات, تصميم اعلانات, تصاميم سوشيال ميديا, منصة اورنج,"
        />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta name="robots" content="all" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Arabic" />
        <meta name="author" content="orange platform" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="canonical" href={hrefUrl} />
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
