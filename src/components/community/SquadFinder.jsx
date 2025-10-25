import React from 'react';
import { MapPin, Gamepad2, Search, Plus } from 'lucide-react';

function Pill({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-md text-xs font-medium border ${active ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>
      {children}
    </button>
  );
}

function SquadCard({ name, region, platform, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="mt-0.5 text-xs text-white/60 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> {region}
            <span className="opacity-40">•</span>
            <Gamepad2 className="h-3.5 w-3.5" /> {platform}
          </div>
        </div>
        <button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-semibold hover:brightness-95">Join</button>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/70">
        <span className="rounded-md border border-white/15 px-2 py-1">Scrims</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Competitive</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Casual</span>
      </div>
    </div>
  );
}

export default function SquadFinder({ region, setRegion, platform, setPlatform, q, setQ, squads }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm">
          <Search className="h-4 w-4 text-white/60" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search squads" className="bg-transparent outline-none placeholder:text-white/50 text-sm" />
        </div>
        <span className="opacity-40 mx-1">|</span>
        <div className="text-xs">Region</div>
        {['All','NA','EU','APAC','SA','India'].map(r => (
          <Pill key={r} active={region===r} onClick={()=>setRegion(r)}>{r}</Pill>
        ))}
        <span className="opacity-40 mx-1">|</span>
        <div className="text-xs">Platform</div>
        {['All','PC','Console','Mobile'].map(p => (
          <Pill key={p} active={platform===p} onClick={()=>setPlatform(p)}>{p}</Pill>
        ))}
        <button className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"><Plus className="h-3.5 w-3.5"/> Create Squad</button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {squads.map((s) => (
          <SquadCard key={s.name} {...s} />
        ))}
        {squads.length === 0 && (
          <div className="text-sm text-white/60 py-6 text-center sm:col-span-2 lg:col-span-3">No squads found.</div>
        )}
      </div>
    </div>
  );
}
