'use client';

import Image from 'next/image';

export default function TransformCard() {
    return (
      <>
    
            <div className="max-w-lg rounded-2xl overflow-hidden relative mt-20 mx-auto p-4">
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
      <div className="absolute bottom-2 left-0 right-0 p-4   ">
        <span className="text-[15px] border border-theme text-gray-600 px-1  rounded-full inline-block mb-2 absolute bottom-25 ">
          Next-Gen
        </span>
        <h2 className="text-[28px] font-bold leading-12 text-black bottom-0 absolute ">
          Transforming <br /> Ideas into Reality
        </h2>
          </div>
            
            </div>

                <div className="relative flex flex-col gap-6 max-w-lg mx-auto mt-8 p-4">
                    <div
                        className="div-bg flex flex-col justify-between text-center text-[#222] rounded-2xl relative "

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
  <div className="relative w-full max-w-lg mx-auto rounded-xl overflow-hidden p-4">
  {/* Image */}
  <img
    src="/blogs/Subtract-1.svg"
    alt="Transforming Ideas"
    className="w-full h-auto object-cover"
  />

  {/* Top-right Text  */}

     <div className="absolute top-4 right-8 px-2 py-1 rounded-md ">
    <p className="text-2xl font-semibold leading-[2.2] mt-[-10] text-right [word-spacing:0.3rem]">
      Transforming <br /> Ideas into Reality
    </p>
  </div>
</div>
                {/* 3rd section */}
                <div className=" flex justify-center items-center  px-4 py-6">
      <div className="relative w-full max-w-sm rounded-xl overflow-hidden ">
        <img
          src="/blogs/Subtract-3.svg"
          alt="Future of Work"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-4 pr-4 mt-[-4] ">
          <h2 className="text-black font-bold text-[22px] leading-[2] [word-spacing:0.3rem]">
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
          <span className=" bg-white border border-theme text-[16px] font-medium px-2 py-1 rounded-full">
            Next-Gen
          </span>
          <h2 className="text-black font-bold text-2xl mt-3 leading-[1.85] [word-spacing:0.2rem]">
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
