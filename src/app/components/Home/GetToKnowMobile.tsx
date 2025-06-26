"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
const themeGradients: { [key: string]: { start: string; end: string } } = {
  orange: { start: "#FF9500", end: "#FFC892" },
  olive: { start: "#b5b567", end: "#d7d7a3" },
  purple: { start: "#c866d7", end: "#e6b8f0" },
  pink: { start: "#ff69b4", end: "#ffc0cb" },
  red: { start: "#bc4f5a", end: "#f08080" },
  brown: { start: "#846353", end: "#b99b8b" },
  cyan: { start: "#00a7a7", end: "#a1e3e3" },
};


const GetToKnow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [startWordAnimation, setStartWordAnimation] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
   const [currentTheme, setCurrentTheme] = useState("orange");

   useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "orange";
      setCurrentTheme(savedTheme);
  
      const handleThemeChange = (e: Event) =>
        setCurrentTheme((e as CustomEvent<string>).detail);
      window.addEventListener("themeChanged", handleThemeChange);
      return () => window.removeEventListener("themeChanged", handleThemeChange);
    }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const xValue = screenWidth >= 768 ? -400 : -50;
  const kValue = screenWidth >= 768 ? 150 : 80;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 2.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.7"]
  });

  const textColor = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["#808080", "#000000"]
  );

   useEffect(() => {
      const { start, end } =
        themeGradients[currentTheme] || themeGradients.orange;
  
      const stop1_1 = document.getElementById("stop1-1");
      const stop1_2 = document.getElementById("stop1-2");
      if (stop1_1) stop1_1.setAttribute("stop-color", start);
      if (stop1_2) stop1_2.setAttribute("stop-color", end);
  
      const stop2_1 = document.getElementById("stop2-1");
      const stop2_2 = document.getElementById("stop2-2");
      if (stop2_1) stop2_1.setAttribute("stop-color", start);
      if (stop2_2) stop2_2.setAttribute("stop-color", end);
    }, [currentTheme]);

  const words = "At QuadB, we specialize in cutting-edge software development, from robust Web2 applications to blockchain-powered Web3 ecosystems. Whether you're a startup or an enterprise, we bring your vision to life with secure, scalable, and future-ready technology.".split(" ");

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartWordAnimation(true);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  useEffect(() => {
    if (startWordAnimation) {
      const interval = setInterval(() => {
        setCurrentWord((prev) => (prev < words.length - 1 ? prev + 1 : prev));
      }, 200);

      return () => clearInterval(interval);
    }
  }, [startWordAnimation, words.length]);

  return (
    <section ref={ref} className="relative bg-white py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.div
        className="max-w-[1500px] mx-auto flex flex-col items-start gap-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ duration: 2 }}
      >

        <motion.div
          className="w-full md:w-1/4 flex justify-center md:justify-start"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            isInView && !isMobile
              ? {
                x: [0, xValue, xValue],
                y: [0, 0, 50],
                opacity: [0, 1, 1],
              }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 3.5, times: [0, 0.5, 1], ease: 'easeInOut' }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="button-theme px-3 py-2 rounded-full text-xs transition-all duration-300 cursor-pointer"
          >
            Get to Know Us!
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full md:w-3/4 text-start md:text-left"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            isInView && !isMobile
              ? {
                x: [0, kValue, kValue],
                y: [0, 0, -40],
                opacity: [0, 1, 1],
              }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 3.5, times: [0, 0.5, 1], ease: 'easeInOut' }}
        >
          <motion.h2
  className="text-2xl md:text-2xl lg:text-3xl sm:text-xl font-medium leading-snug pr-[2px] font-Poopins"
  style={{ color: textColor }}
>
  &quot;
  {words.map((word, index) => (
    <motion.span
      key={index}
      style={{
        color: index <= currentWord ? "#000000" : "#808080",
        transition: "color 0.3s ease",
        marginRight: "4px",
        display: "inline-block",
      }}
      className='text-[24px] font-[500]'
    >
      {word}
    </motion.span>
  ))}
  &quot;
</motion.h2>
          <motion.div
            className="mt-6 flex flex-col sm:flex-row justify-start md:justify-start sm:space-x-10 sm:space-y-0 space-y-4 text-lg font-semibold text-p"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "visible"}
          >
            <motion.span variants={itemVariants}>100+ Successful Projects</motion.span>
            <motion.span variants={itemVariants}>10+ Years of Expertise</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute top-100 lg:top-0 md:top-0 sm:top-80 right-0 translate-x-[40px] translate-y-[-95px] h-full w-full flex justify-end pointer-events-none opacity-38">
        <svg
          width="200"
          height="200"
          viewBox="0 0 376 436"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="strokeGradient1"
              x1="206"
              y1="1"
              x2="293"
              y2="344"
              gradientUnits="userSpaceOnUse"
            >
              <stop id="stop1-1" stopColor="#FF9500" />
              <stop id="stop1-2" offset="1" stopColor="#FFC892" />
            </linearGradient>
            <linearGradient
              id="strokeGradient2"
              x1="169"
              y1="432"
              x2="82"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop id="stop2-1" stopColor="#FF9500" />
              <stop id="stop2-2" offset="1" stopColor="#FFC892" />
            </linearGradient>
          </defs>
          <path
            d="M369.166 202.759C266.848 182.681 233.761 134.69 206.19 1.75488C183.466 166.312 191.37 247.315 293.11 344.005L369.166 202.759Z"
            stroke="url(#strokeGradient1)"
            strokeWidth="6.98039"
          />
          <path
            d="M6.38898 231.27C108.707 251.348 141.793 299.339 169.365 432.274C192.089 267.717 184.184 186.714 82.4445 90.024L6.38898 231.27Z"
            stroke="url(#strokeGradient2)"
            strokeWidth="6.98039"
          />
        </svg>
      </div>
    </section>
  );
};

export default GetToKnow;