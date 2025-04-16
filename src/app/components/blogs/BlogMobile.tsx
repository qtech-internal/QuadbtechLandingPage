'use client';

import Image from 'next/image';

export default function TransformCard() {
    return (
      <>
    
            <div className="max-w-md rounded-2xl overflow-hidden relative mt-20 mx-auto p-4">
            <h1
                 
                    className="border-[4px] border-theme lg:w-[364px] w-1/2
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
      <div className="absolute bottom-2 left-0 right-0 p-4   ">
        <span className="text-[10px] border border-theme text-gray-600 px-1  rounded-full inline-block mb-2 ">
          Next-Gen
        </span>
        <h2 className="text-xl font-bold leading-tight text-black">
          Transforming <br /> Ideas into Reality
        </h2>
          </div>
            
            </div>
            <div className="flex flex-col gap-6 px-4 py-6">
      {/* Card 1 */}
      <div
        className="div-bg flex flex-col justify-between text-center text-[#222] rounded-2xl relative"
        style={{
          clipPath:
            "path('M20 0C8.95431 0 0 8.9543 0 20V221C0 232.046 8.9543 241 20 241H399.592C407.787 241 414.471 225.131 413.326 217.017C413.111 215.496 413 213.942 413 212.362C413 194.136 427.775 179.362 446 179.362C453.976 179.362 477 168.731 477 160.755V20C477 8.95431 468.046 0 457 0H20ZM472.88 233.159C473.59 232.234 472.65 231.862 471.928 232.778C471.206 233.694 471.831 234.469 472.564 233.561C472.671 233.429 472.777 233.295 472.88 233.159Z')",
        }}
      >
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
      <div
        className="bg-theme flex flex-col justify-between text-center text-white rounded-2xl relative"
        style={{
          clipPath:
            "path('M20 0C8.95431 0 0 8.9543 0 20V221C0 232.046 8.9543 241 20 241H399.592C407.787 241 414.471 225.131 413.326 217.017C413.111 215.496 413 213.942 413 212.362C413 194.136 427.775 179.362 446 179.362C453.976 179.362 477 168.731 477 160.755V20C477 8.95431 468.046 0 457 0H20ZM472.88 233.159C473.59 232.234 472.65 231.862 471.928 232.778C471.206 233.694 471.831 234.469 472.564 233.561C472.671 233.429 472.777 233.295 472.88 233.159Z')",
        }}
      >
        <p className="p-6  ">
          &#34;Collaborating with their team was a game-changer. Our platform
          scaled smoothly, and their on-chain logic was incredibly optimized.&#34;
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
  <div className="relative w-full max-w-xs mx-auto rounded-xl overflow-hidden">
  {/* Image */}
  <img
    src="/blogs/Subtract-1.svg"
    alt="Transforming Ideas"
    className="w-full h-auto object-cover"
  />

  {/* Top-right Text  */}

     <div className="absolute top-4 right-4  px-2 py-1 rounded-md ">
    <p className="text-sm font-semibold leading-[1.5] text-right mt-[-10]">
      Transforming <br /> Ideas into Reality
    </p>
  </div>
</div>
                {/* 3rd section */}
                <div className=" flex justify-center items-center  px-4 py-6">
      <div className="relative w-full max-w-sm  rounded-xl overflow-hidden ">
        <img
          src="/blogs/Subtract-3.svg"
          alt="Future of Work"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-4 left-4 pr-4 mt-[-4] ">
          <h2 className="text-black font-bold text-lg  leading-[1.8]">
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
        <div className="absolute top-4 left-4 pr-4">
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
