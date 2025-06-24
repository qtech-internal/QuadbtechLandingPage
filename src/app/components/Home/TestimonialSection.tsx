"use client";
import { useEffect, useState } from "react";

const themeGradients: { [key: string]: { start: string; end: string } } = {
  orange: { start: "#FF9500", end: "#FFC892" },
  olive: { start: "#b5b567", end: "#d7d7a3" },
  purple: { start: "#c866d7", end: "#e6b8f0" },
  pink: { start: "#ff69b4", end: "#ffc0cb" },
  red: { start: "#bc4f5a", end: "#f08080" },
  brown: { start: "#846353", end: "#b99b8b" },
  cyan: { start: "#00a7a7", end: "#a1e3e3" },
};

const TestimonialSection = () => {
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [outerRotation, setOuterRotation] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentTheme, setCurrentTheme] = useState("orange");

  const delay = 1000;

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "orange";
      setCurrentTheme(savedTheme);
  
      const handleThemeChange = (e: Event) =>
        setCurrentTheme((e as CustomEvent<string>).detail);
      window.addEventListener("themeChanged", handleThemeChange);
      return () => window.removeEventListener("themeChanged", handleThemeChange);
    }, []);
  

  const { start, end } = themeGradients[currentTheme] || themeGradients.orange;

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
          setCurrentIndex((prev) => (prev - 1 + innerImages.length) % innerImages.length);
          setIsPaused(false);
        }, delay);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [rotation, isPaused, currentIndex]);

  const currentTestimonial = innerImages[currentIndex];

  return (
    <div className="relative flex items-center justify-center py-20 bg-white mx-2 overflow-hidden">
      {/* Top Left Themed SVG */}
      <svg
        className="absolute top-0 left-0 w-[186px] h-[308px] opacity-70 z-0"
        width="186"
        height="308"
        viewBox="0 0 186 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="testimonial-svg-gradient-1" x1="0" y1="0" x2="186" y2="308" gradientUnits="userSpaceOnUse">
            <stop stopColor={start} />
            <stop offset="1" stopColor={end} />
          </linearGradient>
        </defs>
        <g opacity="0.15">
          <path
            d="M180 122.873C117.963 110.699 97.9015 81.6014 81.1841 1C67.406 100.774 72.1989 149.888 133.886 208.514L180 122.873Z"
            fill="url(#testimonial-svg-gradient-1)"
            stroke="url(#testimonial-svg-gradient-1)"
            strokeWidth="6.58773"
          />
          <path
            d="M-24.0001 185.457C38.0374 197.631 58.0985 226.729 74.8159 307.33C88.594 207.556 83.8011 158.442 22.114 99.8165L-24.0001 185.457Z"
            fill="url(#testimonial-svg-gradient-1)"
            stroke="url(#testimonial-svg-gradient-1)"
            strokeWidth="6.58773"
          />
        </g>
      </svg>
      {/* Bottom Right Themed SVG */}
      <svg
        className="absolute bottom-0 right-0 w-[186px] h-[308px] opacity-70 z-0"
        width="186"
        height="308"
        viewBox="0 0 186 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="testimonial-svg-gradient-2" x1="0" y1="0" x2="186" y2="308" gradientUnits="userSpaceOnUse">
            <stop stopColor={start} />
            <stop offset="1" stopColor={end} />
          </linearGradient>
        </defs>
        <g opacity="0.15">
          <path
            d="M180 122.873C117.963 110.699 97.9015 81.6014 81.1841 1C67.406 100.774 72.1989 149.888 133.886 208.514L180 122.873Z"
            fill="url(#testimonial-svg-gradient-2)"
            stroke="url(#testimonial-svg-gradient-2)"
            strokeWidth="6.58773"
          />
          <path
            d="M-24.0001 185.457C38.0374 197.631 58.0985 226.729 74.8159 307.33C88.594 207.556 83.8011 158.442 22.114 99.8165L-24.0001 185.457Z"
            fill="url(#testimonial-svg-gradient-2)"
            stroke="url(#testimonial-svg-gradient-2)"
            strokeWidth="6.58773"
          />
        </g>
      </svg>
      {/* ...rest of your TestimonialSection code (unchanged)... */}
      <div className="relative w-[700px] h-[700px] flex items-center justify-center  overflow-hidden">
        <div
          className="absolute w-[650px] h-[650px] border-2 border-[#B73B06] rounded-full mt-6"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 85%)",
          }}
        ></div>
        {outerImages.map(({ id, src }, index) => {
          const newAngle = (index * 45 + outerRotation) % 180;
          return (
            <div
              key={id}
              className="absolute w-14 h-14 rounded-full bg-white shadow-lg overflow-hidden "
              style={{
                transform: `rotate(${newAngle}deg) translateX(-320px) rotate(-${newAngle}deg)`,
              }}
            >
              <img src={src} className="w-full h-full object-cover" alt={`Outer ${id}`} />
              <div className="absolute inset-0 bg-[var(--div-bg)] opacity-50"></div>
            </div>
          );
        })}
        <div className="absolute w-[430px] h-[430px]  border-2 border-[#B73B06] rounded-full"></div>
        {innerImages.map(({ id, src, comment }, index) => {
          const newIndex = (index - currentIndex + innerImages.length) % innerImages.length;
          const newAngle = newIndex * 45;
          const isCenter = newIndex === 0;
          return (
            <div
              key={id}
              className={`absolute w-20 h-20 rounded-full z-30 bg-white shadow-lg overflow-visible transition-all duration-500 ${isCenter ? "scale-120" : "scale-70 "}`}
              style={{
                transform: isCenter
                  ? `translate(0, 0)`
                  : `rotate(${newAngle}deg) translateX(-300px) rotate(-${newAngle}deg)`,
              }}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={src} className="w-full h-full object-cover rounded-full" alt={`Inner ${id}`} />
              <div className="absolute inset-0 bg-[var(--div-bg)] opacity-50 rounded-full"></div>
              {hoveredId === id && (
                <div className="relative">
                  <div className="absolute left-full -top-20 -translate-y-1/2 ml-2 w-48 p-2 text-[20px] lg:text-[20px] sm:text-[14px] text-white bg-theme rounded-lg shadow-lg opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
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
      <div className="absolute text-center max-w-lg top-[35%]">
        <h2 className="text-2xl lg:text-3xl md:text-xl sm:text-sm  font-poppins">
          Over <span className="font-Poppins text-semibold">10K+ Clients</span> <br /> Trust{" "}
          <span className=" tracking-tight font-black ">Quadb</span>
        </h2>
      </div>
      <div className="absolute bottom-48 h-60 md:w-110  div-bg shadow-lg px-6 font-roboto  rounded-lg max-w-xl flex flex-col items-center">
        <div className="absolute -top-5 -right-5 w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-14 h-14 div-bg rounded-full flex items-center justify-center">
            <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
              <path d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
            </svg>
          </div>
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-30 h-16 bg-white rounded-b-full z-10"></div>
        <div className="mt-10 p-4 rounded-lg flex flex-col items-center mx-auto justify-center">
          <p className="text-secondary  text-center font-roboto">
            &ldquo;{currentTestimonial.text}&rdquo;
          </p>
          <p className="mt-4 font-bold text-secondary opacity-[0.8] whitespace-nowrap">
            — {currentTestimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;