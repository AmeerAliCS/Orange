import DesignService from "../components/home/DesignService";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ProgrammingService from "../components/home/ProgrammingService";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <ProgrammingService />
      <DesignService />
      <Features />
    </div>
  );
}