"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // section one animation elements declarations
  const headerRef = useRef(null);
  const imageref = useRef(null);
  const textRef = useRef(null);
  const imageTwoRef = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // section two animation elements declarations

  const sect_Two = useRef<HTMLDivElement[]>([]);
  const sect_Two_Read_More = useRef(null);
  const image2Ref = useRef(null);

  // section three animation elements declarations

  const Section_3_imgRef = useRef<HTMLImageElement | null>(null);
  const Section_3_textRef = useRef<HTMLDivElement | null>(null);
  const sec_3_textRef2 = useRef<HTMLDivElement | null>(null);
  const read_more = useRef<HTMLDivElement | null>(null);
  const clipPathRef = useRef<SVGPathElement | null>(null);
  const sect_imageRef = useRef<HTMLImageElement | null>(null);

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

    gsap.to(clipPathRef.current, {
      attr: {
        d: "M18 0C8.05887 0 0 8.05887 0 18V583C0 592.941 8.05891 601 18 601H1405C1414.94 601 1423 592.941 1423 583V184C1423 173.507 1414.49 165 1404 165H1023C1012.51 165 1004 156.493 1004 146V98C1004 87.5066 1012.51 79 1023 79H1043C1053.49 79 1062 70.4934 1062 60V19C1062 8.50659 1053.49 0 1043 0H18Z",
      },
      duration: 2,
      ease: "power2.inOut",
      delay: 3, // 3 sec delay before animation
    });

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
    if (clipPathRef.current) {
      gsap.to(clipPathRef.current, {
        duration: 1.5,
        ease: "power2.inOut",
        attr: {
          d: "M18 0C8.05887 0 0 8.05887 0 18V95C0 105.493 8.50659 114 19 114H72C82.4934 114 91 122.507 91 133V165C91 175.493 99.5066 184 110 184H298C308.493 184 317 192.507 317 203V247C317 257.493 308.493 266 298 266H273C262.507 266 254 274.507 254 285V330C254 340.493 245.493 349 235 349H84C73.5066 349 65 357.507 65 368V404C65 414.493 56.4934 423 46 423H19C8.50659 423 0 431.507 0 442V583C0 592.941 8.05889 601 18 601H737C746.941 601 755 592.941 755 583V18C755 8.05887 746.941 0 737 0H18Z",
        },
        delay: 0.5,
      });
    }

    // ✅ Image Animation (No ScrollTrigger, Runs Immediately)
    if (Section_3_imgRef.current) {
      gsap.fromTo(
        Section_3_imgRef.current,
        { width: "100%" }, // Initially full width
        {
          width: "80%", // Shrinks to 80%
          duration: 2,
          ease: "power2.out",
        }
      );
    }

    // ✅ Text Animation - Font Size
    if (Section_3_textRef.current) {
      gsap.fromTo(
        Section_3_textRef.current,
        { fontSize: "40px", opacity: 0 },
        {
          fontSize: "30px",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    }

    // ✅ Text Animation - Move Left
    if (sec_3_textRef2.current) {
      gsap.fromTo(
        sec_3_textRef2.current,
        { x: "50px", opacity: 0 },
        {
          x: "0px",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    }

    // ✅ Read More Button Animation - Move Right
    if (read_more.current) {
      gsap.fromTo(
        read_more.current,
        { x: "-50px", opacity: 0 },
        {
          x: "0px",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <main className="flex flex-col items-center justify-center flex-col-1">
        {/* Section one  */}
        <div className="relative mx-auto w-full mt-20 px-4 sm:px-8 container">
          {/* Header */}

          <h1
            ref={headerRef}
            className="border-[4px] border-amber-500 w-[364px] md:w-[364px] md:h-[68px] p-2 rounded-[80px] text-center mb-20 mt-10 text-[1.5rem] font-bold mx-auto"
          >
            BLOGS
          </h1>

          {/* Grid Container */}
          <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 px-10">
            <div
              ref={imageref}
              className="relative sm:col-span-8 sm:row-span-2 h-auto"
            >
              <div
                ref={textRef}
                className="absolute bottom-0 left-0 z-10 sm:bottom-[-75] sm:left-0 font-bold sm:w-full sm:h-60 bg-white  flex flex-col gap-6  p-4 w-full h-[20vh] "
                style={{
                  clipPath:
                    "path('M118 19C118 8.5 109.5 0 99 0H19C8.5 0 0 8.5 0 19V158C0 168.5 8.5 177 19 177H324C334.5 177 343 168.5 343 158V126C343 115.5 334.5 107 324 107H302C291.5 107 283 98.5 283 88V68C283 57.5 274.5 49 264 49H137C126.5 49 118 40.5 118 30V19Z')",
                }}
              >
                <span className="font-normal border border-amber-400 w-22 text-center rounded-3xl text-sm sm:text-base bg-white">
                  Next-Gen
                </span>
                <span className="text-4xl bottom-0 text-black">
                  Transforming
                </span>
                <span className="text-4xl bottom-0 text-black">
                  Ideas into Reality
                </span>
              </div>
              {/* <svg width="0" height="0">
              <defs>
                <clipPath id="myClip">
                  <path d="M18 0C8.05887 0 0 8.05887 0 18V316C0 326.493 8.50659 335 19 335H99C109.493 335 118 343.507 118 354V365C118 375.493 126.507 384 137 384H264C274.493 384 283 392.507 283 403V423C283 433.493 291.507 442 302 442H324C334.493 442 343 450.507 343 461V493C343 503.493 351.507 512 362 512H906C915.941 512 924 503.941 924 494V18C924 8.05887 915.941 0 906 0H18Z" />
                </clipPath>
              </defs>
            </svg> */}
              {/* <img
              src="./blog4.jpeg"
              alt="blogImage"
              className="w-full h-[250px] sm:h-[514px] rounded-2xl object-cover"
              // style={{ clipPath: "url(#myClip)" }}
            /> */}
              <Image
                src="/blog4.jpeg"
                alt="blogImage"
                width={924}
                height={514}
                className="w-full h-[250px] sm:h-[514px] rounded-2xl object-cover"
              />
            </div>

            {/* Content Divs */}
            {[0, 1].map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className={`relative w-full h-auto flex flex-col justify-between sm:col-span-4 rounded-2xl px-8 text-center ${
                  index == 0
                    ? "bg-[#ffe6cc] text-[#222]"
                    : "bg-amber-500 text-[#fff]"
                }`}
              >
                <p className="py-10">
                  "Their team took our vision and turned it into a seamless,
                  high-performance dApp. The UI/UX was flawless, and the smart
                  contracts were secure and gas-efficient. Highly recommend!"
                  <br />
                  <br />— Alex R., CEO of BlockFi Ventures
                </p>

                <div
                  className={`absolute border-white border-8 bottom-[-5] right-[-5] h-[65px] w-[65px] rounded-4xl flex items-center justify-center ${
                    index == 0
                      ? "bg-[#ffe6cc] text-[#222]"
                      : "bg-amber-500 text-[#fff]"
                  }`}
                >
                  <Image
                    src="/vector.png"
                    width={25}
                    height={25}
                    alt="vector"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section two  */}
        <div className="relative w-full h-auto sm:mt-20 px-12 container mt-50">
          <img
            ref={image2Ref}
            src="./section2Image.png"
            alt="section2Image"
            className="sm:w-full sm:h-auto h-[250px]  object-cover rounded-3xl custom-clip"
          />

          <div
            ref={(el) => {
              if (el && !sect_Two.current.includes(el))
                sect_Two.current.push(el);
            }}
            className="absolute top-[-50%] sm:top-[0%] sm:left-[68%] flex flex-col items-end sm:w-[373px] sm:h-[82px] w-auto"
          >
            <h1 className="text-[42px] font-bold">Transforming</h1>
          </div>

          <div
            ref={(el) => {
              if (el && !sect_Two.current.includes(el))
                sect_Two.current.push(el);
            }}
            className="absolute top-[-28%] sm:top-[15%] sm:left-[71%] flex flex-col sm:w-[427px] sm:h-[86px] w-auto"
          >
            <h1 className="text-[42px] font-bold">Ideas into Reality</h1>
          </div>

          <button
            ref={sect_Two_Read_More}
            className=" absolute bottom-6 font-semibold sm:left-52 left-50 border text-sm  border-amber-400 px-3 rounded-3xl bg-white"
          >
            Read More
          </button>
        </div>

        {/* section 3 */}
        <div className="w-full h-full mx-auto flex flex-col mt-20 md:flex-row gap-5 px-14 md:p-10">
          {/* Left Side */}
          <div className="relative  aspect-[16/9] md:aspect-[4/3] overflow-hidden w-full md:w-[603px] h-[50vh] md:h-[601px]">
            <div className="w-full max-w-[360px] text-[22px] md:text-[36px] font-semibold leading-[35px] md:leading-[52px] text-black bg-opacity-50 p-3 rounded-lg">
              The Future of Work:
              <br /> Why Tech Talent <br />
              Prefers Flexible <br />
              Workspaces
            </div>
            <Image
              src="/blogSec_3.png"
              alt="section_3_Image"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl"
            />
          </div>
          {/* Right Side */}
          <div className="relative  aspect-[16/9] md:aspect-[4/3] overflow-hidden w-full md:w-[755px] h-[50vh] md:h-[601px] ">
            <div className="absolute inset-0 top-30 font-bold text-[22px] md:text-[42px] md:leading-[72px] leading-[35px] flex flex-col">
              <span>Full-Stack</span>
              <span>Development in 2024:</span>
              <span> What Skills Do You</span>
              <span>Need?</span>
            </div>
            <Image
              src="/section_3_image2_other.png"
              alt="section_2_image2"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl"
            />
          </div>
        </div>
      </main>
    </motion.div>
  );
}
