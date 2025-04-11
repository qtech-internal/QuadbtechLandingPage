"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function SectionTwo() {
    // section two animation elements declarations
    const sect_Two = useRef<HTMLDivElement[]>([]);
    const sect_Two_Read_More = useRef(null);

    useEffect(() => {
        // Section 1 animation code

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
        <section className="w-full py-12 px-4 md:px-6 lg:px-10 ">
            <div className="relative w-full mx-auto min-h-[500px] md:min-h-0 container">
                {/* Image */}
                <img
                    src="./fish.png"
                    draggable={false}
                    alt="section2Image"
                    className="w-full sm:h-full h-[300px] object-cover rounded-3xl hidden md:block transition-all"
                    loading="lazy"
                />

                {/* Mobile image */}
                <img
                    draggable={false}
                    src="./blogsection2.jpg" // Image for mobile screens
                    alt="section2Image Mobile"
                    className="absolute w-full h-[300px] sm:h-full object-cover rounded-3xl md:hidden transition-all ease-in-out bottom-20" // Hide on larger screens
                />

                <div

                    className="absolute top-[0%] left-[50%] md:top-[5%] md:left-[87%] transform -translate-x-1/2 -translate-y-1/2 sm:w-[373px] w-auto text-center container "
                >
                    <h1 className="2xl:text-4xl md:text-[2.2vw] text-3xl font-bold ">
                        Transforming
                    </h1>
                </div>

                <div

                    className="absolute top-[10%] left-[50%] md:top-[18%] md:left-[85%] lg:top-[20%] xl:top-[20%] 2xl:top-[20%] transform -translate-x-1/2 -translate-y-1/2  w-full text-center"
                >
                    <h1 className="2xl:text-4xl md:text-[2.2vw] text-3xl font-bold ">
                        Ideas into Reality
                    </h1>
                </div>
                {/* Read More Button */}
                <button

                    className="
              absolute
              bottom-[-0vh] left-[50%] transform -translate-x-1/2
              border-theme bg-white font-semibold rounded-2xl

              text-[3.75vw] sm:px-6 px-4 sm:py-2 py-1 md:text-[0.75vw] md:bottom-0 md:left-[14.5%]


              transition-all duration-10 ease-in-out md:px-3 md:py-1 border-amber-500 border 2xl:text-[15px]
            "
                >
                    Read More
                </button>
            </div>
        </section>
    );
}
