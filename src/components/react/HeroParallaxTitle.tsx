import React from 'react';
import { motion } from 'framer-motion';

export default function HeroParallaxTitle({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 my-auto w-full px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center"
    >
      {/* Speech Bubble */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
        className="mb-4 sm:mb-6"
      >
        <div class="inline-flex items-center gap-2 bg-white text-[#111113] border-2 border-[#111113] font-mono-custom text-xs font-bold uppercase px-3 py-1.5 shadow-[4px_4px_0px_#111113]">
          <span class="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          HI THERE!
        </div>
      </motion.div>

      {/* Main Name with Center Avatar */}
      <div className="w-full flex items-center justify-between select-none font-heading font-extrabold text-white uppercase text-[15vw] leading-none tracking-tight">
        <motion.span
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="leading-none"
        >
          OUR
        </motion.span>

        <motion.div
          whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="shrink-0 inline-flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#111113] border-2 sm:border-4 border-white rounded-xl shadow-[4px_4px_0px_#22D3EE] cursor-pointer mx-2 sm:mx-6"
        >
          {/* 16x16 Pixel Avatar */}
          <svg className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
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

        <motion.span
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="leading-none"
        >
          ONII
        </motion.span>
      </div>
    </motion.div>
  );
}
