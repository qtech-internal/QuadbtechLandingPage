"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// devices
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const GetToKnow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
    <section ref={ref} className="relative bg-white py-12 px-6 overflow-hidden ">
      <motion.div
        className="max-w-[1500px] mx-auto flex flex-col items-center gap-10"
        initial={{ opacity: 0 }}
        animate={isInView && !isMobile ? { opacity: 1 } : { opacity: 1 }} // visible on mobile
        transition={{ duration: 2 }}
      >
        {/* Left: Button */}
        <motion.div
          className="w-full md:w-1/4 flex justify-center md:justify-start"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            isInView && !isMobile
              ? {
                  x: [0, -400, -400],
                  y: [0, 0, 40],
                  opacity: [0, 1, 1],
                }
              : { x: 0, y: 0, opacity: 1 } // static on mobile
          }
          transition={{ duration: 4.5, times: [0, 0.5, 1], ease: 'easeInOut' }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Get to Know Us!
          </motion.button>
        </motion.div>

        {/* Right: */}
        <motion.div
          className="w-full md:w-3/4 text-center md:text-left"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            isInView && !isMobile
              ? {
                  x: [0, 200, 200],
                  y: [0, 0, -40],
                  opacity: [0, 1, 1],
                }
              : { x: 0, y: 0, opacity: 1 } // Static on mobile
          }
          transition={{ duration: 4.5, times: [0, 0.5, 1], ease: 'easeInOut' }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            At QuadB, we specialize in cutting-edge software development,
            <br />
            from robust Web2 applications to blockchain-powered Web3 ecosystems.
            Whether you're a startup or an enterprise, we bring your vision to life
            with secure, scalable, and future-ready technology.
          </h2>

          <motion.div
            className="mt-6 flex justify-center md:justify-start space-x-10 text-lg font-semibold text-orange-700"
            variants={containerVariants}
            initial="hidden"
            animate={isInView && !isMobile ? "visible" : "visible"} //  visible on mobile
          >
            <motion.span variants={itemVariants}>100+ Successful Projects</motion.span>
            <motion.span variants={itemVariants}>10+ Years of Expertise</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Light Background Shape */}
      <div className="absolute top-0 right-0 h-full w-full flex items-center justify-end pointer-events-none">
        <img src="Frame 37 (1).png" alt="" />
      </div>
    </section>
  );
};

export default GetToKnow;






















