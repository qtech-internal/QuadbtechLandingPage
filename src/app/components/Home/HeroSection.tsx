// 'use client';
// import { useEffect, useRef } from 'react';
// import Link from "next/link";
// import gsap from 'gsap';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdArrowForwardIos } from "react-icons/md";

// export default function Home() {
// const logoRef = useRef(null);
//   const textRef = useRef(null);
//   const firstLineRef = useRef(null);
//   const secondLineRef = useRef(null);
//   const carouselRef = useRef(null);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.to(logoRef.current, { scaleX: -1, duration: 0.3, ease: "power1.inOut" })
//       .to(logoRef.current, { autoAlpha: 0, duration: 0.2, ease: "power1.out" })

//       .set(textRef.current, {
//         autoAlpha: 1,
//         scaleX: 0,
//         transformOrigin: "center center",
//         fontSize: "3rem",
//         width: "100vw"
//       })

//       .to(textRef.current, {
//         x: "-20%",
//         scaleX: 1,
//         duration: 1.2,
//         ease: "power2.out"
//       })

//   .to(textRef.current, { duration: 0.4 })

//       .to(textRef.current, {

//         duration: 1.2,
//         ease: "power2.inOut"
//       })

//       .fromTo(
//         carouselRef.current,
//         { autoAlpha: 0, height: "0vh", y: "10vh" },
//         {
//           autoAlpha: 1,
//           height: "70vh",
//           duration: 1.5,
//           ease: "power2.out"
//         }
//       )

//       .to(
//         carouselRef.current,
//         {
//           width: "70%",
//           x: "20%",
//           duration: 2,
//           ease: "power2.inOut"
//         },
//         "-=1.2"
//       )

//       .to(
//         firstLineRef.current,
//         {
//           x: "22vw",
//           duration: 1,
//           ease: "power1.inOut"
//         },
//         "-=1.8"
//       )

//       .fromTo(
//         sidebarRef.current,
//         { x: "-100%", autoAlpha: 0 },
//         {
//           x: "0%",
//           autoAlpha: 1,
//           duration: 1,
//           ease: "power2.out"
//         },
//         "-=0.8"
//       );
//   }, []);

//   const carouselItems = [
//     {
//       title: "Transforming Ideas into Reality",
//       description: "Learn More",
//       iconSrc: "/first.gif",
//       bgColor: "/bg.webp",
//       imageSrc: "/home/home1.png",
//     },
//     {
//       title: "Innovate Your Business",
//       description: "Discover How",
//       iconSrc: "/first.gif",
//       bgColor: "/bg.webp",
//       imageSrc: "/home/home2.jpeg",
//     },
//     {
//       title: "Engineering Future",
//       description: "Get Started",
//       iconSrc: "/first.gif",
//       bgColor: "/bg.webp",
//       imageSrc: "/home/home3.jpeg",
//     },
//   ];
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="relative w-full max-w-[1600px]  min-h-[900px]  lg:min-h-[650px] xl:min-h-[720px]  overflow-visible bg-white text-black flex flex-col items-center justify-center    ">
//       <div ref={logoRef} className="absolute text-5xl font-bold  ">
//         {/* <img src="/logo.png" alt="Logo" className="w-54 h-54" /> */}
//         <svg width="200" height="200" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
//           <path d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
//         </svg>
//       </div>

//       <div ref={textRef} className="absolute lg:mt-14 xl:mt-14  2xl:mt-14 translate-y-[-40px] top-0 text-2xl z-30 md:text-3xl lg:text-2xl xl-text-5xl  font-medium opacity-0 text-center w-full mb-4 font-poppins text-[40px] leading-[50px]   ">

//       <div ref={firstLineRef} className="flex flex-col top-0 ">
//           <span>
//           <span className="relative inline-block align-super -ml-32 mr-[10] top-0 left-0 text-fixed">

// <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z" stroke="var(--bg-card)" strokeWidth="6" />
//   <mask id="path-2-inside-1_65020_1056" fill="white">
//     <path d="M25.1824 16.1133C20.9081 19.2458 20.4842 22.6811 21.402 30.2362C16.7495 20.9543 15.8924 16.5748 18.828 10.8571L25.1824 16.1133Z" />
//   </mask>
//   <path d="M21.402 30.2362L36.2925 28.4273L7.99226 36.9578L21.402 30.2362ZM25.1824 16.1133L34.7431 4.55505L49.5817 16.8291L34.0491 28.2122L25.1824 16.1133ZM18.828 10.8571L5.48399 4.00601L14.008 -12.5963L28.3886 -0.701151L18.828 10.8571ZM6.51142 32.045C6.05168 28.2603 5.54202 23.0994 6.75755 18.0232C8.2608 11.7454 11.8797 7.26541 16.3158 4.01446L34.0491 28.2122C33.9341 28.2964 34.3628 28.0043 34.882 27.2744C35.14 26.9117 35.3725 26.5079 35.5632 26.0807C35.752 25.6578 35.8662 25.2874 35.9328 25.0093C36.0553 24.4977 35.9923 24.3946 36.0026 25.0469C36.013 25.7115 36.0882 26.7454 36.2925 28.4273L6.51142 32.045ZM15.6218 27.6716L9.26733 22.4154L28.3886 -0.701151L34.7431 4.55505L15.6218 27.6716ZM32.172 17.7083C31.9322 18.1753 32.004 18.1574 32.071 17.8069C32.103 17.6392 32.121 17.4621 32.1237 17.2974C32.1263 17.1368 32.1133 17.0513 32.1154 17.0661C32.1247 17.13 32.2066 17.6167 32.6388 18.7494C33.0747 19.8918 33.7547 21.4058 34.8117 23.5146L7.99226 36.9578C5.59564 32.1765 3.22469 26.9023 2.42345 21.354C1.48212 14.8357 2.82595 9.18309 5.48399 4.00601L32.172 17.7083Z" fill="var(--bg-card)" mask="url(#path-2-inside-1_65020_1056)" />
// </svg>
// </span>
//             Your Vision, Our Expertise:</span>

//     </div>
//            {/* <span ref={firstLineRef} className="block top-[-10px] left-[0px] 2xl:left-[0] whitespace-nowrap ">
//           <span className="relative inline-block align-super mr-[10]">

