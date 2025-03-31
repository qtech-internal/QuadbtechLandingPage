"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePos.x - 25,
        y: mousePos.y - 25,
        duration: 0.1,
        ease: "power3.out",
      });
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: mousePos.x - 50,
        y: mousePos.y - 50,
        duration: 0.2,
        ease: "power3.out",
      });
    }
  }, [mousePos]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Glowing Aura Effect */}
      {/* <motion.div
        ref={glowRef}
        className="absolute w-24 h-24 bg-amber-400 opacity-40 rounded-full blur-lg"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",  
        }}
        style={{ transform: "translate(-50%, -50%)" }}
      ></motion.div> */}

      {/* Cursor Logo */}
      <div
        ref={cursorRef}
        className="absolute w-16 h-16"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <img
          src="/logo.png"
          alt="Custom Cursor"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-500 rounded-full"
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${mousePos.x + Math.random() * 30 - 15}px`,
            top: `${mousePos.y + Math.random() * 30 - 15}px`,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
