import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";
import CustomerCard from "../components/CustomerCard";
import {Stack} from "@mui/material";

export default function Home() {
    let customers = [
        {
            text: "خدمة ممتازة جدا انصح بكم وبشدة شغل سريع وجميل والسعر مناسب كلش اتمنالكم التوفيق والتميز الدائم",
            vector: "/images/blue-vector.svg",
            userImage: "/images/ali.png",
            color: "blue",
        },
        {
            text: "خدمة ممتازة جدا انصح بكم وبشدة شغل سريع وجميل والسعر مناسب كلش اتمنالكم التوفيق والتميز الدائم",
            vector: "/images/orange-vector.svg",
            userImage: "/images/ali.png",
            color: "orange",
        },
        {
            text: "خدمة ممتازة جدا انصح بكم وبشدة شغل سريع وجميل والسعر مناسب كلش اتمنالكم التوفيق والتميز الدائم",
            vector: "/images/dark-vector.svg",
            userImage: "/images/ali.png",
            color: "#424A60",
        },
    ];


    return (
        <div>
            <Hero
             imgUrl="/images/heroImage.gif"
             text="اصنع موقعك الالكتروني او تطبيقك او مشروع تخرجك او تصميمك بأعلى
              جودة واحدث التقنيات وبأنسب الاسعار" 
             />
            <Testimonial/>
            <ProgrammingService/>
            <DesignService/>
            <Features/>
            <Stack direction="row" spacing={.3} justifyContent="" sx={{
                justifyContent: {xs: "center", sm: "space-evenly"}
            }}>
                {
                    customers.map((v, index) =>
                        <div key={index}>
                            <CustomerCard text={v.text} userImage={v.userImage} vector={v.vector} color={v.color}/>
                        </div>)
                }
            </Stack>
        </div>
    );
}
