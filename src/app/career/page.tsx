"use client";
import { useEffect, useRef,useState } from "react";
import Career from "../components/career/CarrerCard";
import CareerSection from "../components/career/CareerSection";
import CareerMobile from "../components/career/CareerMobile";
import WhyWork from "../components/career/WhyWork";
import WhyWorkLg from "../components/career/WhyWorkLg";
export default function CareerPage() {

    const [isMobile, setIsMobile] = useState(false);
   
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
return (
    <main className="flex flex-col text-secondary bg-white w-full   ">
      <div className=" px-4  lg:px-8 mt-10 ">
        {/* < CareerSection /> */}
                {isMobile ? <CareerMobile /> : <CareerSection/>}
        <Career />
{isMobile ? <WhyWork /> : <WhyWorkLg/>}
       
      </div>
    </main>
  );
}