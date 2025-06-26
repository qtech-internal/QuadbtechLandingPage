"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function CareerPage() {
  const whyWorkWithUsRef = useRef(null);
  const benefitCardsRef = useRef(null);
  const bottomCardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Auto-starting animations for initial load and navigation from other pages
    const ctx = gsap.context(() => {
      // Section 1 - Hero Animations - Start automatically

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
          // toggleActions: "play none none reset",
        },
      });

      // Section 3 - Why Work With Us Animations - Enhanced transitions
      if (whyWorkWithUsRef.current) {
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
  ];

  return (
    <div className="hidden lg:flex flex-col text-secondary mx-10 md:mx-0 lg:mx-10 2xl:mx-0 ">
      <div className="mt-10 ">
        <section
          ref={whyWorkWithUsRef}
          className=" flex flex-col py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto justify-center relative"
        >
          <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-start ">
            {/* Top left content - Better spacing */}
            <div className="w-full  mb-10 lg:mb-0 ">
              <h2 className="why-work-section-title text-2xl sm:text-3xl lg:text-[32px] lg:font-[700] font-semibold">
                Why Work With Us?
              </h2>
              <p className="why-work-section-subtitle text-base lg:text-[18px] font-[400] mt-10 ">
                Leverage the power of our developer network to fuel your next
                big breakthrough!
              </p>
            </div>

            {/* Right card content - Improved alignment and consistent width */}
            <div
              ref={benefitCardsRef}
              className="benefit-cards-container flex flex-col gap-6 w-full lg:w-4/12 xl:w-4/12  "
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

          {/* Bottom card content - Fixed positioning and better responsive behavior */}
          <div
            ref={bottomCardsRef}
            className="bottom-cards-container w-full flex flex-col sm:flex-row gap-4 lg:gap-6 mt-[-50]  "
          >
            {/* bottom */}

            <div className="bottom-card border-2 border-theme w-full sm:w-3/5 h-auto p-5 sm:p-6 rounded-xl div-bg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-black">
                Perks & Benefits
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-black">
                <li>
                  <span className="font-semibold">Competitive Salary</span> – We
                  offer market-leading compensation, with crypto & fiat payment
                  options
                </li>
                <li>
                  <span className="font-semibold">Learning & Development</span>{" "}
                  – Access to courses, certifications, and mentorship
                </li>
                <li>
                  <span className="font-semibold">Remote-Friendly</span> – Work
                  from anywhere with flexible schedules
                </li>
                <li>
                  <span className="font-semibold">Health & Wellness</span> –
                  Medical benefits, wellness programs, and mental health support
                </li>
                <li>
                  <span className="font-semibold">
                    Team Retreats & Hackathons
                  </span>{" "}
                  – Engage in exciting events, meetups, and innovation
                  challenges
                </li>
              </ul>
            </div>

            <div className="bottom-card border-2 border-theme w-full sm:w-1/5 h-auto p-5 sm:p-6 rounded-xl div-bg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Growth & Learning
              </h3>
              <p className="text-sm sm:text-base">
                We invest in our people. From mentorship programs and upskilling
                opportunities to global industry events, we ensure you keep
                evolving.
              </p>
            </div>
            <div className="bottom-card mt-20 border-2 border-theme w-full sm:w-2/5  h-auto p-5 sm:p-6 rounded-xl div-bg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                A Culture of Collaboration
              </h3>
              <p className="text-sm sm:text-base">
                Our team is our greatest strength. We foster an environment
                where ideas are shared, challenges are tackled together, and
                learning never stops.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
