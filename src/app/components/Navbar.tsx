// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { RiMenu2Fill } from "react-icons/ri";
// import { FaXmark } from "react-icons/fa6";
// import ThemeSwitcher from "./ThemeSwitcher";
// import gsap from "gsap";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from("#logo", {
//       y: -30,
//       opacity: 0,
//       duration: 0.5,
//       delay: 0.3,
//     });
//     tl.from("#nav-links a", {
//       y: -30,
//       opacity: 0,
//       duration: 0.5,
//       stagger: 0.2,
//     });
//     tl.from("#contact-button", {
//       y: -30,
//       opacity: 0,
//       duration: 0.5,
//     });
//   }, []);

//   useEffect(() => {
//     if (menuOpen) {
//       gsap.from("#mobile-menu a", {
//         y: -30,
//         opacity: 0,
//         duration: 0.5,
//         stagger: 0.2,
//       });
//     }
//   }, [menuOpen]);

//   return (
//     <header className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg bg-white  shadow-md z-50 font-poppins">
//       <nav className="max-w-[1600px] mx-auto flex justify-between items-center">
//         {/* <div id="logo">
//           <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
//         </div> */}
//      <div id="logo" className="flex flex-1 justify-center md:justify-start md:flex-none">

//       <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
//      </div>

//         <div id="nav-links" className="hidden md:flex space-x-6 font-medium text-lg">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/career", label: "Career" },
//             { path: "/blogs", label: "Blogs" },
//           ].map(({ path, label }) => (
//             <Link
//               key={path}
//               href={path}
//               className={`px-3 py-1 rounded-full ${
//                 pathname === path ? "border-2 border-theme font-semibold" : "hover:text-theme"
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           <Link href="/contact">
//             <button
//               id="contact-button"
//               className={`px-4 py-2 rounded-full font-semibold button-theme ${
//                 pathname === "" ? "border-theme text-theme" : "hover:bg-theme hover:text-secondary"
//               }`}
//             >
//               CONTACT US
//             </button>
//           </Link>
//           <ThemeSwitcher />
//         </div>

//         {/* <button onClick={() => setMenuOpen(true)} className="md:hidden text-secondary">
//           <RiMenu2Fill size={32} />
//         </button> */}
//              <button
//        onClick={() => setMenuOpen(true)}
//        className="md:hidden text-secondary absolute left-4  z-30"
//      >
//       <RiMenu2Fill size={32} />
//     </button>
//       </nav>

//       {/* Mobile Menu */}
//       {/* <div
//         className={`fixed top-0 right-0 h-screen w-2/3 sm:w-2/5 div-bg shadow-lg p-6 transition-transform duration-500 z-50 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       > */}
//         <div
//     className={`fixed top-0 left-0 h-screen w-2/3 sm:w-2/5 div-bg shadow-lg p-6 transition-transform duration-500 z-50 ${
//       menuOpen ? "translate-x-0" : "-translate-x-full"
//     }`}
//   >

//         <div className="flex justify-between items-center w-full">
//           <ThemeSwitcher />
//           <button onClick={() => setMenuOpen(false)} className="text-secondary">
//             <FaXmark size={32} />
//           </button>
//         </div>

//         <div id="mobile-menu" className="flex flex-col items-end p-10 space-y-6 text-secondary text-lg mt-10 whitespace-nowrap">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/career", label: "Career" },
//             { path: "/blogs", label: "Blogs" },
//             { path: "/contact", label: "CONTACT US" },
//           ].map(({ path, label }) => (
//             <Link
//               key={path}
//               href={path}
//               onClick={() => setMenuOpen(false)}
//               className={`px-4 py-2 rounded-full ${
//                 pathname === path ? "border-2 border-theme text-secondary font-semibold" : ""
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>
//       </header>
// //     <header className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg bg-white shadow-md z-50 font-poppins">
// //   <nav className="max-w-[1600px] mx-auto flex justify-between items-center relative">

// //     {/* Mobile Toggle Button (Left) */}
// //     <button
// //       onClick={() => setMenuOpen(true)}
// //       className="md:hidden text-secondary absolute left-0 z-30"
// //     >
// //       <RiMenu2Fill size={32} />
// //     </button>

// //     {/* Logo (Centered on Mobile) */}
// //     <div id="logo" className="flex-1 flex justify-center md:justify-start">
// //       <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
// //     </div>

// //     {/* Nav Links - Desktop */}
// //     <div id="nav-links" className="hidden md:flex space-x-6 font-medium text-lg">
// //       {[
// //         { path: "/", label: "Home" },
// //         { path: "/career", label: "Career" },
// //         { path: "/blogs", label: "Blogs" },
// //       ].map(({ path, label }) => (
// //         <Link
// //           key={path}
// //           href={path}
// //           className={`px-3 py-1 rounded-full ${
// //             pathname === path ? "border-2 border-theme font-semibold" : "hover:text-theme"
// //           }`}
// //         >
// //           {label}
// //         </Link>
// //       ))}
// //     </div>

