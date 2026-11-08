import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroNameMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // One block of repetitive marquee content
  const marqueeText = "OUR ONII • SOFTWARE & AI ENGINEER • SEMESTER 5 • ";

  return (
    <div className="relative z-10 my-auto w-full flex flex-col items-center justify-center overflow-hidden py-6 select-none">
      {/* Speech Bubble popping above avatar */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.2 }}
        className="mb-4 z-20 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 bg-white text-[#111113] border-2 border-[#111113] font-mono-custom text-xs font-bold uppercase px-3 py-1.5 shadow-[4px_4px_0px_#111113]">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          HI THERE!
        </div>
      </motion.div>

      {/* Center Character Avatar with Entrance Pop & subtle idle bob */}
      <motion.div
        initial={{ scale: 0.82, opacity: 0, y: 16 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -4, 0]
        }}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15, delay: 0.1 },
          opacity: { duration: 0.5, delay: 0.1 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
        }}
        whileHover={{ scale: 1.12, rotate: [0, -3, 3, 0] }}
        className="z-20 shrink-0 inline-flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#111113] border-2 sm:border-4 border-white rounded-xl shadow-[4px_4px_0px_#22D3EE] cursor-pointer mb-2"
      >
        {/* Pixel Character Avatar */}
        <svg
          className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
          viewBox="0 0 16 16"
          fill="none"
          shapeRendering="crispEdges"
        >
          <rect x="5" y="1" width="6" height="2" fill="#111113" />
          <rect x="4" y="2" width="8" height="2" fill="#111113" />
          <rect x="3" y="4" width="2" height="4" fill="#111113" />
          <rect x="11" y="4" width="2" height="4" fill="#111113" />
          <rect x="4" y="4" width="8" height="7" fill="#FBBF24" />
          <rect x="5" y="6" width="2" height="2" fill="#111113" />
          <rect x="9" y="6" width="2" height="2" fill="#111113" />
          <rect x="5" y="6" width="1" height="1" fill="#FFFFFF" />
          <rect x="9" y="6" width="1" height="1" fill="#FFFFFF" />
          <rect x="4" y="8" width="1" height="1" fill="#F472B6" />
          <rect x="11" y="8" width="1" height="1" fill="#F472B6" />
          <rect x="7" y="9" width="2" height="1" fill="#111113" />
          <rect x="4" y="11" width="8" height="4" fill="#3B82F6" />
          <rect x="6" y="11" width="4" height="1" fill="#FFFFFF" />
          <rect x="2" y="12" width="2" height="3" fill="#FBBF24" />
          <rect x="12" y="12" width="2" height="3" fill="#FBBF24" />
        </svg>
      </motion.div>

      {/* Infinite Horizontal Name Marquee (Behind/Flanking the avatar) */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-[linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        <motion.div
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="flex whitespace-nowrap text-[13vw] sm:text-[11vw] font-heading font-black text-white uppercase leading-none tracking-tight text-white/90"
        >
          <span>{marqueeText.repeat(2)}</span>
          <span>{marqueeText.repeat(2)}</span>
        </motion.div>
      </div>
    </div>
  );
}
