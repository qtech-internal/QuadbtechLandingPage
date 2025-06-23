"use client";
import { useState, useEffect } from "react";
import SectionOne from "@/app/components/blogs/sectionOne";
import SectionTwo from "@/app/components/blogs/sectionTwo";
import SectionThree from "@/app/components/blogs/sectionThree";
import BlogMobile from "@/app/components/blogs/BlogMobile";

const images: Record<string, Record<string, string>> = {
  section1: {
    orange: "/blogs/orange_blog_1.jpg",
    red: "/blogs/red_blog_1.png",
    olive: "/blogs/olive_blog_3.png",
    purple: "/blogs/purple_blog3.png",
    pink: "/blogs/pink_blog_1.png",
    brown: "/blogs/brown_blog_1.png",
    cyan: "/blogs/cyan_blog_1.png",
  },
  section2: {
    orange: "/blogs/section2/orange.jpg",
    red: "/blogs/section2/red.jpg",
    olive: "/blogs/olive_blog_1.png",
    purple: "/blogs/purple_blog_1.png",
    pink: "/blogs/pink_blog_2.png",
    brown: "/blogs/brown_blog_2.png",
    cyan: "/blogs/cyan_blog_3.png",
  },
  section3: {
    orange: "/blogs/orange_blog_3.jpg",
    red: "/blogs/red_blog_3.jpg",
    olive: "/blogs/olive_blog_4.png",
    purple: "/blogs/pruple_blog_4.png",
    pink: "/blogs/pink_blog_3.png",
    brown: "/blogs/brown_blog_3.png",
    cyan: "/blogs/cyan_blog_3.png",
  },
  section4: {
    orange: "/blogs/orange_blog_4.jpg",
    red: "/blogs/red_blog_4.jpg",
    olive: "/blogs/olive_blog_2.png",
    purple: "/blogs/purple_blgo_2.png",
    pink: "/blogs/pink_blog_4.png",
    brown: "/blogs/brown_blog_4.png",
    cyan: "/blogs/cyan_blog_4.png",
  },
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>("orange");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "orange";
    setCurrentTheme(savedTheme);

    const handleThemeChange = (e: CustomEvent) => {
      setCurrentTheme(e.detail);
    };

    window.addEventListener("themeChanged", handleThemeChange as EventListener);
    return () => window.removeEventListener("themeChanged", handleThemeChange as EventListener);
  }, []);

  return (
    <div>
      <main>
        {isMobile ? (
          <BlogMobile />
        ) : (
          <>
            <SectionOne image={images.section1[currentTheme] || images.section1.orange} />
            <SectionTwo  image={images.section2[currentTheme] || images.section2.orange} />
            <SectionThree image1={images.section3[currentTheme] || images.section3.orange} image2={images.section4[currentTheme] || images.section4.orange} />
          </>
        )}
      </main>
    </div>
  );
}
