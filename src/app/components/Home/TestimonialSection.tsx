
// import React from "react";

// const TestimonialSection = () => {
//   return (
//     <div className="relative flex items-center justify-center py-20 bg-white">
//       {/* Circular  */}
//       <div className="relative w-[600px] h-[600px] flex items-center justify-center">
//         {/* Outer */}
//         <div className="absolute w-full h-full border-2 border-orange-400 rounded-full"></div>
//         {/* Inner */}
//         <div className="absolute w-[450px] h-[450px] border-2 border-orange-400 rounded-full"></div>

//         {/* Floating  images */}
//         <img src="/design.jpeg" className="absolute top-0 left-1/4 w-14 h-14 rounded-full" alt="" />
//         <img src="/design.jpeg" className="absolute top-1/2 left-0 w-12 h-12 rounded-full" alt="" />
//         <img src="/design.jpeg" className="absolute bottom-1/4 right-0 w-16 h-16 rounded-full" alt="" />
//         <img src="/design.jpeg" className="absolute top-1/3 right-1/4 w-18 h-18 rounded-full" alt="" />
//         <img src="/design.jpeg" className="absolute bottom-5 left-1/3 w-12 h-12 rounded-full" alt="" />

//         {/* Floating Label */}
//         <div className="absolute top-10 right-1/3 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
//           Fast and Reliable!
//         </div>
//         <div className="absolute bottom-20 right-16 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
//           Seamless and Secure!
//         </div>
//         <div className="absolute bottom-10 left-1/4 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
//           ...
//         </div>
//       </div>

//       {/* Center Text */}
//       <div className="absolute text-center max-w-lg top-[40%]">
//         <h2 className="text-4xl font-semibold">
//           Over <span className="font-bold">10K+ Clients</span> Trust <span className="font-bold text-orange-500">Quadb</span>
//         </h2>
//       </div>

//       {/* Testimonial Box */}
//       <div className="absolute bottom-10 bg-orange-100 shadow-lg p-6 rounded-lg max-w-xl flex flex-col items-center">
//         <img src="/testimonial-icon.png" className="w-12 h-12 rounded-full mb-3" alt="" />
//         <p className="text-center text-gray-700 italic">
//           "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!"
//         </p>
//         <p className="mt-4 font-bold">— Alex R., CEO of BlockFi Ventures</p>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;
// import React from "react";

// const TestimonialSection = () => {
//   return (
//     <div className="relative flex items-center justify-center py-20 bg-white">
//       {/* Circular Area */}
//       <div className="relative w-[600px] h-[600px] flex items-center justify-center">
//         {/* Outer Circle */}
//         <div className="absolute w-full h-full border-2 border-orange-400 rounded-full"></div>
//         {/* Inner Circle */}
//         <div className="absolute w-[450px] h-[450px] border-2 border-orange-400 rounded-full"></div>

//         {/* Floating Images on Outer Circle */}
//         <div className="absolute w-full h-full">
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-14 h-14 rounded-full absolute"
//             style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}
//           />
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-12 h-12 rounded-full absolute"
//             style={{ top: '20%', right: '10%', transform: 'translate(50%, -50%)' }}
//           />
//           {/* <img
//             src="/design.jpeg"
//             alt=""
//             className="w-16 h-16 rounded-full absolute"
//             style={{ bottom: '30%', right: '15%', transform: 'translate(50%, 50%)' }}
//           /> */}
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-12 h-12 rounded-full absolute"
//             style={{ bottom: '50%', left: '0%', transform: 'translate(-50%, 50%)' }}
//           />
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-14 h-14 rounded-full absolute"
//             style={{ top: '20%', left: '10%', transform: 'translate(-50%, -50%)' }}
//           />
//         </div>

//         {/* Floating Images on Inner Circle */}
//         <div className="absolute w-[450px] h-[450px]">
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-12 h-12 rounded-full absolute"
//             style={{ top: '2%', left: '40%', transform: 'translate(-50%, -50%)' }}
//           />
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-14 h-14 rounded-full absolute"
//             style={{ top: '20%', right: '10%', transform: 'translate(50%, -50%)' }}
//           />
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-12 h-12 rounded-full absolute"
//             style={{ bottom: '50%', left: '100%', transform: 'translate(-50%, 50%)' }}
//           />
//           <img
//             src="/design.jpeg"
//             alt=""
//             className="w-14 h-14 rounded-full absolute"
//             style={{ top: '50%', left: '2%', transform: 'translate(-50%, -50%)' }}
//           />
//         </div>

//         {/* Floating Labels */}
      
