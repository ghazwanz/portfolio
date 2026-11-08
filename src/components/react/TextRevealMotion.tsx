import React from 'react';
import { motion } from 'framer-motion';

export function TextWordReveal({
  text,
  className = "",
  wordClassName = ""
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotateX: -20
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 14
      }
    }
  };

  return (
    <motion.h3
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-wrap justify-center overflow-hidden ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="overflow-hidden inline-flex mr-[0.28em] py-0.5">
          <motion.span
            variants={wordVariants}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h3>
  );
}

export function SectionTitleReveal({
  title,
  subtitle,
  tag,
  className = ""
}: {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono-custom text-[11px] text-zinc-500 mb-2 uppercase tracking-widest"
        >
          {tag}
        </motion.div>
      )}
      <div className="overflow-hidden py-1">
        <motion.h2
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 130,
            damping: 16
          }}
          className="text-4xl sm:text-6xl font-extrabold text-[#111113] tracking-tight uppercase font-heading"
        >
          {title}
        </motion.h2>
      </div>
      {/* Expanding neo-brutalist divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-24 h-1 bg-[#111113] mx-auto mt-4 origin-center"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono-custom text-xs text-zinc-500 mt-3 uppercase tracking-widest"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
