"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Home() {
  const headerRef = useRef(null);
  const imageref = useRef(null);
  const textRef = useRef(null);
  const textTwoRef = useRef(null);
  const imageTwoRef = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 2.5, delay: 1, ease: "power2.out" }
    )
      .fromTo(
        imageref.current,
        { y: 700, opacity: 0 },
        { y: 0, duration: 2.5, delay: 1, ease: "power2.out", opacity: 1 },
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
        { x: "0%", y: "0%", opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.8"
      ); // Starts slightly before the previous animation ends

    // 5️⃣ Content Animations
    contentRefs.current.forEach((el, index) => {
      if (el) {
        tl.fromTo(
          el,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.5"
        );
      }
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center flex-col-1">
      {/* Section one  */}
      <div className="relative w-screen min-h-screen mt-15 mb-28 p-8 container">
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
        <div className="min-h-[60vh] grid sm:grid-cols-12 gap-4">
          {/* Image Div */}

          <div
            ref={imageref}
            className="sm:col-span-8 sm:row-span-2 rounded-2xl "
          >
            <img
              src="./blog4.jpeg"
              alt="blogImage"
              className="sm:w-full sm:h-full rounded-2xl object-cover h-[300px]"
            />

            <div
              ref={textRef}
              className="absolute sm:bottom-0 sm:left-0  font-bold sm:w-60 sm:h-50 bg-white z-1 flex flex-col sm:gap-6  gap-2 py-4 w-40 h-30 bottom-120"
            >
              <button className="sm:text-sm border border-amber-400 sm:w-25 px-2 py-1 rounded-3xl bg-white w-25 text-[12px]">
                Next-Gen
              </button>
              <p className="sm:text-3xl bottom-0 text-black ">
                Transforming Ideas into Reality
              </p>
            </div>
          </div>

          {/* Content Divs */}
          {[0, 1].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                contentRefs.current[index] = el; // ✅ Corrected: No return statement
              }}
              className={`sm:col-span-4 rounded-2xl sm:py-4 sm:px-8 text-center grid ${
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
      <div className="w-screen h-screen px-12 py-26 relative container">
        <img
          ref={imageTwoRef}
          src="./blogsection2.jpg"
          alt="section2Image"
          className="w-full h-full object-cover rounded-3xl "
        />
        <div
          ref={textTwoRef}
          className=" absolute flex items-center justify-center sm:text-end top-[-60]  sm:top-20 right-6 bg-white py-10 px-8 w-110 text-center sm:h-36 sm:w-100 rounded-3xl"
        >
          <p className="text-4xl">Transforming Ideas into Reality</p>
        </div>

        <button className=" absolute bottom-28 font-semibold sm:left-60 left-50 border text-sm border-amber-400 px-3 rounded-3xl bg-white">
          Read More
        </button>
      </div>

      {/* section 3 */}
      <div className="w-screen h-screen sm:px-12 sm:py-26 sm:mb-20 flex flex-col items-center justify-center container">
        <div className="grid grid-cols-1 sm:grid-cols-12 p-10 sm:gap-4 sm:h-[601px] relative justify-between">
          {/* Left Section */}
          <div className="sm:relative absolute col-span-1 sm:col-span-4 rounded-3xl bg-[#fff1e4] sm:h-full sm:w-full h-60 w-100 ">
            <div className="flex bg-white items-center justify-center p-3 sm:w-4/6 sm:h-2/5 w-1/2 sm:text-3xl">
              <p>
                The Future of Work: Why Tech Talent Prefers Flexible Workspaces
              </p>
            </div>
            <button className=" absolute font-semibold bottom-2 left-45 border text-sm border-amber-400 px-3 rounded-3xl bg-white">
              Read More
            </button>
          </div>

          {/* Right Section */}
          <div className="sm:col-span-8 col-span-1 rounded-3xl sm:relative sm:h-full sm:w-full">
            <div className="bg-white sm:absolute sm:h-80 sm:w-100 sm:top-[20%] flex items-center justify-center p-2 sm:gap-4 rounded-3xl h-50 w-80">
              <button className="absolute font-semibold top-5 left-5 border text-sm border-amber-400 px-3 rounded-3xl bg-white">
                Next-Gen
              </button>
              <p className="absolute left-5 sm:text-3xl">
                Full-Stack Development in 2024: What Skills Do You Need?
              </p>
              <button className=" absolute p-2 text-white  bottom-50 sm:bottom-5 left-5 border text-sm border-amber-400 px-3 rounded-2xl bg-orange-500">
                Read More
              </button>
            </div>
            <div className="">
              <Image
                height={200}
                width={400}
                src="/blog3.jpeg"
                alt="blog4Image"
                className="sm:h-[601px] sm:w-[755px]  object-cover rounded-3xl sm:ml-35"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