// //     {/* Contact & ThemeSwitcher - Desktop */}
// //     <div className="hidden md:flex items-center space-x-4">
// //       <Link href="/contact">
// //         <button
// //           id="contact-button"
// //           className={`px-4 py-2 rounded-full font-semibold button-theme ${
// //             pathname === "" ? "border-theme text-theme" : "hover:bg-theme hover:text-secondary"
// //           }`}
// //         >
// //           CONTACT US
// //         </button>
// //       </Link>
// //       <ThemeSwitcher />
// //     </div>
// //   </nav>

// //   {/* Mobile Menu - Now slides from left */}
// //   <div
// //     className={`fixed top-0 left-0 h-screen w-2/3 sm:w-2/5 div-bg shadow-lg p-6 transition-transform duration-500 z-50 ${
// //       menuOpen ? "translate-x-0" : "-translate-x-full"
// //     }`}
// //   >
// //     <div className="flex justify-between items-center w-full">
// //       <ThemeSwitcher />
// //       <button onClick={() => setMenuOpen(false)} className="text-secondary">
// //         <FaXmark size={32} />
// //       </button>
// //     </div>

// //     <div id="mobile-menu" className="flex flex-col items-end p-10 space-y-6 text-secondary text-lg mt-10 whitespace-nowrap">
// //       {[
// //         { path: "/", label: "Home" },
// //         { path: "/career", label: "Career" },
// //         { path: "/blogs", label: "Blogs" },
// //         { path: "/contact", label: "CONTACT US" },
// //       ].map(({ path, label }) => (
// //         <Link
// //           key={path}
// //           href={path}
// //           onClick={() => setMenuOpen(false)}
// //           className={`px-4 py-2 rounded-full ${
// //             pathname === path ? "border-2 border-theme text-theme font-semibold" : ""
// //           }`}
// //         >
// //           {label}
// //         </Link>
// //       ))}
// //     </div>
// //   </div>
// // </header>

//   );
// };

// export default Navbar;
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import ThemeSwitcher from "./ThemeSwitcher";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 backdrop-blur-lg bg-white shadow-md font-poppins z-50">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center  ">
        
        {/* LOGO + Mobile CONTACT US Button */}
        <div id="logo" className="flex flex-1 items-center md:justify-start md:flex-none hidden lg:block">
          <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
        </div>

        {/* NAV LINKS (Desktop only) */}
        <div id="nav-links" className="hidden md:flex space-x-6 font-medium text-lg">
          {[
            { path: "/", label: "Home" },
            { path: "/career", label: "Career" },
            { path: "/blogs", label: "Blogs" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-1 rounded-full ${
                pathname === path ? "border-2 border-theme font-semibold" : "hover:text-theme"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CONTACT US + THEME SWITCHER (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <button
              id="contact-button"
              className={`px-4 py-2 rounded-full font-semibold button-theme ${
                pathname === "/contact"
                  ? "border-theme text-theme"
                  : "hover:bg-theme hover:text-secondary"
              }`}
            >
              CONTACT US
            </button>
          </Link>
          <ThemeSwitcher />
        </div>

      </nav>

      {/* MOBILE MENU */}
<div className="flex items-center justify-between w-full md:hidden ">
  {/* Menu Button */}
  <button
    onClick={() => setMenuOpen(true)}
    className="text-secondary"
  >
    <RiMenu2Fill size={28} />
  </button>

  {/* Logo */}
  <div className="flex items-center justify-center">
    <Image src="/Logo Black.png" alt="QuadB Tech" width={120} height={40} />
  </div>

  {/* Contact Us Button */}
  <Link href="/contact">
    <button
      id="contact-button"
      className={`px-3 py-2 rounded-full font-semibold text-sm button-theme  ${
        pathname === "/contact"
          ? "border-theme text-theme"
          : "hover:bg-theme hover:text-secondary"
      }`}
    >
      CONTACT US
    </button>
  </Link>
</div>
    <div
        className={`fixed top-0 left-0 h-screen w-2/3 sm:w-2/5 div-bg shadow-lg p-6  transition-transform duration-500 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <ThemeSwitcher />
          <button onClick={() => setMenuOpen(false)} className="text-secondary">
            <FaXmark size={32} />
          </button>
        </div>

        <div
          id="mobile-menu"
          className="flex flex-col items-end p-10 space-y-6 text-secondary text-lg mt-10 whitespace-nowrap"
        >
          {[
            { path: "/", label: "Home" },
            { path: "/career", label: "Career" },
            { path: "/blogs", label: "Blogs" },
           
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full ${
                pathname === path ? "border-2 border-theme text-secondary font-semibold" : ""
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