//         <div className="absolute bottom-[28%] right-[24%] bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
//           Seamless and Secure!
//         </div>
//         <div className="absolute bottom-[15%] left-[28%] bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
//           Trusted by Many!
//         </div>
//       </div>

//       {/* Center Text */}
//       <div className="absolute text-center max-w-lg top-[40%]">
//         <h2 className="text-4xl font-semibold">
//           Over <span className="font-bold">10K+ Clients</span> Trust <span className="font-bold text-orange-500">Quadb</span>
//         </h2>
//       </div>

//       {/* Testimonial Box */}
//       {/* <div className="absolute bottom-10 bg-orange-100 shadow-lg p-6 rounded-lg max-w-xl flex flex-col items-center">
//         <img src="/testimonial-icon.png" className="w-12 h-12 rounded-full mb-3" alt="" />
//         <p className="text-center text-gray-700 italic">
//           "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!"
//         </p>
//         <p className="mt-4 font-bold">— Alex R., CEO of BlockFi Ventures</p>
//       </div> */}
    
//       {/* <div className="relative bg-orange-100 shadow-lg p-6 rounded-xl max-w-xl mx-auto text-center"> */}
//          <div className="absolute bottom-40 bg-orange-100 shadow-lg p-6 rounded-lg max-w-xl flex flex-col items-center">

// {/* Top Center Inward Curve */}
// <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-10 bg-white rounded-b-full "></div>

// {/* Right Side Notch */}
// {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-orange-100"></div> */}

// {/* Testimonial Content */}
// <p className="text-gray-700 italic">
//   "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!"
// </p>
// <p className="mt-4 font-bold">— Alex R., CEO of BlockFi Ventures</p>
// </div>



//     </div>
//   );
// };

// export default TestimonialSection;
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="relative flex items-center justify-center py-20 bg-white overflow-hidden">
      {/* Circular Area */}
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {/* Outer Circle */}
        <div className="absolute w-full h-full border-2 border-orange-400 rounded-full"></div>
        {/* Inner Circle */}
        <div className="absolute w-[450px] h-[450px] border-2 border-orange-400 rounded-full"></div>

        {/* Rotating Images on Outer Circle */}
        <div className="absolute w-full h-full animate-spin-slow">
          {Array(6).fill(0).map((_, idx) => (
            <img
              key={idx}
              src="/design.jpeg"
              alt=""
              className={`w-14 h-14 rounded-full absolute`}
              style={{
                top: `${50 - 45 * Math.cos((idx / 6) * 2 * Math.PI)}%`,
                left: `${50 + 45 * Math.sin((idx / 6) * 2 * Math.PI)}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Rotating Images on Inner Circle with Resize Effect */}
        <div className="absolute w-[450px] h-[450px] animate-spin-slower">
          {Array(4).fill(0).map((_, idx) => (
            <img
              key={idx}
              src="/design.jpeg"
              alt=""
              className={`rounded-full absolute inner-image`}
              style={{
                width: "48px",
                height: "48px",
                top: `${50 - 38 * Math.cos((idx / 4) * 2 * Math.PI)}%`,
                left: `${50 + 38 * Math.sin((idx / 4) * 2 * Math.PI)}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Floating Labels */}
        <div className="absolute bottom-[28%] right-[24%] bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
          Seamless and Secure!
        </div>
        <div className="absolute bottom-[15%] left-[28%] bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
          Trusted by Many!
        </div>
      </div>

      {/* Center Text */}
      <div className="absolute text-center max-w-lg top-[40%]">
        <h2 className="text-4xl font-semibold">
          Over <span className="font-bold">10K+ Clients</span> Trust{" "}
          <span className="font-bold text-orange-500">Quadb</span>
        </h2>
      </div>

      {/* Testimonial Box */}
      <div className="absolute bottom-40 bg-orange-100 shadow-lg p-6 rounded-lg max-w-xl flex flex-col items-center">
        {/* Top Center Inward Curve */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-10 bg-white rounded-b-full z-10"></div>

        {/* Testimonial Content */}
        <p className="text-gray-700 italic text-center">
          "Their team took our vision and turned it into a seamless, high-performance dApp. The UI/UX was flawless, and the smart contracts were secure and gas-efficient. Highly recommend!"
        </p>
        <p className="mt-4 font-bold">— Alex R., CEO of BlockFi Ventures</p>
      </div>

      {/* Custom CSS for resizing effect */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 16s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }

        .inner-image {
          animation: resizeImage 20s linear infinite;
        }

        @keyframes resizeImage {
          0% { width: 48px; height: 48px; }
          10% { width: 48px; height: 48px; }
          25% { width: 70px; height: 70px; } /* Resizing larger near top */
          40% { width: 48px; height: 48px; }
          100% { width: 48px; height: 48px; }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;
