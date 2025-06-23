"use client";
import { useState, useEffect } from "react";
import SectionOne from "@/app/components/blogs/sectionOne";
import SectionTwo from "@/app/components/blogs/sectionTwo";
import SectionThree from "@/app/components/blogs/sectionThree";
import BlogMobile from "@/app/components/blogs/BlogMobile";

const images: Record<string, Record<string, string>> = {
  section1: {
    orange: "/blogs/orange_blog1.png",
    red: "/blogs/red_blog1.png",
    olive: "/blogs/olive_blog_3.png",
    purple: "/blogs/purple_blog3.png",
    pink: "/blogs/pink_blog1.png",
    brown: "/blogs/brown_blog1.png",
    cyan: "/blogs/cyan_blur1.png",
  },
  section2: {
    orange: "/blogs/orange_blog2.png",
    red: "/blogs/red_blog2.png",
    olive: "/blogs/olive_blog_1.png",
    purple: "/blogs/purple_blog_1.png",
    pink: "/blogs/pink_blog2.png",
    brown: "/blogs/brown_blog2.png",
    cyan: "/blogs/cyan_blur2.png",
  },
  section3: {
    orange: "/blogs/orange_blur3.png",
    red: "/blogs/red_blog3.png",
    olive: "/blogs/olive_blog_4.png",
    purple: "/blogs/pruple_blog_4.png",
    pink: "/blogs/pink_blog3.png",
    brown: "/blogs/brown_blog3.png",
    cyan: "/blogs/cyan_blog3.png",
  },
  section4: {
    orange: "/blogs/orange_blog4.png",
    red: "/blogs/red_blog4.png",
    olive: "/blogs/olive_blog_2.png",
    purple: "/blogs/purple_blgo_2.png",
    pink: "/blogs/pink_blog4.png",
    brown: "/blogs/brown_blog4.png",
    cyan: "/blogs/cyan_blog4.png",
  },
};


const Mob_images: Record<string, Record<string, string>> = {
  image1: {
    orange: "/blogs/orange_blog_mobile1.png",
    red: "/blogs/red_blog_mobile1.png",
    olive: "/blogs/olive_blog_mobile1.png",
    purple: "/blogs/purple_blog_mobile1.png",
    pink: "/blogs/pink_blog_mobile1.png",
    brown: "/blogs/brown_blog_mobile1.png",
    cyan: "/blogs/cyan_blog_mobile1.png",
  },
  image2: {
    orange: "/blogs/orange_blog_mobile2.png",
    red: "/blogs/red_blog_mobile2.png",
    olive: "/blogs/olive_blog_mobile2.png",
    purple: "/blogs/purple_blog_mobile2.png",
    pink: "/blogs/pink_blog_mobile2.png",
    brown: "/blogs/brown_blog_mobile2.png",
    cyan: "/blogs/cyan_blog_mobile2.png",
  },
  image3: {
    orange: "/blogs/orange_blog_mobile3.png",
    red: "/blogs/red_blog_mobile3.png",
    olive: "/blogs/olive_blog_mobile3.png",
    purple: "/blogs/pruple_blog_mobile3.png",
    pink: "/blogs/pink_blog_mobile3.png",
    brown: "/blogs/brown_blog_mobile3.png",
    cyan: "/blogs/cyan_blog_mobile3.png",
  },
  image4: {
    orange: "/blogs/orange_blog_mobile4.png",
    red: "/blogs/red_blog_mobile4.png",
    olive: "/blogs/olive_blog_mobile4.png",
    purple: "/blogs/purple_blog_mobile4.png",
    pink: "/blogs/pink_blog_mobile4.png",
    brown: "/blogs/brown_blog_mobile4.png",
    cyan: "/blogs/cyan_blog_mobile4.png",
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
          <BlogMobile image1={Mob_images.image1[currentTheme] || Mob_images.image1.orange}
           image2={Mob_images.image2[currentTheme] || Mob_images.image2.orange} 
           image3={Mob_images.image3[currentTheme] || Mob_images.image3.orange}
           image4={Mob_images.image4[currentTheme] || Mob_images.image4.orange} />
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
