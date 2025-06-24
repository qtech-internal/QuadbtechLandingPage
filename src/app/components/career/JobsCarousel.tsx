import React, { FC, useRef, useState, useEffect, UIEventHandler } from "react";
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
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const SCROLL_TOLERANCE = 2;

  const updateButtonStates = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - SCROLL_TOLERANCE;

    setAtStart(isAtStart);
    setAtEnd(isAtEnd);
  };
  // update button states whenever user scrolls
  const handleScroll: UIEventHandler<HTMLDivElement> = () => {
    updateButtonStates();
  };

  useEffect(() => {
    // A timeout allows the DOM to render and calculate correct dimensions first
    const timer = setTimeout(() => {
      updateButtonStates();
    }, 100);

    window.addEventListener("resize", updateButtonStates);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateButtonStates);
    };
  }, [currentJobs]);

  // one-page scroll function
  const scrollPage = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by 90% of the container's width for a nice page-like effect
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Handlers for the new "DRAG" control
  const handleScrollLeft = () => {
    if (!atStart) {
      scrollPage("left");
    }
  };

  const handleScrollRight = () => {
    if (!atEnd) {
      scrollPage("right");
    }
  };

  return (
    <div className="block md:hidden relative w-full max-w-[90vw] mx-auto">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
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

      <div className="absolute right-2 top-[53%] transform -translate-y-1/2 z-40 border-theme border-2 rounded-full md:hideen">
        <div className="w-26 h-26 bg-white rounded-full text-theme flex items-center justify-center z-30">
          <div className="flex items-center gap-2 z-30 text-p px-3">
            <ChevronLeft
              className={`w-6 h-6 transition-opacity ${atStart ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
              onClick={handleScrollLeft}
            />
            <span className="font-bold select-none">DRAG</span>
            <ChevronRight
              className={`w-6 h-6 transition-opacity ${atEnd ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
              onClick={handleScrollRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCarousel;
