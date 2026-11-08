import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue
} from 'framer-motion';
import { PixelMountainSVG } from './PixelLandscapeAssets.tsx';
import { TextWordReveal } from './TextRevealMotion.tsx';

// Kawaii Pixel Cloud Component
function PixelCloudSVG({ withFace = false, className = "w-36 h-auto" }: { withFace?: boolean; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      <rect x="13" y="3" width="5" height="13" fill="#FFFFFF" />
      <rect x="11" y="4" width="9" height="12" fill="#FFFFFF" />
      <rect x="9" y="6" width="13" height="10" fill="#FFFFFF" />
      <rect x="6" y="8" width="19" height="8" fill="#FFFFFF" />
      <rect x="4" y="10" width="23" height="6" fill="#FFFFFF" />
      <rect x="3" y="12" width="25" height="4" fill="#FFFFFF" />

      {/* Shadow */}
      <rect x="4" y="14" width="23" height="2" fill="#D0E7F9" />
      <rect x="3" y="13" width="1" height="2" fill="#D0E7F9" />
      <rect x="27" y="13" width="1" height="2" fill="#D0E7F9" />
      <rect x="6" y="13" width="2" height="1" fill="#D0E7F9" />
      <rect x="11" y="13" width="2" height="1" fill="#D0E7F9" />
      <rect x="17" y="13" width="2" height="1" fill="#D0E7F9" />
      <rect x="23" y="13" width="2" height="1" fill="#D0E7F9" />

      {withFace && (
        <>
          <rect x="11" y="10" width="2" height="2" fill="#111113" />
          <rect x="11" y="10" width="1" height="1" fill="#FFFFFF" />
          <rect x="19" y="10" width="2" height="2" fill="#111113" />
          <rect x="19" y="10" width="1" height="1" fill="#FFFFFF" />
          <rect x="9" y="12" width="2" height="1" fill="#F472B6" />
          <rect x="21" y="12" width="2" height="1" fill="#F472B6" />
          <rect x="14" y="12" width="1" height="1" fill="#111113" />
          <rect x="15" y="13" width="2" height="1" fill="#111113" />
          <rect x="17" y="12" width="1" height="1" fill="#111113" />
        </>
      )}

      {/* Black Outline */}
      <rect x="13" y="2" width="5" height="1" fill="#111113" />
      <rect x="12" y="3" width="1" height="1" fill="#111113" />
      <rect x="18" y="3" width="1" height="1" fill="#111113" />
      <rect x="11" y="4" width="1" height="1" fill="#111113" />
      <rect x="19" y="4" width="1" height="2" fill="#111113" />
      <rect x="20" y="5" width="3" height="1" fill="#111113" />
      <rect x="23" y="6" width="1" height="1" fill="#111113" />
      <rect x="24" y="7" width="1" height="3" fill="#111113" />
      <rect x="25" y="9" width="2" height="1" fill="#111113" />
      <rect x="27" y="10" width="1" height="1" fill="#111113" />
      <rect x="28" y="11" width="1" height="3" fill="#111113" />
      <rect x="27" y="14" width="1" height="1" fill="#111113" />
      <rect x="9" y="5" width="2" height="1" fill="#111113" />
      <rect x="8" y="6" width="1" height="2" fill="#111113" />
      <rect x="6" y="8" width="2" height="1" fill="#111113" />
      <rect x="5" y="9" width="1" height="2" fill="#111113" />
      <rect x="3" y="11" width="2" height="1" fill="#111113" />
      <rect x="2" y="12" width="1" height="2" fill="#111113" />
      <rect x="3" y="14" width="1" height="1" fill="#111113" />
      <rect x="4" y="15" width="2" height="1" fill="#111113" />
      <rect x="6" y="16" width="20" height="1" fill="#111113" />
      <rect x="26" y="15" width="1" height="1" fill="#111113" />
    </svg>
  );
}

