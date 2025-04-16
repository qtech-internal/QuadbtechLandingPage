
"use client";
import { useState, useEffect } from "react";
import SectionOne from "@/app/components/blogs/sectionOne";
import SectionTwo from "@/app/components/blogs/sectionTwo";
import SectionThree from "@/app/components/blogs/sectionThree";
import BlogMobile from "@/app/components/blogs/BlogMobile";

// export const metadata = {
//   title: "Blogs",
// };

  


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
   
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
      <div>
        <main>
        {isMobile ? (
 
    <BlogMobile />
  ) : (
  
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  )}
        </main>
      </div>
  );
}
