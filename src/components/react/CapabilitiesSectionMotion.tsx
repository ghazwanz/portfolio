import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SKILLS_LIST = [
  "FRAMER",
  "WEBFLOW",
  "NEXT.JS",
  "LARAVEL",
  "TAILWIND CSS",
  "WORDPRESS",
  "FIGMA"
];

// Tech Logo Card: Stepped Pixel Corners matching Image 1
function PixelSquareLogoCard({
  logoSrc,
  logoAlt,
  sizeClass = "w-16 h-16 sm:w-20 sm:h-20",
  delay = 0,
  className = ""
}: {
  logoSrc: string;
  logoAlt: string;
  sizeClass?: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 16,
        delay
      }}
      whileHover={{ y: -3, scale: 1.05 }}
      className={`select-none ${sizeClass} ${className}`}
    >
      <div className="relative w-full h-full p-[5px] flex items-center justify-center bg-white shadow-xs">
        {/* SVG Square Stepped Pixel Border matching Image 1 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          shapeRendering="crispEdges"
        >
          <path
            d="M 6,1 H 94 V 3 H 97 V 6 H 99 V 94 H 97 V 97 H 94 V 99 H 6 V 97 H 3 V 94 H 1 V 6 H 3 V 3 H 6 Z"
            fill="#FFFFFF"
            stroke="#111113"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Logo only, centered */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-2.5">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function CapabilitiesSectionMotion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-8 md:px-12 select-none z-20 overflow-hidden">
      {/* 1. SECTION TOP META & DISPLAY HEADING */}
      <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-14">

        <div className="py-1">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111113] uppercase tracking-tight font-heading leading-tight"
          >
            TECH STACK & TOOLS
          </motion.h2>
        </div>

        <div className="w-12 sm:w-16 h-1 bg-[#111113] mx-auto mt-3 sm:mt-4" />
      </div>

      {/* 2. MOBILE & TABLET LOGO ROW (< lg screen size) */}
      <div className="flex lg:hidden items-center justify-center gap-3 sm:gap-5 flex-wrap mb-8">
        <PixelSquareLogoCard
          logoSrc="/logo/framer.svg"
          logoAlt="Framer"
          sizeClass="w-14 h-14 sm:w-16 sm:h-16"
          delay={0.05}
        />
        <PixelSquareLogoCard
          logoSrc="/logo/nextjs.svg"
          logoAlt="Next.js"
          sizeClass="w-14 h-14 sm:w-16 sm:h-16"
          delay={0.15}
        />
        <PixelSquareLogoCard
          logoSrc="/logo/webflow.svg"
          logoAlt="Webflow"
          sizeClass="w-14 h-14 sm:w-16 sm:h-16"
          delay={0.25}
        />
        <PixelSquareLogoCard
          logoSrc="/logo/laravel.svg"
          logoAlt="Laravel"
          sizeClass="w-14 h-14 sm:w-16 sm:h-16"
          delay={0.3}
        />
      </div>

      {/* 3. MAIN SKILLS LIST WITH DESKTOP FLANKING LOGO WIDGETS */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Left Side Square Widgets */}
        <PixelSquareLogoCard
          logoSrc="/logo/framer.svg"
          logoAlt="Framer"
          sizeClass="w-20 h-20 sm:w-22 sm:h-22"
          delay={0.1}
          className="absolute left-4 xl:left-12 top-0 hidden lg:block"
        />
        <PixelSquareLogoCard
          logoSrc="/logo/nextjs.svg"
          logoAlt="Next.js"
          sizeClass="w-20 h-20 sm:w-22 sm:h-22"
          delay={0.3}
          className="absolute left-4 xl:left-12 bottom-0 hidden lg:block"
        />

        {/* Desktop Right Side Square Widgets */}
        <PixelSquareLogoCard
          logoSrc="/logo/webflow.svg"
          logoAlt="Webflow"
          sizeClass="w-18 h-18 sm:w-20 sm:h-20"
          delay={0.25}
          className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 hidden lg:block"
        />
        <PixelSquareLogoCard
          logoSrc="/logo/laravel.svg"
          logoAlt="Laravel"
          sizeClass="w-20 h-20 sm:w-22 sm:h-22"
          delay={0.35}
          className="absolute right-4 xl:right-12 bottom-0 hidden lg:block"
        />

        {/* Centered 7-Skill Vertical List */}
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center space-y-3 sm:space-y-4 font-heading font-extrabold uppercase text-xl sm:text-3xl md:text-4xl text-center select-none py-4 px-2">
          {SKILLS_LIST.map((skill, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  opacity: isHovered ? 1 : isAnyHovered ? 0.4 : 0.85,
                  color: isHovered ? "#FF5722" : "#111113"
                }}
                transition={{
                  duration: 0.18,
                  ease: "easeOut"
                }}
                style={{ transformOrigin: "center center" }}
                className="cursor-pointer tracking-tight py-1 transition-colors"
              >
                {skill}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
