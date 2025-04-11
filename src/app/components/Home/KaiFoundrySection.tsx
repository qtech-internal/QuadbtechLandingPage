'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import SvgImage from '../SvgImage';

export default function KaiFoundrySection() {
const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
const imageControls = useAnimation();
 const headingControls = useAnimation();
 const paraControls = useAnimation();
 const tagsControls = useAnimation();

  const [imageAnimationDone, setImageAnimationDone] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      if (inView) {
      //  image enter from top to center
        await imageControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeOut' }
        });


        await new Promise(resolve => setTimeout(resolve, 1000));


        await imageControls.start({
          x: '30vw',
          y: '8vh',
          scale: 0.6,
          rotate: 120,
          transition: { duration: 1, ease: 'easeInOut' }
        });

        //  image animation as done
        setImageAnimationDone(true);

        // Start heading
        await headingControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 }
        });

        //  paragraph
        await paraControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.1 }
        });

        // tags
        await tagsControls.start({
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 }
        });
      }
    };

    sequence();
  }, [inView, imageControls, headingControls, paraControls, tagsControls]);

  return (
   <section
    ref={ref}
    className="relative px-6  md:px-10 py-20 md:py-20 my-20 flex mx-auto overflow-hidden mb-20 justify-center bg-white text-black"
  >
    {/* image  Page Animation */}
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={imageControls}
      className="absolute z-30"
      style={{ top: "40%", left: "40%", transform: "translate(-50%, -40%)" }}
    >
        {/* <Image src="/image3.svg" alt="Animation Image" width={350} height={350} className="object-cover " /> */}
        <SvgImage  />
        </motion.div>
  {/* overlay to hide background till image is done */}
    {!imageAnimationDone && <div className="absolute inset-0 bg-white z-20"></div>}
  
    {/* main  */}
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10 transition-opacity duration-1000 ${
        imageAnimationDone ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Left Side */}
      <div className="flex-1">
        {/* Heading */}
        <motion.div initial={{ x: -100, opacity: 0 }} animate={headingControls} className="text-[#000000] text-xl font-semibold font-roboto">
          Our Web3 Innovation Lab
          <div className="mt-4 flex">
              <Image src="/kaifoundary.png" alt="Kai Foundry Logo" width={200} height={50} />
            
          </div>
        </motion.div>
  
        {/* Paragraph */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={paraControls}
          className="mt-8 text-black text-lg md:text-xl font-semibold"
        >
          Pushing the Boundaries of Decentralization
          <br className="hidden sm:block" />
          At KaiFoundry, we specialize in building next-generation Web3 products, designed for scalability, security, and seamless user experiences. From smart contract development to NFT ecosystems, we bring decentralized innovation to life.
        </motion.p>
  
        <button className=" px-6 py-2 rounded-full  button-theme mt-14 ">
  Explore More
</button>

      </div>
  
      {/* Right Side */}
      <div className="flex-1 relative">
       <motion.div initial={{ opacity: 0 }} animate={tagsControls} className="flex flex-wrap gap-2 sm:gap-4 justify-center mt-10">
          <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
            Smart Contracts & DeFi Solutions
          </span>
          <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
            Metaverse & Blockchain Gaming
          </span>
          <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
            NFT Marketplaces & Tokenization
          </span>
          <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
            dApps & Web3 Infrastructure
          </span>
          <span className="bg-theme text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
            And Many More
          </span>
        </motion.div>
      </div>
    </div>
  </section>
  

  );
}
