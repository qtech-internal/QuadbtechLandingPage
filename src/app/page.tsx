"use client";
import { useState, useEffect } from "react";
import ServiceSection from "./components/Home/ServiceSection";
import GetToKnow from "./components/Home/GetToKnow";
import KaiFoundrySection from "./components/Home/KaiFoundrySection";
import TestimonialSection from "./components/Home/TestimonialSection";
import HeroSection from "./components/Home/HeroSection";
import Job from "./components/Home/Job";
import Contact from "./components/Home/Contact";
import HeroMobile from "./components/Home/HeroMobile";
import KaiMobile from "./components/Home/KaiMobile";
import ServiceMobile from "./components/Home/ServiceMobile";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isService, setIsService] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      setIsService(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <section className="mt-20 container mx-auto">
        {isMobile ? <HeroMobile /> : <HeroSection />}
        <GetToKnow />
        {isService ? <ServiceMobile/> : <ServiceSection />}
        {/* <ServiceSection /> */}
        {/* <KaiFoundrySection /> */}
        {/* <KaiMobile /> */}
        {isMobile ? <KaiMobile /> : <KaiFoundrySection/>}
        <TestimonialSection />
        <Job />
        <Contact />
      </section>

    </>
  );
}
