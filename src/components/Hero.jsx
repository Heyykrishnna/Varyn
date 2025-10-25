import React, { useMemo, useState } from 'react';
import { Play, Rocket, Search, X, Globe2, RefreshCw, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigateTo } from './Router';

function TrailerModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden border border-white/15" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 z-10 inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 text-white">
          <X className="h-5 w-5" />
        </button>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState('NA');
  const [players, setPlayers] = useState(284_312);
  const [query, setQuery] = useState('');

  const quickResults = useMemo(() => {
    const items = [
      { label: 'Patch 28.1', route: 'news' },
      { label: 'Cosmic Drop Season', route: 'seasons' },
      { label: 'Ranked Eclipse Rules', route: 'modes' },
      { label: 'Download for PC', route: 'download' },
    ];
    if (!query) return items;
    return items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const refreshPlayers = () => {
    const delta = Math.floor(Math.random() * 5000) - 2500;
    setPlayers((p) => Math.max(100_000, p + delta));
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-10 rounded-2xl border border-white/10 bg-white text-black">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 rounded-md bg-black text-white px-2 py-1 text-xs">
                  Live Now • Season 28
                </div>
                <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">
                  Drop In. Adapt Fast. Outlast Everyone.
                </h1>
                <p className="mt-4 text-black/70 text-base sm:text-lg">
                  Pure battle royale energy with crisp, solid design. Squad up, take the fight, and claim the final circle.
                </p>

                <div className="mt-6 grid gap-3 sm:flex sm:items-center">
                  <button onClick={() => navigateTo('download')} className="inline-flex items-center gap-2 rounded-md bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90 active:scale-95 transition-all">
                    <Download className="h-4 w-4" /> Get the Game
                  </button>
                  <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5">
                    <Play className="h-4 w-4" /> Watch Trailer
                  </button>
                </div>

                <div className="absolute bottom-12 flex flex-wrap items-center gap-3 text-sm">
                  <div className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 bg-black/5">
                    <Globe2 className="h-4 w-4" />
                    <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-transparent outline-none">
                      <option value="IN">IN</option>
                      <option value="EU">EU</option>
                      <option value="US">US</option>
                      <option value="CA">CA</option>
                    </select>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 bg-black/5">
                    <span className="font-semibold">{players.toLocaleString()}</span>
                    <span className="text-black/60">players online</span>
                    <button onClick={refreshPlayers} className="ml-1 inline-flex items-center rounded px-2 py-1 hover:bg-black/10" aria-label="Refresh players">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-black/10 bg-gray-50 rounded-2xl">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dyzxnud9z/image/upload/v1757401349/smoothui/hero-example_xertaz.png"
                  alt="app screen"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrailerModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
