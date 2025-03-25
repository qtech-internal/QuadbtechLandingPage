
"use client";
import { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(3); // Start from last image
  const [isPaused, setIsPaused] = useState(false);
  const [outerRotation, setOuterRotation] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const delay = 3000;


  const innerImages = [
    {
      id: 5,
      angle: 0,
      src: "/design.jpeg",
      text: "Cutting-edge innovation meets reliability. Our NFT marketplace is thriving thanks to their team!",
      name: "James K., CTO, YieldSync Finance",
      comment: "High-performance .",
    },
    {
      id: 6,
      angle: 45,
      src: "/test3.jpeg",
      text: "Secure, optimized, and future-proof—our SaaS platform runs like a dream!",
      name: "Elena W., Product Lead, TrustLedger",
      comment: "High-performance .",
    },
    {
      id: 7,
      angle: 90,
      src: "/test6.jpeg",
      text: "Secure, optimized, and future-proof—our SaaS platform runs like a dream!",
      name: "Elena W., Product Lead, TrustLedger",
      comment: "Fast and Reliable.",
    },
    {
      id: 8,
      angle: 135,
      src: "/test5.jpeg",
      text: "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!",
      name: " Alex R., CEO of BlockFi Ventures.",
      comment: "High-performance .",
    },
  ];

  const outerImages = [
    { id: 1, angle: 0, src: "/test1.jpeg" },
    { id: 2, angle: 45, src: "/test2.jpeg" },
    { id: 3, angle: 90, src: "/test4.jpeg" },
    { id: 4, angle: 135, src: "/test6.jpeg" },
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
          setCurrentIndex((prev) => (prev - 1 + innerImages.length) % innerImages.length);
          setIsPaused(false);
        }, delay);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [rotation, isPaused, currentIndex]);

  // Get current testimonial data
  const currentTestimonial = innerImages[currentIndex];

  return (

    <div className="relative flex items-center justify-center py-20 bg-white
    before:absolute before:top-0 before:left-0 before:w-40 before:h-40
    before:bg-[url('/vector2.png')] before:bg-contain before:bg-no-repeat before:opacity-30
    after:absolute after:bottom-0 after:right-0 after:w-40 after:h-40
    after:bg-[url('/vector2.png')] after:bg-contain after:bg-no-repeat after:opacity-30">
      <div className="relative w-[700px] h-[700px] flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] border-2 border-theme rounded-full"></div>

        {/* outer  img */}
        {outerImages.map(({ id, angle, src }, index) => {
          const newAngle = (index * 45 + outerRotation) % 180;
          return (
            <div
              key={id}
              className="absolute w-14 h-14 rounded-full bg-white shadow-lg overflow-hidden "
              style={{
                transform: `rotate(${newAngle}deg) translateX(-300px) rotate(-${newAngle}deg)`,
              }}
            >
              <img src={src} className="w-full h-full object-cover" alt={`Outer ${id}`} />
            </div>
          );
        })}

        {/* inner circle */}
        <div className="absolute w-[430px] h-[430px] border-2 border-theme rounded-full"></div>
        {innerImages.map(({ id, angle, src, comment }, index) => {
          const newIndex = (index - currentIndex + innerImages.length) % innerImages.length;
          const newAngle = newIndex * 45;
          const isCenter = newIndex === 0;

          return (

            <div
              key={id}
              className={`absolute w-20 h-20 rounded-full z-30 bg-white shadow-lg overflow-visible transition-all duration-500 ${isCenter ? "scale-120" : "scale-70 "
                }`}
              style={{
                transform: isCenter
                  ? `translate(0, 0)`
                  : `rotate(${newAngle}deg) translateX(-300px) rotate(-${newAngle}deg)`,
              }}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={src} className="w-full h-full object-cover rounded-full" alt={`Inner ${id}`} />
              {hoveredId === id && (

                <div className="relative">


                  <div className="absolute left-full -top-20 -translate-y-1/2 ml-2 w-48 p-2 text-[20px] text-white bg-theme rounded-lg shadow-lg opacity-100 transition-opacity duration-300 z-50">
                    {comment}

                    <div className="absolute left-0 bottom-0 translate-x-[-6px] translate-y-[6px] rotate-[-20deg] 
  w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent 
  border-r-4 border-r-[var(--border-card)]">
                    </div>


                  </div>
                </div>
              )}
            </div>

          );
        })}
      </div>
      <div className="absolute text-center max-w-lg top-[40%]">
        <h2 className="text-3xl font-semibold">
          Over <span className="font-bold">10K+ Clients</span> Trust{" "}
          <span className="font-bold text-p">Quadb</span>
        </h2>
      </div>
      <div className="absolute bottom-48 h-60 w-full div-bg shadow-lg p-6 rounded-lg max-w-xl flex flex-col items-center">

        <div className="absolute -top-5 -right-5 w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-14 h-14 div-bg rounded-full flex items-center justify-center">
            <img src="/vector.png" alt="Ant" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-30 h-16 bg-white rounded-b-full z-10"></div>
        <div className="mt-10 p-4 rounded-lg flex flex-col items-center mx-auto justify-center">
          <p className="text-theme italic text-center">
            "{currentTestimonial.text}"
          </p>
          <p className="mt-4 font-bold text-theme opacity-[0.8]">— {currentTestimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

