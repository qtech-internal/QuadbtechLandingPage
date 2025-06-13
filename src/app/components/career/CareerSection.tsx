"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CareerPage() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hide elements initially
    gsap.set([headingRef.current, subheadingRef.current, cardWrapperRef.current], { opacity: 0, y: 50 });

    gsap.to([headingRef.current, subheadingRef.current, cardWrapperRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardWrapperRef.current,
        start: "top 80%",
        toggleActions: "play none none none", // Play only once
        once: true, // Ensures animation happens only once
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove all ScrollTriggers on unmount
    };
  }, []);

  return (
    <main className="flex flex-col text-secondary bg-white w-full ">
      <div className=" mt-10">
        {/* Section 1 - Hero */}
        <section className="flex flex-col items-center justify-center bg-white py-12 sm:py-16 lg:py-20">
          <img
            src="/career/career3.png"
            alt="QuadB Logo"
            className="absolute top-20 right-0 w-1/2 h-1/2 object-contain"
            draggable= "false"
          />
          <h1 ref={headingRef} className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-center">
            Join QuadBians
          </h1>

          <p ref={subheadingRef} className="text-[24px] sm:text-lg font-light text-center px-4 max-w-2xl mt-4 sm:mt-5">
  We&apos;re building the next wave of Web3 &amp; Web2 innovation—be part of it!
</p>


          <div ref={cardWrapperRef} className="w-full max-w-6xl mt-10 sm:mt-12 lg:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-3">
              {/* Card 1 */}
              <div className="bg-theme p-5 sm:p-6 shadow-xl rounded-lg text-white transition-shadow duration-300 hover:shadow-2xl">
                <p className="text-sm sm:text-base">
                At QuadB Tech, we’re more than just a tech company—we’re a community of innovators, problem-solvers, and visionaries shaping the future of Web3 & Web2. Whether you’re a blockchain enthusiast, a software engineer, a designer, or a marketing expert, this is the place to build groundbreaking solutions and grow your career.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
                <Image
                  className="h-full w-full object-cover rounded-lg"
                  src="/career/career1.png"
                  alt="Abstract Technology Image"
                  width={410}
                  height={300}
                  priority
                />
              </div>

              {/* Card 3 */}
              <div className="relative bg-white shadow-xl rounded-lg flex items-center justify-center  sm:h-[300px] lg:row-span-2 lg:h-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
                <img className="h-full w-full object-cover rounded-lg" src="/career/career2.jpeg" alt="VR Technology Image" />
              </div>


              {/* Card 4 */}
            
              <div className="div-bg p-5 sm:p-6 shadow-xl rounded-lg w-auto md:max-w-[500px] lg:w-[420px] h-auto  sm:col-span-2 lg:col-span-1 transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center mx-auto">
  <ul className="flex flex-col gap-3">
    <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center justify-center bg-white w-fit text-xs sm:text-sm">
    Develop groundbreaking solutions in blockchain, AI, and cloud computing
    </li>
    <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs sm:text-sm">
    Accelerate your career with continuous learning & growth opportunities.
    </li>
    <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs sm:text-sm">
    Work from anywhere with our flexible, remote-friendly culture.
    </li>
  </ul>
</div>


              {/* Card 5 */}
              <div className="relative border-2 border-theme shadow-xl rounded-lg overflow-hidden mx-auto ml-12 w-full max-w-[300px] aspect-[300/280] transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center">
  <Image
    className="h-full w-full object-cover rounded-lg"
    src="/blog1.jpeg"
    alt="logo"
    width={300}
    height={300}
     draggable="false"
  />
</div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
