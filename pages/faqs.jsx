import Head from "next/head";
import FaqsImage from "../components/faqs/FaqsImage";
import FaqsQuestions from "../components/faqs/FaqsQuestions";

const hrefUrl = "https://orange2.vercel.app/faqs";

export default function Faqs() {
  return (
    <>
      <Head>
        <title>الاسئلة الشائعة</title>
        <meta name="description" content="يحتوي هذا القسم على بعض الاسئلة الشائعة ويمكنكم سؤالنا عبر وسائل التواصل المتوفرة داخل الموقع" />
        <meta
          name="og:title"
          content="منصة اورنج لخدمات البرمجة والتصميم | الاسئلة الشائعه"
        />
        <meta
          name="og:description"
          content="يحتوي هذا القسم على بعض الاسئلة الشائعة ويمكنكم سؤالنا عبر وسائل التواصل المتوفرة داخل الموقع"
        />
        <meta
          name="keywords"
          content="منصة اورنج,الاسئلة الشائعة"
        />
        <link rel="canonical" href={hrefUrl} />
      </Head>
      <FaqsImage />
      <FaqsQuestions />
    </>
  );
}
