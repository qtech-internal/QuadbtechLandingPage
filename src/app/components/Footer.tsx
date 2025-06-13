"use client";
import Image from "next/image";
import Link from "next/link";
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
  <footer className="relative flex flex-col items-center justify-center text-center py-10 px-6 bg-white md:flex-row md:justify-between md:items-center md:text-left md:px-10">
  <div className="relative flex items-center mb-6 md:mb-0">
    <div className="absolute -left-10 w-32 h-32 -bottom-10 md:w-40 md:h-40 hidden lg:block">
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
  <button className="border-2 cursor-pointer font-semibold button-theme px-6 py-2 mb-4 rounded-full hover:text-secondary transition block sm:hidden">
    CONTACT US
  </button>
  <div className="flex space-x-4 text-[var(--bg-card)] text-xl md:text-2xl mb-6 md:mb-0">
    {[FaInstagram, FaDribbble, FaXTwitter, FaWordpress, FaDiscord, FaLinkedin, FaFacebook].map(
      (Icon, index) => (
        <Icon
          key={index}
          className="transition-transform text-gray-700 transform hover:scale-125 duration-300 cursor-pointer"
        />
      )
    )}
  </div>
      <Link href="/contact"
        prefetch={true}
      >
  <button className="border-2 cursor-pointer font-semibold button-theme px-6 py-2 rounded-full hover:text-secondary transition hidden lg:block">
    CONTACT US
        </button>
        </Link>
</footer>

  );
}
