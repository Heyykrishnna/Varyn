import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Star, Info } from 'lucide-react';
import { navigateTo } from './Router';

const modes = [
  {
    title: 'Squad Royale',
    desc: 'Classic 4vX chaos. Drop, loot, adapt, and outlast across dynamic, shifting zones.',
    tag: 'CORE MODE',
    glow: 'from-fuchsia-500 to-cyan-400',
    icon: Users,
  },
  {
    title: 'Cosmic Arena',
    desc: 'Fast-paced 8v8 skirmishes with power-ups, jump pads, and reactive neon cover.',
    tag: 'ARCADE',
    glow: 'from-cyan-400 to-emerald-400',
    icon: Trophy,
  },
  {
    title: 'Ranked Eclipse',
    desc: 'A competitive ladder with seasonal rewards and galaxy-tier leaderboards.',
    tag: 'RANKED',
    glow: 'from-violet-500 to-fuchsia-400',
    icon: Star,
  },
];

export default function ModesShowcase() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-black to-[#04070a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,224,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Game Modes</h2>
            <p className="mt-2 text-white/60 max-w-2xl">Choose your fight. Each mode is tuned for high-impact action with fluid movement and tactical decision-making.</p>
          </div>
          <button onClick={() => navigateTo('news')} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">View Patch Notes</button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-black/40 p-5 overflow-hidden group"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity bg-gradient-to-r ${m.glow}`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-white/60">{m.tag}</span>
                  <m.icon className="h-4 w-4 text-white/70" />
                </div>
                <h3 className="mt-3 text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-white/70">{m.desc}</p>
                <div className="mt-6 flex items-center gap-3">
                  <button onClick={() => navigateTo('modes')} className="rounded-full bg-white text-black text-xs font-semibold px-3 py-1.5 hover:brightness-110">Queue</button>
                  <button onClick={() => navigateTo('modes')} className="rounded-full border border-white/20 text-white text-xs font-semibold px-3 py-1.5 hover:bg-white/10 inline-flex items-center gap-1.5"><Info className="h-3.5 w-3.5"/> Learn More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(100%_60%_at_10%_0%,rgba(255,0,212,0.15),transparent_50%),radial-gradient(100%_60%_at_90%_100%,rgba(0,255,224,0.15),transparent_50%)]" />
            <div className="relative p-6">
              <h4 className="text-xl font-semibold">Season 28: Cosmic Drop</h4>
              <p className="mt-1 text-white/70 text-sm max-w-2xl">Earn reactive weapon skins, galaxy wraps, and animated banners. Complete missions weekly to climb the pass and unlock premium tiers.</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-400/20 text-emerald-300 text-xs px-3 py-1 border border-emerald-300/30">New Map Variant: Nebula Erangel</span>
                <span className="rounded-full bg-fuchsia-400/20 text-fuchsia-300 text-xs px-3 py-1 border border-fuchsia-300/30">Reactive Skins</span>
                <span className="rounded-full bg-cyan-400/20 text-cyan-300 text-xs px-3 py-1 border border-cyan-300/30">Balance Patch</span>
              </div>
              <div className="mt-6"><button onClick={() => navigateTo('seasons')} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Open Season Hub</button></div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 to-fuchsia-400/10" />
            <div className="relative p-6 h-full flex flex-col">
              <h4 className="text-xl font-semibold">Esports Hub</h4>
              <p className="mt-1 text-white/70 text-sm">Follow pro circuits, team standings, and live events with real-time updates.</p>
              <div className="mt-4 flex gap-2 text-xs text-white/60">
                <span className="rounded-full border border-white/15 px-2 py-1">PMGC</span>
                <span className="rounded-full border border-white/15 px-2 py-1">Regional Leagues</span>
                <span className="rounded-full border border-white/15 px-2 py-1">Community Cups</span>
              </div>
              <div className="mt-auto pt-6">
                <button onClick={() => navigateTo('esports')} className="w-full rounded-xl bg-white text-black font-semibold py-2.5 hover:brightness-110">Open Hub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
