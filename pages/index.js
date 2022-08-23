import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";
import CustomersReview from "../components/home/CustomersReview";

export default function Home() {
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
            <CustomersReview/>
        </div>
    );
}
