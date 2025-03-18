// "use client"
// import { useRef } from 'react';
// import JobCard from '../JobCard'; // Make sure JobCard is typed properly

// // Define type for Job item
// interface Job {
//   title: string;
//   location: string;
//   experience: string;
//   imageSrc: string;
// }

// export default function Home() {
//   const jobs: Job[] = [
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
//   ];

//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef<boolean>(false);
//   const startX = useRef<number>(0);
//   const scrollLeft = useRef<number>(0);

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     isDragging.current = true;
//     startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
//     scrollLeft.current = sliderRef.current?.scrollLeft || 0;
//   };

//   const handleMouseLeave = () => {
//     isDragging.current = false;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging.current || !sliderRef.current) return;
//     e.preventDefault();
//     const x = e.pageX - sliderRef.current.offsetLeft;
//     const walk = (x - startX.current) * 1.5; // Adjust scroll speed
//     sliderRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   return (
//     <div className="min-h-screen bg-white p-10 flex flex-col items-center space-y-10 border-2 border-orange-400">
//       {/* Heading and Search */}
//       <div className="flex items-center gap-x-4 mb-4 w-full justify-between">
//         <h1 className="text-3xl font-bold">Current Openings</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="border border-orange-400 rounded-full px-4 py-2 w-72 focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Card Slider */}
//       <div
//         ref={sliderRef}
//         onMouseDown={handleMouseDown}
//         onMouseLeave={handleMouseLeave}
//         onMouseUp={handleMouseUp}
//         onMouseMove={handleMouseMove}
//         className="w-full flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-4"
//         style={{ scrollSnapType: 'x mandatory' }}
//       >
//         {jobs.map((job, index) => (
//           <div key={index} className="flex-shrink-0 w-[280px]" style={{ scrollSnapAlign: 'center' }}>
//             <JobCard
//               title={job.title}
//               location={job.location}
//               experience={job.experience}
//               imageSrc={job.imageSrc}
//               isOdd={index % 2 === 0}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useRef } from "react";
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
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//   ];

//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     isDragging.current = true;
//     startX.current = e.pageX;
//     scrollLeft.current = sliderRef.current?.scrollLeft || 0;
//   };

//   const handleMouseLeave = () => (isDragging.current = false);
//   const handleMouseUp = () => (isDragging.current = false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging.current || !sliderRef.current) return;
//     e.preventDefault();
//     const x = e.pageX;
//     const walk = (x - startX.current) * 1.5; // Adjust scroll speed
//     sliderRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   return (
//     <div className="min-h-screen bg-white p-10 flex flex-col items-center space-y-10 relative">
//       {/* Heading and Search */}
//       <div className="flex items-center gap-x-4 mb-10 w-full justify-between">
//         <h1 className="text-3xl font-bold">Current Openings</h1>
//         <input
//           type="text"
//           placeholder="Search"
//           className="border border-orange-400 rounded-full px-4 py-2 w-72 focus:outline-none"
//         />
//       </div>

//       {/* Card Slider with hidden scrollbar and custom drag */}
//       <div
//         ref={sliderRef}
//         onMouseDown={handleMouseDown}
//         onMouseLeave={handleMouseLeave}
//         onMouseUp={handleMouseUp}
//         onMouseMove={handleMouseMove}
//         className="w-full flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing px-4 relative"
//       >
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[280px]"
//           >
//             <JobCard
//               title={job.title}
//               location={job.location}
//               experience={job.experience}
//               imageSrc={job.imageSrc}
//               isOdd={index % 2 === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Drag Icon */}
  
//       <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex gap-2">
//   <div className="w-12 h-12 bg-white border-4 border-orange-400 rounded-full flex items-center justify-center text-orange-400 cursor-pointer">
//           <ChevronLeft
//                  />
//   </div>
//   <div className="w-12 h-12 bg-white border-4 border-orange-400 rounded-full flex items-center justify-center text-orange-400 cursor-pointer">
//     <ChevronRight />
//   </div>
// </div>
//     </div>
//   );
// }
// "use client";
// import { useRef } from "react";
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
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg3.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/hand1 (1).png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/robot.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/card1 (2).svg" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//     { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg22.png" },
//   ];

//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   // ✅ Function to scroll right
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


//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     isDragging.current = true;
//     startX.current = e.pageX;
//     scrollLeft.current = sliderRef.current?.scrollLeft || 0;
//   };

