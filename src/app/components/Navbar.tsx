"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 bg-white shadow-md z-50 mb-20 font-poppins">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center">

        <div>
          <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
        </div>


        <div className="hidden md:flex space-x-6 text-black font-medium text-lg">
          {[
            { path: "/", label: "Home" },
            { path: "/career", label: "Career" },
            { path: "/blogs", label: "Blogs" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-1 rounded-full ${pathname === path ? "border-2 border-orange-500 text-black font-semibold" : "hover:text-orange-500"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>


 <div className="hidden md:block whitespace-nowrap">
          <Link href="/contact">
            <button
              className={`px-4 py-2 rounded-full font-semibold ${pathname === "/contact"
                ? "border-2 border-orange-500 text-black"
                : "border-2 border-orange-500 text-black hover:bg-orange-500 hover:text-white"
                }`}
            >
              CONTACT US
            </button>
          </Link>
        </div>


        <button onClick={() => setMenuOpen(true)} className="md:hidden text-gray-600">
          <RiMenu2Fill size={32} />
        </button>
      </nav>


      <div
        className={`fixed top-0 right-0 h-screen w-2/3 sm:w-2/5 bg-white shadow-lg p-6 transition-transform duration-500 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-gray-600">
          <FaXmark size={32} />
        </button>

        <div className="flex flex-col items-end p-10 space-y-6 text-black text-lg mt-10">
          {[
            { path: "/", label: "Home" },
            { path: "/career", label: "Career" },
            { path: "/blogs", label: "Blogs" },
            { path: "/contact", label: "CONTACT US" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full ${pathname === path ? "border-2 border-orange-500 text-black font-semibold" : ""
                }`}
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
