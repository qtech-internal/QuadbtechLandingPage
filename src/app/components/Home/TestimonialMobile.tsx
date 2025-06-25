"use client";
import { useEffect, useState } from "react";

const TestimonialMobile = () => {
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [outerRotation, setOuterRotation] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const delay = 1000;

  const innerImages = [
    {
      id: 5,
      angle: 0,
      src: "/home/home14.jpeg",
      text: "Cutting-edge innovation meets reliability. Our NFT marketplace is thriving thanks to their team!",
      name: "James K., CTO, YieldSync Finance",
      comment: "High-performance!",
    },
    {
      id: 6,
      angle: 45,
      src: "/home/home15.jpeg",
      text: "Secure, optimized, and future-proof—our SaaS platform runs like a dream!",
      name: "Elena W., Product Lead, TrustLedger",
      comment: "High-performance!",
    },
    {
      id: 7,
      angle: 90,
      src: "/home/home16.jpeg",
      text: "Secure, optimized, and future-proof—our SaaS platform runs like a dream!",
      name: "Elena W., Product Lead, TrustLedger",
      comment: "Fast and Reliable!",
    },
    {
      id: 8,
      angle: 135,
      src: "/home/home11.jpeg",
      text: "Their team took our vision and turned it into a seamless, high-performance dApp. Highly recommend!",
      name: " Alex R., CEO of BlockFi Ventures.",
      comment: "High-performance!",
    },
  ];

  const outerImages = [
    { id: 1, angle: 0, src: "/home/home10.jpeg" },
    { id: 2, angle: 45, src: "/home/home11.jpeg" },
    { id: 3, angle: 90, src: "/home/home12.jpeg" },
    { id: 4, angle: 135, src: "/home/home13.jpeg" },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (rotation < 135) {
        setRotation((prev) => prev + 5);
        setOuterRotation((prev) => prev + 5);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setRotation(0);
          setOuterRotation(0);
          setCurrentIndex(
            (prev) => (prev - 1 + innerImages.length) % innerImages.length
          );
          setIsPaused(false);
        }, delay);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [rotation, isPaused, currentIndex]);

  const currentTestimonial = innerImages[currentIndex];

  return (
    <div className="relative flex items-center justify-center bg-white overflow-visible before:absolute before:-top-5 before:-left-5 before:w-24 before:h-24 before:bg-[url('/vector2.png')] before:bg-contain before:bg-no-repeat before:opacity-30 after:absolute after:-bottom-5 after:-right-5 after:w-24 after:h-24 after:bg-[url('/vector2.png')] after:bg-contain after:bg-no-repeat after:opacity-30">
      <div
        className="relative flex items-center justify-center"
        style={{ width: `420px`, height: `420px` }}
      >
       <div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 border-2 border-theme rounded-full"
    style={{
      width: `400px`,
      height: `400px`,
      
      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 85%)",
      // maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
    }}
  ></div>

        {outerImages.map(({ id, src }, index) => {
          const newAngle = (index * 45 + outerRotation) % 200;
          return (
            <div
              key={id}
              className="absolute rounded-full bg-white shadow-lg overflow-hidden translate-y-[-26px]"
              style={{
                width: `34px`,
                height: `34px`,
                transform: `rotate(${newAngle}deg) translateX(-170px) rotate(-${newAngle}deg)`,
              }}
            >
              <img
                src={src}
                className="w-full h-full object-cover"
                alt={`Outer ${id}`}
              />
              <div className="absolute inset-0 bg-[var(--div-bg)] opacity-50"></div>
            </div>
          );
        })}

        <div
          className="absolute border-2 border-theme rounded-full"
          style={{ width: `258px`, height: `258px` }}
        ></div>

        {innerImages.map(({ id, src, comment }, index) => {
          const newIndex =
            (index - currentIndex + innerImages.length) % innerImages.length;
          const newAngle = newIndex * 45;
          const isCenter = newIndex === 0;

          return (
            <div
              key={id}
              className={`absolute rounded-full z-30 bg-white shadow-lg overflow-visible transition-all duration-500 ${isCenter ? "scale-120" : "scale-70"}`}
              style={{
                width: `48px`,
                height: `48px`,
                transform: isCenter
                  ? `translate(0, 0)`
                  : `rotate(${newAngle}deg) translateX(-180px) rotate(-${newAngle}deg)`,
              }}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={src}
                className="w-full h-full object-cover rounded-full"
                alt={`Inner ${id}`}
              />
              <div className="absolute inset-0 bg-[var(--div-bg)] opacity-50 rounded-full"></div>
              {hoveredId === id && (
                <div className="relative">
                  <div className="absolute left-full -top-20 -translate-y-1/2 ml-2 w-auto p-1.5 text-xs text-white bg-theme rounded-md shadow-lg opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                    {comment}
                    <div className="absolute left-0 bottom-0 translate-x-[-6px] translate-y-[6px] rotate-[-20deg] w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-[var(--border-card)]"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="absolute text-center max-w-lg top-[30%] ">
          <h2 className="text-[17px] font-medium  font-poppins">
            Over <span className="font-medium font-poppins">10K+ Clients <br/></span> Trust{" "}
            <span className="font-black ">Quadb</span>
          </h2>
        </div>
      </div>

      <div
        className="absolute bottom-[67px] max-w-70 div-bg shadow-lg px-4 rounded-lg flex flex-col items-center w-[90%]"
        style={{ height: `144px` }}
      >
        <div
          className="absolute -top-3 -right-3 bg-white rounded-full flex items-center justify-center overflow-hidden"
          style={{ width: `48px`, height: `48px` }}
        >
          <div
            className="div-bg rounded-full flex items-center justify-center"
            style={{ width: `34px`, height: `34px` }}
          >
            <svg
              width={18}
              height={18 * 1.36}
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

        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 bg-white rounded-b-full z-10"
          style={{ width: `72px`, height: `38px` }}
        ></div>

        <div className="mt-8 p-2 rounded-lg flex flex-col items-center mx-auto justify-center">
          <p className="text-secondary italic text-center text-sm">
            “{currentTestimonial.text}”
          </p>
          <p className="mt-2 font-bold text-secondary opacity-[0.8] whitespace-nowrap text-xs">
            — {currentTestimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialMobile;