//             <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z" stroke="var(--bg-card)" strokeWidth="6" />
//               <mask id="path-2-inside-1_65020_1056" fill="white">
//                 <path d="M25.1824 16.1133C20.9081 19.2458 20.4842 22.6811 21.402 30.2362C16.7495 20.9543 15.8924 16.5748 18.828 10.8571L25.1824 16.1133Z" />
//               </mask>
//               <path d="M21.402 30.2362L36.2925 28.4273L7.99226 36.9578L21.402 30.2362ZM25.1824 16.1133L34.7431 4.55505L49.5817 16.8291L34.0491 28.2122L25.1824 16.1133ZM18.828 10.8571L5.48399 4.00601L14.008 -12.5963L28.3886 -0.701151L18.828 10.8571ZM6.51142 32.045C6.05168 28.2603 5.54202 23.0994 6.75755 18.0232C8.2608 11.7454 11.8797 7.26541 16.3158 4.01446L34.0491 28.2122C33.9341 28.2964 34.3628 28.0043 34.882 27.2744C35.14 26.9117 35.3725 26.5079 35.5632 26.0807C35.752 25.6578 35.8662 25.2874 35.9328 25.0093C36.0553 24.4977 35.9923 24.3946 36.0026 25.0469C36.013 25.7115 36.0882 26.7454 36.2925 28.4273L6.51142 32.045ZM15.6218 27.6716L9.26733 22.4154L28.3886 -0.701151L34.7431 4.55505L15.6218 27.6716ZM32.172 17.7083C31.9322 18.1753 32.004 18.1574 32.071 17.8069C32.103 17.6392 32.121 17.4621 32.1237 17.2974C32.1263 17.1368 32.1133 17.0513 32.1154 17.0661C32.1247 17.13 32.2066 17.6167 32.6388 18.7494C33.0747 19.8918 33.7547 21.4058 34.8117 23.5146L7.99226 36.9578C5.59564 32.1765 3.22469 26.9023 2.42345 21.354C1.48212 14.8357 2.82595 9.18309 5.48399 4.00601L32.172 17.7083Z" fill="var(--bg-card)" mask="url(#path-2-inside-1_65020_1056)" />
//             </svg>
//           </span>
//           Your Vision,Our Expertise:
//         </span> */}
//       <span ref={secondLineRef} className="fixed left-[70%] transform -translate-x-1/2 whitespace-nowrap ml-95 top-[90%] ">
//   Crafting the <span className="relative px-3 border-2 border-theme rounded-full">Future of Technology</span>

//           <span className="relative inline-block align-super mr-4">

//             <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M14.4517 5.43384C15.328 7.37721 15.6896 9.2738 15.6257 11.4503C15.6065 12.1034 15.549 12.787 15.4521 13.5098C14.5914 11.4475 13.3302 9.79201 11.6162 8.38357L14.4517 5.43384Z" stroke="var(--bg-card)" strokeWidth="5" />
//               <path d="M4.5216 17.2351C5.2324 18.2581 5.70588 19.339 6.01549 20.5953C5.29124 19.919 4.48682 19.3596 3.59205 18.8967L4.5216 17.2351Z" stroke="var(--bg-card)" strokeWidth="5" />
//             </svg>

//           </span>
//         </span>
//       </div>

//       <div ref={carouselRef} className="absolute w-3/4 opacity-0 top-0 mt-18  left-0 right-0 mx-auto ">
//         <div className="relative rounded-[30px]    overflow-hidden ">
//    <div className="relative h-[400px]">
//                 <Slider {...settings}>
//         {carouselItems.map((item, index) => (
//           <div key={index} className="relative h-[400px] w-full">
//             {/* Background Image */}
//             <div
//               className="w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${item.imageSrc})` }}
//             ></div>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
//             <div className={`absolute inset-0 ${item.bgColor}`}></div>

//             {/* Text Box */}
//             <div className="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center space-x-4">
//               <div className="div-bg p-2 rounded-lg shadow-md">
//                 <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-bold text-white">{item.title}</h2>
//                 <a href="#" className="text-white underline text-sm">
//                   {item.description}
//                 </a>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <Link href="#contact">
//   <button className="absolute bottom-1/3 cursor-pointer left-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-[var(--bg-card)] hover:text-white">
//     <span>Book Free Consultancy</span>
//     <div className="relative w-12 h-12 rounded-full bg-white border-2 border-theme flex items-center justify-center">
//       <div className="w-12 h-12 rounded-full bg-theme flex items-center justify-center">
//                     <span className="text-white text-xl leading-none -mt-1"><MdArrowForwardIos size={28} /></span>
//       </div>
//     </div>
//   </button>
// </Link>
//           </div>
//         ))}
//       </Slider>
//       </div>
//         </div>
//       </div>
//       {/* Sidebar */}
//       <div ref={sidebarRef} className="absolute left-0 top-10  w-1/4 h-auto bg-white px-5 flex flex-col  items-start opacity-0 translate-x-[-100%] ">

//         <button
//           className="relative px-6 py-2 text-black font-medium rounded-full border border-theme bg-gradient-to-r from-[var(--div-bg)] to-transparent hover:from-[var(--div-bg)] mb-10"
//         >
//           <span className="relative">Start Building Today</span>
//         </button>
//         <div className="relative inline-block ">
//           <p className="mt-4 font-semibold text-black text-left">
//             Empowered Teams, Endless Possibilities
//           </p>
//           <img
//             src="/Group 6.png"
//             alt=""
//             className="absolute top-0 right-12 w-8 h-8 "
//           />
//         </div>

//         <div className="relative mt-4 flex flex-col items-center space-y-6 my-10 ml-0 rounded-xl shadow-lg justify-start p-4  div-bg hover:scale-110 transition-transform duration-300 ease-in-out">

//           {/* Right side half-visible big button */}
//           <div className="absolute  top-1/2 -translate-y-1/2 w-2 h-16 bg-theme rounded-r-full shadow-md cursor-pointer -right-[10px]">
//             {/* Small circle on top of big button */}
//             <div className="absolute right-[-12px] top-1/2  -translate-y-1/2 w-[4px] h-4 bg-theme rounded-r-full left-2  shadow-md"></div>
//           </div>

