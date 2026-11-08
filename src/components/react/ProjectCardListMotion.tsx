import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  role?: string;
  category?: string;
  tools?: string[];
  color: string;
  url?: string;
  img?: string;
  description?: string;
  deliverables?: string[];
  colSpanDesktop?: string;
}

export default function ProjectCardListMotion({ projects }: { projects: ProjectItem[] }) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Handle ESC key to close modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full">
      {/* 1. Masonry 12-Column Grid with Asymmetric Widths */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 max-w-5xl mx-auto items-start">
        {projects.map((proj, idx) => {
          const colSpan = proj.colSpanDesktop || (
            idx % 4 === 0 ? 'md:col-span-7' :
            idx % 4 === 1 ? 'md:col-span-5' :
            idx % 4 === 2 ? 'md:col-span-5' : 'md:col-span-7'
          );

          return (
            <motion.div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              initial={{
                opacity: 0,
                y: 40,
                filter: 'blur(5px)'
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
                delay: (idx % 2) * 0.08
              }}
              className={`group flex flex-col cursor-pointer ${colSpan}`}
            >
              {/* Natural Ratio Card Container */}
              <div
                className="w-full relative overflow-hidden transition-all duration-300 group-hover:scale-[1.015] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/10 bg-white"
                style={{ backgroundColor: proj.color }}
              >
                {/* Real Image */}
                {proj.img ? (
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-auto block object-contain transition-transform duration-500 ease-out group-hover:scale-102"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full aspect-video opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(#111113 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />
                )}

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Action Chip on hover */}
                <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-full bg-[#111113] text-white text-[11px] font-mono-custom font-bold tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  VIEW DETAILS ↗
                </div>
              </div>

              {/* Card Meta: Title + Year */}
              <div className="mt-3.5 flex items-baseline justify-between px-1">
                <h3 className="font-heading font-black text-lg sm:text-xl text-[#111113] group-hover:text-[#FF5722] transition-colors uppercase tracking-tight">
                  {proj.title}
                </h3>
                <span className="font-mono-custom font-bold text-sm text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  {proj.year}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 2. Stepped Pixel Border Modal matching Pill Image 1 */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Modal Dialog Card with Stepped Pixel Corners */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col p-[6px] drop-shadow-[8px_8px_0px_#111113]"
            >
              {/* Stepped Pixel SVG Frame */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                shapeRendering="crispEdges"
              >
                <path
                  d="M 4,1 H 96 V 2.5 H 98 V 4.5 H 99.5 V 95.5 H 98 V 97.5 H 96 V 99 H 4 V 97.5 H 2 V 95.5 H 0.5 V 4.5 H 2 V 2.5 H 4 Z"
                  fill="#F4F4F0"
                  stroke="#111113"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Inner Content Wrapper */}
              <div className="relative z-10 w-full h-full flex flex-col overflow-hidden max-h-[calc(90vh-12px)]">
                {/* Modal Top Header Bar */}
                <div className="flex items-center justify-between border-b-2 border-[#111113] px-4 sm:px-6 py-3 bg-white shrink-0">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono-custom font-bold uppercase text-[#111113]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
                    <span>{selectedProject.category || "PROJECT ARCHIVE"}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="relative px-3 py-1 cursor-pointer group"
                  >
                    {/* Stepped pixel pill mini button */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                      shapeRendering="crispEdges"
                    >
                      <path
                        d="M 6,1 H 94 V 3 H 97 V 6 H 99 V 34 H 97 V 37 H 94 V 39 H 6 V 37 H 3 V 34 H 1 V 6 H 3 V 3 H 6 Z"
                        fill="#FFFFFF"
                        stroke="#111113"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className="group-hover:fill-[#111113] transition-colors"
                      />
                    </svg>
                    <span className="relative z-10 text-[11px] font-mono-custom font-bold uppercase text-[#111113] group-hover:text-white transition-colors">
                      CLOSE
                    </span>
                  </button>
                </div>

                {/* Scrollable Modal Body */}
                <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6">
                  {/* Image Preview with Stepped Pixel Border */}
                  {selectedProject.img && (
                    <div className="relative p-[4px] bg-white">
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        shapeRendering="crispEdges"
                      >
                        <path
                          d="M 3,1 H 97 V 2 H 98.5 V 3.5 H 99.5 V 96.5 H 98.5 V 98 H 97 V 99 H 3 V 98 H 1.5 V 96.5 H 0.5 V 3.5 H 1.5 V 2 H 3 Z"
                          fill="none"
                          stroke="#111113"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                      <img
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        className="relative z-10 w-full h-auto block object-cover"
                      />
                    </div>
                  )}

                  {/* Title & Role */}
                  <div>
                    <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-[#111113] tracking-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-1 font-mono-custom text-xs sm:text-sm font-bold text-zinc-500 uppercase">
                      ROLE: {selectedProject.role || "FRONT-END DEVELOPER"}
                    </p>
                  </div>

                  {/* Tools & Tags with Stepped Pixel Pill */}
                  {selectedProject.tools && selectedProject.tools.length > 0 && (
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tools.map((tool, i) => (
                        <div key={i} className="relative px-3 py-1 flex items-center justify-center">
                          <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 40"
                            preserveAspectRatio="none"
                            shapeRendering="crispEdges"
                          >
                            <path
                              d="M 6,1 H 94 V 3 H 97 V 6 H 99 V 34 H 97 V 37 H 94 V 39 H 6 V 37 H 3 V 34 H 1 V 6 H 3 V 3 H 6 Z"
                              fill="#FFFFFF"
                              stroke="#111113"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                          <span className="relative z-10 font-mono-custom text-[11px] font-bold text-[#111113] uppercase tracking-wider">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  {selectedProject.description && (
                    <div className="space-y-2">
                      <h4 className="font-mono-custom text-xs font-bold uppercase text-zinc-500 tracking-wider">
                        OVERVIEW
                      </h4>
                      <p className="font-sans text-sm sm:text-base text-zinc-800 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  )}

                  {/* Key Deliverables */}
                  {selectedProject.deliverables && selectedProject.deliverables.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono-custom text-xs font-bold uppercase text-zinc-500 tracking-wider">
                        KEY DELIVERABLES
                      </h4>
                      <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-zinc-700">
                        {selectedProject.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#FF5722] font-bold">▶</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Modal Bottom Footer Actions */}
                <div className="border-t-2 border-[#111113] px-4 sm:px-6 py-4 bg-white flex flex-wrap items-center justify-between gap-3 shrink-0">

                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-5 py-2.5 flex items-center gap-2 group cursor-pointer"
                    >
                      {/* Stepped Pixel Pill Button matching Image 1 */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 40"
                        preserveAspectRatio="none"
                        shapeRendering="crispEdges"
                      >
                        <path
                          d="M 6,1 H 94 V 3 H 97 V 6 H 99 V 34 H 97 V 37 H 94 V 39 H 6 V 37 H 3 V 34 H 1 V 6 H 3 V 3 H 6 Z"
                          fill="#111113"
                          stroke="#111113"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                          className="group-hover:fill-[#FF5722] group-hover:stroke-[#FF5722] transition-colors"
                        />
                      </svg>
                      <span className="relative z-10 text-white font-mono-custom font-bold text-xs uppercase tracking-wider">
                        OPEN TEMPLATE ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
