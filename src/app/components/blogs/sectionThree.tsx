"use client";

import Image from "next/image";


export default function SectionThree({ image1,image2 }: { image1: string,image2:string }) {



    return (
        <section  className="w-full py-12 px-4 md:px-6 lg:px-8">
            <div className="container relative flex flex-col md:flex-row max-auto max-w-8xl gap-8">
                <div className="relative w-full md:w-[40%]  aspect-[16/16] md:aspect-[4/3] ">
                    <div

                        className="
              absolute sm:top-[-4%] sm:left-[-4%]
              md:top-[-6%] md:left-[-8%]
              lg:top-[-6%] lg:left-[-5%]
              2xl:left-[-4%] 2xl:top-[-5%]
              text-[5vw] sm:text-[4.7vw] md:text-[14px] font-semibold
              md:leading-6.5 lg:leading-9.5 lg:text-[20px]
              xl:text-[26px] xl:leading-13
              2xl:text-[32px] 2xl:leading-14
              sm:leading-12 !text-yellow-950
              leading-10
              px-4 sm:p-6 rounded-lg transition-all duration-300 [word-spacing:0.2rem]"
                    >
                        The Future of Work:
                        <br /> Why Tech Talent <br />
                        Prefers Flexible <br />
                        Workspaces
                    </div>

                    <button className="absolute cursor-pointer items-center ml-3 md:text-[1vw] 2xl:text-[16px] border border-theme rounded-3xl bottom-4 z-10 text-black bg-white left-45 translate-x-[-20px] md:left-25 lg:left-35 xl:left-45 2xl:left-52.5 px-4 py-1   ">
                        Read More
                    </button>

                    <Image
                        draggable={false}
                        src={image1}
                        alt="section_3_Image"
                        
                        className="rounded-2xl transition-all duration-300 translate-y-[-10px] rounded-bottom-2xl  "
                        layout="fill"
                    />
                </div>

                <div className="relative w-full md:w-[60%] aspect-[16/16] md:aspect-[4/3] overflow-hidden ">
                    <div className="absolute top-[20%]  font-bold text-[4vw] sm:text-[3.5vw] md:text-[18px] md:leading-10 lg:text-[24px] 2xl:text-[45px] lg:leading-14 2xl:leading-20 xl:text-[2.5vw] xl:leading-18 leading-14 transition-all duration-300 ">
                        <span>Full-Stack</span>
                        <br />
                        <span>Development in 2024:</span>
                        <br />
                        <span>What Skills Do You</span>
                        <br />
                        <span>Need ? </span>

                    </div>

                    <button className="absolute cursor-pointer md:text-[1vw] border border-theme rounded-2xl top-10 z-10 left-2 bg-white md:top-5 lg:top-8 xl:top-12 md:left-5  px-4 py-1 2xl:text-[18px] ">
                        Next Gen
                    </button>

                    <button className="absolute cursor-pointer left-2 bottom-20 md:text-[1vw]  font-bold  rounded-2xl z-10 text-white bg-theme  md:left-5 md:bottom-13 lg:bottom-18 xl:bottom-22 2xl:bottom-28 px-4 py-2 2xl:text-[18px]">
                        READ MORE
                    </button>
   {/* <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div> */}
                   <div className="relative w-[690px] h-[640px] ml-7 ">
                     <Image
                        draggable={false}
                        src={image2}
                        alt="section_3_image2"
                        layout="fill"
                        className="rounded-3xl transition-all duration-300 ml-38"
                        
                    />
                   </div>
                    
                </div>
            </div>
        </section>
    );
}
