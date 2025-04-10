'use client';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
 


  const carouselItems = [
    {
      title: "Transforming Ideas into Reality",
      description: "Learn More",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/home/home1.png",
    },
    {
      title: "Innovate Your Business",
      description: "Discover How",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/home/home2.jpeg",
    },
    {
      title: "Engineering Future",
      description: "Get Started",
      iconSrc: "/first.gif",
      bgColor: "/bg.webp",
      imageSrc: "/home/home3.jpeg",
    },
  ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,         
    verticalSwiping: true,      
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,         
  };


  return (
    <div className="w-full max-w-[1500px] overflow-x-hidden bg-white text-black flex flex-col items-center justify-center p-4">
      <button
       className="relative px-6 py-2 text-black font-medium rounded-full border border-theme bg-gradient-to-r from-[var(--div-bg)] to-transparent hover:from-[var(--div-bg)]"
>
        Start Building Today
      </button>
      <div className="text-center text-lg md:text-4xl font-medium mt-10 mb-8">
        <span className=" flex">
        <svg width="30" height="20" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.51976 8.34108C8.51912 10.1024 8.86702 11.7138 9.58089 13.4069C9.61535 13.4887 9.65071 13.5707 9.68698 13.6531C9.91403 12.204 10.3733 10.8427 11.0584 9.52226L8.51976 8.34108Z" stroke="var(--bg-card)" strokeWidth="6" />
              <mask id="path-2-inside-1_65020_1056" fill="white">
                <path d="M25.1824 16.1133C20.9081 19.2458 20.4842 22.6811 21.402 30.2362C16.7495 20.9543 15.8924 16.5748 18.828 10.8571L25.1824 16.1133Z" />
              </mask>
              <path d="M21.402 30.2362L36.2925 28.4273L7.99226 36.9578L21.402 30.2362ZM25.1824 16.1133L34.7431 4.55505L49.5817 16.8291L34.0491 28.2122L25.1824 16.1133ZM18.828 10.8571L5.48399 4.00601L14.008 -12.5963L28.3886 -0.701151L18.828 10.8571ZM6.51142 32.045C6.05168 28.2603 5.54202 23.0994 6.75755 18.0232C8.2608 11.7454 11.8797 7.26541 16.3158 4.01446L34.0491 28.2122C33.9341 28.2964 34.3628 28.0043 34.882 27.2744C35.14 26.9117 35.3725 26.5079 35.5632 26.0807C35.752 25.6578 35.8662 25.2874 35.9328 25.0093C36.0553 24.4977 35.9923 24.3946 36.0026 25.0469C36.013 25.7115 36.0882 26.7454 36.2925 28.4273L6.51142 32.045ZM15.6218 27.6716L9.26733 22.4154L28.3886 -0.701151L34.7431 4.55505L15.6218 27.6716ZM32.172 17.7083C31.9322 18.1753 32.004 18.1574 32.071 17.8069C32.103 17.6392 32.121 17.4621 32.1237 17.2974C32.1263 17.1368 32.1133 17.0513 32.1154 17.0661C32.1247 17.13 32.2066 17.6167 32.6388 18.7494C33.0747 19.8918 33.7547 21.4058 34.8117 23.5146L7.99226 36.9578C5.59564 32.1765 3.22469 26.9023 2.42345 21.354C1.48212 14.8357 2.82595 9.18309 5.48399 4.00601L32.172 17.7083Z" fill="var(--bg-card)" mask="url(#path-2-inside-1_65020_1056)" />
            </svg> Your vision, your expertise:
        </span>
        <span className=" mt-2 flex">
          Crafting the <span className="inline-block px-3 ml-2 border-2 border-theme rounded-full"> Future of Technology</span>
          <svg width="22" height="20" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg ">
              <path d="M14.4517 5.43384C15.328 7.37721 15.6896 9.2738 15.6257 11.4503C15.6065 12.1034 15.549 12.787 15.4521 13.5098C14.5914 11.4475 13.3302 9.79201 11.6162 8.38357L14.4517 5.43384Z" stroke="var(--bg-card)" strokeWidth="5" />
              <path d="M4.5216 17.2351C5.2324 18.2581 5.70588 19.339 6.01549 20.5953C5.29124 19.919 4.48682 19.3596 3.59205 18.8967L4.5216 17.2351Z" stroke="var(--bg-card)" strokeWidth="5" />
            </svg>
        </span>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-3xl mx-auto rounded-[30px] overflow-hidden">
      <Slider {...settings} className="h-[300px] md:h-[400px]">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-[300px] md:h-[400px]">
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageSrc})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[var(--bg-card)] opacity-50"></div>
            <div className={`absolute inset-0 ${item.bgColor}`}></div>

            {/* Text & Icon */}
            <div className="absolute bottom-8 left-4 bg-white/10 backdrop-blur-md p-4 rounded-xl flex items-center space-x-4">
              <div className="div-bg p-2 rounded-lg shadow-md">
                <img src={item.iconSrc} alt="Icon" className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-[14px] font-semibold text-white">{item.title}</h2>
                <a href="#" className="text-white underline text-sm">
                  {item.description}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <Link href="#contact">
      <button className=" mt-10   bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-black font-semibold hover:bg-[var(--bg-card)] hover:text-white">
        <span>Book Free Consultancy</span>
        <div className="relative w-12 h-12 rounded-full bg-white border-2 border-theme flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-theme  flex items-center justify-center">
            <span className="text-white text-xl leading-none -mt-1">&gt;</span>
          </div>
        </div>


        </button>
        </Link>

      {/* Sidebar */}

      <p className="mt-4 font-semibold text-black text-left">Empowered Teams, Endless Possibilities</p>
      <div className="relative mt-10 div-bg flex flex-row items-center space-x-8 my-10 ml-0 rounded-xl shadow-lg justify-start p-4 bg-[#FFF8EB] hover:scale-110 transition-transform duration-300 ease-in-out">


        <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-16 h-2 bg-theme rounded-t-full shadow-md cursor-pointer">

          <div className="absolute left-1/2 -translate-x-1/2 -top-[4px] w-4 h-2 bg-theme rounded-t-full shadow-md"></div>
        </div>


        <img src="/home/home4.jpeg" alt="Person 1" className="w-16 h-16 rounded-full border-4 border-theme" />
        <img src="/home/home5.jpeg" alt="Person 2" className="w-16 h-16 rounded-full border-4 border-theme" />
        <img src="/home/home6.jpeg" alt="Person 3" className="w-16 h-16 rounded-full border-4 border-theme" />

      </div>
      <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
        <span className="px-3 py-1 border border-theme rounded-full text-sm">Scalable</span>
        <span className="px-3 py-1  bg-theme text-white rounded-full text-sm">Reliable</span>
        <span className="px-3 py-1 border border-theme rounded-full text-sm">Future-Ready</span>
        <span className="px-3 py-1 border border-theme rounded-full text-sm">Secure</span>
      </div>


    </div>
  );
}
