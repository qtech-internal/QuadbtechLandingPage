"use client";
import Image from "next/image";
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaWordpress,
  FaDiscord,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative flex flex-wrap justify-between items-center py-10 px-6 bg-white  md:flex-nowrap md:px-10">
      <div className="relative flex items-center mb-6 md:mb-0">
        <div className="absolute -left-10 w-32 h-32  -bottom-10 md:w-40 md:h-40">
          <Image
            src="/Frame 37 (1).png"
            alt="Background Shape"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </div>
        <Image
          src="/Logo Black.png"
          alt="QuadB Tech"
          width={100}
          height={50}
          className="relative z-10"
        />
      </div>
      <div className="flex space-x-4 text-[var(--bg-card)] text-xl md:text-2xl">
        {[
          FaInstagram,
          FaDribbble,
          FaXTwitter,
          FaWordpress,
          FaDiscord,
          FaLinkedin,
          FaFacebook,
        ].map((Icon, index) => (
          <Icon
            key={index}
            className="transition-transform text-gray-700 transform hover:scale-125 hover:div-bg duration-300 cursor-pointer"
          />
        ))}
      </div>
      <button className="mt-6 md:mt-0 border-2 font-semibold button-theme px-6 py-2 rounded-full hover: hover:text-secondary transition">
        CONTACT US
      </button>
    </footer>
  );
}