//           {/* Circular Images */}
//           <img src="/home/home4.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-theme" />
//           <img src="/home/home5.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-theme" />
//           <img src="/home/home6.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-theme" />
//         </div>
//         <div className="mt-4 space-y-2">
//   <div className="flex gap-2">
//     <span className="px-3 py-1 border border-theme rounded-full text-sm">Scalable</span>
//     <span className="px-3 py-1 bg-theme text-white rounded-full text-sm">Reliable</span>
//   </div>
//   <div className="flex gap-2 pl-4">
//     <span className="px-3 py-1 border border-theme rounded-full text-sm">Future-Ready</span>
//   </div>
//   <div className="flex gap-2 pl-8 ml-18">
//     <span className="px-3 py-1 border border-theme rounded-full text-sm">Secure</span>
//   </div>
// </div>

//       </div>
//     </div>

//   );
// }

// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import Link from "next/link";
// import { gsap } from 'gsap';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";

// export default function Home() {
//   const containerRef = useRef(null);

//   const logoRef = useRef(null);
//   const sidebarRef = useRef(null);
//   const carouselRef = useRef(null);
//   const headlineContainerRef = useRef(null);
//   const headline1Ref = useRef(null);
//   const headline2Ref = useRef(null);

//   useEffect(() => {

//     let ctx = gsap.context(() => {
//         const sidebar = sidebarRef.current;
//         const carousel = carouselRef.current;
//         const h1 = headlineContainerRef.current;
//         const h1Line1 = headline1Ref.current;
//         const h1Line2 = headline2Ref.current;

//         if (!h1) return;
//         gsap.set(h1, { opacity: 0 });
//         const h1Rect = (h1 as HTMLElement).getBoundingClientRect();

//         const viewportCenterX = window.innerWidth / 2;
//         const viewportCenterY = window.innerHeight / 2;

//         const h1CenterX = h1Rect.left + h1Rect.width / 2;
//         const h1CenterY = h1Rect.top + h1Rect.height / 2;

//         const xToCenter = viewportCenterX - h1CenterX;
//         const yToCenter = viewportCenterY - h1CenterY;

//         gsap.set(logoRef.current, { autoAlpha: 1 });
//         gsap.set(sidebar, { autoAlpha: 0, x: "-100%" });

//         gsap.set(carousel, { autoAlpha: 0, x: 50, y: 50, scale: 0.95 });

//         gsap.set(h1, { x: xToCenter, y: yToCenter, autoAlpha: 0 });

//         gsap.set(h1Line1, { x: -30, autoAlpha: 0 });
//         gsap.set(h1Line2, { x: 30, autoAlpha: 0 });

//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

//         tl

//           .to(logoRef.current, { autoAlpha: 0, scale: 0.5, duration: 0.6 }, "+=0.4")

//           .set(h1, { autoAlpha: 1 })

//           .to([h1Line1, h1Line2], { x: 0, autoAlpha: 1, duration: 1, stagger: 0.1 })

//           .to({}, {duration: 0.3})

//           .to(h1, { x: 0, y: 0, duration: 1.2 })

//           .to(sidebar, { autoAlpha: 1, x: "0%", duration: 1 }, "-=1.2")

//           .to(carousel, { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1 }, "<");
//     });

//     return () => ctx.revert();
//   }, []);

//   const carouselItems = [
//     {
//       title: "Transforming Ideas into Reality",
//       description: "Learn More",
//       iconSrc: "/first.gif",
//       imageSrc: "/home/home3.jpeg",
//     },
//     {
//       title: "Innovate Your Business",
//       description: "Discover How",
//       iconSrc: "/first.gif",
//       imageSrc: "/home/home1.png",
//     },
//     {
//       title: "Engineering the Future",
//       description: "Get Started",
//       iconSrc: "/first.gif",
//       imageSrc: "/home/home2.jpeg",
//     },
//   ];

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     dots: false,
//     appendDots: (dots: React.ReactNode[]) => (
//       <div className="absolute top-1/2 right-5 -translate-y-1/2">
//         <ul className="m-0 flex flex-col items-center justify-center gap-1 text-white">
//           {dots.map((dot, index) => (
//             <>
//               {dot}
//               {index < dots.length - 1 && (
//                 <div className="flex flex-col items-center">
//                     <MdKeyboardArrowDown size={14}/>
//                     <MdKeyboardArrowDown size={14} className="-mt-2.5"/>
//                 </div>
//               )}
//             </>
//           ))}
//         </ul>
//       </div>
//     ),
//     customPaging: (i: number) => (
//       <button className="h-8 w-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-sm">
//         {i + 1}
//       </button>
//     ),
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full flex items-center justify-center bg-white text-black py-8 px-0 lg:py-8 lg:px-0 font-poppins  overflow-hidden"
//     >

//       <div

//         className="absolute flex flex-col items-center justify-center pointer-events-none"
//       >
//         <div ref={logoRef}>
//           <svg width="150" height="150" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
//             <path d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
//           </svg>
//         </div>
//       </div>

//       <div className="w-full max-w-7xl flex flex-row items-start gap-12">

//         <div ref={sidebarRef} className="w-3/12 flex flex-col items-start gap-y-10">
//           <button className="px-6 py-2 text-black font-medium rounded-full border border-theme hover:bg-theme hover:text-white transition-colors">
//             Start Building Today
//           </button>
//           <div className="relative">
//             <p className="font-semibold text-black text-left text-lg">
//               Empowered Teams,<br/>Endless Possibilities
//             </p>
//              <img src="/Group 6.png" alt="" className="absolute -top-3 -right-6 w-8 h-8"/>
//           </div>
//           <div className="relative flex flex-col items-center space-y-4 rounded-3xl shadow-lg p-4 div-bg hover:scale-105 transition-transform duration-300 ease-in-out">
//             <div className="absolute top-1/2 -translate-y-1/2 -right-2.5 w-3 h-12 bg-theme rounded-r-full" />
//             <img src="/home/home6.jpeg" alt="Team member" className="w-16 h-16 rounded-full border-4 border-theme" />
//             <img src="/home/home5.jpeg" alt="Team member" className="w-16 h-16 rounded-full border-4 border-theme" />
//             <img src="/home/home4.jpeg" alt="Team member" className="w-16 h-16 rounded-full border-4 border-theme" />
//           </div>
//          <div className="mt-4 space-y-1">
//   <div className="flex gap-2  p-2 rounded">
//     <span className="px-3 py-1 border border-theme rounded-full text-sm ">Scalable</span>
//     <span className="px-3 py-1 bg-theme text-white rounded-full text-sm ">Reliable</span>
//   </div>
//   <div className="flex gap-2 pl-4  p-2 rounded">
//     <span className="px-3 py-1 border border-theme rounded-full text-sm translate-y-[-10px]">Future-Ready</span>
//   </div>
//   <div className="flex gap-2 pl-8 ml-18 p-2 rounded">
//     <span className="px-3 py-1 border border-theme rounded-full text-sm translate-y-[-20px]">Secure</span>
//   </div>
// </div></div>

