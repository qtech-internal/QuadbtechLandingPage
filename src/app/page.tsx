import Image from "next/image";
import ServiceSection from "./components/Home/ServiceSection";
import GetToKnow from "./components/Home/GetToKnow";
import KaiFoundrySection from "./components/Home/KaiFoundrySection";
import TestimonialSection from "./components/Home/TestimonialSection";
import HeroSection from "./components/Home/HeroSection";
import Job from "./components/Home/Job";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <>
      <section className="mt-20 container mx-auto">
        <HeroSection />
        <GetToKnow/>
        <ServiceSection />
        <KaiFoundrySection />
        <Job/>
        <TestimonialSection />
        <Contact />
      </section>
        
   </>

   
  );
}
