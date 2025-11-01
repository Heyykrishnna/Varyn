import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MapModal({ map, onClose }) {
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => {
    const base = Array.isArray(map.gallery) ? map.gallery : [];
    if (base.length === 0 && map.previewImage) return [map.previewImage];
    return base;
  }, [map]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slides.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, slides.length]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black" onClick={onClose} />
      <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-16 lg:inset-x-32 top-20 bottom-12 overflow-auto">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-wide">{map.name}</h2>
                <div className="mt-1 text-white/80">{map.biome} • {map.size}</div>
                <p className="mt-3 text-white/80 max-w-2xl">{map.description}</p>
              </div>
              <button
                onClick={onClose}
                className="px-3 py-2 rounded-md text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/15 whitespace-nowrap"
              >
                Close
              </button>
            </div>

            <div className="mt-8 relative">
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full"
                  >
                    {slides[index] && typeof slides[index] === 'string' && /^(https?:\/\/|\/)/.test(slides[index]) ? (
                      <img src={slides[index]} alt={`${map.name} slide ${index + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full" style={{ background: slides[index] || map.previewGradient }} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {slides.length > 1 && (
                <div className="absolute inset-x-0 -bottom-12 flex items-center justify-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-6 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <br/>
            <br/>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {map.features.map((f, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">{f.tag}</div>
                  <div className="mt-1 text-lg font-semibold">{f.title}</div>
                  <p className="mt-2 text-white/80 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


