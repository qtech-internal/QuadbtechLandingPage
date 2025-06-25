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

import React, { FC, useRef, useState, useEffect } from "react";
import JobCard from "../JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Job {
  title: string;
  location: string;
  experience: string;
  imageSrc: string;
}

interface JobsCarouselProps {
  currentJobs: Job[];
}

const JobsCarousel: FC<JobsCarouselProps> = ({ currentJobs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // The button states are now derived directly from the index
  const atStart = currentIndex === 0;
  const atEnd = currentIndex >= currentJobs.length - 1;

  // This effect runs whenever the currentIndex changes, handling the scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return;

    const card = el.children[currentIndex] as HTMLElement;
    if (!card) return;

    // Calculate the position of the target card
    const scrollLeftPosition = card.offsetLeft - el.offsetLeft;

    el.scrollTo({
      left: scrollLeftPosition,
      behavior: "smooth",
    });
  }, [currentIndex]); // Re-run the effect when currentIndex changes

  const handleScrollLeft = () => {
    // Go to the previous index, but not below 0
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleScrollRight = () => {
    // Go to the next index, but not past the last item
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, currentJobs.length - 1)
    );
  };

  return (
    <div className="block md:hidden relative w-full max-w-[90vw] mx-auto">
      <div
        ref={scrollRef}
        className="
          flex gap-6 overflow-x-auto
          py-4 px-2
          scrollbar-hidden scroll-smooth
          cursor-grab active:cursor-grabbing
        "
      >
        {currentJobs.map((job, i) => (
          <div className="min-w-[280px] sm:min-w-[300px] flex-shrink-0" key={i}>
            <JobCard
              title={job.title}
              location={job.location}
              experience={job.experience}
              imageSrc={job.imageSrc}
              isOdd={i % 2 === 0}
              buttonText="Apply Now"
            />
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-[55%] transform -translate-y-1/2 z-40 border-theme border-2 rounded-full md:hideen">
        <div className="w-26 h-26 bg-white rounded-full text-theme flex items-center justify-center z-30">
          <div className="flex items-center gap-2 z-30 text-p px-3">
            <ChevronLeft
              className={`w-6 h-6 transition-opacity ${
                atStart
                  ? "opacity-30  cursor-not-allowed"
                  : "cursor-pointer text-[#B73B06] "
              }`}
              onClick={handleScrollLeft}
            />
            <span className="font-bold select-none text-[#B73B06]">DRAG</span>
            <ChevronRight
              className={`w-6 h-6 transition-opacity ${
                atEnd
                  ? "opacity-30 cursor-not-allowed"
                  : "cursor-pointer text-[#B73B06]"
              }`}
              onClick={handleScrollRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCarousel;
