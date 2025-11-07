import React from 'react';
import { motion } from 'framer-motion';

export default function MapCard({ map, onOpen }) {
  const { name, biome, tagline, previewGradient, previewImage } = map;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20"
    >
      <div className="w-full aspect-sqaure overflow-hidden">
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${name} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full" style={{ background: previewGradient }} />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-wide">{name}</h3>
        </div>
        <div className="mt-2 text-sm text-white/70">{biome}</div>
        <p className="mt-3 text-white/80 text-sm leading-relaxed">{tagline}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      <div className="pointer-events-none absolute -inset-px bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}