"use client";

import Image from "next/image";

export default function TransformCard({ image1,image2,image3,image4 }: { image1: string,image2:string,image3: string,image4:string }) {
  return (
    <>
      <div className="max-w-lg rounded-2xl overflow-hidden relative mt-20 mx-auto p-4">
        {/* <h1
          className="border-[4px] border-theme lg:w-[364px] w-1/2
            p-2 rounded-[80px] text-center mb-10 mt-10 text-[1.5rem] font-extrabold
            mx-auto flex items-center justify-center"
        >
          BLOGS
        </h1> */}
        <h1
          className="border-[4px] border-theme lg:w-[364px] w-full
            p-2 rounded-[80px] text-center mb-10 mt-10 text-[1.5rem] font-extrabold
            mx-auto flex items-center justify-center"
        >
          BLOGS
        </h1>
        <div className="overflow-hidden">
          <img
            src="/blogs/Subtract (1).svg"
            alt="Transforming Ideas"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4   ">
          <span className="text-[11px] border border-theme text-gray-600 px-1  rounded-full inline-block mb-2 ">
            Next-Gen
          </span>
          <h2 className="text-[18px] font-bold leading-[1.50] text-black">
            Transforming <br /> Ideas into Reality
          </h2>
        </div>
      </div>
      <div className="relative flex flex-col gap-6 max-w-lg mx-auto mt-8 p-4">
        <div className="div-bg flex flex-col justify-between text-center text-[#222] rounded-2xl relative ">
          <p className="p-6">
            &#34;Their team took our vision and turned it into a seamless,
            high-performance dApp. The UI/UX was flawless, and the smart
            contracts were secure and gas-efficient. Highly recommend!&#34;
            <br />
            <br />
            <span className="font-bold text-sm ">
              — Alex R., CEO of BlockFi Ventures
            </span>
          </p>

          <div className="absolute border-white border-8 bottom-[-5px] right-[-5px] h-[65px] w-[65px] rounded-4xl flex items-center justify-center div-bg text-[#222]">
            <Image
              src="/blogs/BrownLogos.png"
              alt="brownLogo"
              width={30}
              height={30}
              draggable={false}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-theme flex flex-col justify-between text-center text-white rounded-2xl relative">
          <p className="p-6  ">
            &#34;Collaborating with their team was a game-changer. Our platform
            scaled smoothly, and their on-chain logic was incredibly
            optimized.&#34;
            <br />
            <br />
            <span className="font-bold text-sm ">
              — Alex K., Co-Founder of ChainCraft
            </span>
          </p>

          <div className="absolute border-white border-8 bottom-[-5px] right-[-5px] h-[65px] w-[65px] rounded-4xl flex items-center justify-center bg-theme text-white">
            <Image
              src="/blogs/whiteLogos.png"
              alt="whiteLogo"
              width={30}
              height={30}
              draggable={false}
            />
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="relative w-full max-w-sm mx-auto rounded-xl px-4 py-6 overflow-hidden">
        {/* Image */}
        <img
          src="/blogs/Subtract-1.svg"
          alt="Transforming Ideas"
          className="w-full h-auto object-cover"
        />

        {/* Top-right Text  */}

        <div className="absolute top-7 right-4  px-2 py-1 rounded-md  ">
          <p className="text-[18px] font-semibold leading-[1.5] text-right  ">
            Transforming <br /> Ideas into Reality
          </p>
        </div>
      </div>
      {/* 3rd section */}
      <div className=" flex justify-center items-center  px-4 py-6">
        <div className="relative w-full max-w-sm  rounded-xl overflow-hidden ">
          <img
            src="/Frame 2134280867.png"
            alt="Future of Work"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-2 left-2 pr-4 mt-[-6] ">
            <h2 className="text-black font-bold text-xl  leading-[1.8]">
              The Future of Work: <br />
              Why Tech Talent <br />
              Prefers Flexible <br />
              Workspaces
            </h2>
          </div>
        </div>
      </div>
      {/* 4th section */}
      <div className="flex justify-center items-center  px-4 py-6">
        <div className="relative w-full max-w-sm rounded-xl overflow-hidden ">
          {/* Background Image */}
          <img
            src="/blogs/Subtract-2.svg"
            alt="Full Stack 2024"
            className="w-full h-auto object-cover"
          />

          {/* Tag + Text Overlay */}
          <div className="absolute top-6 left-4 pr-4">
            <span className="bg-white border border-theme text-xs font-medium px-2 py-1 rounded-full">
              Next-Gen
            </span>
            <h2 className="text-black font-bold text-lg  mt-3 leading-[1.9]">
              Full-Stack <br />
              Development in 2024: <br />
              What Skills Do You <br />
              Need?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}