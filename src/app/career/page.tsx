"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CareerCard from "../components/career/CarrerCard";
import { motion } from "framer-motion";

export default function CareerPage() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardWrapperRef = useRef(null);

  // Section 2 refs
  const jobSectionRef = useRef(null);

  // Section 3 refs
  const whyWorkWithUsRef = useRef(null);
  const benefitCardsRef = useRef(null);
  const bottomCardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fixed type definition for GSAP target
    const animateFromLeft = (
      target: gsap.DOMTarget,
      delay: number = 0,
      duration: number = 1.2
    ) => {
      gsap.from(target, {
        x: -100,
        opacity: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          start: "top 75%",
          end: "top 40%",
          // toggleActions: "play none none reset",
          markers: false,
        },
      });
    };

    // Fixed type definition for GSAP target
    const animateFromRight = (
      target: gsap.DOMTarget,
      delay: number = 0,
      duration: number = 1.2
    ) => {
      gsap.from(target, {
        x: 100,
        opacity: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          start: "top 75%",
          end: "top 40%",
          // toggleActions: "play none none reset",
          markers: false,
        },
      });
    };

    // Auto-starting animations for initial load and navigation from other pages
    const ctx = gsap.context(() => {
      // Section 1 - Hero Animations - Start automatically
      gsap.from(".heading", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".subheading", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });

      // Enhanced staggered animations for grid cards with better timing
      gsap.from(".content .grid > div", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: ".content .grid",
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reset",
        },
      });

      // Section 2 - Job Listings Animations - Improved fluidity
      if (jobSectionRef.current) {
        // Animate the section heading and search input
        animateFromLeft(".job-section-header h2", 0, 1);
        animateFromRight(".job-section-header input", 0.2, 1);

        // Improved job cards stagger animation - animate from bottom
        gsap.from(".job-card", {
          y: 100, // Coming from bottom
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".job-cards-container",
            start: "top 80%",
            end: "top 40%",
            // toggleActions: "play none none reset",
          },
        });
      }

      // Section 3 - Why Work With Us Animations - Enhanced transitions
      if (whyWorkWithUsRef.current) {
        // Animate the section heading and paragraph from bottom
        gsap.from(".why-work-section-title", {
          y: 100, // Coming from bottom
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-work-section-title",
            start: "top 80%",
            end: "top 40%",
            // toggleActions: "play none none reset",
          },
        });

        gsap.from(".why-work-section-subtitle", {
          y: 100, // Coming from bottom
          opacity: 0,
          duration: 1,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-work-section-subtitle",
            start: "top 80%",
            end: "top 40%",
            // toggleActions: "play none none reset",
          },
        });

        // Enhanced right cards animation with improved stagger - coming from bottom
        gsap.from(".benefit-card", {
          y: 100, // Coming from bottom
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".benefit-cards-container",
            start: "top 80%",
            end: "top 40%",
            // toggleActions: "play none none reset",
          },
        });

        // Enhanced bottom cards animation - coming from bottom
        gsap.from(".bottom-card", {
          y: 100, // Coming from bottom
          opacity: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".bottom-cards-container",
            start: "top 85%",
            end: "top 50%",
            // toggleActions: "play none none reset",
          },
        });
      }

      gsap.utils.toArray(".animate-from-bottom").forEach((element: any) => {
        gsap.from(element, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 40%",
            // toggleActions: "play none none reset",
          },
        });
      });
    });

    // Ensure animations work correctly with a more reliable refresh approach
    ScrollTrigger.refresh(true);

    // Additional refresh for responsive layouts
    const handleResize = () => {
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sampleData = [
    {
      heading: "Work That Matters",
      paragraph:
        "We're building next-generation Web3 & Web2 products, from smart contracts and dApps to AI-driven platforms. Your work will have a real impact on the future of technology.",
    },
    {
      heading: "Flexible Work Environment",
      paragraph:
        "We understand that great work happens in different ways. Whether you prefer remote work, hybrid setups, or in-office collaboration, we offer flexibility to help you thrive.",
    },
    {
      heading: "A Culture of Collaboration",
      paragraph:
        "Our team is our greatest strength. We foster an environment where ideas are shared, challenges are tackled together, and learning never stops.",
    },
  ];

  return (
    <main className="flex flex-col text-secondary bg-white w-full   ">
      <div className=" px-4 sm:px-6 lg:px-8 mt-20">
        {/* Section 1 - Hero - Improved spacing and alignment */}
        <section className="flex flex-col items-center justify-center bg-white py-12 sm:py-16 lg:py-20">
          {/* Heading - Refined spacing */}
          <img
    src="/career/career3.png"  
    alt="QuadB Logo"
    className="absolute top-20 right-0 w-1/2 h-1/2 object-contain"  
  />
          <h1
            ref={headingRef}
            className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
          >
            Join QuadBians
          </h1>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <main className="flex flex-col text-gray-900 bg-white w-full   ">
        <div className=" px-4 sm:px-6 lg:px-8 mt-20">
          {/* Section 1 - Hero - Improved spacing and alignment */}
          <section className="flex flex-col items-center justify-center bg-white py-12 sm:py-16 lg:py-20">
            {/* Heading - Refined spacing */}
            <img
              src="/Frame 22.png"
              alt="QuadB Logo"
              className="absolute top-20 right-0 w-1/2 h-1/2 object-contain"
            />
            <h1
              ref={headingRef}
              className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
            >
              Join QuadBians
            </h1>

            {/* Sub-text - Consistent spacing */}
            <p
              ref={subheadingRef}
              className="subheading text-base sm:text-lg font-light text-center px-4 max-w-2xl mt-4 sm:mt-5"
            >
              We're building the next wave of Web3 & Web2 innovation—be part of
              it!
            </p>

          {/* Card Grid - Improved container alignment */}
          <div
            ref={cardWrapperRef}
            className="content w-full max-w-6xl mt-10 sm:mt-12 lg:mt-16"
          >
            {/* Grid Layout - Better responsive alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-3">
              {/* Card 1 - Refined padding and height */}
              <div className="bg-theme p-5 sm:p-6 shadow-xl rounded-lg h-auto lg:h-[300px] text-white transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                <p className="text-sm sm:text-base">
                  At QuadB Tech, we're more than just a tech company—we're a
                  community of innovators, problem-solvers, and visionaries
                  shaping the future of Web3 & Web2. Whether you're a blockchain
                  enthusiast, a software engineer, a designer, or a marketing
                  expert, this is the place to build groundbreaking solutions
                  and grow your career.
                </p>
              </div>
            {/* Card Grid - Improved container alignment */}
            <div
              ref={cardWrapperRef}
              className="content w-full max-w-6xl mt-10 sm:mt-12 lg:mt-16"
            >
              {/* Grid Layout - Better responsive alignment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-3">
                {/* Card 1 - Refined padding and height */}
                <div className="bg-[#f97f07] p-5 sm:p-6 shadow-xl rounded-lg h-auto lg:h-[300px] text-white transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                  <p className="text-sm sm:text-base">
                    At QuadB Tech, we're more than just a tech company—we're a
                    community of innovators, problem-solvers, and visionaries
                    shaping the future of Web3 & Web2. Whether you're a
                    blockchain enthusiast, a software engineer, a designer, or a
                    marketing expert, this is the place to build groundbreaking
                    solutions and grow your career.
                  </p>
                </div>

              {/* Card 2 - Consistent height across breakpoints */}
              {/* <div className="h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                <Image
                  className="h-full w-full object-cover rounded-lg"
                  src="/blog5.jpeg"
                  alt="Abstract Technology Image"
                  width={410}
                  height={300}
                  priority
                />
              </div> */}
              <div className="relative h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
  {/* Overlay */}
  <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>

  {/* Image */}
  <Image
    className="h-full w-full object-cover rounded-lg"
    src="/career/career1.png"
    alt="Abstract Technology Image"
    width={410}
    height={300}
    priority
  />
</div>

                {/* Card 2 - Consistent height across breakpoints */}
                <div className="h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                  <Image
                    className="h-full w-full object-cover rounded-lg"
                    src="/blog5.jpeg"
                    alt="Abstract Technology Image"
                    width={410}
                    height={300}
                    priority
                  />
                </div>

              {/* Card 3 (Tall Card) - Better sizing */}
              {/* <div className="bg-white shadow-xl rounded-lg flex items-center justify-center h-[250px] sm:h-[300px] lg:row-span-2 lg:h-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src="/blog2.jpeg"
                  alt="VR Technology Image"
                />
              </div> */}
              <div className="relative bg-white shadow-xl rounded-lg flex items-center justify-center h-[250px] sm:h-[300px] lg:row-span-2 lg:h-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
 
  <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>


  <img
    className="h-full w-full object-cover rounded-lg"
    src="/career/career2.jpeg"
    alt="VR Technology Image"
  />
</div>

                {/* Card 3 (Tall Card) - Better sizing */}
                <div className="bg-white shadow-xl rounded-lg flex items-center justify-center h-[250px] sm:h-[300px] lg:row-span-2 lg:h-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="/blog2.jpeg"
                    alt="VR Technology Image"
                  />
                </div>

              {/* Card 4 - Improved list alignment */}
              <div className="div-bg p-5 sm:p-6 shadow-xl rounded-lg w-[420px] h-auto lg:h-[200px] sm:col-span-2 lg:col-span-1 transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                <ul className="flex flex-col gap-3">
                  <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center justify-center bg-white w-fit text-xs sm:text-sm">
                    Develop groundbreaking blockchain solutions
                  </li>
                  <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs sm:text-sm">
                    Accelerate your career with continuous learning
                  </li>
                  <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs sm:text-sm">
                    Work from anywhere with our flexible culture
                  </li>
                </ul>
              </div>
                {/* Card 4 - Improved list alignment */}
                <div className="bg-[#fff6ed] p-5 sm:p-6 shadow-xl rounded-lg w-[420px] h-auto lg:h-[200px] sm:col-span-2 lg:col-span-1 transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                  <ul className="flex flex-col gap-3">
                    <li className="border border-amber-600 rounded-3xl p-2 sm:p-3 flex items-center justify-center bg-white w-fit text-xs sm:text-sm">
                      Develop groundbreaking blockchain solutions
                    </li>
                    <li className="border border-amber-600 rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs sm:text-sm">
                      Accelerate your career with continuous learning
                    </li>
                    <li className="border border-amber-600 rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs sm:text-sm">
                      Work from anywhere with our flexible culture
                    </li>
                  </ul>
                </div>

              {/* Card 5 - Centered properly */}
              {/* <div className="border-2 border-theme shadow-xl  rounded-lg h-[180px] sm:h-[200px] overflow-hidden mx-auto ml-12 w-3.5/4 transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                <img
                  src="/blog1.jpeg"
                  className="w-full h-full rounded-lg object-cover"
                  alt="Company logo"
                />

              </div> */}
              <div className="relative border-2 border-theme shadow-xl rounded-lg h-[180px] sm:h-[200px] overflow-hidden mx-auto ml-12 w-4/5 transition-shadow duration-300 hover:shadow-2xl animate-from-bottom flex items-center justify-center ">
  {/* SVG */}
  <svg
    className="w-2/3 h-2/3 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full"
    viewBox="0 0 30 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z"
      fill="var(--bg-card)"
      stroke="var(--bg-card)"
      strokeWidth="0.868933"
    />
    <path
      d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z"
      fill="var(--bg-card)"
      stroke="var(--bg-card)"
      strokeWidth="0.868933"
    />
  </svg>
</div>

            </div>
          </div>
        </section>
                {/* Card 5 - Centered properly */}
                <div className="border-2 border-amber-400 shadow-xl  rounded-lg h-[180px] sm:h-[200px] overflow-hidden mx-auto ml-12 w-3.5/4 transition-shadow duration-300 hover:shadow-2xl animate-from-bottom">
                  <img
                    src="/blog1.jpeg"
                    className="w-full h-full rounded-lg object-cover"
                    alt="Company logo"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* second section */}

          <CareerCard />

          {/* Section 3 - Why Work With Us  */}
          <section
            ref={whyWorkWithUsRef}
            className="min-h-screen flex flex-col py-16 sm:py-20 lg:py-24 relative"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-10 lg:mb-16">
              {/* Top left content - Better spacing */}
              <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
                <h2 className="why-work-section-title text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  Why Work With Us?
                </h2>
                <p className="why-work-section-subtitle text-base sm:text-lg mt-4 max-w-xl">
                  Leverage the power of our developer network to fuel your next
                  big breakthrough!
                </p>
              </div>

            {/* Right card content - Improved alignment and consistent width */}
            <div
              ref={benefitCardsRef}
              className="benefit-cards-container flex flex-col gap-6 w-full lg:w-6/12 xl:w-5/12"
            >
              {sampleData.map((data, index) => (
                <div
                  key={index}
                  className="benefit-card border-2 border-theme w-full sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto h-auto p-5 sm:p-6 div-bg rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {data.heading}
                  </h3>
                  <p className="text-sm sm:text-base">{data.paragraph}</p>
                </div>
              ))}
            </div>
          </div>
              {/* Right card content - Improved alignment and consistent width */}
              <div
                ref={benefitCardsRef}
                className="benefit-cards-container flex flex-col gap-6 w-full lg:w-6/12 xl:w-5/12"
              >
                {sampleData.map((data, index) => (
                  <div
                    key={index}
                    className="benefit-card border-2 border-amber-500 w-full sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto h-auto p-5 sm:p-6 bg-[#fff2e4] rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                      {data.heading}
                    </h3>
                    <p className="text-sm sm:text-base">{data.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>

          {/* Bottom card content - Fixed positioning and better responsive behavior */}
          <div
            ref={bottomCardsRef}
            className="bottom-cards-container w-full flex flex-col sm:flex-row gap-6 lg:gap-8 mt-6 lg:mt-10"
          >
            <div className="bottom-card border-2 border-theme w-full sm:w-3/5 h-auto p-5 sm:p-6 rounded-xl div-bg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Perks & Benefits
              </h3>
              <p className="text-sm sm:text-base">
                We understand that great work happens in different ways. Whether
                you prefer remote work, hybrid setups, or in-office
                collaboration, we offer flexibility to help you thrive.
              </p>
            </div>
            {/* Bottom card content - Fixed positioning and better responsive behavior */}
            <div
              ref={bottomCardsRef}
              className="bottom-cards-container w-full flex flex-col sm:flex-row gap-6 lg:gap-8 mt-6 lg:mt-10"
            >
              <div className="bottom-card border-2 border-amber-500 w-full sm:w-3/5 h-auto p-5 sm:p-6 rounded-xl bg-[#fff2e4] shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  Perks & Benefits
                </h3>
                <p className="text-sm sm:text-base">
                  We understand that great work happens in different ways.
                  Whether you prefer remote work, hybrid setups, or in-office
                  collaboration, we offer flexibility to help you thrive.
                </p>
              </div>

            <div className="bottom-card border-2 border-theme w-full sm:w-2/5 h-auto p-5 sm:p-6 rounded-xl div-bg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Growth & Learning
              </h3>
              <p className="text-sm sm:text-base">
                We invest in our people. From mentorship programs and upskilling
                opportunities to global industry events, we ensure you keep
                evolving.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
              <div className="bottom-card border-2 border-amber-500 w-full sm:w-2/5 h-auto p-5 sm:p-6 rounded-xl bg-[#fff2e4] shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  Growth & Learning
                </h3>
                <p className="text-sm sm:text-base">
                  We invest in our people. From mentorship programs and
                  upskilling opportunities to global industry events, we ensure
                  you keep evolving.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
