"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
type ServiceCardProps = {
  title: string;
  points: string[];
  bg?: string;
  hoverBg?: string;
  textColor?: string;
  isHovered: boolean;
  border?: boolean;
  isAnyHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hoverPosition?: "top" | "center" | "bottom";
};
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  points,
  bg = "bg-theme",
  hoverBg = "bg-theme",
  textColor = "text-white",
  isHovered,
  border,
  isAnyHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (

    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
    group relative w-full h-16 
    transition-all duration-600 ease-in-out overflow-visible rounded-md
    flex items-center justify-center text-xs sm:text-sm md:text-base font-medium cursor-pointer px-3
    ${bg} ${textColor}
     ${border ? "border border-theme" : ""}
    ${isHovered ? "z-20" : "z-10"}
    ${isAnyHovered && !isHovered ? "blur-[3px]" : ""}
      `}
    >

      <div className="flex items-center justify-center h-full w-full text-center">
        {title}
      </div>
 {/* Hover Content  */}
      <div
        className={`
      absolute top-0 left-0 w-full
      ${hoverBg} px-4 py-3 text-left ${textColor}
  
      opacity-0 group-hover:opacity-100
    transition-all duration-500 ease-in-out
    rounded-md shadow-lg
    transform scale-95 group-hover:scale-100
    `}
        style={{ minHeight: "180px" }}
      >
        <h3 className="font-semibold text-sm mb-2">{title}</h3>
        <ul className="list-disc list-inside text-xs space-y-1">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>

  );
};
// const ServiceCard: React.FC<ServiceCardProps> = ({
//   title,
//   points,
//   bg = "bg-orange-500",
//   hoverBg = "bg-orange-600",
//   textColor = "text-white",
//   isHovered,
//   isAnyHovered,
//   onMouseEnter,
//   onMouseLeave,
// }) => {
//   return (
//     <div
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className={`relative group h-16 hover:h-44 transition-all duration-600 ease-in-out overflow-hidden rounded-md flex items-center justify-center text-xs sm:text-sm md:text-base font-medium cursor-pointer px-3
//         ${bg} ${textColor}
//         ${isHovered ? "z-20 absolute h-auto min-h-44" : "z-10"}
//         ${isAnyHovered && !isHovered ? "blur-[3px]" : ""}
//       `}
//     >
//       {/* Main Title */}
//       <div className="flex items-center justify-center h-full w-full text-center">
//         {title}
//       </div>

//       {/* Hover Content */}
//       <div
//         className={`absolute top-0 left-0 w-full inset-0 ${hoverBg} px-4 py-3 text-left ${textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//         style={{ minHeight: "180px" }}
//       >
//         <h3 className="font-semibold text-sm mb-2">{title}</h3>
//         <ul className="list-disc list-inside text-xs space-y-1">
//           {points.map((point, idx) => (
//             <li key={idx}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

type ServiceItem = {
  title: string;
  points: string[];
};

const ServiceSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });



  const firstRow: ServiceItem[] = [
    {
      title: "Custom Web & Mobile Apps",
      points: [
        "Cross-platform (iOS, Android, PWA)",
        "Scalable microservices",
        "Real-time data (WebSockets)",
        "AI chatbots & automation",
      ],
    },
    {
      title: "Enterprise Software Solutions",
      points: [
        "CRM and ERP systems",
        "Data dashboards",
        "Cloud-native apps",
        "API integrations",
      ],
    },
  ];

  const secondRow: ServiceItem[] = [
    {
      title: "UI/UX Design & Optimization",
      points: [
        "Modern design principles",
        "User-friendly experiences",
        "Prototypes & wireframes",
        "Performance optimization",
      ],
    },
    {
      title: "E-Commerce & Marketplace",
      points: [
        "Scalable online stores",
        "Payment gateway integration",
        "Vendor & customer portals",
        "Product management systems",
      ],
    },
    {
      title: "Security & Performance",
      points: [
        "End-to-end encryption",
        "Load balancing",
        "Optimized server-side",
        "Regular security audits",
      ],
    },
  ];

  const thirdRow: ServiceItem[] = [
    {
      title: "API Development & Integrations",
      points: [
        "Custom REST & GraphQL APIs",
        "Third-party integrations",
        "Payment & social logins",
        "Webhook solutions",
      ],
    },
    {
      title: "And Many More",
      points: [
        "Blockchain & Web3",
        "AI & ML Solutions",
        "Consulting & Support",
        "Ongoing maintenance",
      ],
    },
  ];

  // Render Function for Rows
  // const renderRow = (
  //   row: ServiceItem[],
  //   customStyle?: { bg?: string; hoverBg?: string; textColor?: string },
  //   bgForIndex?: number
  // ) =>
  //   row.map((service, idx) => (
      
  //     <ServiceCard
  //       key={idx}
  //       title={service.title}
  //       points={service.points}
  //       bg={isBgIndex ? (customStyle?.bg || "bg-theme") : "bg-white"}
  //       // bg={customStyle?.bg || "bg-theme"}
  //       hoverBg={customStyle?.hoverBg || "bg-theme"}
  //       textColor={customStyle?.textColor || "text-white"}
  //       border={!isBgIndex} 
  //       isHovered={hoveredIndex === service.title}
  //       isAnyHovered={hoveredIndex !== null}
  //       onMouseEnter={() => setHoveredIndex(service.title)}
  //       onMouseLeave={() => setHoveredIndex(null)}
  //     />
  //   ));
  const renderRow = (
    row: ServiceItem[],
    customStyle?: { bg?: string; hoverBg?: string; textColor?: string; border?: boolean },
    bgForIndex?: number // only this index gets full bg
  ) =>
    row.map((service, idx) => {
      const isBgIndex = idx === bgForIndex;
  
      return (
        <ServiceCard
          key={idx}
          title={service.title}
          points={service.points}
          bg={isBgIndex ? (customStyle?.bg || "bg-theme") : "bg-white"}
          hoverBg={customStyle?.hoverBg || "bg-theme"}
          textColor={isBgIndex ? (customStyle?.textColor || "text-white") : "text-black"}
          border={!isBgIndex} // show border if not bg index
          isHovered={hoveredIndex === service.title}
          isAnyHovered={hoveredIndex !== null}
          onMouseEnter={() => setHoveredIndex(service.title)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      );
    });
  

  return (
   <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 3 }}
      className="max-w-[1500px] mx-auto py-16 text-center px-4"
    >

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-poppins">
        Our Services – Future-Ready Tech Solutions
      </h2>
      <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base lg:w-3/4 mx-auto">
  &ldquo;From Traditional to Decentralized – We Build the Future of Digital Innovation.&rdquo; <br />
  We offer custom-tailored Web2 &amp; Web3 solutions designed for scalability, security, and seamless user experience. Whether you&apos;re launching a blockchain-powered platform or optimizing your digital presence, our expertise ensures success.
