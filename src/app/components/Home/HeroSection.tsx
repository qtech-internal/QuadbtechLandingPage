
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// export default function HeroSection() {
//   const [activeSlide, setActiveSlide] = useState(1);

//   return (
//     <section className="relative w-full    bg-white flex flex-col items-center px-8 py-10">
//       {/* Full Width Heading */}
//           {/* <div className="w-full text-center py-6 bg-white">

//         <h1 className="text-4xl font-bold leading-tight ">
//           <span className="relative inline-block">
//             <span className="absolute top-[-10px] left-[-10px] text-orange-500">"</span>
//             Your Vision, Our Expertise:
//           </span>
//           <br />
//           Crafting the <span className="relative inline-block px-3 border-2 border-orange-500 rounded-lg">Future of Technology</span>
//           <span className="text-orange-500">"</span>
//         </h1>
//       </div> */}

//       {/* Main Container */}
//       <div className="w-full max-w-[1500px] flex items-start gap-10">
//         {/* Left Section */}
//         <div className="flex flex-col items-start gap-6 w-1/3">
//           <button className="px-4 py-2 bg-orange-500 text-white rounded-full shadow-md ">
//             Start Building Today
//           </button>
//           <p className="text-lg font-semibold">
//             Empowered Teams<br />Endless Possibilities
//           </p>

//                       <div className="flex flex-col items-center gap-2 relative">
//           {[1, 2, 3].map((id) => (
//             <div key={id} className="w-14 h-14 rounded-full border-2 border-orange-500 overflow-hidden">
//               <Image src="/profile-placeholder.jpg" alt="Profile" width={56} height={56} />
//             </div>
//           ))}
//         </div>
//           <div className="grid grid-cols-2 gap-2">
//             {['Scalable', 'Reliable', 'Future-Ready', 'Secure'].map((tag) => (
//               <span key={tag} className={`px-3 py-1 text-sm font-medium rounded-full border-2 ${tag === 'Reliable' ? 'bg-orange-500 text-white' : 'border-orange-500'}`}>{tag}</span>
//             ))}
//           </div>
//         </div>

//         {/* Main Banner */}
//         <div className="relative w-full max-w-[900px]">
//                   {/* Banner Image */}


//          <h1 className="text-4xl font-bold leading-tight text-left py-6 ">
//            <span className="relative inline-block">
//              <span className="absolute top-[-10px] left-[-10px] text-orange-500">"</span>
//              Your Vision, Our Expertise:
//            </span>
//            <br />
//            Crafting the <span className="relative inline-block px-3 border-2 border-orange-500 rounded-lg">Future of Technology</span>
//            <span className="text-orange-500">"</span>
//          </h1>

//           <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
//             <Image src="/bg.webp" alt="Banner" layout="fill" objectFit="cover" className="rounded-2xl" />
//             <button className="absolute top-8 left-8 px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2">
//               Book Free Consultancy <span>&rarr;</span>
//             </button>
//             <div className="absolute bottom-6 left-6 bg-orange-500 text-white p-4 rounded-lg">
//               <h3 className="text-lg font-semibold">Transforming Ideas into Reality</h3>
//               <a href="#" className="underline text-sm">Learn More</a>
//             </div>
//           </div>

