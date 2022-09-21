import Head from "next/head";
import FaqsImage from "../components/faqs/FaqsImage";
import FaqsQuestions from "../components/faqs/FaqsQuestions";

const hrefUrl = "https://orange2.vercel.app/faqs";

export default function Faqs() {
  return (
    <>
      <Head>
        <title>الاسئلة الشائعة</title>
        <meta
          name="title"
          content="منصة اورنج لخدمات البرمجة والتصميم | الاسئلة الشائعه"
        />
        <meta
          name="description"
          content="نقدم لكم خدمات مميزة لبرمجة تطبيقات الموبايل والمواقع الالكترونية وبرامج سطح المكتب ومشاريع التخرج ونقدم خدمة التصاميم العصرية بجميع انواعها"
        />
        <meta
          name="keywords"
          content="تطبيقات موبايل, تطبيقات سطح المكتب, مواقع الكترونية, انظمة ادارية, مشاريع تخرج, برامج مطاعم, برامج صيدلية. برامج سوبر ماركت, برامج مخازن, تصميم بوسترات, تصميم شعارات, تصميم هوية بصرية, تصميم فلكس, تصميم رولات, تصميم اعلانات, تصاميم سوشيال ميديا, منصة اورنج,"
        />
        <link rel="canonical" href={hrefUrl} />
      </Head>
      <FaqsImage />
      <FaqsQuestions />
    </>
  );
}
