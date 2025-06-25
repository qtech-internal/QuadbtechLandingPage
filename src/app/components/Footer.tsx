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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const themeGradients: { [key: string]: { start: string; end: string } } = {
  orange: { start: "#FF9500", end: "#FFC892" },
  olive: { start: "#b5b567", end: "#d7d7a3" },
  purple: { start: "#c866d7", end: "#e6b8f0" },
  pink: { start: "#ff69b4", end: "#ffc0cb" },
  red: { start: "#bc4f5a", end: "#f08080" },
  brown: { start: "#846353", end: "#b99b8b" },
  cyan: { start: "#00a7a7", end: "#a1e3e3" },
};

export default function Footer() {
  const [currentTheme, setCurrentTheme] = useState("orange");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "orange";
    setCurrentTheme(savedTheme);

    const handleThemeChange = (e: Event) =>
      setCurrentTheme((e as CustomEvent<string>).detail);
    window.addEventListener("themeChanged", handleThemeChange);
    return () => window.removeEventListener("themeChanged", handleThemeChange);
  }, []);

  const { start, end } = themeGradients[currentTheme] || themeGradients.orange;
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/contact");
  };

  return (
    <footer className="relative flex flex-col items-center justify-center text-center py-10 px-6 bg-white md:flex-row md:justify-between md:items-center md:text-left md:px-10">
      <div className="relative flex items-center mb-6 md:mb-0">
        {/* SVG Background Shape */}
        <div className="absolute -left-10 w-32 h-32 -bottom-10 md:w-40 md:h-40 hidden lg:block">
          <svg
            width="148"
            height="181"
            viewBox="0 0 148 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="footer-svg-gradient"
                x1="0"
                y1="0"
                x2="148"
                y2="181"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={start} />
                <stop offset="1" stopColor={end} />
              </linearGradient>
            </defs>
            <g opacity="0.09">
              <path
                d="M142 122.873C79.9626 110.699 59.9015 81.6014 43.1841 1C29.406 100.774 34.1989 149.888 95.886 208.514L142 122.873Z"
                fill="url(#footer-svg-gradient)"
                stroke="url(#footer-svg-gradient)"
                strokeWidth="6.58773"
              />
              <path
                d="M-62.0001 185.457C0.0374336 197.631 20.0985 226.729 36.8159 307.33C50.594 207.556 45.8011 158.442 -15.886 99.8165L-62.0001 185.457Z"
                fill="url(#footer-svg-gradient)"
                stroke="url(#footer-svg-gradient)"
                strokeWidth="6.58773"
              />
            </g>
          </svg>
        </div>
        <Image
          src="/Logo Black.png"
          alt="QuadB Tech"
          width={100}
          height={50}
          className="relative z-10"
        />
      </div>
      <Link href="/contact" prefetch={true}>
        <button className="border-2 cursor-pointer font-semibold button-theme px-6 py-2 mb-4 rounded-full hover:text-secondary transition block sm:hidden">
          CONTACT US
        </button>
      </Link>
      <div className="flex space-x-4 text-[var(--bg-card)] text-xl md:text-2xl mb-6 md:mb-0">
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
            className="transition-transform text-gray-700 transform hover:scale-125 duration-300 cursor-pointer"
          />
        ))}
      </div>
      <Link href="/contact" prefetch={true}>
        <button className="border-2 cursor-pointer font-semibold button-theme px-6 py-2 rounded-full hover:text-secondary transition hidden lg:block">
          CONTACT US
        </button>
      </Link>
    </footer>
  );
}
