import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ClosingCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pantau scroll container relatif terhadap viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Muncul dari dalam/bawah FiveYears:
  // Mulai dari y: -180px & scale 0.92 (terselip di balik panel putih FiveYears),
  // saat FiveYears terbuka dan scroll mencapai akhir, meluncur turun ke y: 0 & scale: 1
  const ctaY = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const ctaScale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <div ref={containerRef} className="w-full bg-[#09090B] overflow-hidden">
      <motion.section
        style={{ y: ctaY, scale: ctaScale }}
        className="w-full text-white pt-36 pb-16 px-6 sm:px-12 md:px-20 select-none flex flex-col justify-between min-h-screen origin-top"
      >
        {/* 1. Asymmetrical Two-Line Headline */}
        <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-8">
          <div>
            <h2 className="text-[12vw] sm:text-[10vw] font-black font-heading uppercase tracking-tighter leading-none text-left">
              LET'S BUILD
            </h2>
          </div>

          <div className="mt-2 sm:mt-3">
            <h2 className="text-[12vw] sm:text-[10vw] font-black font-heading uppercase tracking-tighter leading-none text-right text-white/90">
              TOGETHER.
            </h2>
          </div>

          {/* 2. Dual Action Pill Buttons */}
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-start gap-4 sm:gap-6 font-mono-custom text-xs sm:text-sm font-bold uppercase">
            {/* Button 1: Start a Project (Email) */}
            <motion.a
              href="mailto:ababilghazwan@gmail.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 bg-white text-[#111113] hover:bg-[#FF5722] hover:text-white border-2 border-white transition-colors flex items-center gap-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              EMAIL ME
            </motion.a>
          </div>
        </div>

        {/* 3. Footer Metadata */}
        <footer className="relative z-10 w-full max-w-6xl mx-auto border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-custom text-xs text-zinc-400 uppercase">
          <div className="flex items-center gap-4">
            <span>INDONESIA</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white font-bold">2026</span>
          </div>

          <div className="flex items-center gap-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/ghazwanz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 text-zinc-400 hover:text-white hover:scale-110 transition-all border border-white/20 hover:border-white rounded-lg bg-white/5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/ghazwan-ababil-b72366286"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-zinc-400 hover:text-white hover:scale-110 transition-all border border-white/20 hover:border-white rounded-lg bg-white/5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.99 0 1.78-.79 1.78-1.78 0-.98-.79-1.77-1.78-1.77-.98 0-1.77.79-1.77 1.77 0 .99.79 1.78 1.77 1.78m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
          </div>
        </footer>
      </motion.section>
    </div>
  );
}
