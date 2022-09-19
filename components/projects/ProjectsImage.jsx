import Hero from "../home/Hero";
const projectsImage = "/projects_icon/projects_hero.svg";
export default function ProjectsImage() {
  return (
    <>
      <Hero
        imgUrl={projectsImage}
        alt="مشاريع منصة اورنج لخدمات البرمجة والتصميم"
        text="تمتاز المشاريع المبرمجة من قبل منصة اورنج بأنها برمجيات عالية الجودة والسرعة وتمت برمجتها بأحدث التقنيات والمعايير العالمية
           وكذلك تمتاز التصاميم المقدمة من منصتنا بأنها تصاميم عصرية تواكب التطور "
      />
    </>
  );
}
