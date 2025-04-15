"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePos.x - 12,
        y: mousePos.y - 12,
        duration: 0.1,
        ease: "power3.out",
      });
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: mousePos.x - 20,
        y: mousePos.y - 20,
        duration: 0.2,
        ease: "power3.out",
      });
    }
  }, [mousePos, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden lg:block md:block">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="absolute w-6 h-6"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg width="18" height="26" viewBox="0 0 30 41" fill="none">
          <path
            d="M28.3778 16.5167C20.195 14.9109 17.5489 11.0729 15.3438 0.441406C13.5265 13.6018 14.1587 20.0801 22.2953 27.8128L28.3778 16.5167Z"
            fill="var(--bg-card)"
            stroke="var(--bg-card)"
            strokeWidth="0.7"
          />
          <path
            d="M1.46984 24.7714C9.6527 26.3771 12.2988 30.2152 14.5038 40.8467C16.3212 27.6863 15.689 21.208 7.55237 13.4753L1.46984 24.7714Z"
            fill="var(--bg-card)"
            stroke="var(--bg-card)"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      {/* Floating Particles with medium spread */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-theme rounded-full"
          animate={{
            x: [0, Math.random() * 24 - 12, 0],
            y: [0, Math.random() * 24 - 12, 0],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${mousePos.x + Math.random() * 24 - 12}px`,
            top: `${mousePos.y + Math.random() * 24 - 12}px`,
          }}
        ></motion.div>
      ))}
    </div>
  );
}
