"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function SectionOne() {
    const headerRef = useRef(null);
    const imageref = useRef(null);
    const textRef = useRef(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Section 1 animation code
        const tl = gsap.timeline();

        if (!headerRef.current || !imageref.current || !textRef.current) return;

        // Initially set parent div to full width
        gsap.set(imageref.current, {
            width: "150%",
            marginRight: "50%",
            y: 10,
            opacity: 0,
        });

        gsap.set(textRef.current, { x: "-100%", y: "200%", opacity: 0 });

        // 1️⃣ Header & Image Animation Together
        tl.fromTo(
            headerRef.current,
            { y: 100, opacity: 0 },
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


    }, []);

    return (
        <section className="w-full mt-35 px-4 sm:px-8 md:px-6 lg:px-8 ">
            <div className="container mx-auto max-w-8xl">
                <h1
                    ref={headerRef}
                    className="border-[4px] border-theme lg:w-[364px] w-1/2
            p-2 rounded-[80px] text-center mb-10 mt-10 text-[1.5rem] font-extrabold
            mx-auto flex items-center justify-center"
                >
                    BLOGS
                </h1>
                {/* Grid Container */}
                {/* <div className="grid 2xl:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 grid-cols-1 gap-4 2xl:px-10 my-10 sm:min-h-[60vh] "> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 p-4 min-h-[550px]">
                    <div
                        ref={imageref}
                        // className="relative  2xl:col-span-8 2xl:row-span-2 lg:col-span-8 sm:col-span-12 md:col-span-12 md:row-span-1 lg:row-span-2 sm:row-span-1"
                        className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative duration"
                    >
                        <div
                            ref={textRef}
                            className="absolute bottom-0 left-0 z-10 sm:bottom-[-75] sm:left-0 font-bold sm:w-full sm:h-60 bg-white  flex flex-col gap-6  p-4 w-full h-[20vh] "
                            style={{
                                clipPath:
                                    "path('M118 19C118 8.5 109.5 0 99 0H19C8.5 0 0 8.5 0 19V158C0 168.5 8.5 177 19 177H324C334.5 177 343 168.5 343 158V126C343 115.5 334.5 107 324 107H302C291.5 107 283 98.5 283 88V68C283 57.5 274.5 49 264 49H137C126.5 49 118 40.5 118 30V19Z')",
                            }}
                        >
              <span className="font-normal cursor-pointer border border-theme w-22 text-center rounded-3xl text-sm sm:text-base bg-white text-yellow-950">
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
                            draggable={false}
                        />
                    </div>

                    {/* Content Divs */}
                    {[0, 1].map((_, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                contentRefs.current[index] = el;
                            }}

                            className={`div-bg flex flex-col justify-between text-center  ${index == 0 ? "div-bg text-black" : "bg-blog text-[#fff]"} rounded-2xl  `}
                            style={{
                                clipPath:"path('M20 0C8.95431 0 0 8.9543 0 20V221C0 232.046 8.9543 241 20 241H399.592C407.787 241 414.471 225.131 413.326 217.017C413.111 215.496 413 213.942 413 212.362C413 194.136 427.775 179.362 446 179.362C453.976 179.362 477 168.731 477 160.755V20C477 8.95431 468.046 0 457 0H20ZM472.88 233.159C473.59 232.234 472.65 231.862 471.928 232.778C471.206 233.694 471.831 234.469 472.564 233.561C472.671 233.429 472.777 233.295 472.88 233.159Z)"
                            }}
                        >
                            <p className="p-6">
                                &#34;Their team took our vision and turned it into a seamless,
                                high-performance dApp. The UI/UX was flawless, and the smart
                                contracts were secure and gas-efficient. Highly recommend!&#34;
                                <br />
                                <br />
                                <span className="font-extrabold text-shadow-amber-900 text-shadow-lg/10">— Alex R., CEO of BlockFi Ventures</span>
                            </p>

                            <div
                                className={`absolute border-white border-8 bottom-[-5] right-[-5] h-[65px] w-[65px] rounded-4xl flex items-center justify-center  ${
                                    index == 0 ? "div-bg text-[#222]" : "bg-theme text-[#fff] "
                                }`}
                            >

                                {index == 0 ? (
                                    <Image src="/blogs/BrownLogos.png" alt="whiteLogos" width={30} height={30} draggable={false} />
                                ) : (
                                    <Image src="/blogs/whiteLogos.png" alt="whiteLogos" width={30} height={30} draggable={false} />
                                )}



                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
