import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroStickyContainer({
  children
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();

  // Scroll dari 0 ke 700px: Hero content mengecil dan memudar
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.78]);
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <div className="w-full h-full bg-[#09090B]">
      <motion.div
        style={{ opacity, scale, y }}
        className="w-full h-full flex flex-col justify-between p-6 sm:p-10 select-none"
      >
        {children}
      </motion.div>
    </div>
  );
}
