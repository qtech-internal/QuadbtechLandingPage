import React from "react";

const ServiceSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto py-16 text-center px-4">
      <h2 className="text-2xl  font-semibold text-black">
        Our Services <br />

      <span className="whitespace-nowrap mt-2 text-[24px]">Future-Ready Tech Solutions</span>  
      </h2>
      <p className="text-[#00000099] mt-6 text-[16px]">
        "From Traditional to Decentralized – We Build the Future of Digital Innovation."
      </p>
      <p className="text-[#00000099] text-[16px]">
      We offer custom-tailored Web2 & Web3 solutions designed for scalability, security, and seamless user experience. Whether you're launching a
          blockchain-powered platform or optimizing your digital presence, our expertise ensures success.
      </p>
{/* 1st */}
<div className="flex items-center gap-4 mt-8">
  {/* Left fade bar (smaller width) */}
  <div className="w-[20px] h-16 div-bg rounded-r-md"></div>

  {/* Main button */}
  <button className="bg-theme text-white font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
    Custom Web & Mobile Apps
  </button>

  {/* Right fade bar (flex-grow to fill rest) */}
  <div className="flex-1 h-16 div-bg rounded-l-md"></div>
</div>
      {/* 2nd */}
      
<div className="flex items-center gap-4 mt-8">
      
        <div className="flex-1 h-16 div-bg rounded-r-md"></div>


  {/* Main button */}
  <button className="border-1 border-theme text-secondary font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
  Enterprise Software Solutions
  </button>


  <div className="w-[20px] h-16 div-bg rounded-l-md"></div>
</div>
      {/* 3rd */}
      
<div className="flex items-center gap-4 mt-8">
  {/* Left fade bar (smaller width) */}
  <div className="w-[30px] h-16 div-bg rounded-r-md"></div>

  {/* Main button */}
  <button className="border-1 border-theme  font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
  UI/UX Design & Optimization
  </button>

  {/* Right fade bar (flex-grow to fill rest) */}
  <div className="flex-1 h-16 div-bg rounded-l-md"></div>
</div>
      {/* 4th */}
      
<div className="flex items-center gap-4 mt-8">

<div className="flex-1 h-16 div-bg rounded-r-md"></div>

  {/* Main button */}
  <button className="border-1 border-theme  font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
  E-Commerce & Marketplace <br /> Development
  </button>


        
        <div className="w-[30px] h-16 div-bg rounded-l-md"></div>
</div>
      {/* 5th */}
      
<div className="flex items-center gap-4 mt-8">
  {/* Left fade bar (smaller width) */}
  <div className="w-[30px] h-16 div-bg rounded-r-md"></div>

  {/* Main button */}
  <button className="border-1 border-theme  font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
  Security & Performance <br /> Optimization
  </button>

  {/* Right fade bar (flex-grow to fill rest) */}
  <div className="flex-1 h-16 div-bg rounded-l-md"></div>
</div>
      {/* 6th */}
      <div className="flex items-center gap-4 mt-8">
      
        <div className="flex-1 h-16 div-bg rounded-r-md"></div>


  {/* Main button */}
  <button className="border-1 border-theme text-secondary font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
  API Development & Third-Party <br /> Integrations
  </button>


  <div className="w-[20px] h-16 div-bg rounded-l-md"></div>
</div>

      {/* 7th */}
  <div className="flex items-center gap-4 mt-8">

  <div className="flex-1 h-16 div-bg rounded-r-md"></div>

  
  <button className="bg-theme text-white font-semibold px-6 py-3 rounded-md h-16 text-sm md:text-base mx-[-10px] z-10">
  And Many More.
  </button>


  <div className="flex-1 h-16 div-bg rounded-l-md"></div>
</div>

    </section>
  );
};

export default ServiceSection;
