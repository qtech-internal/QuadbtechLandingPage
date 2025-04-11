"use client";
const QuadBIntro = () => {
    return (
        <>
            <div className="mt-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
                    Join QuadBians
                </h1>

                <p className="text-base sm:text-lg font-light text-center px-4 max-w-2xl mt-4 sm:mt-5">
                    We&apos;re building the next wave of Web3 &amp; Web2 innovation—be part of it!
                </p>
            </div>

            <div className="flex justify-start items-start relative bg-white p-4 mt-10 ">
                {/* Wrapper for orange box and rotated text */}

                <div className="relative flex">
                    {/* Orange Box */}
                    <div className="bg-theme text-white rounded-xl p-4 w-[270px] ">
                        <p className="text-sm sm:text-base">
                            At QuadB Tech, we’re more than just a tech company—we’re a community of innovators, problem-solvers, and visionaries shaping the future of Web3 & Web2. Whether you’re a blockchain enthusiast, a software engineer, a designer, or a marketing expert, this is the place to build groundbreaking solutions and grow your career.
                        </p>
                    </div>

                    {/* Rotated QuadB text – OUTSIDE orange box but touching right side */}

                    <div
                        className="absolute top-1/2 left-[180px]  transform -translate-y-1/2 rotate-90 text-6xl font-bold ">
                        <h1
                            className="text-6xl font-extrabold z-10"
                            style={{
                                WebkitTextStroke: '1.5px var(--bg-card)',
                                color: 'white',
                            }}
                        >
                            QuadB
                        </h1>
                    </div>
                </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col gap-2 p-2 bg-white ">
                {/* Row: Image , Text */}
                <div className="flex w-full gap-4">
                    {/* VR Image */}
                    {/* <img
      src="/career/bot.png"
      alt="VR Vision"
      className="w-1/3 rounded-xl object-cover"
      
    /> */}
                    <div className="relative w-1/3 rounded-xl overflow-hidden">
                        {/* Image */}
                        <img
                            src="/career/bot.png"
                            alt="VR Vision"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
                    </div>


                    {/* Text Cards */}
                    <div className="div-bg p-2 rounded-xl w-full flex flex-col gap-2 justify-center">
                        <p className="border border-theme bg-white rounded-xl p-2 text-xs text-black">
                            Develop groundbreaking solutions in blockchain, AI, and cloud computing
                        </p>
                        <p className="border border-theme bg-white rounded-xl p-2 text-xs text-black">
                            Accelerate your career with continuous learning & growth opportunities.
                        </p>

                        <p className="border border-theme bg-white rounded-xl p-2 text-xs text-black">
                            Work from anywhere with our flexible, remote-friendly culture.
                        </p>
                    </div>
                </div>

                {/* Bottom Icons and Graphic */}
                <div className="flex w-full gap-4">
                    {/* First image takes 1/3 */}
                    <div className="w-1/3 border border-theme rounded-xl flex justify-center items-center p-2">
                        <img
                            src="/blog1.jpeg"
                            alt="QuadB Icon"
                            className="w-full h-full rounded-md object-cover"
                        />
                    </div>

                    {/* Second image takes remaining space */}
                    {/* <img
    src="/career/bot2.png"
    alt="Liquid Visual"
    className="w-2/3 rounded-xl object-cover"
  /> */}
                    <div className="relative w-2/3 rounded-xl overflow-hidden">
                        {/* Image */}
                        <img
                            src="/career/bot2.png"
                            alt="VR Vision"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default QuadBIntro;
