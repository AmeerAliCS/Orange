import ProjectsImage from "../components/projects/ProjectsImage";
import OurProgramming from "../components/projects/OurProgramming";
import OurDesign from "../components/projects/OurDesign";
import Head from "next/head";

const hrefUrl = "https://orange2.vercel.app/projects";
export default function Projects() {
  return (
    <>
      <Head>
        <title>مشاريعنا</title>
        <meta
          name="og:title"
          content=" منصة اورنج لخدمات البرمجة والتصميم | مشاريعنا"
        />
        <meta
          name="og:description"
          content="نقدم خدمات مميزه في البرمجة والتصميم وتنفيذ كافة المشاريع الخاصه ومشاريع التخرج وهنا جزئ من مشاريعنا البرمجية ومجموعه من تصاميمنا "
        />
        <meta
          name="keywords"
          content="تطبيقات موبايل, تطبيقات سطح المكتب, مواقع الكترونية, انظمة ادارية, مشاريع تخرج, برامج مطاعم, برامج صيدلية. برامج سوبر ماركت, برامج مخازن, تصميم بوسترات, تصميم شعارات, تصميم هوية بصرية, تصميم فلكس, تصميم رولات, تصميم اعلانات, تصاميم سوشيال ميديا, منصة اورنج,"
        />
        <link rel="canonical" href={hrefUrl} />
      </Head>
      <ProjectsImage />
      <OurProgramming />
      <OurDesign />
    </>
  );
}