</p>


      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 items-start relative">
        <div className="div-bg h-16 flex items-center justify-center rounded-r-md hidden lg:flex"></div>
        {/* {renderRow(firstRow)} */}
        {renderRow(firstRow, { bg: "bg-theme", hoverBg: "bg-theme", textColor: "text-white" }, 0)}
        <div className="div-bg h-16 flex items-center justify-center rounded-l-md hidden lg:flex"></div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 mt-10 w-full relative">
        <div className="div-bg h-16 w-40 flex items-center justify-center rounded-r-md hidden lg:flex"></div>
        {/* {renderRow(secondRow, {
          bg: "bg-white border-1 border-theme",
          hoverBg: "bg-theme  ",
          textColor: "text-primary",
        })} */}
        {renderRow(secondRow, {
  bg: "bg-white",
  hoverBg: "bg-theme",
  textColor: "text-black",
  border: true,
})}
        <div className="div-bg h-16 w-40 flex items-center justify-center rounded-l-md hidden lg:flex"></div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 items-end relative">
        <div className="div-bg h-16 flex items-center justify-center rounded-r-md hidden lg:flex"></div>
        {/* {renderRow(thirdRow)} */}
        {renderRow(thirdRow, { bg: "bg-theme", hoverBg: "bg-theme", textColor: "text-white" }, 1)}
        <div className="div-bg h-16 flex items-center justify-center rounded-l-md hidden lg:flex"></div>
      </div>
     
    </motion.section>
  );
};

export default ServiceSection;