// Single Cloud Strip that wraps smoothly
function CloudLayer({
  speed = 0.2,
  scrollVelocitySpring,
  rowClass = "top-2",
  children
}: {
  speed: number;
  scrollVelocitySpring: any;
  rowClass?: string;
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    let move = speed * (delta / 16.6);
    const currentVelocity = Math.abs(scrollVelocitySpring.get());
    move += currentVelocity * 0.0035;

    let nextX = x.get() - move;
    const halfWidth = containerRef.current ? containerRef.current.scrollWidth / 2 : 1600;
    if (nextX <= -halfWidth) {
      nextX += halfWidth;
    }
    x.set(nextX);
  });

  return (
    <div className={`absolute w-full overflow-hidden pointer-events-none select-none ${rowClass}`}>
      <motion.div ref={containerRef} style={{ x }} className="flex w-max gap-16 sm:gap-24">
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function InteractiveCloudLandscape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const prevScrollY = useRef(0);
  const rawVelocity = useMotionValue(0);

  // Parallax transforms: Mountains move slower (far depth), creating realistic scroll depth
  const mountainParallaxY = useTransform(scrollY, [300, 1400], [0, 60]);
  const cloudParallaxY = useTransform(scrollY, [200, 1200], [0, -40]);

  useAnimationFrame(() => {
    const currentY = scrollY.get();
    const deltaY = Math.abs(currentY - prevScrollY.current);
    prevScrollY.current = currentY;
    rawVelocity.set(deltaY);
  });

  const scrollVelocitySpring = useSpring(rawVelocity, {
    damping: 18,
    stiffness: 120
  });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden select-none">
      {/* 1. Full-width Cloud Skybox with Framer Motion loop, scroll acceleration & subtle vertical parallax */}
      <motion.div style={{ y: cloudParallaxY }} className="relative w-full h-44 sm:h-56 overflow-hidden">
        {/* Row 1: High Elevation, very slow */}
        <CloudLayer speed={0.15} scrollVelocitySpring={scrollVelocitySpring} rowClass="top-1">
          <div className="flex gap-24 sm:gap-36 items-center">
            <PixelCloudSVG withFace={true} className="w-36 sm:w-52 h-auto shrink-0" />
            <PixelCloudSVG withFace={false} className="w-28 sm:w-44 h-auto shrink-0" />
            <PixelCloudSVG withFace={true} className="w-40 sm:w-56 h-auto shrink-0" />
            <PixelCloudSVG withFace={false} className="w-32 sm:w-48 h-auto shrink-0" />
          </div>
        </CloudLayer>

        {/* Row 2: Mid Elevation */}
        <CloudLayer speed={0.24} scrollVelocitySpring={scrollVelocitySpring} rowClass="top-16">
          <div className="flex gap-28 sm:gap-40 items-center">
            <PixelCloudSVG withFace={false} className="w-44 sm:w-60 h-auto shrink-0" />
            <PixelCloudSVG withFace={true} className="w-32 sm:w-48 h-auto shrink-0" />
            <PixelCloudSVG withFace={false} className="w-36 sm:w-52 h-auto shrink-0" />
            <PixelCloudSVG withFace={true} className="w-40 sm:w-56 h-auto shrink-0" />
          </div>
        </CloudLayer>

        {/* Row 3: Low Elevation */}
        <CloudLayer speed={0.34} scrollVelocitySpring={scrollVelocitySpring} rowClass="top-28">
          <div className="flex gap-20 sm:gap-32 items-center">
            <PixelCloudSVG withFace={true} className="w-28 sm:w-40 h-auto shrink-0" />
            <PixelCloudSVG withFace={false} className="w-36 sm:w-52 h-auto shrink-0" />
            <PixelCloudSVG withFace={true} className="w-32 sm:w-44 h-auto shrink-0" />
            <PixelCloudSVG withFace={false} className="w-40 sm:w-56 h-auto shrink-0" />
          </div>
        </CloudLayer>
      </motion.div>

      {/* 2. Full-Width Mountain Range with Scroll Parallax (Fluid width, no hard overflow) */}
      <motion.div
        style={{ y: mountainParallaxY }}
        className="relative w-full overflow-hidden -mt-6 sm:-mt-14 pointer-events-none border-b-2 border-[#111113]"
      >
        <div className="w-full flex items-end justify-between">
          {/* Mountain Peak 1 (Left) */}
          <div className="w-[32%] sm:w-[28%] shrink-0 -mr-6 sm:-mr-12">
            <PixelMountainSVG className="w-full h-auto" />
          </div>
          {/* Mountain Peak 2 (Center-Left Sub Peak) */}
          <div className="w-[24%] sm:w-[22%] shrink-0 -mr-4 sm:-mr-8 opacity-90 scale-90 origin-bottom">
            <PixelMountainSVG className="w-full h-auto" />
          </div>
          {/* Mountain Peak 3 (Main Center Peak) */}
          <div className="w-[36%] sm:w-[32%] shrink-0 -mr-6 sm:-mr-10 scale-105 sm:scale-110 origin-bottom z-10">
            <PixelMountainSVG className="w-full h-auto" />
          </div>
          {/* Mountain Peak 4 (Right Peak) */}
          <div className="w-[32%] sm:w-[28%] shrink-0">
            <PixelMountainSVG className="w-full h-auto" />
          </div>
        </div>
      </motion.div>

      {/* 3. Manifesto Statement with Word-by-Word Snappy Reveal */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16 text-center relative z-20">
        <TextWordReveal
          text="I TURN COMPLEX FIGMA DESIGNS INTO TACTILE, HIGH-PERFORMANCE WEBSITES MERGING CLEAN CODE, SCROLL INTERACTIONS, AND FLUID RESPONSIVE EXPERIENCES."
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111113] uppercase tracking-tight leading-tight font-heading"
        />
      </div>
    </div>
  );
}
