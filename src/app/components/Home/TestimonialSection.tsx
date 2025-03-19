"use client"
import { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  const outerImages = [
    { id: 1, angle: 0, src: "/design.jpeg" },
    { id: 2, angle: 90, src: "/person1.jpeg" },
    { id: 3, angle: 180, src: "/design.jpeg" },
    { id: 4, angle: 270, src: "/design.jpeg" },
  ];

  const innerImages = [
    { id: 5, angle: 45, src: "/design.jpeg" },
    { id: 6, angle: 135, src: "/person1.jpeg" },
    { id: 7, angle: 225, src: "/person2.jpeg" },
    { id: 8, angle: 315, src: "/person3.jpeg" },
  ];

  return (
    <div className="relative flex items-center justify-center py-20 bg-white">
      {/* Circular Animation Container */}
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        
        {/* Outer Circle */}
        <div className="absolute w-[600px] h-[600px] border-2 border-orange-400 rounded-full"></div>

        {/* Inner Circle */}
        <div className="absolute w-[450px] h-[450px] border-2 border-orange-400 rounded-full"></div>

        {/* Outer Circle Images */}
        {outerImages.map(({ id, angle, src }) => (
          <div
            key={id}
            className="absolute w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden"
            style={{
              transform: `rotate(${rotation + angle}deg) translate(300px) rotate(-${rotation + angle}deg)`,
            }}
          >
            <img src={src} className="w-full h-full object-cover" alt={`Outer ${id}`} />
          </div>
        ))}

        {/* Inner Circle Images */}
        {innerImages.map(({ id, angle, src }) => (
          <div
            key={id}
            className="absolute w-16 h-16 rounded-full bg-white shadow-lg overflow-hidden"
            style={{
              transform: `rotate(${rotation + angle}deg) translate(225px) rotate(-${rotation + angle}deg)`,
            }}
          >
            <img src={src} className="w-full h-full object-cover" alt={`Inner ${id}`} />
          </div>
        ))}
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
    </div>
  );
};

export default TestimonialSection;




