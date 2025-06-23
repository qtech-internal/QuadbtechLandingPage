"use client";
import { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const themeImages = {
  orange: '/career/Frame3.png',
  olive: '/career/olive_theme_img.png',
  purple: '/career/purple_theme_img.png',
  pink: '/career/pink_theme_img.png',
  red: '/career/red.png',
  brown: '/career/brown_theme_img.png',
  cyan: '/career/cryan_theme_img.png'
};


export default function CareerPage() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const [currentTheme, setCurrentTheme] = useState<string>("orange");

  useEffect(() => {
    // Initialize with current theme
    const savedTheme = localStorage.getItem("theme") || "orange";
    setCurrentTheme(savedTheme);

    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      setCurrentTheme(e.detail);
    };

    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

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
        toggleActions: "play none none none", 
        once: true, 
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); 
    };
  }, []);

  return (
    <main className="flex flex-col text-secondary  w-full ">
      <div className=" mt-10">
        {/* Section 1 - Hero */}
        <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
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


          <div ref={cardWrapperRef} className="container w-full max-w-7xl mt-10 sm:mt-12 lg:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-3">
              {/* Card 1 */}
              <div className="bg-theme p-5 sm:p-6 shadow-xl rounded-lg text-white transition-shadow duration-300 hover:shadow-2xl">
                <p className="text-[18px]  mt-6">
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
<div className="relative bg-theme  lg:w-[450px] shadow-xl rounded-lg flex items-center justify-start sm:h-[300px] lg:row-span-2 lg:h-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
  {/* Left Image Section */}
  <Image
    width={450}
    height={500}
    className="h-full w-[290px] z-20 object-cover rounded-lg"
    src={themeImages[currentTheme as keyof typeof themeImages] || themeImages.orange}
    alt="VR Technology Image"
  />

  {/* Right Vertical Text Column */}
  <div className="h-full w-24 flex flex-col justify-center items-center bg-theme z-10">
    {"QuadB".split("").map((char, idx) => (
      <span
        key={idx}
        className="text-[170px] leading-[100px] font-extrabold font-poppins text-transparent rotate-90 "
        style={{
          WebkitTextStroke: '3px white',
        }}
      >
        {char}
      </span>
    ))}
  </div>
</div>


             
              {/* Card 4 */}
                <div className="div-bg p-5 sm:p-6 shadow-xl rounded-lg w-auto md:max-w-[600px] lg:w-[480px] h-auto  sm:col-span-2 lg:col-span-1 transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center mx-auto">
                  <ul className="flex flex-col gap-3">
                    <li className="border border-theme rounded-3xl p-1 sm:p-3 flex items-center justify-center bg-white w-fit text-xs lg:text-[12px]">
                    Develop groundbreaking solutions in blockchain, AI, and cloud computing
                    </li>
                    <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs lg:text-[12px]">
                    Accelerate your career with continuous learning & growth opportunities.
                    </li>
                    <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs lg:text-[12px]">
                    Work from anywhere with our flexible, remote-friendly culture.
                    </li>
                  </ul>
                </div>

                <div className="relative border-2 border-theme shadow-xl rounded-lg ml-16 overflow-hidden mx-auto  w-full max-w-[350px] aspect-[390/280] transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center">
                  <Image
                    className="h-full w-full object-cover rounded-lg"
                    src="/blog1.jpeg"
                    alt="logo"
                    width={400}
                    height={200}
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
