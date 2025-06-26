"use client";
import { useState, useEffect } from "react";
import ServiceSection from "./components/Home/ServiceSection";
import GetToKnow from "./components/Home/GetToKnow";
import KaiFoundrySection from "./components/Home/KaiFoundrySection";
import TestimonialSection from "./components/Home/TestimonialSection";
import TestimonialMobile from "./components/Home/TestimonialMobile";
import HeroSection from "./components/Home/HeroSection";
import Job from "./components/Home/Job";
import Contact from "./components/Home/Contact";
import HeroMobile from "./components/Home/HeroMobile";
import KaiMobile from "./components/Home/KaiMobile";
import ServiceMobile from "./components/Home/ServiceMobile";
import GetToKnowMobile from "./components/Home/GetToKnowMobile";
import JobsCarousel from "./components/career/JobsCarousel";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isService, setIsService] = useState(false);
  const [jobWidthForTab, setJobWidthForTab] =useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 900); // Change to 1570 for mobile view
      setIsService(width < 768); // Keep this for service section
      setJobWidthForTab(width < 1002)

    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const jobs = [
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home7.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home8.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home7.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home8.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home8.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home7.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
  ];

  return (
    <>
      <section className="mt-20 container mx-auto">
        {isMobile ? <HeroMobile /> : <HeroSection />}
        {isService ? <GetToKnowMobile /> : <GetToKnow />}

        {isService ? <ServiceMobile /> : <ServiceSection />}
        {isMobile ? <KaiMobile /> : <KaiFoundrySection />}
        {isMobile ? <TestimonialMobile /> : <TestimonialSection />}
        {isMobile || jobWidthForTab ?  <JobsCarousel currentJobs={jobs} showHeadingAndButton={true}  disableMdHidden={true} isFromHome={true} />:<Job/>}

        <Contact />
      </section>
    </>
  );
}
