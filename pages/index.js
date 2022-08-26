import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";
import CustomersReview from "../components/home/CustomersReview";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Orange</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg " />
      </Head>
      <Hero
        imgUrl="/images/heroImage.gif"
        text="اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى
              جودة واحدث التقنيات وبأنسب الاسعار"
      />
      <Testimonial />
      <ProgrammingService />
      <DesignService />
      <Features />
      <CustomersReview />
    </div>
  );
}
