"use client";
import { useEffect, useRef, useState } from "react";
import Career from "../components/career/CarrerCard";
import CareerSection from "../components/career/CareerSection";
import CareerMobile from "../components/career/CareerMobile";
import WhyWork from "../components/career/WhyWork";
import WhyWorkLg from "../components/career/WhyWorkLg";
export default function CareerPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTab(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="flex flex-col text-secondary bg-white w-full    ">
      <div className=" px-4 lg:px-0  mt-10 ">
        {/* < CareerSection /> */}
        {isMobile ? <CareerMobile /> : <CareerSection />}
        <Career />
        {isMobile || isTab ? <WhyWork /> : <WhyWorkLg />}
      </div>
    </main>
  );
}
