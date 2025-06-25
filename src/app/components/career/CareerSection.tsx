"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const themeImages = {
  orange: "/career/Frame3.png",
  olive: "/career/olive_theme_img.png",
  purple: "/career/purple_theme_img.png",
  pink: "/career/pink_theme_img.png",
  red: "/career/red.png",
  brown: "/career/brown_theme_img.png",
  cyan: "/career/cryan_theme_img.png",
};

export default function CareerPage() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const [currentTheme, setCurrentTheme] = useState<string>("orange");
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Initialize with current theme
    const savedTheme = localStorage.getItem("theme") || "orange";
    setCurrentTheme(savedTheme);

    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      setCurrentTheme(e.detail);
    };

    window.addEventListener("themeChanged", handleThemeChange as EventListener);

    return () => {
      window.removeEventListener(
        "themeChanged",
        handleThemeChange as EventListener
      );
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hide elements initially
    gsap.set(
      [headingRef.current, subheadingRef.current, cardWrapperRef.current],
      { opacity: 0, y: 50 }
    );

    gsap.to(
      [headingRef.current, subheadingRef.current, cardWrapperRef.current],
      {
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
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="">
      <div className=" mt-10 mx-10 2xl:mx-0">
        {/* Section 1 - Hero */}
        <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
          <img
            src="/career/career3.png"
            alt="QuadB Logo"
            className="absolute top-20 right-0 w-1/2 h-1/2 object-contain"
            draggable="false"
          />
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-center"
          >
            Join QuadBians
          </h1>

          <p
            ref={subheadingRef}
            className="text-[24px] sm:text-lg font-light text-center px-4 max-w-2xl mt-4 sm:mt-5"
          >
            We&apos;re building the next wave of Web3 &amp; Web2 innovation—be
            part of it!
          </p>

          <div
            ref={cardWrapperRef}
            className="container w-full max-w-7xl mt-10 sm:mt-12 lg:mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-3">
              {/* Card 1 */}
              <div className="bg-theme p-5 sm:p-6 shadow-xl rounded-lg text-white transition-shadow duration-300 hover:shadow-2xl">
                <p className="text-[18px]  mt-6">
                  At QuadB Tech, we’re more than just a tech company—we’re a
                  community of innovators, problem-solvers, and visionaries
                  shaping the future of Web3 & Web2. Whether you’re a blockchain
                  enthusiast, a software engineer, a designer, or a marketing
                  expert, this is the place to build groundbreaking solutions
                  and grow your career.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative h-[60vh] lg:h-[52vh] xl:h-[41vh] 2xl:h-[35vh] overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
                <Image
                  className="h-full w-full object-cover rounded-lg"
                  src="/career/Frame2.svg"
                  alt="Abstract Technology Image"
                  width={410}
                  height={300}
                  priority
                  draggable={false}
                />
              </div>

              {/* Card 3 */}
              <div className="relative bg-theme  2xl:w-[450px] shadow-xl rounded-lg flex items-center justify-start sm:h-[300px] lg:row-span-2 lg:h-auto overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                {/* Left Image Section */}
                <Image
                  width={450}
                  height={500}
                  className="h-full w-[40vw] lg:w-[17vw] xl:w-[290px] z-20 object-cover rounded-lg"
                  src={
                    themeImages[currentTheme as keyof typeof themeImages] ||
                    themeImages.orange
                  }
                  alt="VR Technology Image"
                  draggable={false}
                />

                {/* Right Vertical Text Column */}
                <div className="h-full w-24 flex flex-col justify-center items-center bg-theme z-10">
                  {/* {"QuadB".split("").map((char, idx) => (
                    <span
                      key={idx}
                      className=" text-[75px] lg:text-[150px] xl:text-[120px]  2xl:text-[150px] leading-[52px] lg:leading-[100px]  xl:leading-[80px]  2xl:leading-[100px] font-extrabold font-poppins text-transparent rotate-90 lg:ml-1 xl:-ml-4 2xl:ml-1 "
                      style={{
                        WebkitTextStroke: "3px white",
                      }}
                    >
                      {char}
                    </span>
                  ))} */}
                  <h1
                    className="text-[75px] lg:text-[150px] xl:text-[120px]  2xl:text-[150px] leading-[52px] lg:leading-[100px]  xl:leading-[80px]  2xl:leading-[100px] font-extrabold font-poppins text-transparent rotate-90 lg:ml-1 xl:-ml-4 2xl:ml-1  "
                    style={{
                      WebkitTextStroke: "3px white",
                      // color: "white",
                    }}
                  >
                    QuadB
                  </h1>
                </div>
              </div>
              {isTab && (
                <div className="relative border-2 border-theme shadow-xl rounded-lg  overflow-hidden mx-auto  w-full  transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center">
                  {/* <Image
                    className="h-full w-full object-cover rounded-lg"
                    src="/blog1.jpeg"
                    alt="logo"
                    width={400}
                    height={200}
                    draggable="false"
                  /> */}
                  <svg
                    width="190"
                    height="200"
                    viewBox="0 0 133 153"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M130.021 71.473C93.9039 64.3857 82.2248 47.4455 72.4923 0.521133C64.471 58.6076 67.2613 87.2008 103.174 121.331L130.021 71.473Z"
                      fill="url(#paint0_linear_65148_4780)"
                    />
                    <path
                      d="M1.90104 81.537C38.018 88.6243 49.6971 105.565 59.4296 152.489C67.4509 94.4024 64.6606 65.8093 28.7477 31.679L1.90104 81.537Z"
                      fill="url(#paint1_linear_65148_4780)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_65148_4780"
                        x1="99.403"
                        y1="0.521133"
                        x2="99.403"
                        y2="121.331"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF9500" />
                        <stop offset="1" stop-color="#FFC892" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_65148_4780"
                        x1="32.5189"
                        y1="152.489"
                        x2="32.5189"
                        y2="31.679"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF9500" />
                        <stop offset="1" stop-color="#FFC892" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}

              {/* Card 4 */}
              <div className="div-bg p-5 sm:p-6 shadow-xl rounded-lg w-full  lg:w-[480px] h-auto  sm:col-span-2 lg:col-span-1 transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center mx-auto">
                <ul className="flex flex-col gap-3">
                  <li className="border border-theme rounded-3xl p-1 sm:p-3 flex items-center justify-center bg-white w-fit text-xs lg:text-[12px]">
                    Develop groundbreaking solutions in blockchain, AI, and
                    cloud computing
                  </li>
                  <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs lg:text-[12px]">
                    Accelerate your career with continuous learning & growth
                    opportunities.
                  </li>
                  <li className="border border-theme rounded-3xl p-2 sm:p-3 flex items-center w-fit bg-white text-xs lg:text-[12px]">
                    Work from anywhere with our flexible, remote-friendly
                    culture.
                  </li>
                </ul>
              </div>

              {!isTab && (
                <div className="   relative border-2 border-theme shadow-xl rounded-lg lg:ml-42 xl:ml-25 2xl:ml-16 overflow-hidden mx-auto lg:w-[14vw] xl:w-auto  2xl:w-full  max-w-[200px] xl:max-w-[350px] xl:aspect-[390/280] transition-shadow duration-300 hover:shadow-2xl flex items-center justify-center">
                  {/* <Image
                    className="h-full w-full object-cover rounded-lg"
                    src="/blog1.jpeg"
                    alt="logo"
                    width={400}
                    height={200}
                    draggable="false"
                  /> */}
                  <svg
                    width="190"
                    height="200"
                    viewBox="0 0 133 153"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M130.021 71.473C93.9039 64.3857 82.2248 47.4455 72.4923 0.521133C64.471 58.6076 67.2613 87.2008 103.174 121.331L130.021 71.473Z"
                      fill="url(#paint0_linear_65148_4780)"
                    />
                    <path
                      d="M1.90104 81.537C38.018 88.6243 49.6971 105.565 59.4296 152.489C67.4509 94.4024 64.6606 65.8093 28.7477 31.679L1.90104 81.537Z"
                      fill="url(#paint1_linear_65148_4780)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_65148_4780"
                        x1="99.403"
                        y1="0.521133"
                        x2="99.403"
                        y2="121.331"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF9500" />
                        <stop offset="1" stop-color="#FFC892" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_65148_4780"
                        x1="32.5189"
                        y1="152.489"
                        x2="32.5189"
                        y2="31.679"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF9500" />
                        <stop offset="1" stop-color="#FFC892" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
