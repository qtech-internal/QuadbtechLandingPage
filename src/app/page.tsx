"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ServiceSection from "./components/Home/ServiceSection";
import GetToKnow from "./components/Home/GetToKnow";
import KaiFoundrySection from "./components/Home/KaiFoundrySection";
import TestimonialSection from "./components/Home/TestimonialSection";
import HeroSection from "./components/Home/HeroSection";
import Job from "./components/Home/Job";
import Contact from "./components/Home/Contact";
import HeroMobile from "./components/Home/HeroMobile";

import { openAsBlob } from "fs";
import { motion } from "framer-motion";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <section className="mt-20 container mx-auto">
          {/* <HeroSection /> */}
          {isMobile ? <HeroMobile /> : <HeroSection />}
          <GetToKnow />
          <ServiceSection />
          <KaiFoundrySection />
          <Job />
          <TestimonialSection />
          <Contact />
        </section>
      </motion.div>
    </>
  );
}
