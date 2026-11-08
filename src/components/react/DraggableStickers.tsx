import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PixelPineCluster, SinglePixelPine } from './PixelLandscapeAssets.tsx';

// Grass Tuft pixel SVG (meadow grass blades)
function PixelGrass({ className = "w-6 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 12" fill="none" shapeRendering="crispEdges">
      <rect x="2" y="8" width="2" height="4" fill="#166534" />
      <rect x="1" y="4" width="2" height="4" fill="#22C55E" />
      <rect x="2" y="1" width="1" height="3" fill="#4ADE80" />
      <rect x="7" y="6" width="2" height="6" fill="#166534" />
      <rect x="7" y="2" width="2" height="4" fill="#22C55E" />
      <rect x="8" y="0" width="1" height="2" fill="#4ADE80" />
      <rect x="12" y="7" width="2" height="5" fill="#166534" />
      <rect x="13" y="3" width="2" height="4" fill="#22C55E" />
      <rect x="13" y="1" width="1" height="2" fill="#4ADE80" />
    </svg>
  );
}

// Pixel Mushroom
function PixelMushroom({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
      <rect x="4" y="3" width="8" height="6" fill="#EF4444" />
      <rect x="6" y="4" width="2" height="2" fill="#FFFFFF" />
      <rect x="10" y="6" width="2" height="2" fill="#FFFFFF" />
      <rect x="6" y="9" width="4" height="6" fill="#FDE047" />
      <path d="M4 3h8v6H4V3zm2 6h4v6H6V9z" stroke="#111113" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// Curated sparse meadow items positioned by %
const meadowItems = [
  // Upper accents
  { id: 1, type: 'flower', left: '14%', top: '22%', rotate: -10, hideOnMobile: false },
  { id: 2, type: 'grass', left: '36%', top: '26%', rotate: 0, hideOnMobile: true },
  { id: 3, type: 'mushroom', left: '62%', top: '24%', rotate: -6, hideOnMobile: false },
  { id: 4, type: 'coin', left: '84%', top: '20%', rotate: 14, hideOnMobile: false },

  // Center sides
  { id: 5, type: 'cross', left: '8%', top: '50%', rotate: 8, hideOnMobile: true },
  { id: 6, type: 'grass', left: '22%', top: '52%', rotate: 0, hideOnMobile: false },
  { id: 7, type: 'sparkle', left: '76%', top: '48%', rotate: 18, hideOnMobile: false },
  { id: 8, type: 'flower', left: '88%', top: '54%', rotate: -12, hideOnMobile: true },

  // Lower accents
  { id: 9, type: 'thumbs', left: '12%', top: '74%', rotate: -8, hideOnMobile: false },
  { id: 10, type: 'coin', left: '32%', top: '76%', rotate: 10, hideOnMobile: true },
  { id: 11, type: 'grass', left: '64%', top: '75%', rotate: 0, hideOnMobile: false },
  { id: 12, type: 'mushroom', left: '82%', top: '72%', rotate: 8, hideOnMobile: false },
];

export default function DraggableStickers() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto my-6 sm:my-10 px-4 sm:px-8 select-none">
      {/* 
        EXPANDED MEADOW PLAYGROUND
        Spacious vertical padding ensures trees remain 100% visible and unclipped
      */}
      <div ref={containerRef} className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] p-2 sm:p-4">

        {/* =================================================================== */}
        {/* A. UPPER TREE BORDER (TOP-LEFT, TOP-CENTER, TOP-RIGHT)              */}
        {/* =================================================================== */}
        <div className="absolute top-2 sm:top-4 inset-x-2 sm:inset-x-6 flex items-end justify-between pointer-events-none z-10">
          {/* Top-Left: Line cluster + silhouette */}
          <div className="flex items-end gap-1.5 sm:gap-2">
            <PixelPineCluster className="w-16 sm:w-24 md:w-28 h-auto" variant="line" />
            <SinglePixelPine className="w-6 sm:w-9 md:w-11 h-auto -mb-1" variant="silhouette" />
          </div>

          {/* Top-Center: Asymmetrical offset duo */}
          <div className="flex items-end gap-2 sm:gap-3">
            <SinglePixelPine className="w-7 sm:w-10 md:w-12 h-auto" variant="line" />
            <PixelPineCluster className="w-14 sm:w-20 md:w-24 h-auto scale-90" variant="silhouette" />
          </div>

          {/* Top-Right: Silhouette pine + taller line cluster */}
          <div className="flex items-end gap-1.5 sm:gap-2">
            <SinglePixelPine className="w-6 sm:w-9 md:w-11 h-auto -mb-1" variant="silhouette" />
            <PixelPineCluster className="w-16 sm:w-24 md:w-30 h-auto" variant="line" />
          </div>
        </div>

        {/* =================================================================== */}
        {/* B. SPREAD OUT WIDGETS (FLOWERS, GRASS, MUSHROOMS, COINS, ETC.)     */}
        {/* =================================================================== */}
        {meadowItems.map((item) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.15}
            whileHover={{ scale: 1.25, cursor: 'grab' }}
            whileDrag={{ scale: 1.35, cursor: 'grabbing', zIndex: 50 }}
            initial={{ rotate: item.rotate }}
            animate={{
              y: [0, -4, 0],
              rotate: [item.rotate, item.rotate + 2, item.rotate]
            }}
            transition={{
              y: { duration: 2.8 + (item.id % 5) * 0.3, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{ position: 'absolute', left: item.left, top: item.top }}
            className={`touch-none filter drop-shadow-[2px_2px_0px_#111113] z-20 ${
              item.hideOnMobile ? 'hidden sm:block' : 'block'
            }`}
          >
            {item.type === 'flower' && (
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
                <rect x="6" y="2" width="4" height="4" fill="#FACC15" />
                <rect x="2" y="6" width="4" height="4" fill="#FACC15" />
                <rect x="10" y="6" width="4" height="4" fill="#FACC15" />
                <rect x="6" y="10" width="4" height="4" fill="#FACC15" />
                <rect x="6" y="6" width="4" height="4" fill="#FB923C" />
                <path d="M6 1h4v1H6V1zM2 5h4v1H2V5zm8 0h4v1h-4V5zM1 6h1v4H1V6zm14 0h1v4h-1V6zm-13 4h4v1H2v-1zm8 0h4v1h-4v-1zm-4 4h4v1H6v-1z" fill="#111113" />
              </svg>
            )}

            {item.type === 'grass' && <PixelGrass className="w-5 h-4 sm:w-7 sm:h-5" />}

            {item.type === 'mushroom' && <PixelMushroom className="w-5 h-5 sm:w-6 sm:h-6" />}

            {item.type === 'cross' && (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
                <rect x="2" y="2" width="4" height="4" fill="#EF4444" />
                <rect x="10" y="2" width="4" height="4" fill="#EF4444" />
                <rect x="5" y="5" width="6" height="6" fill="#EF4444" />
                <rect x="2" y="10" width="4" height="4" fill="#EF4444" />
                <rect x="10" y="10" width="4" height="4" fill="#EF4444" />
                <path d="M2 1h4v1H2V1zm8 0h4v1h-4V1zm-9 1h1v4H1V2zm14 0h1v4h-1V2zm-9 8h4v1H6v-1zm-4 4h4v1H2v-1zm8 0h4v1h-4v-1zm4-4h1v4h-1v-4zM1 10h1v4H1v-4z" fill="#111113" />
              </svg>
            )}

            {item.type === 'thumbs' && (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
                <rect x="4" y="2" width="3" height="6" fill="#FFFFFF" />
                <rect x="3" y="7" width="9" height="7" fill="#FFFFFF" />
                <path d="M4 1h3v1H4V1zM3 7h1v7H3V7zm8 0h1v7h-1V7zm-7 7h8v1H4v-1zM7 2h1v5H7V2z" fill="#111113" />
              </svg>
            )}

            {item.type === 'coin' && (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
                <rect x="4" y="2" width="8" height="12" fill="#FBBF24" />
                <rect x="6" y="5" width="4" height="6" fill="#F59E0B" />
                <rect x="7" y="6" width="2" height="4" fill="#FEF08A" />
                <path d="M4 1h8v1H4V1zM2 3h2v10H2V3zm10 0h2v10h-2V3zm-8 11h8v1H4v-1z" fill="#111113" />
              </svg>
            )}

            {item.type === 'sparkle' && (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges">
                <rect x="7" y="1" width="2" height="14" fill="#111113" />
                <rect x="1" y="7" width="14" height="2" fill="#111113" />
                <rect x="5" y="5" width="6" height="6" fill="#FF5722" />
              </svg>
            )}
          </motion.div>
        ))}

        {/* =================================================================== */}
        {/* C. LOWER TREE BORDER (BOTTOM-LEFT, BOTTOM-CENTER, BOTTOM-RIGHT)    */}
        {/* =================================================================== */}
        <div className="absolute bottom-2 sm:bottom-4 inset-x-2 sm:inset-x-6 flex items-end justify-between pointer-events-none z-30">
          {/* Bottom-Left: Large line cluster + silhouette staggered */}
          <div className="flex items-end gap-1.5 sm:gap-2">
            <PixelPineCluster className="w-18 sm:w-26 md:w-32 h-auto" variant="line" />
            <SinglePixelPine className="w-7 sm:w-10 md:w-13 h-auto -mb-1" variant="silhouette" />
          </div>

          {/* Bottom-Center: Asymmetrical hero cluster */}
          <div className="flex items-end gap-1.5 sm:gap-2">
            <PixelPineCluster className="w-20 sm:w-30 md:w-36 h-auto" variant="line" />
            <SinglePixelPine className="w-6 sm:w-9 md:w-11 h-auto" variant="silhouette" />
          </div>

          {/* Bottom-Right: Silhouette + Line duo */}
          <div className="flex items-end gap-1.5 sm:gap-2">
            <SinglePixelPine className="w-8 sm:w-11 md:w-14 h-auto -mb-1" variant="silhouette" />
            <PixelPineCluster className="w-18 sm:w-24 md:w-28 h-auto" variant="line" />
          </div>
        </div>

      </div>
    </div>
  );
}
