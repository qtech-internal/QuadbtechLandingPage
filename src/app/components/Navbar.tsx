"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ThemeSwitcher from "./ThemeSwitcher";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#logo", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
    });
    tl.from("#nav-links a", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
    tl.from("#contact-button", {
      y: -30,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.from("#mobile-menu a", {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg bg-white shadow-md font-poppins z-50">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div
          id="logo"
          className="flex flex-1 items-center md:justify-start md:flex-none hidden lg:block"
        >
          <Link href="/">
            <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
          </Link>
        </div>
        <div id="nav-links" className="hidden md:flex space-x-6 font-extrabold text-lg">
{[
  { path: "/", label: "Home" },
  { path: "/career", label: "Career" },
  { path: "/blogs", label: "Blogs" },
].map(({ path, label }) => (
  <Link
    key={path}
    href={path}
    prefetch={true}
    className={`
      relative px-3 py-1 rounded-full font-semibold
      after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1
      after:h-[1px] after:bg-black after:rounded after:transition-all after:duration-300
      after:scale-x-0 after:opacity-0
      hover:after:scale-x-100 hover:after:opacity-100
      ${pathname === path ? "border-2 border-theme" : "hover:text-theme"}
    `}
  >
    {label}
  </Link>
))}    </div>
        <div className="hidden md:flex items-center space-x-4">
        <Link href="/contact" prefetch={true}>
  <button
    id="contact-button"
    className={`px-4 py-2 rounded-full font-semibold button-theme cursor-pointer
      ${
        pathname === "/contact"
          ? "bg-theme text-secondary border-theme" // Always show as hovered when on /contact
          : "hover:bg-theme hover:text-secondary"
      }`}
  >
    CONTACT US
  </button>
</Link>
          <ThemeSwitcher />
        </div>
      </nav>
      <div className="flex items-center justify-between w-full md:hidden">
        <button onClick={() => setMenuOpen(true)} className="text-gray-600">
          <FaBars size={20} />
        </button>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src="/Logo Black.png" alt="QuadB Tech" width={100} height={30} />
          </Link>
        </div>
        <Link href="/contact" prefetch={true}>
 <button
  id="contact-button"
  className={`px-2 py-1 rounded-full font-semibold text-[10px] button-theme text-white
    ${
      pathname === "/contact"
        ? "bg-theme border-theme"
        : "hover:bg-theme"
    }`}
>
  CONTACT
</button>
</Link>
      </div>
     <div
  ref={menuRef}
  className={`fixed top-0 left-0 h-screen w-[50%] sm:w-2/5 div-bg shadow-lg p-6 transition-transform duration-500 z-50 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center justify-center -ml-5">
          <Link href="/">
            <Image src="/Logo Black.png" alt="QuadB Tech" width={100} height={30} />
          </Link>
        </div>
    {/* Right: Close Button */}
    <button onClick={() => setMenuOpen(false)} className="text-gray-600">
      <FaXmark size={24} />
    </button>
  </div>
  <div className="fixed bottom-4 right-4 z-[999] md:hidden">
    <ThemeSwitcher />
  </div>
  <div
    id="mobile-menu"
    className="flex flex-col items-center p-10 space-y-6 text-secondary text-lg mt-10 whitespace-nowrap"
  >
 {[
  { path: "/", label: "Home" },
  { path: "/career", label: "Career" },
  { path: "/blogs", label: "Blogs" },
].map(({ path, label }) => (
  <Link
    key={path}
    href={path}
    prefetch={true}
    onClick={() => setMenuOpen(false)}
    className={`
  relative px-4 py-2 rounded-full font-semibold
  after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1
  after:h-[1px] after:bg-black after:rounded after:transition-all after:duration-300
  after:scale-x-0 after:opacity-0
  hover:after:scale-x-100 hover:after:opacity-100
  active:after:scale-x-100 active:after:opacity-100
  ${pathname === path ? "border-2 border-theme text-secondary font-semibold" : ""}
`}
  >
    {label}
  </Link>
))}
  </div>
</div>
    </header>
  );
};

export default Navbar;