//         <div className="w-9/12 flex flex-col gap-y-6">
//           <h1 ref={headlineContainerRef} className="text-3xl lg:text-4xl xl:text-5xl font-medium flex flex-col gap-4">
//             <span ref={headline1Ref} className="block whitespace-nowrap">
//               <span className="relative inline-block -top-8">
//                  <svg width="25" height="26" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z" stroke="var(--bg-card)" strokeWidth="6"/><mask id="a" fill="#fff"><path d="M25.182 16.113c-4.275 3.133-4.7 6.568-3.782 14.123-4.653-9.282-5.51-13.661-2.574-19.379l6.356 5.256Z"/></mask><path d="M21.402 30.236 36.292 28.427 7.992 36.958l13.41-6.722Zm3.78-14.123 9.56-11.558 14.84 12.274-14.532 12.099-9.868-12.815ZM18.828 10.857 5.484 4.006l8.524-16.6 14.38 11.895-9.56 11.556Zm-12.317 21.19c-.46-3.784-.969-8.945.246-14.021C8.26 11.745 11.88 7.265 16.316 4.014l17.733 24.198c-.115.085.314-.208.833-.938.258-.363.49-.766.68-1.194.19-.423.304-.793.37-1.071.123-.512.06-1.425.07-1.416.01.652.086 1.686.29 3.368l-29.78 3.618ZM15.622 27.671l-6.355-5.256L28.389-.7l6.354 5.256-19.12 23.117ZM32.172 17.708c-.24.467-.168.449-.1.1.032-.168.05-.345.052-.51.003-.16-.01-.245-.008-.23.01.063.091.55.524 1.682.436 1.143 1.116 2.657 2.173 4.765L7.992 36.958c-2.396-4.781-4.767-10.055-5.568-15.604C1.482 14.836 2.826 9.183 5.484 4.006l26.688 13.702Z" fill="var(--bg-card)" mask="url(#a)"/></svg>
//               </span>
//               Your Vision, Our Expertise:
//             </span>
//             <span ref={headline2Ref} className="block whitespace-nowrap lg:ml-42 ml-10">
//               Crafting the <span className="relative px-4 py-1 border-2 border-theme rounded-full">Future of Technology</span>
//               <span className="relative inline-block ml-2 -top-6">
//                  <svg width="18" height="26" viewBox="0 2 22 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.452 5.434c.876 1.943 1.237 3.84.173 6.016-.019.065-.077.55-.174 1.273-1.02-2.112-2.28-3.768-3.995-5.176l3.996-2.113Z" stroke="var(--bg-card)" strokeWidth="5"/><path d="M4.522 17.235c.71.1.415 1.223.725 2.358-.724-.676-1.529-1.236-2.423-1.699l1.698-.66Z" stroke="var(--bg-card)" strokeWidth="5"/></svg>
//               </span>
//             </span>
//           </h1>

//           <div ref={carouselRef} className="relative rounded-[30px] overflow-hidden aspect-video max-h-[500px] ">
//             <div className="relative rounded-[30px] overflow-hidden ">
//               <div className="relative h-[400px]">
//                 <Slider {...settings}>
//                   {carouselItems.map((item, index) => (
//                     <div key={index} className="relative h-[400px] w-full">
//                       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.imageSrc})` }}></div>
//                       <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
//                       <div className="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center space-x-4">
//                         <div className="div-bg p-2 rounded-lg shadow-md">
//                           <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
//                         </div>
//                         <div>
//                           <h2 className="text-lg font-bold text-white">{item.title}</h2>
//                           <a href="#" className="text-white underline text-sm">{item.description}</a>
//                         </div>
//                       </div>
//                       <Link href="#contact">
//                       <button className="absolute bottom-1/3 cursor-pointer left-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-[var(--bg-card)] hover:text-white">
//                           <span>Book Free Consultancy</span>
//                           <div className="relative w-12 h-12 rounded-full bg-white border-2 border-theme flex items-center justify-center">
//                             <div className="w-12 h-12 rounded-full bg-theme flex items-center justify-center">
//                               <span className="text-white text-xl leading-none -mt-1"><MdArrowForwardIos size={28} /></span>
//                             </div>
//                           </div>
//                       </button>
//                       </Link>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef } from 'react';
// import Link from "next/link";
// import { gsap } from 'gsap';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const headlineContainerRef = useRef<HTMLHeadingElement>(null);
//   const headline1Ref = useRef<HTMLSpanElement>(null);
//   const headline2Ref = useRef<HTMLSpanElement>(null);
//   const sliderRef = useRef<Slider | null>(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       const sidebar = sidebarRef.current;
//       const carousel = carouselRef.current;
//       const h1 = headlineContainerRef.current;
//       const h1Line1 = headline1Ref.current;
//       const h1Line2 = headline2Ref.current;

//       if (!h1) return;
//       gsap.set(h1, { opacity: 0 });
//       const h1Rect = h1.getBoundingClientRect();
//       const viewportCenterX = window.innerWidth / 2;
//       const viewportCenterY = window.innerHeight / 2;
//       const h1CenterX = h1Rect.left + h1Rect.width / 2;
//       const h1CenterY = h1Rect.top + h1Rect.height / 2;
//       const xToCenter = viewportCenterX - h1CenterX;
//       const yToCenter = viewportCenterY - h1CenterY;

//       gsap.set(logoRef.current, { autoAlpha: 1 });
//       gsap.set(sidebar, { autoAlpha: 0, x: "-100%" });
//       gsap.set(carousel, { autoAlpha: 0, x: 50, y: 50, scale: 0.95 });
//       gsap.set(h1, { x: xToCenter, y: yToCenter, autoAlpha: 0 });
//       gsap.set(h1Line1, { x: -30, autoAlpha: 0 });
//       gsap.set(h1Line2, { x: 30, autoAlpha: 0 });

