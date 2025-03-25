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
  const imageTwoRef = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // section two animation elements declarations

  const sect_Two = useRef<HTMLDivElement[]>([]);
  const sect_Two_Read_More = useRef(null);

  // section three animation elements declarations

  const Section_3_imgRef = useRef<HTMLImageElement | null>(null);
  const Section_3_textRef = useRef<HTMLDivElement | null>(null);
  const sec_3_textRef2 = useRef<HTMLDivElement | null>(null);
  const read_more = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Section 1 animation code
    const tl = gsap.timeline();

    if (!headerRef.current || !imageref.current || !textRef.current) return;

    // // Initially set parent div to full width
    // gsap.set(imageref.current, {
    //   width: "150%",
    //   marginRight: "50%",
    //   y: 100,
    //   opacity: 1,
    // });

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
      ) // Sync header & image animations

      // 2️⃣ Shrink Image to Original Width
      .to(imageref.current, {
        width: "100%",
        duration: 1.2,
        ease: "power2.out",
      })

      // 4️⃣ Text Div Animation (After Image Shrinking)
      .to(
        textRef.current,
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.8"
      );

    // 5️⃣ Content Animations
    contentRefs.current.forEach((el) => {
      if (el) {
        tl.fromTo(
          el,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
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
    if (Section_3_imgRef.current && Section_3_textRef) {
      gsap.fromTo(
        Section_3_imgRef.current,
        { width: "100%" }, // ✅ Initially full width
        {
          width: "80%", // ✅ Shrink to 50%
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: Section_3_imgRef.current,
            start: "top 70%", // ✅ Jab 70% viewport pe aayega tab chalega
            scrub: true, // ✅ Smooth effect during scroll
          },
        }
      );
    }

    gsap.fromTo(
      Section_3_textRef.current,
      { fontSize: "40px" }, // ✅ Initially bada size
      {
        fontSize: "30px", // ✅ Shrink to smaller size
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 0%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      sec_3_textRef2.current,
      { x: 0 }, // ✅ Initially apni jagah pe
      {
        x: "-100px", // ✅ Move left by 200px
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec_3_textRef2.current,
          start: "top 70%", // ✅ Jab 70% viewport pe aayega tab chalega
          scrub: true, // ✅ Smooth effect during scroll
        },
      }
    );

    gsap.fromTo(
      read_more.current,
      { x: 0 }, // ✅ Initially apni jagah pe
      {
        x: "100px", // ✅ Move left by 200px
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: read_more.current,
          start: "top 0%", // ✅ Jab 70% viewport pe aayega tab chalega
          scrub: true, // ✅ Smooth effect during scroll
        },
      }
    );
  }, []);

  return (
    <main className="flex flex-col items-center justify-center flex-col-1">
      {/* Section one  */}
      <div className="relative w-screen min-h-screen mt-15 p-8 container">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-20 mt-10 text-[1.5rem] font-bold "
        >
          <h1 className="border-[3px] border-amber-500 sm:w-1/4 mx-auto p-2 rounded-4xl">
            BLOGS
          </h1>
        </div>

        {/* Grid Container */}
        <div className="min-h-[60vh] grid sm:grid-cols-12 gap-4 px-10">
          <div
            ref={imageref}
            className="relative sm:col-span-8 sm:row-span-2 rounded-2xl sm:w-full sm:h-[525px]"
          >
            <div
              ref={textRef}
              className="absolute sm:bottom-[-50] sm:left-0 font-bold sm:w-full sm:h-60 bg-white z-1 flex flex-col sm:gap-6 gap-2 w-80 h-30 bottom-100 element p-4 "
            >
              <span className="font-normal border border-amber-400 sm:w-22 text-center rounded-3xl bg-white">
                Next-Gen
              </span>
              <span className="sm:text-4xl bottom-0 text-black">
                Transforming
              </span>
              <span className="sm:text-4xl bottom-0 text-black">
                Ideas into Reality
              </span>
            </div>
            <svg width="0" height="0">
              <defs>
                <clipPath id="myClip">
                  <path d="M18 0C8.05887 0 0 8.05887 0 18V316C0 326.493 8.50659 335 19 335H99C109.493 335 118 343.507 118 354V365C118 375.493 126.507 384 137 384H264C274.493 384 283 392.507 283 403V423C283 433.493 291.507 442 302 442H324C334.493 442 343 450.507 343 461V493C343 503.493 351.507 512 362 512H906C915.941 512 924 503.941 924 494V18C924 8.05887 915.941 0 906 0H18Z" />
                </clipPath>
              </defs>
            </svg>
            <img
              src="./blog4.jpeg"
              alt="blogImage"
              className="sm:w-full sm:h-full rounded-2xl object-cover h-[300px] section-element"
              style={{ clipPath: "url(#myClip)" }}
            />
          </div>

          {/* Content Divs */}
          {[0, 1].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className={`w-[477px]  h-[241px] sm:col-span-4 rounded-2xl sm:py-4 sm:px-8 text-center grid ${
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
                <Image src="/vector.png" width={25} height={25} alt="vector" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section two  */}
      <div className="relative w-screen h-screen px-12 py-26  container">
        <img
          ref={imageTwoRef}
          src="./blogsection2.jpg"
          alt="section2Image"
          className="w-[1423px] h-[601px] object-cover rounded-3xl custom-clip"
        />

        {/* Wrapper to align both headings */}
        <div
          ref={(el) => {
            if (el && !sect_Two.current.includes(el)) sect_Two.current.push(el);
          }}
          className="absolute top-30 right-30 flex flex-col items-end"
        >
          <h1 className="text-[42px] font-bold">Transforming</h1>
        </div>

        {/* Wrapper to align both headings */}
        <div
          ref={(el) => {
            if (el && !sect_Two.current.includes(el)) sect_Two.current.push(el);
          }}
          className="absolute top-50 right-30 flex flex-col items-end"
        >
          <h1 className="text-[42px] font-bold">Ideas into Reality</h1>
        </div>

        <button
          ref={sect_Two_Read_More}
          className=" absolute sm:bottom-32 font-semibold sm:left-52 left-50 border text-sm  border-amber-400 px-3 rounded-3xl bg-white"
        >
          Read More
        </button>
      </div>

      {/* section 3 */}
      <div className="w-screen min-h-screen sm:px-12 sm:py-26 sm:mb-20 flex flex-col items-center justify-center container">
        <div className="grid grid-cols-5 grid-rows-5 gap-4  w-full h-full">
          <div className="relative col-span-2 row-span-5">
            <svg width="0" height="0">
              <defs>
                <clipPath id="section3Clip">
                  <path d="M19 215C8.50659 215 0 223.507 0 234V583C0 592.941 8.05889 601 18 601H132.668C143.161 601 151.668 592.493 151.668 582V577C151.668 566.507 160.175 558 170.668 558H262.668C273.161 558 281.668 566.507 281.668 577V582C281.668 592.493 290.175 601 300.668 601H463C472.941 601 481 592.941 481 583V18C481 8.05887 472.941 0 463 0H364.041C353.548 0 345.041 8.50659 345.041 19V45C345.041 55.4934 336.534 64 326.041 64H321C310.507 64 302 72.5066 302 83V101C302 110.941 293.941 119 284 119C274.059 119 266 127.059 266 137V148C266 158.493 257.493 167 247 167H245C234.507 167 226 175.507 226 186V196C226 206.493 217.493 215 207 215H19Z" />
                </clipPath>
              </defs>
            </svg>
            <img
              ref={Section_3_imgRef}
              src="./section_3.png"
              alt="blogImage"
              className="sm:w-full sm:h-full object-cover"
              style={{ clipPath: "url(#section3clip)" }}
            />

            <div
              ref={Section_3_textRef}
              className="absolute top-2 text-[40px] flex flex-col space-y-1 left-4"
            >
              <span>The Future of Work:</span>
              <span>Why Tech Talent</span>
              <span>Prefers Flexible</span>
              <span>Workspaces</span>
            </div>

            <div
              ref={read_more}
              className="absolute bottom-1 left-1/2 transform -translate-x-3/4"
            >
              <button className="border border-amber-500 px-6 py-2 rounded-3xl font-bold shadow-xl hover:bg-amber-400 hover:text-white">
                Read More
              </button>
            </div>
          </div>

          <div className="relative col-span-3 row-span-5 col-start-3 border-border-black ">
            <img
              src="./section_3_image2.png"
              alt="blogsection3Image"
              className="sm:w-[755px] sm:h-full absolute right-0"
            />

            <div className="absolute top-10 left-[-4]">
              <button className="border border-amber-500 px-4 py-2 rounded-3xl font-bold shadow-xl hover:bg-amber-400 hover:text-white">
                Next Gen
              </button>
            </div>

            <div
              ref={sec_3_textRef2}
              className="absolute top-1/5 flex flex-col gap-y-8 text-[40px] font-bold"
            >
              <span>Full-Stack </span>
              <span> Development in 2024:</span>
              <span>What Skills Do You</span>
              <span> Need?</span>
            </div>

            <div className="absolute bottom-30 left-[-4]">
              <button className="bg-amber-500 border-4 border-white px-4 py-2 rounded-3xl font-bold shadow-xl text-white hover:bg-amber-400 hover:text-white">
                Next Gen
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
