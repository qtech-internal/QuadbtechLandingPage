"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
const GetToKnow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0); 
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

  return (
    <section ref={ref} className="relative bg-white py-12 px-6  overflow-hidden ">
      <motion.div
        className="max-w-[1500px] mx-auto flex flex-col items-center gap-10 "
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ duration: 2 }}
      >

        <motion.div
          className="w-full md:w-1/4 flex justify-center xl:justify-start "
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            isInView && !isMobile
              ? {
                // x: [0, -400, -400],
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
            className="button-theme px-4 py-2 rounded-full text-smtransition-all duration-300"
          >
            Get to Know Us!
          </motion.button>
        </motion.div>


        <motion.div
          className="w-full md:w-3/4 text-center md:text-left "
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            isInView && !isMobile
              ? {
                // x: [0, 150, 150],
                x: [0, kValue, kValue],
                y: [0, 0, -40],
                opacity: [0, 1, 1],
              }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 3.5, times: [0, 0.5, 1], ease: 'easeInOut' }}
        >
<h2 className="text-2xl md:text-2xl lg:text-3xl sm:text-xl font-semibold leading-snug pr-[2px]">
  At QuadB, we specialize in cutting-edge software development, from robust Web2 applications to blockchain-powered Web3 ecosystems. Whether you're a startup or an enterprise, we bring your vision to life with secure, scalable, and future-ready technology.&rdquo;
</h2>



          <motion.div
            className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start sm:space-x-10 sm:space-y-0 space-y-4 text-lg font-semibold text-p"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "visible"}
          >
            <motion.span variants={itemVariants}>100+ Successful Projects</motion.span>
            <motion.span variants={itemVariants}>10+ Years of Expertise</motion.span>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Bg Shape */}
      <div className="absolute top-0 right-0 h-full w-full flex items-center justify-end pointer-events-none">
        <img src="Frame 37 (1).png" alt="" />
      </div>
    </section>
  );
};

export default GetToKnow;





















