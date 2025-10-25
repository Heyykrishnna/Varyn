import React from 'react';
import { Rocket, Shield, Timer, Swords } from 'lucide-react';

const ModeCard = ({ title, desc, chips = [] }) => (
  <div className="relative rounded-2xl border border-white/10 bg-black/40 p-6 overflow-hidden">
    <div className="absolute -inset-1 opacity-50 blur-2xl bg-[conic-gradient(from_180deg,rgba(217,70,239,0.15),rgba(34,211,238,0.15),rgba(16,185,129,0.15),transparent_60%)]" />
    <div className="relative">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/70 text-sm">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span key={c} className="rounded-full border border-white/15 text-xs px-2 py-1 text-white/80">{c}</span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button className="rounded-full bg-white text-black text-sm font-semibold px-4 py-2 hover:brightness-110">Queue</button>
        <button className="rounded-full border border-white/15 text-sm px-4 py-2 hover:bg-white/10">Private Match</button>
      </div>
    </div>
  </div>
);

export default function ModesPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,224,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Rocket className="h-5 w-5 text-cyan-300" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Modes</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Pick a playlist. Each mode supports party queue, bots on/off, and custom rules in private lobbies.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ModeCard title="Squad Royale" desc="Drop in 100 players, dynamic zones, vehicles, and tactical revives." chips={['4-player', '100 Players', 'Vehicles']} />
          <ModeCard title="Cosmic Arena" desc="8v8 skirmish with boost pads, power-ups, and fast respawns." chips={['8v8', 'Objective', 'Power-ups']} />
          <ModeCard title="Ranked Eclipse" desc="Rise through divisions with seasonal MMR and rewards." chips={['MMR', 'Seasonal', 'Leaderboard']} />
          <ModeCard title="Sniper Trials" desc="Long-range engagements with limited equipment and UAV sweeps." chips={['Limited Loot', 'Long Range', 'UAV']} />
          <ModeCard title="Armored Ops" desc="Heavy shields, slower zones, and ammo scarcity for high tension." chips={['Heavy Armor', 'Scarce Ammo', 'Slow Zones']} />
          <ModeCard title="Gun Game" desc="Cycle weapons on each elimination. First to finish wins." chips={['FFA', 'Rapid', 'Party']} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4"/><span className="font-semibold">Ranked Rules</span></div>
            <p className="mt-2 text-sm text-white/70">Ranked features stricter matchmaking, friendly-fire on, and reduced RNG. Penalties apply for leaves and AFK.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="flex items-center gap-2"><Timer className="h-4 w-4"/><span className="font-semibold">Rotations</span></div>
            <p className="mt-2 text-sm text-white/70">Arcade playlists rotate weekly with curated modifiers and featured maps.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="flex items-center gap-2"><Swords className="h-4 w-4"/><span className="font-semibold">Custom Lobbies</span></div>
            <p className="mt-2 text-sm text-white/70">Host your own lobby with whitelists, observer slots, and admin tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
