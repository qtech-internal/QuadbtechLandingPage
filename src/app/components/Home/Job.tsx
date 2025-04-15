// "use client";
// import { useRef, useEffect } from "react";
// import JobCard from "../JobCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Job {
//   title: string;
//   location: string;
//   experience: string;
//   imageSrc: string;
// }

// export default function Home() {
//   const jobs: Job[] = [
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home19.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home8.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home7.png" },
//   ];

//   const sliderRef = useRef<HTMLDivElement | null>(null);


  
//   const handleScrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

  
//   const handleScrollLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };


//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     if (sliderRef.current) {
//   //       const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

//   //       if (sliderRef.current.scrollLeft >= maxScrollLeft) {
//   //         sliderRef.current.scrollLeft = 0; 
//   //       } else {
//   //         sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   //       }
//   //     }
//   //   }, 3000); 

//   //   return () => clearInterval(interval); 
//   // }, []);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (sliderRef.current) {
//         const container = sliderRef.current;
//         const cardWidth = container.offsetWidth; // dynamically get visible area width
//         const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
//         if (container.scrollLeft + cardWidth >= maxScrollLeft) {
//           container.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           container.scrollBy({ left: cardWidth, behavior: "smooth" });
//         }
//       }
//     }, 3000);
  
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div className=" bg-white p-4 flex flex-col items-center space-y-10 relative ">
//     <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-10 w-full justify-center sm:justify-between text-center sm:text-left">
//   <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
//     Join Our Mission to Build the Future.
//   </h1>
//   <button className=" px-6 py-2 rounded-full button-theme hidden lg:block md:block">
//     Explore More
//   </button>
//       </div>
//       <div
// //   ref={sliderRef}
// //   className="w-full flex gap-10 cursor-grab active:cursor-grabbing px-4 relative scroll-smooth py-10 overflow-x-auto overflow-y-hidden"
// //   style={{
// //     scrollbarWidth: "none",
// //     msOverflowStyle: "none",
// //   }}
//         // >
//         ref={sliderRef}
//         className="w-full flex gap-10 cursor-grab active:cursor-grabbing px-4 relative scroll-smooth py-10 
//           overflow-x-hidden sm:overflow-x-hidden md:overflow-x-auto overflow-y-hidden
//           md:scroll-smooth"
//         style={{
//           scrollbarWidth: "none", // Firefox
//           msOverflowStyle: "none", // IE/Edge
//         }}
//       >
//   {jobs.map((job, index) => (
//     <div key={index}
//     // className="flex-shrink-0">
//       className="flex-shrink-0 w-full sm:w-[300px] md:w-[300px] lg:w-[350px]">
//       <JobCard
//         title={job.title}
//         location={job.location}
//         experience={job.experience}
//         imageSrc={job.imageSrc}
//         isOdd={index % 2 === 0}
//       />
//     </div>
//   ))}
// </div>
//  {/*Scroll  */}
//       <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-40 border-theme border-2 rounded-full  lg:block">
//         <div className="w-24 h-24 bg-white  rounded-full text-theme flex items-center justify-center  cursor-pointer z-30">
//           <div className="flex items-center gap-2 z-30 text-p">
//             <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={handleScrollLeft} />
//             <span className="font-bold">DRAG</span>
//             <ChevronRight className="w-6 h-6 cursor-pointer" onClick={handleScrollRight} />
//           </div>
//         </div>
//       </div>
//       <button className="block sm:hidden px-6 py-2 rounded-full button-theme">
//   Explore More
// </button>


//     </div>
    
//   );
// }
"use client";
import { useRef, useEffect } from "react";
import JobCard from "../JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const cardWidth = container.offsetWidth; 
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + cardWidth >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 flex flex-col items-center space-y-10 relative">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-10 w-full justify-center sm:justify-between text-center sm:text-left">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
          Join Our Mission to Build the Future.
        </h1>
        <button className="px-6 py-2 rounded-full button-theme hidden lg:block md:block">
          Explore More
        </button>
      </div>

      <div
        ref={sliderRef}
        className="w-full flex gap-10 cursor-grab active:cursor-grabbing px-4 relative scroll-smooth py-10 overflow-x-auto overflow-y-hidden sm:scroll-smooth mx-auto"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
          scrollSnapType: "x mandatory", 
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[80%] md:w-[300px] lg:w-[350px] snap-start "
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
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-40 border-theme border-2 rounded-full lg:block">
        <div className="w-24 h-24 bg-white rounded-full text-theme flex items-center justify-center cursor-pointer z-30">
          <div className="flex items-center gap-2 z-30 text-p">
            <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={handleScrollLeft} />
            <span className="font-bold">DRAG</span>
            <ChevronRight className="w-6 h-6 cursor-pointer" onClick={handleScrollRight} />
          </div>
        </div>
      </div>
      <button className="block sm:hidden px-6 py-2 rounded-full button-theme">
        Explore More
      </button>
    </div>
  );
}
