"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SvgImage from "../SvgImage";
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
          transition: { duration: 0.5, ease: "easeOut" },
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        await imageControls.start({
          x: "40vw",
          y: "8vh",
          scale: 0.6,
          rotate: 130,
          transition: { duration: 1, ease: "easeInOut" },
        });

        //  image animation as done
        setImageAnimationDone(true);

        // Start heading
        await headingControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        });

        //  paragraph
        await paraControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.1 },
        });

        // tags
        await tagsControls.start({
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        });
      }
    };

    sequence();
  }, [inView, imageControls, headingControls, paraControls, tagsControls]);

  return (
    <section
      ref={ref}
      className="relative px-6  md:px-10 py-20 md:py-20 my-20 flex mx-auto  mb-20 justify-center bg-white text-black"
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={imageControls}
        className="absolute z-30 right-2 md:right-8 lg:right-30 2xl:right-60  lg:top-14 flex items-end"
      >
        <div className=" w-full translate-x-[180px]">
          <SvgImage />
        </div>
      </motion.div>
      {!imageAnimationDone && (
        <div className="absolute inset-0 bg-white z-20"></div>
      )}

      {/* main  */}
      <div
        className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10 transition-opacity duration-1000 ${
          imageAnimationDone ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Side */}
        <div className="flex-1">
          {/* Heading */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={headingControls}
            className="text-[#000000] text-xl font-medium font-inter"
          >
            Our Web3 Innovation Lab
            <div className="mt-4 flex">
              <svg
                width="378"
                height="36"
                viewBox="0 0 378 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.2983 30.3742L39.2822 35.1454C38.9692 35.4448 38.4766 35.4448 38.1636 35.1454L24.4652 22.1193C23.4037 21.1095 21.6646 21.1095 20.6004 22.1193L6.75504 35.2842C6.44204 35.5836 5.94941 35.5836 5.63642 35.2842L0.620306 30.513C0.282815 30.1918 0.282815 29.6557 0.620306 29.3345L16.213 14.5094C19.6886 11.2052 25.377 11.2052 28.8553 14.5094L44.301 29.1984C44.6385 29.5196 44.6385 30.0558 44.301 30.3769L44.2983 30.3742Z"
                  fill="url(#paint0_linear_64913_52461)"
                />
                <path
                  d="M43.9991 0H0.919938C0.41187 0 0 0.411871 0 0.919939V7.22613C0 7.7342 0.41187 8.14607 0.919938 8.14607H43.9991C44.5072 8.14607 44.9191 7.7342 44.9191 7.22613V0.919939C44.9191 0.411871 44.5072 0 43.9991 0Z"
                  fill="url(#paint1_linear_64913_52461)"
                />
                <path
                  d="M65.4093 4.9744C65.9482 4.9744 66.2013 5.22752 66.2013 5.76641V15.3359H71.2746C73.5418 15.3359 74.2249 15.0828 75.2673 13.7165L81.4538 5.44253C81.7042 5.11865 81.8484 4.9744 82.4962 4.9744H86.9571C87.5695 4.9744 87.6756 5.5133 87.4252 5.83718L80.4467 14.8651C79.6193 15.9456 78.9716 16.6995 78.2884 17.2765C79.2601 17.8889 80.1229 18.7163 81.021 19.8676L88.3941 29.2194C88.5738 29.4725 88.6473 30.1556 87.926 30.1556H83.3209C82.7085 30.1556 82.5642 30.0114 82.3138 29.6875L75.6946 21.125C74.723 19.8649 73.8956 19.5056 71.6665 19.5056H66.1986V29.3609C66.1986 29.8998 65.9482 30.1529 65.4066 30.1529H61.5227C60.9838 30.1529 60.6953 29.8998 60.6953 29.3609V5.76369C60.6953 5.22479 60.9838 4.97168 61.5227 4.97168H65.4066L65.4093 4.9744Z"
                  fill="#0D051C"
                />
                <path
                  d="M107.388 4.97461C109.222 4.97461 110.338 5.54888 111.525 7.7072L123.432 29.3257C123.685 29.7939 123.577 30.1531 123 30.1531H118.43C117.962 30.1531 117.782 30.0443 117.602 29.685L115.049 25.0445H98.1422L95.66 29.685C95.4803 30.0443 95.2653 30.1531 94.8326 30.1531H90.1567C89.5443 30.1531 89.4381 29.7939 89.6885 29.3257L101.487 7.7072C102.674 5.54888 103.754 4.97461 105.265 4.97461H107.388ZM100.409 20.8721H112.785L107.064 10.3309C106.955 10.1513 106.849 10.0805 106.669 10.0805H106.454C106.275 10.0805 106.166 10.1513 106.06 10.3309L100.412 20.8721H100.409Z"
                  fill="#0D051C"
                />
                <path
                  d="M131.2 4.97461C131.738 4.97461 131.992 5.22772 131.992 5.76662V29.3638C131.992 29.9027 131.741 30.1558 131.2 30.1558H127.316C126.777 30.1558 126.488 29.9027 126.488 29.3638V5.76662C126.488 5.22772 126.777 4.97461 127.316 4.97461H131.2Z"
                  fill="#0D051C"
                />
                <path
                  d="M174.435 4.97461C174.974 4.97461 175.262 5.22772 175.262 5.76662V9.18508C175.262 9.72398 174.974 9.97709 174.435 9.97709H158.823C155.119 9.97709 154.038 11.093 154.038 14.868V15.5865H174.255C174.794 15.5865 175.047 15.8397 175.047 16.3786V19.22C175.047 19.7589 174.797 20.012 174.255 20.012H154.038V29.3638C154.038 29.9027 153.785 30.1558 153.246 30.1558H149.363C148.824 30.1558 148.535 29.9027 148.535 29.3638V14.4706C148.535 7.56294 151.341 4.97461 158.608 4.97461H174.435Z"
                  fill="#0D051C"
                />
                <path
                  d="M199.728 4.97461C207.03 4.97461 209.801 7.56566 209.801 14.4706V20.6571C209.801 27.5648 207.03 30.1531 199.728 30.1531H188.612C181.345 30.1531 178.539 27.5621 178.539 20.6571V14.4706C178.539 7.56294 181.345 4.97461 188.612 4.97461H199.728ZM184.042 20.2624C184.042 24.0402 185.123 25.1533 188.827 25.1533H199.51C203.214 25.1533 204.295 24.0375 204.295 20.2624V14.8653C204.295 11.0876 203.214 9.97439 199.51 9.97439H188.827C185.123 9.97439 184.042 11.0903 184.042 14.8653V20.2624Z"
                  fill="#0D051C"
                />
                <path
                  d="M218.896 4.97461C219.435 4.97461 219.688 5.22772 219.688 5.76662V20.1209C219.688 23.934 220.769 25.0499 224.473 25.0499H234.437C238.141 25.0499 239.186 23.934 239.186 20.1209V5.76662C239.186 5.22772 239.44 4.97461 239.978 4.97461H243.9C244.439 4.97461 244.692 5.22772 244.692 5.76662V20.6598C244.692 27.5675 241.922 30.1558 234.619 30.1558H224.261C216.994 30.1558 214.188 27.5648 214.188 20.6598V5.76662C214.188 5.22772 214.476 4.97461 215.015 4.97461H218.899H218.896Z"
                  fill="#0D051C"
                />
                <path
                  d="M255.803 4.97461C258.105 4.97461 258.609 5.26311 259.975 7.09754L273.358 24.6526C273.466 24.8322 273.611 24.9057 273.826 24.9057H274.15C274.329 24.9057 274.438 24.7968 274.438 24.5464V5.76934C274.438 5.23045 274.691 4.97732 275.23 4.97732H279.008C279.547 4.97732 279.8 5.23045 279.8 5.76934V26.4162C279.8 29.3312 278.758 30.1586 276.561 30.1586H273.467C271.273 30.1586 270.734 29.9436 269.294 28.0356L255.876 10.4806C255.732 10.301 255.623 10.2302 255.408 10.2302H255.084C254.869 10.2302 254.796 10.3391 254.796 10.5895V29.3666C254.796 29.9055 254.542 30.1586 254.004 30.1586H250.226C249.687 30.1586 249.398 29.9055 249.398 29.3666V8.71696C249.398 5.80201 250.441 4.97461 252.637 4.97461H255.803Z"
                  fill="url(#paint2_linear_64913_52461)"
                />
                <path
                  d="M302.495 4.9742C310.301 4.9742 313.502 8.10415 313.502 15.118V20.0089C313.502 27.0228 310.301 30.1527 302.495 30.1527H285.659C284.94 30.1527 284.578 29.7935 284.578 29.0722V6.04926C284.578 5.33073 284.937 4.96875 285.659 4.96875H302.495V4.9742ZM290.084 24.6848C290.084 25.0087 290.228 25.1529 290.552 25.1529H302.351C306.597 25.1529 307.998 23.7866 307.998 19.5408V15.5834C307.998 11.3375 306.597 9.97125 302.351 9.97125H290.552C290.228 9.97125 290.084 10.1155 290.084 10.4748V24.6848Z"
                  fill="url(#paint3_linear_64913_52461)"
                />
                <path
                  d="M338.394 4.9742C343.897 4.9742 346.129 7.52716 346.129 12.3854V14.4348C346.129 18.5365 344.545 20.9452 340.77 21.6283L346.921 29.2546C347.136 29.5077 347.101 30.1527 346.453 30.1527H341.812C341.2 30.1527 341.02 30.0085 340.805 29.6846L335.122 22.2026H323.503V29.3607C323.503 29.8996 323.253 30.1527 322.711 30.1527H318.827C318.289 30.1527 318 29.8996 318 29.3607V6.04926C318 5.33073 318.359 4.96875 319.081 4.96875H338.397L338.394 4.9742ZM323.501 17.8152H337.278C339.725 17.8152 340.623 16.7728 340.623 14.6145V13.1039C340.623 10.9456 339.725 9.90321 337.278 9.90321H323.969C323.645 9.90321 323.501 10.0475 323.501 10.336V17.8179V17.8152Z"
                  fill="url(#paint4_linear_64913_52461)"
                />
                <path
                  d="M351.846 4.97461C352.278 4.97461 352.493 5.08347 352.708 5.40735L362.313 18.3926L371.989 5.40735C372.204 5.08347 372.422 4.97461 372.852 4.97461H377.563C377.958 4.97461 378.137 5.36924 377.887 5.69313L364.972 22.4561V29.3638C364.972 29.9027 364.719 30.1558 364.18 30.1558H360.297C359.758 30.1558 359.469 29.9027 359.469 29.3638V22.4561L346.699 5.69313C346.446 5.36924 346.59 4.97461 347.023 4.97461H351.843H351.846Z"
                  fill="url(#paint5_linear_64913_52461)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_64913_52461"
                    x1="-2.87437"
                    y1="6.4776"
                    x2="34.1273"
                    y2="40.3493"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EEABFB" />
                    <stop offset="1" stopColor="#9F1AB1" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_64913_52461"
                    x1="9.90158"
                    y1="-7.4221"
                    x2="46.8188"
                    y2="26.3734"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EEABFB" />
                    <stop offset="1" stopColor="#9F1AB1" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_64913_52461"
                    x1="259.398"
                    y1="17.5625"
                    x2="496.339"
                    y2="17.5625"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D051C" />
                    <stop offset="0.48" stopColor="#9F1AB1" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_64913_52461"
                    x1="259.4"
                    y1="17.5621"
                    x2="496.341"
                    y2="17.5621"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D051C" />
                    <stop offset="1" stopColor="#7D57D7" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_64913_52461"
                    x1="259.399"
                    y1="-230.802"
                    x2="496.34"
                    y2="-230.802"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D051C" />
                    <stop offset="1" stopColor="#7D57D7" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_64913_52461"
                    x1="259.4"
                    y1="-230.801"
                    x2="496.341"
                    y2="-230.801"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D051C" />
                    <stop offset="1" stopColor="#7D57D7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={paraControls}
            className="mt-10 text-black text-lg md:text-xl font-semibold"
          >
            Pushing the Boundaries of Decentralization
            <br className="hidden sm:block" />
            At KaiFoundry, we specialize in building next-generation Web3
            products, designed for scalability, security, and seamless user
            experiences. From smart contract development to NFT ecosystems, we
            bring decentralized innovation to life.
          </motion.p>

          <button
            className="px-6 py-2 rounded-full button-theme mt-14 cursor-pointer mt-8"
            onClick={() => router.push("/career")}
          >
            Explore More
          </button>
        </div>

        {/* Right Side */}

        <div className="flex-1 relative">
          {/* Use CSS Grid to define the layout */}
          <div className="grid grid-cols-2 justify-items-center gap-4 mt-10">
            <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
              Smart Contracts & DeFi Solutions
            </span>
            <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
              Metaverse & Blockchain Gaming
            </span>

            {/* This item spans both columns to sit on its own row */}
            <span className="col-span-2 border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
              NFT Marketplaces & Tokenization
            </span>

            <span className="border border-theme text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
              dApps & Web3 Infrastructure
            </span>
            <span className="bg-theme text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
              And Many More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
