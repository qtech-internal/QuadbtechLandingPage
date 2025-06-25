'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import SvgImage from '../SvgImage';
import { useRouter } from "next/navigation";

export default function KaiFoundrySection() {
const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
const imageControls = useAnimation();
 const headingControls = useAnimation();
 const paraControls = useAnimation();
 const tagsControls = useAnimation();
  const router = useRouter();

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
    className="relative px-6  md:px-10 pb-20 md:py-20 mt-10 mb-0 flex mx-auto overflow-hidden  justify-center bg-white text-black"
  >
    {/* image  Page Animation */}
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={imageControls}
      className="absolute z-30"
      style={{ top: "70%", left: "10%", transform: "translate(-50%, -40%)" }}
    >
        {/* <Image src="/image3.svg" alt="Animation Image" width={350} height={350} className="object-cover " /> */}
        <SvgImage  />
        </motion.div>
  {/* overlay to hide background till image is done */}
    {!imageAnimationDone && <div className="absolute inset-0 bg-white z-20"></div>}
  
    {/* main  */}
    <div
      className={`flex flex-col md:flex-row  items-start md:items-center gap-10 relative z-10 transition-opacity duration-1000 ${
        imageAnimationDone ? "opacity-100" : "opacity-0"
      }`}
    >
        <div className="flex-1 text-center">
  {/* Heading */}
  <motion.div initial={{ x: -100, opacity: 0 }} animate={headingControls} className="text-[#000000] text-xl font-semibold font-roboto">
    Our Web3 Innovation Lab
    <div className="mt-4 flex justify-center ">
    <svg width="333" height="32" viewBox="0 0 333 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.0249 26.8721L34.606 31.0752C34.3302 31.339 33.8962 31.339 33.6205 31.0752L21.5529 19.5999C20.6178 18.7103 19.0857 18.7103 18.1482 19.5999L5.95112 31.1975C5.67538 31.4613 5.2414 31.4613 4.96567 31.1975L0.546716 26.9943C0.249402 26.7114 0.249402 26.2391 0.546716 25.9561L14.2831 12.8959C17.345 9.9851 22.3561 9.9851 25.4204 12.8959L39.0273 25.8363C39.3246 26.1192 39.3246 26.5915 39.0273 26.8745L39.0249 26.8721Z" fill="url(#paint0_linear_65431_805)"/>
<path d="M38.7611 0.113617H0.810421C0.362838 0.113617 0 0.476456 0 0.924039V6.47949C0 6.92708 0.362838 7.28991 0.810421 7.28991H38.7611C39.2087 7.28991 39.5715 6.92708 39.5715 6.47949V0.924039C39.5715 0.476456 39.2087 0.113617 38.7611 0.113617Z" fill="url(#paint1_linear_65431_805)"/>
<path d="M57.6211 4.49624C58.0958 4.49624 58.3188 4.71921 58.3188 5.19396V13.6242H62.7881C64.7854 13.6242 65.3872 13.4013 66.3055 12.1976L71.7555 4.90863C71.9761 4.62331 72.1031 4.49624 72.6738 4.49624H76.6036C77.1431 4.49624 77.2366 4.97097 77.016 5.2563L70.8683 13.2094C70.1394 14.1613 69.5688 14.8255 68.967 15.3338C69.8229 15.8733 70.583 16.6022 71.3742 17.6164L77.8696 25.8549C78.0278 26.0779 78.0926 26.6797 77.4572 26.6797H73.4003C72.8608 26.6797 72.7337 26.5526 72.5131 26.2673L66.682 18.7241C65.826 17.614 65.0971 17.2975 63.1334 17.2975H58.3164V25.9796C58.3164 26.4543 58.0958 26.6773 57.6187 26.6773H54.1972C53.7224 26.6773 53.4683 26.4543 53.4683 25.9796V5.19156C53.4683 4.71681 53.7224 4.49384 54.1972 4.49384H57.6187L57.6211 4.49624Z" fill="#0D051C"/>
<path d="M94.6012 4.49615C96.2172 4.49615 97.2003 5.00206 98.2457 6.90343L108.736 25.9483C108.959 26.3607 108.863 26.6772 108.354 26.6772H104.329C103.916 26.6772 103.758 26.5813 103.6 26.2648L101.351 22.1768H86.4562L84.2695 26.2648C84.1113 26.5813 83.9219 26.6772 83.5406 26.6772H79.4214C78.8819 26.6772 78.7884 26.3607 79.009 25.9483L89.403 6.90343C90.4484 5.00206 91.4003 4.49615 92.731 4.49615H94.6012ZM88.4535 18.5011H99.3558L94.3159 9.21482C94.2199 9.05657 94.1264 8.99422 93.9682 8.99422H93.7788C93.6205 8.99422 93.5246 9.05657 93.4311 9.21482L88.4559 18.5011H88.4535Z" fill="#0D051C"/>
<path d="M115.579 4.49615C116.053 4.49615 116.276 4.71913 116.276 5.19388V25.9819C116.276 26.4566 116.056 26.6796 115.579 26.6796H112.157C111.682 26.6796 111.428 26.4566 111.428 25.9819V5.19388C111.428 4.71913 111.682 4.49615 112.157 4.49615H115.579Z" fill="#0D051C"/>
<path d="M153.668 4.49615C154.143 4.49615 154.397 4.71913 154.397 5.19388V8.20538C154.397 8.68012 154.143 8.9031 153.668 8.9031H139.915C136.652 8.9031 135.7 9.88617 135.7 13.2118V13.8448H153.51C153.985 13.8448 154.208 14.0677 154.208 14.5425V17.0457C154.208 17.5204 153.987 17.7434 153.51 17.7434H135.7V25.9819C135.7 26.4566 135.477 26.6796 135.002 26.6796H131.58C131.106 26.6796 130.852 26.4566 130.852 25.9819V12.8617C130.852 6.77635 133.324 4.49615 139.725 4.49615H153.668Z" fill="#0D051C"/>
<path d="M175.948 4.49615C182.381 4.49615 184.821 6.77875 184.821 12.8617V18.3117C184.821 24.397 182.381 26.6772 175.948 26.6772H166.155C159.754 26.6772 157.281 24.3946 157.281 18.3117V12.8617C157.281 6.77635 159.754 4.49615 166.155 4.49615H175.948ZM162.13 17.964C162.13 21.292 163.082 22.2726 166.345 22.2726H175.756C179.019 22.2726 179.971 21.2896 179.971 17.964V13.2094C179.971 9.88137 179.019 8.90072 175.756 8.90072H166.345C163.082 8.90072 162.13 9.88377 162.13 13.2094V17.964Z" fill="#0D051C"/>
<path d="M192.837 4.49615C193.312 4.49615 193.535 4.71913 193.535 5.19388V17.8393C193.535 21.1985 194.487 22.1815 197.75 22.1815H206.528C209.791 22.1815 210.712 21.1985 210.712 17.8393V5.19388C210.712 4.71913 210.935 4.49615 211.41 4.49615H214.865C215.339 4.49615 215.562 4.71913 215.562 5.19388V18.3141C215.562 24.3994 213.121 26.6796 206.688 26.6796H197.563C191.161 26.6796 188.689 24.397 188.689 18.3141V5.19388C188.689 4.71913 188.943 4.49615 189.418 4.49615H192.839H192.837Z" fill="#0D051C"/>
<path d="M225.35 4.49615C227.378 4.49615 227.822 4.75031 229.025 6.36635L240.815 21.8315C240.911 21.9897 241.038 22.0545 241.227 22.0545H241.512C241.671 22.0545 241.767 21.9586 241.767 21.738V5.19628C241.767 4.72153 241.99 4.49854 242.464 4.49854H245.792C246.267 4.49854 246.49 4.72153 246.49 5.19628V23.3852C246.49 25.9531 245.572 26.682 243.637 26.682H240.911C238.978 26.682 238.503 26.4926 237.235 24.8118L225.414 9.34669C225.287 9.18844 225.191 9.1261 225.002 9.1261H224.717C224.527 9.1261 224.462 9.222 224.462 9.44258V25.9843C224.462 26.459 224.239 26.682 223.765 26.682H220.437C219.962 26.682 219.708 26.459 219.708 25.9843V7.79298C219.708 5.22505 220.626 4.49615 222.561 4.49615H225.35Z" fill="url(#paint2_linear_65431_805)"/>
<path d="M266.482 4.49601C273.359 4.49601 276.179 7.25335 276.179 13.4322V17.7409C276.179 23.9197 273.359 26.6771 266.482 26.6771H251.65C251.017 26.6771 250.698 26.3606 250.698 25.7252V5.44309C250.698 4.8101 251.015 4.49121 251.65 4.49121H266.482V4.49601ZM255.549 21.8601C255.549 22.1454 255.676 22.2725 255.961 22.2725H266.355C270.096 22.2725 271.33 21.0689 271.33 17.3285V13.8422C271.33 10.1018 270.096 8.89817 266.355 8.89817H255.961C255.676 8.89817 255.549 9.02525 255.549 9.34174V21.8601Z" fill="url(#paint3_linear_65431_805)"/>
<path d="M298.108 4.49601C302.956 4.49601 304.922 6.74504 304.922 11.0249V12.8304C304.922 16.4437 303.527 18.5657 300.201 19.1675L305.62 25.8858C305.809 26.1088 305.778 26.6771 305.207 26.6771H301.119C300.58 26.6771 300.422 26.55 300.232 26.2647L295.226 19.6734H284.99V25.9793C284.99 26.4541 284.769 26.6771 284.292 26.6771H280.871C280.396 26.6771 280.142 26.4541 280.142 25.9793V5.44309C280.142 4.8101 280.458 4.49121 281.094 4.49121H298.11L298.108 4.49601ZM284.988 15.8083H297.125C299.28 15.8083 300.071 14.89 300.071 12.9886V11.6579C300.071 9.75655 299.28 8.83823 297.125 8.83823H285.4C285.115 8.83823 284.988 8.9653 284.988 9.21946V15.8107V15.8083Z" fill="url(#paint4_linear_65431_805)"/>
<path d="M309.957 4.49615C310.339 4.49615 310.528 4.59205 310.717 4.87738L319.179 16.3168L327.703 4.87738C327.892 4.59205 328.084 4.49615 328.463 4.49615H332.613C332.961 4.49615 333.119 4.84381 332.899 5.12914L321.521 19.8965V25.9819C321.521 26.4566 321.298 26.6796 320.824 26.6796H317.402C316.927 26.6796 316.673 26.4566 316.673 25.9819V19.8965L305.423 5.12914C305.2 4.84381 305.327 4.49615 305.709 4.49615H309.955H309.957Z" fill="url(#paint5_linear_65431_805)"/>
<defs>
<linearGradient id="paint0_linear_65431_805" x1="-2.53192" y1="5.8203" x2="30.0647" y2="35.6596" gradientUnits="userSpaceOnUse">
<stop stop-color="#EEABFB"/>
<stop offset="1" stop-color="#9F1AB1"/>
</linearGradient>
<linearGradient id="paint1_linear_65431_805" x1="8.72281" y1="-6.42489" x2="41.2451" y2="23.3473" gradientUnits="userSpaceOnUse">
<stop stop-color="#EEABFB"/>
<stop offset="1" stop-color="#9F1AB1"/>
</linearGradient>
<linearGradient id="paint2_linear_65431_805" x1="228.517" y1="15.5855" x2="437.251" y2="15.5855" gradientUnits="userSpaceOnUse">
<stop stop-color="#0D051C"/>
<stop offset="0.48" stop-color="#9F1AB1"/>
</linearGradient>
<linearGradient id="paint3_linear_65431_805" x1="228.517" y1="15.5853" x2="437.251" y2="15.5853" gradientUnits="userSpaceOnUse">
<stop stop-color="#0D051C"/>
<stop offset="1" stop-color="#7D57D7"/>
</linearGradient>
<linearGradient id="paint4_linear_65431_805" x1="228.517" y1="-203.211" x2="437.251" y2="-203.211" gradientUnits="userSpaceOnUse">
<stop stop-color="#0D051C"/>
<stop offset="1" stop-color="#7D57D7"/>
</linearGradient>
<linearGradient id="paint5_linear_65431_805" x1="228.517" y1="-203.211" x2="437.251" y2="-203.211" gradientUnits="userSpaceOnUse">
<stop stop-color="#0D051C"/>
<stop offset="1" stop-color="#7D57D7"/>
</linearGradient>
</defs>
</svg>

    </div>
  </motion.div>

  {/* Paragraph */}
  <motion.p
    initial={{ x: 100, opacity: 0 }}
    animate={paraControls}
    className="mt-8 text-black text-lg md:text-xl font-medium"
  >
    Pushing the Boundaries of Decentralization
    <br className="hidden sm:block" />
    At KaiFoundry, we specialize in building next-generation Web3 products, designed for scalability, security, and seamless user experiences. From smart contract development to NFT ecosystems, we bring decentralized innovation to life.
  </motion.p>
 <div className="flex-1 relative">
  <motion.div
    initial={{ opacity: 0 }}
    animate={tagsControls}
    className="flex flex-col items-center gap-4 mt-10"
  >
  {/* Row 1 - Two tags */}
{/* <div className="flex gap-2 justify-center flex-wrap">
  <span className="border border-theme text-black px-4 py-[6px] rounded-full text-[13px] whitespace-nowrap">
    Smart Contracts & DeFi Solutions
  </span>
  <span className="border border-theme text-black px-4 py-[6px] rounded-full text-[13px] whitespace-nowrap">
    dApps & Web3 Infrastructure
  </span>
</div> */}

{/* Row 2 - One centered tag */}
{/* <div className="flex justify-center mt-3">
  <span className="border border-theme  text-black px-4 py-[6px] rounded-full text-[13px] whitespace-nowrap">
    NFT Marketplaces & Tokenization
  </span>
</div> */}

{/* Row 3 - Two tags */}
{/* <div className="flex gap-2 justify-center flex-wrap mt-3">
  <span className="border border-theme  text-black px-4 py-[6px] rounded-full text-[13px] whitespace-nowrap">
    Metaverse & Blockchain Gaming
  </span>
  <span className="border border-theme text-black px-4 py-[6px] rounded-full text-[13px] whitespace-nowrap">
    And Many More
  </span>
</div> */}


{/* Row 1 - Two tags */}
<div className="flex gap-2 justify-center">
  <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-xs">
    Smart Contracts & DeFi Solutions
  </span>
  <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-xs">
    dApps & Web3 Infrastructure
  </span>
</div>

{/* Row 2 - One centered tag */}
<div className="flex justify-center mt-3">
  <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-xs">
    NFT Marketplaces & Tokenization
  </span>
</div>

{/* Row 3 - Two tags */}
<div className="flex gap-2 justify-center mt-3">
  <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-xs">
    Metaverse & Blockchain Gaming
  </span>
  <span className="bg-theme text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-xs">
    And Many More
  </span>
</div>


  </motion.div>
</div>


  <button className="px-6 py-2 rounded-full block mx-auto button-theme mt-14 cursor-pointer"
   onClick={() => router.push("/career")}>
    Explore More
  </button>
</div>

  
  
   
    </div>
  </section>
  

  );
}