//       const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//       tl
//         .to(logoRef.current, { autoAlpha: 0, scale: 0.5, duration: 0.6 }, "+=0.4")
//         .set(h1, { autoAlpha: 1 })
//         .to([h1Line1, h1Line2], { x: 0, autoAlpha: 1, duration: 1, stagger: 0.1 })
//         .to({}, { duration: 0.3 })
//         .to(h1, { x: 0, y: 0, duration: 1.2 })
//         .to(sidebar, { autoAlpha: 1, x: "0%", duration: 1 }, "-=1.2")
//         .to(carousel, { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1 }, "<");
//     });
//     return () => ctx.revert();
//   }, []);

//   const carouselItems = [
//     {
//       title: "Transforming Ideas into Reality",
//       description: "Learn More",
//       iconSrc: "/first.gif",
//       imageSrc: "/home/home3.jpeg",
//     },
//     {
//       title: "Innovate Your Business",
//       description: "Discover How",
//       iconSrc: "/first.gif",
//       imageSrc: "/home/home1.png",
//     },
//     {
//       title: "Engineering the Future",
//       description: "Get Started",
//       iconSrc: "/first.gif",
//       imageSrc: "/home/home2.jpeg",
//     },
//   ];

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     dots: false, // Dots are hidden!
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full flex items-center justify-center bg-white text-black py-8 px-0 lg:py-8 lg:px-0 font-poppins overflow-hidden"
//     >
//       {/* Logo */}
//       <div className="absolute flex flex-col items-center justify-center pointer-events-none">
//         <div ref={logoRef}>
//           <svg width="150" height="150" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
//             <path d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z" fill="var(--bg-card)" stroke="var(--bg-card)" strokeWidth="0.868933" />
//           </svg>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="w-full max-w-7xl flex flex-row items-start gap-12">
//         {/* Sidebar */}
//         <div ref={sidebarRef} className="w-3/12 flex flex-col items-start gap-y-10">
//           <button className="px-6 py-2 text-black font-medium rounded-full border border-theme hover:bg-theme hover:text-white transition-colors">
//             Start Building Today
//           </button>
//           <div className="relative">
//             <p className="font-semibold text-black text-left text-lg">
//               Empowered Teams,<br/>Endless Possibilities
//             </p>
//             <img src="/Group 6.png" alt="" className="absolute -top-3 -right-6 w-8 h-8"/>
//           </div>
//           <div className="relative flex flex-col items-center space-y-4 rounded-3xl shadow-lg p-4 div-bg hover:scale-105 transition-transform duration-300 ease-in-out">
//             <div className="absolute top-1/2 -translate-y-1/2 -right-2.5 w-3 h-12 bg-theme rounded-r-full" />
//             <img src="/home/home6.jpeg" alt="Team member" className="w-16 h-16 rounded-full border-4 border-theme" />
//             <img src="/home/home5.jpeg" alt="Team member" className="w-16 h-16 rounded-full border-4 border-theme" />
//             <img src="/home/home4.jpeg" alt="Team member" className="w-16 h-16 rounded-full border-4 border-theme" />
//           </div>
//           <div className="mt-4 space-y-1">
//             <div className="flex gap-2  p-2 rounded">
//               <span className="px-3 py-1 border border-theme rounded-full text-sm ">Scalable</span>
//               <span className="px-3 py-1 bg-theme text-white rounded-full text-sm ">Reliable</span>
//             </div>
//             <div className="flex gap-2 pl-4  p-2 rounded">
//               <span className="px-3 py-1 border border-theme rounded-full text-sm translate-y-[-10px]">Future-Ready</span>
//             </div>
//             <div className="flex gap-2 pl-8 ml-18 p-2 rounded">
//               <span className="px-3 py-1 border border-theme rounded-full text-sm translate-y-[-20px]">Secure</span>
//             </div>
//           </div>
//         </div>
//         {/* Main Section */}
//         <div className="w-9/12 flex flex-col gap-y-6">
//           <h1 ref={headlineContainerRef} className="text-3xl lg:text-4xl xl:text-5xl font-medium flex flex-col gap-4">
//             <span ref={headline1Ref} className="block whitespace-nowrap">
//               <span className="relative inline-block -top-8">
//                 <svg width="25" height="26" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z" stroke="var(--bg-card)" strokeWidth="6"/><mask id="a" fill="#fff"><path d="M25.182 16.113c-4.275 3.133-4.7 6.568-3.782 14.123-4.653-9.282-5.51-13.661-2.574-19.379l6.356 5.256Z"/></mask><path d="M21.402 30.236 36.292 28.427 7.992 36.958l13.41-6.722Zm3.78-14.123 9.56-11.558 14.84 12.274-14.532 12.099-9.868-12.815ZM18.828 10.857 5.484 4.006l8.524-16.6 14.38 11.895-9.56 11.556Zm-12.317 21.19c-.46-3.784-.969-8.945.246-14.021C8.26 11.745 11.88 7.265 16.316 4.014l17.733 24.198c-.115.085.314-.208.833-.938.258-.363.49-.766.68-1.194.19-.423.304-.793.37-1.071.123-.512.06-1.425.07-1.416.01.652.086 1.686.29 3.368l-29.78 3.618ZM15.622 27.671l-6.355-5.256L28.389-.7l6.354 5.256-19.12 23.117ZM32.172 17.708c-.24.467-.168.449-.1.1.032-.168.05-.345.052-.51.003-.16-.01-.245-.008-.23.01.063.091.55.524 1.682.436 1.143 1.116 2.657 2.173 4.765L7.992 36.958c-2.396-4.781-4.767-10.055-5.568-15.604C1.482 14.836 2.826 9.183 5.484 4.006l26.688 13.702Z" fill="var(--bg-card)" mask="url(#a)"/></svg>
//               </span>
//               Your Vision, Our Expertise:
//             </span>
//             <span ref={headline2Ref} className="block whitespace-nowrap lg:ml-42 ml-10">
//               Crafting the <span className="relative px-4 py-1 border-2 border-theme rounded-full">Future of Technology</span>
//               <span className="relative inline-block ml-2 -top-6">
//                 <svg width="18" height="26" viewBox="0 2 22 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.452 5.434c.876 1.943 1.237 3.84.173 6.016-.019.065-.077.55-.174 1.273-1.02-2.112-2.28-3.768-3.995-5.176l3.996-2.113Z" stroke="var(--bg-card)" strokeWidth="5"/><path d="M4.522 17.235c.71.1.415 1.223.725 2.358-.724-.676-1.529-1.236-2.423-1.699l1.698-.66Z" stroke="var(--bg-card)" strokeWidth="5"/></svg>
//               </span>
//             </span>
//           </h1>
//           {/* Carousel with custom arrow navigation */}
//           <div ref={carouselRef} className="relative rounded-[30px] overflow-hidden aspect-video max-h-[500px] ">
//              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 flex flex-col items-center  translate-y-[-95%]">
//               <div
//                 className="flex flex-col items-center bg-white rounded-full px-2 py-3 shadow-md cursor-pointer"
//                 onClick={() => sliderRef.current?.slickNext()}
//               > <span>1</span>
//                 <MdKeyboardArrowDown className="text-black opacity-40" size={18} />
//                 <MdKeyboardArrowDown className="text-black opacity-60 -mt-2" size={18} />
//                 <MdKeyboardArrowDown className="text-black opacity-80 -mt-2" size={18} />
//                 <MdKeyboardArrowDown className="text-black -mt-2" size={18} />
//               </div>
//               <div className="h-8 w-8 rounded-full bg-[#fbe8cc] text-black font-extrabold mt-3 flex flex-col items-center justify-center shadow-md mt-2 text-base leading-[8px]">
//                 <span>2</span>
//               </div>
//               <div className="h-8 w-8 rounded-full bg-[#fbe8cc] text-black font-extrabold mt-2 flex flex-col items-center justify-center shadow-md mt-2 text-base leading-[8px]">
//                 <span>3</span>
//               </div>
//               <div className="h-8 w-8 rounded-full bg-white text-black font-extrabold mt-3 flex flex-col items-center justify-center shadow-md mt-2 text-base leading-[7px]">
//                 <span>.</span>
//                 <span>.</span>
//                 <span>.</span>
//               </div>
//             </div>
//             <div className="relative rounded-[30px] overflow-hidden ">

