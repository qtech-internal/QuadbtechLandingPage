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
  const [activeSlide, setActiveSlide] = useState(1);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const carouselRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: Reverse and quickly hide logo
    tl.to(logoRef.current, { scaleX: -1, duration: 0.2 })
      .to(logoRef.current, { opacity: 0, duration: 0.1 })

      // Step 2: Instantly show text in the center
      .set(textRef.current, { opacity: 1, scaleX: 0, transformOrigin: "center center", fontSize: "3rem", width: "100vw" })

      // Step 3: Expand text from center so first word starts at x=0, last word reaches x=max
      .to(
        textRef.current,
        { x: "-20%", scaleX: 1, duration: 1, ease: "power2.out" }
      )

      // Step 4: Hold text in full width for 1 second
      .to(textRef.current, { duration: 0.3 })

      // Step 5: Move text to the top
      .to(textRef.current, { y: '-45vh', duration: 1 })

      // Step 6: Reveal full-screen carousel BELOW second line of text
      .fromTo(
        carouselRef.current,
        { opacity: 0, height: '0vh', y: '10vh' },
        { opacity: 1, height: '70vh', duration: 1.5 }
      )

      // // Step 7: Shrink carousel from left and move it to the right
      .to(carouselRef.current, { width: '70%', x: '20%', duration: 2, ease: "power2.out" }, "-=1")

      // Step 8: Move first line slightly right to reduce spacing
      .to(firstLineRef.current, { x: '22vw', duration: 1 }, "-=2")

      // Step 9: Sidebar appears from the left

      .fromTo(sidebarRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1 }, "-=1"
      );
  }, [])


  const carouselItems = [
    {
      title: "Transforming Ideas into Reality",
      description: "Learn More",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/1st.png",
    },
    {
      title: "Innovate Your Business",
      description: "Discover How",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/2nd.jpeg",
    },
    {
      title: "Engineering Future",
      description: "Get Started",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/3rd.jpeg",
    },
  ];


  return (
    <div className="relative w-full max-w-[1500px] h-auto min-h-[700px] overflow-visible bg-white text-black flex flex-col items-center justify-center mb-10 ">
      <div ref={logoRef} className="absolute text-5xl font-bold">
        <img src="/logo.png" alt="Logo" className="w-54 h-54" />
      </div>


      <div ref={textRef} className="absolute   lg:mt-0 xl:mt-10 text-2xl z-30 md:text-3xl lg:text-3xl xl-text-5xl  font-medium  opacity-0 text-center w-full mb-4 font-poppins">

        <span ref={firstLineRef} className="block top-[-10px] left-[-10px] 2xl:left-[-20px] whitespace-nowrap">
          <span className="relative inline-block align-super mr-2">



            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z" stroke="var(--p-text)" stroke-width="6" />
              <mask id="path-2-inside-1_65020_1056" fill="white">
                <path d="M25.1824 16.1133C20.9081 19.2458 20.4842 22.6811 21.402 30.2362C16.7495 20.9543 15.8924 16.5748 18.828 10.8571L25.1824 16.1133Z" />
              </mask>
              <path d="M21.402 30.2362L36.2925 28.4273L7.99226 36.9578L21.402 30.2362ZM25.1824 16.1133L34.7431 4.55505L49.5817 16.8291L34.0491 28.2122L25.1824 16.1133ZM18.828 10.8571L5.48399 4.00601L14.008 -12.5963L28.3886 -0.701151L18.828 10.8571ZM6.51142 32.045C6.05168 28.2603 5.54202 23.0994 6.75755 18.0232C8.2608 11.7454 11.8797 7.26541 16.3158 4.01446L34.0491 28.2122C33.9341 28.2964 34.3628 28.0043 34.882 27.2744C35.14 26.9117 35.3725 26.5079 35.5632 26.0807C35.752 25.6578 35.8662 25.2874 35.9328 25.0093C36.0553 24.4977 35.9923 24.3946 36.0026 25.0469C36.013 25.7115 36.0882 26.7454 36.2925 28.4273L6.51142 32.045ZM15.6218 27.6716L9.26733 22.4154L28.3886 -0.701151L34.7431 4.55505L15.6218 27.6716ZM32.172 17.7083C31.9322 18.1753 32.004 18.1574 32.071 17.8069C32.103 17.6392 32.121 17.4621 32.1237 17.2974C32.1263 17.1368 32.1133 17.0513 32.1154 17.0661C32.1247 17.13 32.2066 17.6167 32.6388 18.7494C33.0747 19.8918 33.7547 21.4058 34.8117 23.5146L7.99226 36.9578C5.59564 32.1765 3.22469 26.9023 2.42345 21.354C1.48212 14.8357 2.82595 9.18309 5.48399 4.00601L32.172 17.7083Z" fill="var(--p-text)" mask="url(#path-2-inside-1_65020_1056)" />
            </svg>
          </span>
          Your vision, your expertise:
        </span>
        <span ref={secondLineRef} className=" absolute left-[43rem] xl:left-[43rem] lg:left-[28rem] md:left-[20rem] 2xl:left-[65rem]  whitespace-nowrap">
          Crafting the <span className="relative  px-3 border-2 border-theme rounded-lg">Future of Technology</span>
          <span className="relative inline-block align-super mr-4">
            {/* <img src="/ending comma.png" alt="Ending Quote" className="w-6 h-6 md:w-8 md:h-8" /> */}
            <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4517 5.43384C15.328 7.37721 15.6896 9.2738 15.6257 11.4503C15.6065 12.1034 15.549 12.787 15.4521 13.5098C14.5914 11.4475 13.3302 9.79201 11.6162 8.38357L14.4517 5.43384Z" stroke="var(--p-text)" stroke-width="5" />
              <path d="M4.5216 17.2351C5.2324 18.2581 5.70588 19.339 6.01549 20.5953C5.29124 19.919 4.48682 19.3596 3.59205 18.8967L4.5216 17.2351Z" stroke="var(--p-text)" stroke-width="5" />
            </svg>



          </span>
        </span>
      </div>
      <div ref={carouselRef} className="absolute w-3/4 opacity-0   left-0 right-0 mx-auto">
        <div className="relative rounded-[30px] overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            className="h-[400px] relative"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index} className="relative">

                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                  }}
                ></div>
                {/* Theme-Based Overlay */}
                <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
                <div className={`absolute inset-0 ${item.bgColor}`}></div>

                <div className="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center space-x-4">
                  <div className="bg-theme p-2 rounded-lg shadow-md">
                    <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white ">{item.title}</h2>
                    <a href="#" className="text-white underline text-sm">
                      {item.description}
                    </a>
                  </div>
                </div>
                <button className="absolute bottom-1/3 left-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold  hover:bg-[var(--bg-card)] hover:text-white">
                  <span>Book Free Consultancy</span>
                  <button className="relative w-12 h-12 rounded-full bg-white border-2 border-theme flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-theme flex items-center justify-center">
                      <span className="text-white text-xl leading-none -mt-1">&gt;</span>
                    </div>
                  </button>
                </button>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next !w-6 !h-6 !text-[var(--p-text)] after:!text-xl after:!text-[var(--p-text)]"></div>
            <div className="swiper-button-prev !w-6 !h-6 !text-[var(--p-text)] after:!text-xl after:!text-[var(--p-text)]"></div>
 </Swiper>
  </div>
 </div>
   {/* Sidebar */}
   <div ref={sidebarRef} className="absolute left-0 top-10  w-1/4 h-auto bg-white p-5 flex flex-col items-start opacity-0 translate-x-[-100%]">
  
