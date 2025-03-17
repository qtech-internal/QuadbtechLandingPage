"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center mb-20">
      
      {/* 1. Full width Image shrink to left */}
      <motion.div
        initial={{ width: "100%", height: "80%" }}
        animate={{ width: "60%", height: "70%" }} // Shrinking
        transition={{ duration: 1.5 }}
        className="absolute left-0 bottom-0 rounded-2xl overflow-hidden shadow-lg"
      >
        <Image src="/bg.webp" alt="Background" layout="fill" objectFit="cover" />
      </motion.div>

      {/* 2. Text on left bottom over image (after image shrink) */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }} // After image shrink
        className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-md"
      >
        <div className="text-black font-bold text-lg w-60">
          <span className="text-xs border border-gray-400 rounded-full px-2 py-1 mr-2">Next-Gen</span>
          <br />
          Transforming <br /> Ideas into Reality
        </div>
      </motion.div>

      {/* 3. Blog Heading (optional center top) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-5 bg-white px-6 py-2 rounded-full border-2 border-orange-500 font-bold"
      >
        BLOGS
      </motion.div>

      {/* 4. Testimonial Cards Slide from Right */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }} // After text appears
        className="absolute right-10 top-1/3 flex flex-col gap-4 w-[30%]"
      >
        {/* Card 1 */}
        <div className="bg-[#FFF7ED] p-5 rounded-2xl shadow-xl text-black">
          <p className="text-sm">
            "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!"
          </p>
          <p className="text-right font-semibold mt-2">— Alex R, CEO of BlockFi Ventures</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F57C00] p-5 rounded-2xl shadow-xl text-white">
          <p className="text-sm">
            "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!"
          </p>
          <p className="text-right font-semibold mt-2">— Alex R, CEO of BlockFi Ventures</p>
        </div>
      </motion.div>
    </div>
  );
}
