"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // section one animation elements declarations
  const headerRef = useRef(null);
  const imageref = useRef(null);
  const textRef = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // section two animation elements declarations

  const sect_Two = useRef<HTMLDivElement[]>([]);
  const sect_Two_Read_More = useRef(null);

  // section three animation elements declarations

  useEffect(() => {
    // Section 1 animation code
    const tl = gsap.timeline();

    if (!headerRef.current || !imageref.current || !textRef.current) return;

    // Initially set parent div to full width
    gsap.set(imageref.current, {
      width: "150%",
      marginRight: "50%",
      y: 100,
      opacity: 1,
    });

    gsap.set(textRef.current, { x: "-100%", y: "100%", opacity: 0 });

    // 1️⃣ Header & Image Animation Together
    tl.fromTo(
      headerRef.current,
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 1, ease: "power4.out" }
    )
      .fromTo(
        imageref.current,
        { y: "100%", opacity: 0 },
        { y: 0, duration: 1.5, delay: 1, ease: "power4.out", opacity: 1 },
        "<"
      )

      // 4️⃣ Text Div Animation (After Image Shrinking)
      .to(
        textRef.current,
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 1,

          ease: "power2.out",
        },
        "-=1"
      )

      // 2️⃣ Shrink Image to Original Width
      .to(
        imageref.current,
        {
          width: "100%",
          duration: 1,
          // ease: "power2.out",
        },
        "start"
      );

    // 5️⃣ Content Animations
    contentRefs.current.forEach((el) => {
      if (el) {
        tl.fromTo(
          el,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.5"
        );
      }
    });

    // section 2 animation code

    sect_Two.current.forEach((el) => {
      if (el) {
        gsap.from(el, {
          x: "200%",
          opacity: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sect_Two.current,
            start: "top-80%",
            scrub: true,
          },
        });
      }
    });

    gsap.from(sect_Two_Read_More.current, {
      y: "200%",
      opacity: 0,
      duration: 2,
      ease: "power4.Out",
      scrollTrigger: {
        trigger: sect_Two_Read_More.current,
        start: "top-80%",
        toggleActions: "play reverse play reverse",
        scrub: true, // ✅ Smooth effect during scroll
      },
    });

    // section 3 animation code
  }, []);

  return (
    <main className="flex flex-col items-center justify-center flex-col-1">
      {/* Section one  */}
      <section className="relative mx-auto w-screen mt-20 px-4 sm:px-8 container">
        {/* Header */}

        <h1
          ref={headerRef}
          className="border-[4px] border-theme lg:w-[364px] w-1/2
  p-2 rounded-[80px] text-center mb-20 mt-10 text-[1.5rem] font-bold 
  mx-auto flex items-center justify-center"
        >
          BLOGS
        </h1>

        {/* Grid Container */}
        <div className="grid 2xl:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 grid-cols-1 gap-4 2xl:px-10 my-10 sm:min-h-[60vh] ">
          <div
            ref={imageref}
            className="relative  2xl:col-span-8 2xl:row-span-2 lg:col-span-8 sm:col-span-12 md:col-span-12 md:row-span-1 lg:row-span-2 sm:row-span-1"
          >
            <div
              ref={textRef}
              className="absolute bottom-0 left-0 z-10 sm:bottom-[-75] sm:left-0 font-bold sm:w-full sm:h-60 bg-white  flex flex-col gap-6  p-4 w-full h-[20vh] "
              style={{
                clipPath:
                  "path('M118 19C118 8.5 109.5 0 99 0H19C8.5 0 0 8.5 0 19V158C0 168.5 8.5 177 19 177H324C334.5 177 343 168.5 343 158V126C343 115.5 334.5 107 324 107H302C291.5 107 283 98.5 283 88V68C283 57.5 274.5 49 264 49H137C126.5 49 118 40.5 118 30V19Z')",
              }}
            >
              <span className="font-normal border border-theme w-22 text-center rounded-3xl text-sm sm:text-base bg-white text-orange-900">
                Next-Gen
              </span>
              <span className="text-4xl bottom-0 text-black">Transforming</span>
              <span className="text-4xl bottom-0 text-black">
                Ideas into Reality
              </span>
            </div>

            <Image
              src="/blog4.jpeg"
              alt="blogImage"
              width={924}
              height={514}
              className="w-full h-[340px] md:h-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[var(--div-bg)] opacity-40 rounded-2xl "></div>
          </div>

          {/* Content Divs */}
          {[0, 1].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className={`relative w-auto h-auto flex flex-col justify-between lg:col-span-4 sm:col-span-12 rounded-2xl px-8 text-center ${
                index == 0 ? "div-bg text-[#222]" : "bg-blog text-[#fff]"
              }`}
            >
              <p className="py-10">
                &ldquo;Their team took our vision and turned it into a seamless,
                high-performance dApp. The UI/UX was flawless, and the smart
                contracts were secure and gas-efficient. Highly
                recommend.&rdquo;
                <br />
                <br />
                <span className="font-extrabold text-shadow-amber-900 text-shadow-lg/10">
                  — Alex R., CEO of BlockFi Ventures
                </span>
              </p>

              <div
                className={`absolute border-white border-8 bottom-[-5] right-[-5] h-[65px] w-[65px] rounded-4xl flex items-center justify-center ${
                  index == 0 ? "div-bg text-[#222]" : "bg-blog text-[#fff]"
                }`}
              >
                <svg
                  width="30"
                  height="41"
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
          ))}
        </div>
      </section>

      {/* Section two  */}
      <section className="relative flex items-center justify-center w-full py-50 px-12 container">
        <div className="relative w-full mx-auto min-h-[60vh]">
          {/* Image */}
          <img
            src="./fish.png"
            alt="section2Image"
            className="w-full sm:h-full h-[300px] object-cover rounded-3xl hidden md:block transition-all"
            loading="lazy"
          />

          {/* Mobile image */}
          <img
            src="./blogsection2.jpg" // Image for mobile screens
            alt="section2Image Mobile"
            className="absolute w-full h-[300px] sm:h-full object-cover rounded-3xl md:hidden transition-all ease-in-out bottom-20" // Hide on larger screens
          />

          <div
            ref={(el) => {
              if (el && !sect_Two.current.includes(el))
                sect_Two.current.push(el);
            }}
            className="absolute top-[0%] left-[50%] md:top-[5%] md:left-[87%] transform -translate-x-1/2 -translate-y-1/2 sm:w-[373px] w-auto text-center "
          >
            <h1 className="md:text-[2.5vw] text-3xl font-bold text-black">
              Transforming
            </h1>
          </div>

          <div
            ref={(el) => {
              if (el && !sect_Two.current.includes(el))
                sect_Two.current.push(el);
            }}
            className="absolute top-[7%] left-[50%] md:top-[12%] md:left-[85%] lg:top-[10vh] xl:top-[12vh] 2xl:lg:top-[14vh] transform -translate-x-1/2 -translate-y-1/2 sm:w-[427px] w-full text-center"
          >
            <h1 className="md:text-[2.5vw] text-3xl font-bold">
              Ideas into Reality
            </h1>
          </div>
          {/* Read More Button */}
          <button
            ref={sect_Two_Read_More}
            className="
      absolute 
      bottom-[-0vh] left-[50%] transform -translate-x-1/2 
      border-theme bg-white font-semibold rounded-2xl 
      text-[3.75vw] sm:px-6 px-4 sm:py-2 py-1 md:text-[0.75vw] md:bottom-[24vh] md:left-[14.5%] 
      text-black
      lg:bottom-[11vh]
      transition-all duration-10 ease-in-out md:px-3 md:py-1 lg:my-[-28px] xl:my-0 md:my-[-18px] border-amber-500 border 2xl:text-[1vw] 2xl:left-[14%] 2xl:bottom-[2%] xl:left-[14.5%] xl:bottom-[2%]
    "
          >
            Read More
          </button>
        </div>
      </section>

      {/* section 3 */}

      <section className="sm:min-h-[50vh] w-full mx-auto flex flex-col md:flex-row gap-8 px-10 sm:px-10 md:px-14 py-10 2xl:px-16 xl:px-16 container">
        {/* Left Side - 40% Width on Large Screens */}
        <div className="relative w-full md:w-[40%] aspect-[16/16] md:aspect-[4/3] overflow-hidden">
          {/* Overlay Text Block */}
          <div
            className="
          absolute sm:top-[-4%] sm:left-[-4%] 
              md:top-[-6%] md:left-[-8%]
              lg:top-[-6%] lg:left-[-4%]
          text-[4.5vw] sm:text-[4.7vw] md:text-[1.50vw]  font-semibold
          md:leading-6.5 lg:leading-9 lg:text-[1.60vw]
          xl:text-[1.80vw] xl:leading-12
          2xl:text-[2.2vw] 2xl:leading-15
          sm:leading-12 text-orange-950 bg-white bg-opacity-60 
          px-4 sm:p-6 rounded-lg transition-all duration-300 
          
        "
          >
            The Future of Work:
            <br /> Why Tech Talent <br />
            Prefers Flexible <br />
            Workspaces
          </div>

          {/* Image */}
          <Image
            src="/blogSec_3.png"
            alt="section_3_Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl transition-all duration-300 "
          />
        </div>

        {/* Right Side - 60% Width on Large Screens */}
        <div className="relative w-full md:w-[60%] aspect-[16/16] md:aspect-[4/3] overflow-hidden">
          {/* Overlay Text Block */}
          <div
            className="
          absolute top-[20%] 
          font-bold text-[4vw] sm:text-[3.5vw] md:text-[2vw]  md:leading-10 lg:text-[2vw] 2xl:text-[3vw] lg:leading-12 2xl:leading-20 xl:text-[2.5vw] xl:leading-16
          leading-14
          transition-all duration-300
        "
          >
            <span>Full-Stack</span>
            <br />
            <span>Development in 2024:</span>
            <br />
            <span>What Skills Do You</span>
            <br />
            <span>Need?</span>
          </div>

          {/* Image */}
          <Image
            src="/section_3_image2_other.png"
            alt="section_2_image2"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl transition-all duration-300"
          />
        </div>
      </section>
    </main>
  );
}