<button
  className="relative px-6 py-2 text-black font-medium rounded-full border border-theme bg-gradient-to-r from-[var(--div-bg)] to-transparent hover:from-[var(--div-bg)]"
>
  <span className="relative">Start Building Today</span>
</button>
        <div className="relative inline-block ">
          <p className="mt-4 font-semibold text-black text-left">
            Empowered Teams, Endless Possibilities
          </p>
          <img
            src="/Group 6.png"
            alt=""
            className="absolute top-0 right-12 w-8 h-8 "
          />
        </div>


        <div className="relative mt-4 flex flex-col items-center space-y-6 my-10 ml-0 rounded-xl shadow-lg justify-start p-4  div-bg hover:scale-110 transition-transform duration-300 ease-in-out">

          {/* Right side half-visible big button */}
          <div className="absolute  top-1/2 -translate-y-1/2 w-2 h-16 bg-theme rounded-r-full shadow-md cursor-pointer -right-[10px]">
            {/* Small circle on top of big button */}
            {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div> */}
            <div className="absolute right-[-12px] top-1/2  -translate-y-1/2 w-[4px] h-4 bg-theme rounded-r-full left-2  shadow-md"></div>
          </div>

          {/* Circular Images */}
          <img src="/person3.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-theme" />
          <img src="/person1.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-theme" />
          <img src="/person2.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-theme" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 border border-theme rounded-full text-sm">Scalable</span>
          <span className="px-3 py-1 bg-theme text-white rounded-full text-sm">Reliable</span>
          <span className="px-3 py-1 border border-theme rounded-full text-sm">Future-Ready</span>
          <span className="px-3 py-1 border border-theme rounded-full text-sm">Secure</span>
        </div>
      </div>
    </div>


  );
}
