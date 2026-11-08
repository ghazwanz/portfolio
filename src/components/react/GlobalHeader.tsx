import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalHeader() {
  return (
    <header className="fixed top-0 inset-x-0 h-10 z-50 bg-[#09090B]/95 backdrop-blur-sm border-b border-white/10 px-4 sm:px-8 flex items-center justify-between text-xs font-mono-custom uppercase select-none text-white">
      <div className="flex items-center gap-3">
        <a
          href="mailto:hello@ouronii.dev"
          className="hover:text-[#22D3EE] transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-[#22D3EE]"
        >
          HELLO@OURONII.DEV
        </a>
      </div>

      <div className="flex items-center gap-4 text-zinc-400">
        <span className="hidden sm:inline text-[11px] text-zinc-500">
          [PORTFOLIO_V3.2]
        </span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#22D3EE] transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-[#22D3EE]"
        >
          LINKEDIN ↗
        </a>
      </div>
    </header>
  );
}
