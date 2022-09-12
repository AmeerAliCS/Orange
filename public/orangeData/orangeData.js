import Desktop_icon from "../programming_service_icon/desktop_icon.svg";
import mobile_icon from "../programming_service_icon/mobile_icon.svg";
import website_icon from "../programming_service_icon/website_icon.svg";
import ui_ux_icon from "../programming_service_icon/ui_ux_icon.svg";
import graduation_icon from "../programming_service_icon/graduation_icon.svg";
import company_icon from "../programming_service_icon/company_icon.svg";
import social_media_icon from "../design_service_icon/social_media_icon.svg";
import card_design_icon from "../design_service_icon/card_design_icon.svg";
import magazine_design_icon from "../design_service_icon/magazine_design_icon.svg";
import brochure_design_icon from "../design_service_icon/brochure_design_icon.svg";
import poster_design_icon from "../design_service_icon/poster_design_icon.svg";
import safety_app from "../projects_icon/safety_app.svg";
import covid_app from "../projects_icon/covid_app.svg";
import qr_code from "../projects_icon/qr_code.svg";
import satellite from "../projects_icon/satellite.svg";
import installments from "../projects_icon/installments.svg";
import money_app from "../projects_icon/money_app.svg";
import logo_design_icon from "../design_service_icon/logo_design_icon.svg";

import svgex from "../images/svgex.svg";
import person from "../images/person.svg";
import svgcode from "../images/svgcode.svg";
import img1 from "../images/man.jpeg";
import img2 from "../images/qw.gif";
import img3 from "../images/img3.jpeg";
import vec1 from "../images/blue-vector.svg";
import vec2 from "../images/orange-vector.svg";
import vec3 from "../images/dark-vector.svg";

export const ORANGE_EMAIL = "info@orange.com";

export const programmingServiceData = [
  {
    id: 0,
    title: "برمجة تطبيقات الدسكتوب",
    imageUrl: Desktop_icon,
  },
  {
    id: 1,
    title: "برمجة تطبيقات الموبايل",
    imageUrl: mobile_icon,
  },
  {
    id: 2,
    title: "تصميم مواقع الكترونية",
    imageUrl: website_icon,
  },
  {
    id: 3,
    title: "UI/UX تصميم واجهات",
    imageUrl: ui_ux_icon,
  },
  {
    id: 4,
    title: "برمجة مشاريع التخرج",
    imageUrl: graduation_icon,
  },
  {
    id: 5,
    title: "برمجة مشاريع للشركات",
    imageUrl: company_icon,
  },
];

export const designServiceData = [
  {
    id: 0,
    title: "تصاميم سوشيال ميديا ",
    imageUrl: social_media_icon,
  },
  {
    id: 1,
    title: "تصميم شعارات",
    imageUrl: logo_design_icon,
  },
  {
    id: 2,
    title: "تصميم كروت",
    imageUrl: card_design_icon,
  },
  {
    id: 3,
    title: "تصميم مجلة",
    imageUrl: magazine_design_icon,
  },
  {
    id: 4,
    title: "تصميم بروشور",
    imageUrl: brochure_design_icon,
  },
  {
    id: 5,
    title: "تصميم بوسترات",
    imageUrl: poster_design_icon,
  },
];

export const ourProgrammingData = [
  {
    id: 0,
    title: "تطبيق السلامة والمساعدة",
    imageUrl: safety_app,
  },
  {
    id: 1,
    title: "تطبيق مراقبة مرضى كورونا",
    imageUrl: covid_app,
  },
  {
    id: 2,
    title: "تطبيق تسجيل الحضور",
    imageUrl: qr_code,
  },
  {
    id: 3,
    title: "موقع مزود خدمة انترنت",
    imageUrl: satellite,
  },
  {
    id: 4,
    title: "تطبيق الاقساط",
    imageUrl: installments,
  },
  {
    id: 5,
    title: "تطبيق تحويل الاموال",
    imageUrl: money_app,
  },
];

