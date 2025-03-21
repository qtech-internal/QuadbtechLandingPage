'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const textRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const carouselRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: Instantly show text in the center
    tl.set(textRef.current, { opacity: 1, scaleX: 0, transformOrigin: "center center", fontSize: "3rem", width: "100vw" })
      // Step 2: Expand text from center
      .to(textRef.current, { x: "-20%", scaleX: 1, duration: 1, ease: "power2.out" })
      // Step 3: Hold text in full width for 1 second
      .to(textRef.current, { duration: 0.3 })
      // Step 4: Move text to the top
      .to(textRef.current, { y: '-45vh', duration: 1 })
      // Step 5: Reveal full-screen carousel BELOW second line of text
      .fromTo(carouselRef.current, { opacity: 0, height: '0vh', y: '10vh' }, { opacity: 1, height: '70vh', duration: 1.5 })
      // Step 6: Shrink carousel from left and move it to the right
      .to(carouselRef.current, { width: '70%', x: '20%', duration: 2, ease: "power2.out" }, "-=1")
      // Step 7: Move first line slightly right
      .to(firstLineRef.current, { x: '22vw', duration: 1 }, "-=2")
      // Step 8: Sidebar appears from the left
      .fromTo(sidebarRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }, "-=1");
  }, []);

  const carouselItems = [
    {
      title: "Transforming Ideas into Reality",
      description: "Learn More",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/blog5.jpeg",
    },
    {
      title: "Innovate Your Business",
      description: "Discover How",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/bg.webp",
    },
    {
      title: "Engineering Future",
      description: "Get Started",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/bg.webp",
    },
  ];

  return (
    <div className="w-full max-w-[1500px] overflow-x-hidden bg-white text-black flex flex-col items-center justify-center p-4">
      <button className="relative px-6 py-2 text-black font-medium rounded-full border border-orange-500 
                       bg-gradient-to-r from-transparent to-white hover:from-orange-100">
        Start Building Today
      </button>
      <div className="text-center text-lg md:text-4xl font-medium mt-10 mb-8">
        <span className="block">
          <img src="/starting comma.png" alt="Quote" className="inline w-6 h-6 md:w-8 md:h-8" /> Your vision, your expertise:
        </span>
        <span className="block mt-2">
          Crafting the <span className="inline-block px-3 border-2 border-orange-500 rounded-lg">Future of Technology</span>
          <img src="/ending comma.png" alt="Quote" className="inline w-6 h-6 md:w-8 md:h-8" />
        </span>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-3xl mx-auto rounded-[30px] overflow-hidden">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          //   pagination={{ clickable: true }}
          className="h-[300px] md:h-[400px]"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index} className="relative ">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.imageSrc})` }}></div>
              <div className={`absolute inset-0 ${item.bgColor}`}></div>
              <div className="absolute bottom-8 left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center space-x-4">
                <div className="bg-orange-50 p-2 rounded-lg shadow-md">
                  <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{item.title}</h2>
                  <a href="#" className="text-white underline text-sm">{item.description}</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
  :global(.swiper-button-prev::after),
  :global(.swiper-button-next::after) {
    color: white !important;
  }
`}</style>

      </div>
      <button className=" mt-10   bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-orange-500 hover:text-white">
        <span>Book Free Consultancy</span>
        <button className="relative w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white text-xl leading-none -mt-1">&gt;</span>
          </div>
        </button>


      </button>

      {/* Sidebar */}

      <p className="mt-4 font-semibold text-black text-left">Empowered Teams, Endless Possibilities</p>
      <div className="relative mt-10 flex flex-row items-center space-x-8 my-10 ml-0 rounded-xl shadow-lg justify-start p-4 bg-[#FFF8EB] hover:scale-110 transition-transform duration-300 ease-in-out">


        <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-16 h-2 bg-orange-500 rounded-t-full shadow-md cursor-pointer">

          <div className="absolute left-1/2 -translate-x-1/2 -top-[4px] w-4 h-2 bg-orange-500 rounded-t-full shadow-md"></div>
        </div>


        <img src="/person3.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-orange-400" />
        <img src="/person1.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-orange-400" />
        <img src="/person2.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-orange-400" />

      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1 border border-black rounded-full text-sm">Scalable</span>
        <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">Reliable</span>
        <span className="px-3 py-1 border border-black rounded-full text-sm">Future-Ready</span>
        <span className="px-3 py-1 border border-black rounded-full text-sm">Secure</span>
      </div>


    </div>
  );
}
