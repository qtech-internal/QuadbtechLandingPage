"use client";
import { useRef, useEffect } from "react";
import JobCard from "../JobCard";
import { ChevronLeft, ChevronRight, Router } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Job {
  title: string;
  location: string;
  experience: string;
  imageSrc: string;
}

export default function Home() {
  const jobs: Job[] = [
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home9.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home8.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
  ];
const router = useRouter();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (sliderRef.current) {
  //       const container = sliderRef.current;
  //       const cardWidth = container.offsetWidth; 
  //       const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //       if (container.scrollLeft + cardWidth >= maxScrollLeft) {
  //         container.scrollTo({ left: 0, behavior: "smooth" });
  //       } else {
  //         container.scrollBy({ left: cardWidth, behavior: "smooth" });
  //       }
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-white p-4 flex flex-col items-center translate-y-[-40px] relative   ">
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-10 w-full justify-center sm:justify-between ">
  <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-black leading-tight text-center sm:text-left">
    Join Our Mission to <br className="block sm:hidden" />
    <span className="block sm:inline">Build the Future.</span>
  </h1>
 <Link href="/career" prefetch={true}>
  <button className="px-6 py-2 rounded-full button-theme hidden md:block lg:block ">
    Explore More
  </button>
</Link>
</div>

      <div
        ref={sliderRef}
        className="w-full flex gap-10 cursor-grab active:cursor-grabbing px-4 relative scroll-smooth -py-4 overflow-x-auto overflow-y-hidden sm:scroll-smooth mx-auto"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
          scrollSnapType: "x mandatory", 
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[80%] md:w-[350px] lg:w-[350px] snap-start "
          >
            <JobCard
              title={job.title}
              location={job.location}
              experience={job.experience}
              imageSrc={job.imageSrc}
              isOdd={index % 2 === 0}
            />
          </div>
        ))}
      </div>

      {/* Scroll */}
    <div className="
  absolute right-2 top-1/2 transform -translate-y-1/2 z-40 border-theme border-2 rounded-full mt-20
">

        <div className="w-26 h-26  bg-white rounded-full text-theme flex items-center justify-center cursor-pointer z-30  ">
          <div className="flex items-center gap-2 z-30 text-p ">
            <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={handleScrollLeft} />
            <span className="font-bold">DRAG</span>
            <ChevronRight className="w-6 h-6 cursor-pointer" onClick={handleScrollRight} />
          </div>
        </div>
      </div>
    
<Link href="/career" prefetch={true}>
 <button className="block sm:hidden px-6 py-2 rounded-full button-theme mt-6 translate-y-[50px]  sm:mt-0">
  Explore More
</button>
</Link>
    </div>
  );
}