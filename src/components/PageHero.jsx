import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ eyebrow, title, description }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-0 pb-16 pt-32 text-white md:pb-24 md:pt-40">
      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.35),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.15),_transparent_30%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