//               <div className="relative h-[400px]">
//                 <Slider ref={sliderRef} {...settings}>
//                   {carouselItems.map((item, index) => (
//                     <div key={index} className="relative h-[400px] w-full">
//                       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.imageSrc})` }}></div>
//                       <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
//                       <div className="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center space-x-4">
//                         <div className="div-bg p-2 rounded-lg shadow-md">
//                           <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
//                         </div>
//                         <div>
//                           <h2 className="text-lg font-bold text-white">{item.title}</h2>
//                           <a href="#" className="text-white underline text-sm">{item.description}</a>
//                         </div>
//                       </div>
//                       <Link href="#contact">
//                         <button className="absolute bottom-1/3 cursor-pointer left-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-[var(--bg-card)] hover:text-white">
//                           <span>Book Free Consultancy</span>
//                           <div className="relative w-12 h-12 rounded-full bg-white border-2 border-theme flex items-center justify-center">
//                             <div className="w-12 h-12 rounded-full bg-theme flex items-center justify-center">
//                               <span className="text-white text-xl leading-none -mt-1"><MdArrowForwardIos size={28} /></span>
//                             </div>
//                           </div>
//                         </button>
//                       </Link>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const headlineContainerRef = useRef<HTMLHeadingElement>(null);
  const headline1Ref = useRef<HTMLSpanElement>(null);
  const headline2Ref = useRef<HTMLSpanElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const [currentTheme, setCurrentTheme] = useState("orange");

  const themeImages: { [key: string]: string[] } = {
    orange: ["/home/AFrame1.png", "/home/CFrame1.png", "/home/BFrame1.png"],
    olive: ["/home/AFrame2.png", "/home/CFrame2.png", "/home/BFrame2.png"],
    purple: ["/home/AFrame3.png", "/home/CFrame3.png", "/home/BFrame3.png"],
    pink: ["/home/AFrame4.png", "/home/CFrame4.png", "/home/BFrame4.png"],
    cyan: ["/home/AFrame5.png", "/home/CFrame5.png", "/home/BFrame5.png"],
    brown: ["/home/AFrame6.png", "/home/CFrame6.png", "/home/BFrame6.png"],
    red: ["/home/AFrame7.png", "/home/CFrame7.png", "/home/BFrame7.png"],
  };
  const themeGradients: { [key: string]: { start: string; end: string } } = {
    orange: { start: "#FF9500", end: "#FFC892" },
    olive: { start: "#b5b567", end: "#d7d7a3" },
    purple: { start: "#c866d7", end: "#e6b8f0" },
    pink: { start: "#ff69b4", end: "#ffc0cb" },
    red: { start: "#bc4f5a", end: "#f08080" },
    brown: { start: "#846353", end: "#b99b8b" },
    cyan: { start: "#00a7a7", end: "#a1e3e3" },
  };
  const { start, end } = themeGradients[currentTheme] || themeGradients.orange;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "orange";
    setCurrentTheme(savedTheme);

    const handleThemeChange = (e: Event) =>
      setCurrentTheme((e as CustomEvent<string>).detail);
    window.addEventListener("themeChanged", handleThemeChange);
    return () => window.removeEventListener("themeChanged", handleThemeChange);
  }, []);

  useEffect(() => {
    const { start, end } =
      themeGradients[currentTheme] || themeGradients.orange;
    const stop1 = document.getElementById("mini-hero-stop-1");
    const stop2 = document.getElementById("mini-hero-stop-2");
    if (stop1) stop1.setAttribute("stopColor", start);
    if (stop2) stop2.setAttribute("stopColor", end);
  }, [currentTheme]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sidebar = sidebarRef.current;
      const carousel = carouselRef.current;
      const h1 = headlineContainerRef.current;
      const h1Line1 = headline1Ref.current;
      const h1Line2 = headline2Ref.current;

      if (!h1 || !h1Line1 || !h1Line2 || !carousel || !sidebar) return;

      // Calculate position to center entire h1 container
      const h1Rect = h1.getBoundingClientRect();
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const h1CenterX = h1Rect.left + h1Rect.width / 2;
      const h1CenterY = h1Rect.top + h1Rect.height / 2;
      const xToCenter = viewportCenterX - h1CenterX;
      const yToCenter = viewportCenterY - h1CenterY;

      // Set initial states
      gsap.set(logoRef.current, { autoAlpha: 1 });
      gsap.set(sidebar, { autoAlpha: 0, x: "-100%" });
      gsap.set(carousel, { autoAlpha: 0, x: 50, y: 50, scale: 0.95 });
      gsap.set(h1, { x: xToCenter, y: yToCenter, autoAlpha: 1 });
      gsap.set(h1Line1, { x: -50, autoAlpha: 0 }); // Line 1 from left
      gsap.set(h1Line2, { x: 50, autoAlpha: 0 }); // Line 2 from right

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(
        logoRef.current,
        { autoAlpha: 0, scale: 0.5, duration: 0.6 },
        "+=0.4"
      )

        // Line 1 slides in from left
        .to(h1Line1, { x: 0, autoAlpha: 1, duration: 0.8 })

        // Line 2 slides in from right, slight delay
        .to(h1Line2, { x: 0, autoAlpha: 1, duration: 0.8 }, "-=0.5")

        // Then move whole h1 to center
        .to(h1, { x: 0, y: 0, duration: 1 })

        // Show carousel AFTER heading is in place
        .to(
          carousel,
          { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1 },
          "+=0.3"
        )

        // Sidebar comes in last
        .to(sidebar, { autoAlpha: 1, x: "0%", duration: 1 }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  const carouselTitles = [
    "Transforming Ideas into Reality",
    "Innovate Your Business",
    "Engineering the Future",
  ];
  const carouselDescriptions = ["Learn More", "Discover How", "Get Started"];

  const themeImageArray = themeImages[currentTheme] || themeImages.orange;

  const carouselItems = carouselTitles.map((title, idx) => ({
    title,
    description: carouselDescriptions[idx],
    iconSrc: "/first.gif",
    imageSrc: themeImageArray[idx] || themeImageArray[0], // fallback to first if not enough images
  }));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full 3xl:max-w-[1841px] flex items-center justify-center bg-white text-black py-8 px-0 lg:py-8 lg:px-0 font-poppins overflow-hidden"
    >
      {/* Logo */}
      <div className="absolute flex flex-col items-center justify-center pointer-events-none   ">
        <div ref={logoRef}>
          <svg
            width="150"
            height="150"
            viewBox="0 0 30 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z"
              fill="var(--bg-card)"
              stroke="var(--bg-card)"
              strokeWidth="0.868933"
            />
            <path
              d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z"
              fill="var(--bg-card)"
              stroke="var(--bg-card)"
              strokeWidth="0.868933"
            />
          </svg>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full   flex flex-row items-start gap-12 ">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className="w-3/12 flex flex-col items-start gap-y-10 "
        >
          <button className="px-6 py-2 ml-4 font-medium rounded-full border border-theme hover:bg-theme transition-colors bg-gradient-to-r from-[var(--div-bg)] to-transparent hover:from-[var(--div-bg)]">
            <span className="bg-gradient-to-r from-black via-black to-transparent bg-clip-text text-transparent ">
              Start Building Today
            </span>
          </button>

          <div className="relative">
            <p className="ml-40 translate-y-[20px] ">
              <svg
                width="21"
                height="30"
                viewBox="0 0 21 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="miniHeroGradient"
                    x1="0"
                    y1="0"
                    x2="21"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop id="mini-hero-stop-1" stopColor="#FF9500" />
                    <stop
                      id="mini-hero-stop-2"
                      offset="1"
                      stopColor="#FFC892"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M19.9996 12.3509C14.2216 11.2171 12.3532 8.50699 10.7962 1C9.51294 10.2927 9.95934 14.8671 15.7047 20.3272L19.9996 12.3509Z"
                  stroke="url(#miniHeroGradient)"
                  strokeWidth="0.613563"
                />
                <path
                  d="M1.00035 18.1793C6.77836 19.3132 8.64679 22.0233 10.2038 29.5303C11.4871 20.2376 11.0407 15.6632 5.2953 10.203L1.00035 18.1793Z"
                  stroke="url(#miniHeroGradient)"
                  strokeWidth="0.613563"
                />
              </svg>
            </p>
            <p className="font-semibold text-black text-left text-lg ml-4">
              Empowered Teams,
              <br />
              Endless Possibilities
            </p>
          </div>
          <div className="relative flex flex-col items-center bg-[#FFF8EB] rounded-[40px] shadow-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out w-fit">
            {/* Main Orange Bar on the Right */}
            <div className="absolute top-23 -right-2 w-[6px] h-22 bg-[#F97316] rounded-r-full bg-theme  z-0">
              {/* Raised Notch Bulge in the Center */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[-3px] w-[6px] h-[20px] bg-[#F97316] rounded-full bg-theme  shadow-md"></div>
            </div>

            {/* Team Members */}
            <img
              src="/home/home6.jpeg"
              alt="Team member 1"
              className="w-20 h-20 rounded-full border-[4px] border-4 border-theme z-10"
            />
            <img
              src="/home/home5.jpeg"
              alt="Team member 2"
              className="w-20 h-20 rounded-full border-[4px] border-4 border-theme z-10"
            />
            <img
              src="/home/home4.jpeg"
              alt="Team member 3"
              className="w-20 h-20 rounded-full border-[4px] border-4 border-theme z-10"
            />
          </div>

          <div className="mt-4 space-y-1 ml-4">
            <div className="flex gap-2  p-2 rounded ">
              <span className="px-3 py-1 border border-theme rounded-full text-sm ">
                Scalable
              </span>
              <span className="px-3 py-1 bg-theme text-white rounded-full text-sm ">
                Reliable
              </span>
            </div>
            <div className="flex gap-2 pl-4  p-2 rounded">
              <span className="px-3 py-1 border border-theme rounded-full text-sm translate-y-[-10px]">
                Future-Ready
              </span>
            </div>
            <div className="flex gap-2 pl-8 ml-18 p-2 rounded">
              <span className="px-3 py-1 border border-theme rounded-full text-sm translate-y-[-20px]">
                Secure
              </span>
            </div>
          </div>
        </div>
        {/* Main Section */}
        <div className="w-9/12 3xl:max-w-[1841px] flex flex-col gap-y-6 translate-x-[-20px]">
          <h1
            ref={headlineContainerRef}
            className="text-3xl lg:text-4xl xl:text-5xl font-medium flex flex-col gap-4"
          >
            <span ref={headline1Ref} className="block whitespace-nowrap">
              <span className="relative inline-block -top-8 -ml-4">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z"
                    stroke="var(--bg-card)"
                    strokeWidth="6"
                  />
                  <mask id="a" fill="#fff">
                    <path d="M25.182 16.113c-4.275 3.133-4.7 6.568-3.782 14.123-4.653-9.282-5.51-13.661-2.574-19.379l6.356 5.256Z" />
                  </mask>
                  <path
                    d="M21.402 30.236 36.292 28.427 7.992 36.958l13.41-6.722Zm3.78-14.123 9.56-11.558 14.84 12.274-14.532 12.099-9.868-12.815ZM18.828 10.857 5.484 4.006l8.524-16.6 14.38 11.895-9.56 11.556Zm-12.317 21.19c-.46-3.784-.969-8.945.246-14.021C8.26 11.745 11.88 7.265 16.316 4.014l17.733 24.198c-.115.085.314-.208.833-.938.258-.363.49-.766.68-1.194.19-.423.304-.793.37-1.071.123-.512.06-1.425.07-1.416.01.652.086 1.686.29 3.368l-29.78 3.618ZM15.622 27.671l-6.355-5.256L28.389-.7l6.354 5.256-19.12 23.117ZM32.172 17.708c-.24.467-.168.449-.1.1.032-.168.05-.345.052-.51.003-.16-.01-.245-.008-.23.01.063.091.55.524 1.682.436 1.143 1.116 2.657 2.173 4.765L7.992 36.958c-2.396-4.781-4.767-10.055-5.568-15.604C1.482 14.836 2.826 9.183 5.484 4.006l26.688 13.702Z"
                    fill="var(--bg-card)"
                    mask="url(#a)"
                  />
                </svg>
              </span>
              Your Vision, Our Expertise:
            </span>
            <span
              ref={headline2Ref}
              className="block whitespace-nowrap lg:ml-42 2xl:ml-83  3xl:ml-140  ml-10"
            >
              Crafting the{" "}
              <span className="relative px-4 py-1 border-4 border-theme rounded-full">
                Future of Technology
              </span>
              <span className="relative inline-block ml-2 -top-6">
                <svg
                  width="18"
                  height="26"
                  viewBox="0 2 22 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.452 5.434c.876 1.943 1.237 3.84.173 6.016-.019.065-.077.55-.174 1.273-1.02-2.112-2.28-3.768-3.995-5.176l3.996-2.113Z"
                    stroke="var(--bg-card)"
                    strokeWidth="5"
                  />
                  <path
                    d="M4.522 17.235c.71.1.415 1.223.725 2.358-.724-.676-1.529-1.236-2.423-1.699l1.698-.66Z"
                    stroke="var(--bg-card)"
                    strokeWidth="5"
                  />
                </svg>
              </span>
            </span>
          </h1>
          {/* Carousel with custom arrow navigation */}
          <div
            ref={carouselRef}
            className="relative rounded-[30px] overflow-hidden aspect-video max-h-[500px] "
          >
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 flex flex-col items-center right-0 -top-2 pt-2 lg:translate-y-[-120%]">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className={
                    "flex flex-col items-center justify-center mt-2 cursor-pointer transition-all duration-300 " +
                    (currentSlide === idx
                      ? "rounded-full px-1 py-2 shadow-md scale-110"
                      : "h-8 w-8 rounded-full shadow-md text-base leading-[8px]")
                  }
                  style={
                    currentSlide === idx
                      ? {
                          background: `linear-gradient(90deg, ${start}, ${end})`,
                          color: "#fff",
                        }
                      : {
                          background: "#fbe8cc",
                          color: "#000",
                        }
                  }
                  onClick={() => {
                    sliderRef.current?.slickGoTo(idx);
                    setCurrentSlide(idx);
                  }}
                >
                  <span className={currentSlide === idx ? "font-bold" : ""}>
                    {idx + 1}
                  </span>
                  {currentSlide === idx && (
                    <>
                      <MdKeyboardArrowDown
                        className="text-black opacity-40"
                        size={18}
                        onClick={(e) => {
                          e.stopPropagation();
                          sliderRef.current?.slickNext();
                        }}
                      />
                      <MdKeyboardArrowDown
                        className="text-black opacity-60 -mt-2"
                        size={18}
                        onClick={(e) => {
                          e.stopPropagation();
                          sliderRef.current?.slickNext();
                        }}
                      />
                      <MdKeyboardArrowDown
                        className="text-black opacity-80 -mt-2"
                        size={18}
                        onClick={(e) => {
                          e.stopPropagation();
                          sliderRef.current?.slickNext();
                        }}
                      />
                      <MdKeyboardArrowDown
                        className="text-black -mt-2"
                        size={18}
                        onClick={(e) => {
                          e.stopPropagation();
                          sliderRef.current?.slickNext();
                        }}
                      />
                    </>
                  )}
                </div>
              ))}
              {/* <div className="h-8 w-8 rounded-full bg-white text-black font-extrabold mt-3 flex flex-col items-center justify-center shadow-md mt-2 text-base leading-[6px]">
                <span className='translate-y-[-4px]'>.</span>
                 <span className='translate-y-[-4px]'>.</span>
               <span className='translate-y-[-4px]'>.</span>
              </div> */}
            </div>
            <div className="relative rounded-[40px] overflow-hidden translate-x-[-10px] ">
              <div className="relative h-[400px] ">
                <Slider ref={sliderRef} {...settings}>
                  {carouselItems.map((item, index) => (
                    <div key={index} className="relative h-[400px] w-full ">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.imageSrc})` }}
                      ></div>
                      <div className="absolute inset-0 bg-[var(--bg-card)] opacity-10"></div>
                      <div className="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center space-x-4">
                        <div className="div-bg p-2 rounded-lg shadow-md">
                          <img
                            src={item.iconSrc}
                            alt="Icon"
                            className="w-12 h-12"
                          />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-white">
                            {item.title}
                          </h2>
                          <a href="#" className="text-white underline text-sm">
                            {item.description}
                          </a>
                        </div>
                      </div>
                      <Link href="#contact">
                        <button className="absolute bottom-1/3 cursor-pointer left-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-[var(--bg-card)] hover:text-white">
                          <span>Book Free Consultancy</span>
                          <div className="relative w-12 h-12 rounded-full bg-white border-2 border-theme flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-theme flex items-center justify-center">
                              <span className="text-white text-xl leading-none -mt-1">
                                <MdArrowForwardIos size={28} />
                              </span>
                            </div>
                          </div>
                        </button>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