export const ourDesignData = [
  {
    id: 0,
    title: "No Name",
    imageUrl: Desktop_icon,
  },
  {
    id: 1,
    title: "No Name",
    imageUrl: mobile_icon,
  },
  {
    id: 2,
    title: "No Name",
    imageUrl: website_icon,
  },
  {
    id: 3,
    title: "No Name",
    imageUrl: ui_ux_icon,
  },
  {
    id: 4,
    title: "No Name",
    imageUrl: graduation_icon,
  },
  {
    id: 5,
    title: "No Name",
    imageUrl: company_icon,
  },
];

export const testimonialData = [
  {
    id: 0,
    num: "+8",
    title: "سنوات خبرة",
    imageUrl: svgex,
  },
  {
    id: 1,
    num: "+50",
    title: "زبون من دول مختلفه",
    imageUrl: person,
  },
  {
    id: 2,
    num: "+120",
    title: "مشروع",
    imageUrl: svgcode,
  },
];

export const customersReviewData = [
  {
    text: "خدمة ممتازة جداً انصح بها وبشدة شغل سريع وجميل والسعر مناسب كلش اتمنالكم التوفيق والتميز الدائم",
    vector: vec1,
    userImage: img3,
    color: "blue",
  },
  {
    text: "افضل خدمة رأيتها من ناحية السرعة والسعر اتمنى لكم التوفيق والتطور الدائم وانصح الجميع بهذه المنصة",
    vector: vec2,
    userImage: img1,
    color: "orange",
  },
  {
    text: "حولت فكرتي لمشروع حقيقي بسهولة جداً وية اورنج جنت متوقعه لازم انتظر اشهر حتى اصنع مشروعي شكراً",
    vector: vec3,
    userImage: img2,
    color: "#424A60",
  },
];

export const faqsData = [
  {
    id: 0,
    state: false,
    question: "ماهي منصة اورنج ؟",
    answer:
      "منصة orange للحلول التقنية والبرمجية نقدم خدمات وانظمة اداريه في مختلف المجالات نتميز بكوننا نقدم خدمة عمل المشاريع الخاصه (نظام اداري خاص ، تطبيق موبايل اندرويد و IOS ,عمل موقع ويب خاص ...) باسرع وقت واقل تكلفه متواجدين 7/24 كل ما عليك هو اعطاء المعلومات اللازمة ونحن نتكفل في الباقي",
  },
  {
    id: 1,
    state: false,
    question: "كيف يمكنني طلب خدمة ؟",
    answer:
      "يمكنك طلب خدمة من خلال مراسلتنا عبر الوسائل المتوفرة داخل الموقع مثل الايميل او الفورم او من خلال وسائل التواصل الاجتماعي",
  },
  {
    id: 2,
    state: false,
    question: "هل بإمكاني إلغاء الطلب ؟",
    answer:
      "يمكنك إلغاء الطلب في حال لم نقم بالبدء به وقبل دفع العربون وخلاف ذلك سيسقط حقك في المطالبة بالعربون المتفق عليه بين طالب الخدمة ومنصة اورنج",
  },
  {
    id: 3,
    state: false,
    question: "ماهو العربون ؟",
    answer:
      "هو مبلغ مالي يمثل 50% من من سعر المشروع يتم دفعه من قبل الزبون إلى منصة اورنج لضمان حق الطرفين وعدم الاخلال بالاتفاق",
  },
  {
    id: 4,
    state: false,
    question: "كيف تحمي Orange خصوصيتي وتحافظ على أمان معلوماتي؟",
    answer:
      "نعلم أن الأمان والخصوصية هما عاملان مهمان بالنسبة إليك مثلما هو الأمر بالنسبة إلينا أيضًا. ونضع ضمن أولوياتنا توفير أمان قوي وجعلك واثقًا من أمان معلوماتك وإمكانية وصولك إليها عند الحاجة.",
  },
];