//           {/* Carousel Controls */}
//           <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col items-center gap-2">
//             {[1, 2, 3].map((id) => (
//               <button key={id} onClick={() => setActiveSlide(id)} className={`w-8 h-8 flex items-center justify-center rounded-full border ${activeSlide === id ? 'bg-orange-500 text-white' : 'border-orange-500 text-black'}`}>
//                 {id}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
      // .fromTo(sidebarRef.current, { x: '-100%' }, { x: '0%', duration: 1 }, "-=1");
      // }, []);
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
    <div className="relative w-full max-w-[1500px]  h-screen overflow-x-hidden bg-white text-black flex flex-col items-center justify-center mb-10  ">
      {/* Logo */}
      <div ref={logoRef} className="absolute text-5xl font-bold">
        <img src="/logo.png" alt="Logo" className="w-54 h-54" />
      </div>

      {/* Appearing Text */}
      {/* <div ref={textRef} className="absolute mt-20 text-2xl md:text-5xl font-bold opacity-0 text-center w-full mb-4 font-poppins"> */}
      <div ref={textRef} className="absolute mt-20 text-2xl md:text-5xl  font-medium  opacity-0 text-center w-full mb-4 font-poppins">

        <span ref={firstLineRef} className="block top-[-10px] left-[-10px]">
          <span className="relative inline-block align-super mr-2">
            <img src="/starting comma.png" alt="Ending Quote" className="w-6 h-6 md:w-8 md:h-8" />
          </span>
          Your vision, your expertise:
        </span>
        <span ref={secondLineRef} className="block absolute left-[43rem] lg:left-[43rem] whitespace-nowrap">
          Crafting the <span className="relative inline-block px-3 border-2 border-orange-500 rounded-lg">Future of Technology</span>
          <span className="relative inline-block align-super mr-4">
            <img src="/ending comma.png" alt="Ending Quote" className="w-6 h-6 md:w-8 md:h-8" />
          </span>
        </span>
      </div>

      {/* Enhanced Carousel */}
      {/* <div ref={carouselRef} className="absolute w-3/4  opacity-0 mt-50"> */}
      {/* <div ref={carouselRef} className="absolute w-3/4 opacity-0 top-24 left-0 right-0 mx-auto"> */}
      <div ref={carouselRef} className="absolute w-3/4 opacity-0 top-24 left-0 right-0 mx-auto">


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
                {/* Background Image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${item.bgColor}`}></div>

                {/* Main Content Card */}

                <div className="absolute bottom-8 left-8 max-w-md bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center space-x-4">
                  <div className="bg-orange-50 p-2 rounded-lg shadow-md">
                    <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white ">{item.title}</h2>
                    <a href="#" className="text-white underline text-sm">
                      {item.description}
                    </a>
                  </div>
                </div>


                {/* Free Consultancy Button */}
                <button className="absolute bottom-1/3 left-8 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-orange-500 hover:text-white">
                  <span>Book Free Consultancy</span>
                  <button className="relative w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white text-xl leading-none -mt-1">&gt;</span>
                    </div>
                  </button>


                </button>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="swiper-button-next !text-white !after:text-2xl"></div>
            <div className="swiper-button-prev !text-white !after:text-2xl"></div>
          </Swiper>


        </div>
      </div>

      {/* Sidebar */}
      {/* <div ref={sidebarRef} className="absolute left-0 top-10 bottom-40 w-1/4 h-auto bg-white p-5  flex flex-col items-start"> */}
      <div ref={sidebarRef} className="absolute left-0 top-10  w-1/4 h-auto bg-white p-5 flex flex-col items-start opacity-0 translate-x-[-100%]">

        <button className="px-4 py-2 text-sm font-medium border border-orange-200 rounded-full hover:bg-gray-200">Start Building Today</button>
        {/* <p className="mt-4 font-semibold text-black text-left">Empowered Teams, Endless Possibilities</p>
        <div className="mt-4 flex flex-col items-center space-y-3 rounded-xl shadow-lg justify-start p-4 border-2 border-pink-100">
          
          
      <img src="/person3.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-orange-400" />
      <img src="/person1.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-orange-400" />
      <img src="/person2.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-orange-400" />
    </div>
      */}
        {/* <div className="relative mt-4 flex flex-col items-center space-y-3 rounded-xl shadow-lg justify-start p-4 border-2 border-pink-100 bg-white">
  
  
  <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-4 h-16 bg-orange-500 rounded-r-full shadow-md cursor-pointer"></div>


  <img src="/person3.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-orange-400" />
  <img src="/person1.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-orange-400" />
  <img src="/person2.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-orange-400" />
</div> */}
        <div className="relative mt-4 flex flex-col items-center space-y-6 my-10 ml-0 rounded-xl shadow-lg justify-start p-4   bg-[#FFF8EB] hover:scale-110 transition-transform duration-300 ease-in-out">

          {/* Right side half-visible big button */}
          <div className="absolute  top-1/2 -translate-y-1/2 w-2 h-16 bg-orange-500 rounded-r-full shadow-md cursor-pointer -right-[10px]">
            {/* Small circle on top of big button */}
            {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div> */}
            <div className="absolute right-[-12px] top-1/2  -translate-y-1/2 w-[4px] h-4 bg-orange-500 rounded-r-full left-2  shadow-md"></div>
          </div>

          {/* Circular Images */}
          <img src="/person3.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-orange-400" />
          <img src="/person1.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-orange-400" />
          <img src="/person2.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-orange-400" />
        </div>



        <p className="mt-4 font-semibold text-black text-left">Empowered Teams, Endless Possibilities</p>


        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 border border-black rounded-full text-sm">Scalable</span>
          <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">Reliable</span>
          <span className="px-3 py-1 border border-black rounded-full text-sm">Future-Ready</span>
          <span className="px-3 py-1 border border-black rounded-full text-sm">Secure</span>
        </div>
      </div>
    </div>
  );
}

