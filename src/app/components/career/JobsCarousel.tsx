// import React, { FC, useRef, useState, useEffect, UIEventHandler } from "react";
// import JobCard from "../JobCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export interface Job {
//   title: string;
//   location: string;
//   experience: string;
//   imageSrc: string;
// }

// interface JobsCarouselProps {
//   currentJobs: Job[];
// }

// const JobsCarousel: FC<JobsCarouselProps> = ({ currentJobs }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [atStart, setAtStart] = useState(true);
//   const [atEnd, setAtEnd] = useState(false);

//   const SCROLL_TOLERANCE = 2;

//   const updateButtonStates = () => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const isAtStart = el.scrollLeft <= 0;
//     const isAtEnd =
//       el.scrollLeft + el.clientWidth >= el.scrollWidth - SCROLL_TOLERANCE;

//     setAtStart(isAtStart);
//     setAtEnd(isAtEnd);
//   };
//   // update button states whenever user scrolls
//   const handleScroll: UIEventHandler<HTMLDivElement> = () => {
//     updateButtonStates();
//   };

//   useEffect(() => {
//     // A timeout allows the DOM to render and calculate correct dimensions first
//     const timer = setTimeout(() => {
//       updateButtonStates();
//     }, 100);

//     window.addEventListener("resize", updateButtonStates);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", updateButtonStates);
//     };
//   }, [currentJobs]);

//   // one-page scroll function
//   const scrollPage = (direction: "left" | "right") => {
//     const el = scrollRef.current;
//     if (!el) return;
//     // Scroll by 90% of the container's width for a nice page-like effect
//     const amount = el.clientWidth * 0.9;
//     el.scrollBy({
//       left: direction === "left" ? -amount * 5 : amount * 5,
//       behavior: "smooth",
//     });
//   };

//   // Handlers for the new "DRAG" control
//   const handleScrollLeft = () => {
//     if (!atStart) {
//       scrollPage("left");
//     }
//   };

//   const handleScrollRight = () => {
//     if (!atEnd) {
//       scrollPage("right");
//     }
//   };

//   return (
//     <div className="block md:hidden relative w-full max-w-[90vw] mx-auto">
//       <div
//         ref={scrollRef}
//         onScroll={handleScroll}
//         className="
//           flex gap-6 overflow-x-auto
//           py-4 px-2
//           scrollbar-hidden scroll-smooth
//           cursor-grab active:cursor-grabbing
//         "
//       >
//         {currentJobs.map((job, i) => (
//           <div className="min-w-[280px] sm:min-w-[300px] flex-shrink-0" key={i}>
//             <JobCard
//               title={job.title}
//               location={job.location}
//               experience={job.experience}
//               imageSrc={job.imageSrc}
//               isOdd={i % 2 === 0}
//               buttonText="Apply Now"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="absolute right-2 top-[53%] transform -translate-y-1/2 z-40 border-theme border-2 rounded-full md:hideen">
//         <div className="w-26 h-26 bg-white rounded-full text-theme flex items-center justify-center z-30">
//           <div className="flex items-center gap-2 z-30 text-p px-3">
//             <ChevronLeft
//               className={`w-6 h-6 transition-opacity ${atStart ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
//               onClick={handleScrollLeft}
//             />
//             <span className="font-bold select-none">DRAG</span>
//             <ChevronRight
//               className={`w-6 h-6 transition-opacity ${atEnd ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
//               onClick={handleScrollRight}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsCarousel;

"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import JobCard from "../JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface Job {
  title: string;
  location: string;
  experience: string;
  imageSrc: string;
}

interface JobsCarouselProps {
  currentJobs: Job[];
  showHeadingAndButton?: boolean;
    disableMdHidden?: boolean;
    isFromHome?: boolean; 
}

const JobsCarousel: FC<JobsCarouselProps> = ({ currentJobs, showHeadingAndButton , disableMdHidden = false, isFromHome = false,}) => {
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const atStart = currentIndex === 0;
  const atEnd = currentIndex >= currentJobs.length - 1;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return;

    const card = el.children[currentIndex] as HTMLElement;
    if (!card) return;

    const scrollLeftPosition = card.offsetLeft - el.offsetLeft;
    el.scrollTo({ left: scrollLeftPosition, behavior: "smooth" });
  }, [currentIndex]);

  const handleScrollLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleScrollRight = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, currentJobs.length - 1));

  return (
    <div  className={`relative w-full max-w-[90vw] mx-auto ${
        disableMdHidden ? "" : "md:hidden"
      }`}>
      {/* Heading */}
      {showHeadingAndButton && (
        <div className="text-center mb-6 px-4">
          <h1 className="text-2xl font-extrabold text-black leading-tight">
            Join Our Mission to <br />
            <span className="inline-block">Build the Future.</span>
          </h1>
        </div>
      )}

      {/* Scrollable Job Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto py-4 px-2 scroll-smooth scrollbar-hidden cursor-grab active:cursor-grabbing"
      >
        {currentJobs.map((job, i) => (
          <div key={i} className="min-w-[280px] sm:min-w-[300px] flex-shrink-0">
            <JobCard
              title={job.title}
              location={job.location}
              experience={job.experience}
              imageSrc={job.imageSrc}
              isOdd={i % 2 === 0}
             buttonText={isFromHome ? "Know More" : "Apply Now"}
            />
          </div>
        ))}
      </div>

      {/* DRAG Controls */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-40 border-theme border-2 rounded-full">
        <div className="w-26 h-26 bg-white rounded-full text-theme flex items-center justify-center z-30 px-3">
          <ChevronLeft
            className={`w-6 h-6 transition-opacity ${
              atStart ? "opacity-30 cursor-not-allowed" : "cursor-pointer text-[#B73B06]"
            }`}
            onClick={handleScrollLeft}
          />
          <span className="font-bold select-none text-[#B73B06]">DRAG</span>
          <ChevronRight
            className={`w-6 h-6 transition-opacity ${
              atEnd ? "opacity-30 cursor-not-allowed" : "cursor-pointer text-[#B73B06]"
            }`}
            onClick={handleScrollRight}
          />
        </div>
      </div>

      {/* Explore Button */}
      {showHeadingAndButton && (
        <div className="w-full text-center mt-8">
          <Link href="/career" prefetch>
            <button className="px-6 py-2 rounded-full button-theme mt-6">Explore More</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default JobsCarousel;