//   const handleMouseLeave = () => (isDragging.current = false);
//   const handleMouseUp = () => (isDragging.current = false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging.current || !sliderRef.current) return;
//     e.preventDefault();
//     const x = e.pageX;
//     const walk = (x - startX.current) * 1.5; 
//     sliderRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   return (
//     <div className=" bg-white p-4 flex flex-col items-center space-y-10 relative">
     
//       <div className="flex items-center gap-x-4 mb-10 w-full justify-between">
//         <h1 className="text-3xl font-bold">Join Our Mission to Build the Future.</h1>
//         <button className="mt-6 border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100">
//             Explore More
//           </button>
//       </div>

     
//       <div
//         ref={sliderRef}
//         onMouseDown={handleMouseDown}
//         onMouseLeave={handleMouseLeave}
//         onMouseUp={handleMouseUp}
//         onMouseMove={handleMouseMove}
//         className="w-full flex gap-10  cursor-grab active:cursor-grabbing px-4 relative scroll-smooth"
//       >
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//           >
//             <JobCard
//               title={job.title}
//               location={job.location}
//               experience={job.experience}
//               imageSrc={job.imageSrc}
//               isOdd={index % 2 === 0}
//             />
//           </div>
//         ))}
//       </div>

      
//       {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex gap-2">
    
//         <div
//           className="w-12 h-12 bg-white border-4 border-orange-400 rounded-full flex items-center justify-center text-orange-400 cursor-pointer hover:bg-orange-100"
//           onClick={handleScrollLeft}
//         >
//           <ChevronLeft />
//         </div>

       
//         <div
//           className="w-12 h-12 bg-white border-4 border-orange-400 rounded-full flex items-center justify-center text-orange-400 cursor-pointer hover:bg-orange-100"
//           onClick={handleScrollRight}
//         >
//           <ChevronRight />
//         </div>
//       </div> */}
//       <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block ">
//   <div
//     className="w-24 h-24 bg-white rounded-full border-1 border-orange-600 flex items-center justify-center text-[#B73B06] cursor-pointer z-30"
//   >
//     <div className="flex items-center gap-2 z-30 ">
//       {/* Left Arrow */}
//       <ChevronLeft
//         className="w-6 h-6 cursor-pointer"
//         onClick={handleScrollLeft}
//       />
//       <span className="font-bold">DRAG</span>
//       {/* Right Arrow */}
//       <ChevronRight
//         className="w-6 h-6 cursor-pointer"
//         onClick={handleScrollRight}
//       />
//     </div>
//   </div>
// </div>

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
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg3.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/hand1 (1).png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/robot.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg3.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg3.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/bg3.png" },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  
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
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollLeft = 0; 
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className=" bg-white p-4 flex flex-col items-center space-y-10 relative  ">
      <div className="flex items-center gap-x-4 mb-10 w-full justify-between">
        <h1 className="text-3xl font-bold">Join Our Mission to Build the Future.</h1>
        <button className="mt-6 border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100">
          Explore More
        </button>
      </div>

      {/* <div
        ref={sliderRef}
        className="w-full flex gap-10 cursor-grab active:cursor-grabbing px-4 relative scroll-smooth pt-10 overflow-y-hidden scrollbar-hidden"
      >
        {jobs.map((job, index) => (
          <div key={index} className="flex-shrink-0">
            <JobCard title={job.title} location={job.location} experience={job.experience} imageSrc={job.imageSrc} isOdd={index % 2 === 0} />
          </div>
        ))}
      </div> */}
      <div
  ref={sliderRef}
  className="w-full flex gap-10 cursor-grab active:cursor-grabbing px-4 relative scroll-smooth pt-10 overflow-x-auto overflow-y-hidden"
  style={{
    scrollbarWidth: "none", 
    msOverflowStyle: "none", 
  }}
>
  {jobs.map((job, index) => (
    <div key={index} className="flex-shrink-0">
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


      {/* Manual Scroll Controls */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="w-24 h-24 bg-white rounded-full border-1 border-orange-600 flex items-center justify-center text-[#B73B06] cursor-pointer z-30">
          <div className="flex items-center gap-2 z-30">
            <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={handleScrollLeft} />
            <span className="font-bold">DRAG</span>
            <ChevronRight className="w-6 h-6 cursor-pointer" onClick={handleScrollRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
