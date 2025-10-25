import React from 'react';
import { Flag, MonitorSmartphone, Globe2 } from 'lucide-react';

function Pill({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-md text-xs font-medium border ${active ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>
      {children}
    </button>
  );
}

export default function TournamentFilter({ category, setCategory, platform, setPlatform, region, setRegion }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 sm:p-5 bg-white/5">
      <div className="flex flex-wrap items-center gap-2">
        {['Global Championship', 'Regional Leagues', 'Community Cups'].map((c) => (
          <Pill key={c} active={category === c} onClick={() => setCategory(c)}>{c}</Pill>
        ))}
        <span className="opacity-40 mx-1">|</span>
        <div className="inline-flex items-center gap-2 text-xs">
          <MonitorSmartphone className="h-3.5 w-3.5 text-white/60" />
          {['PC','Mobile'].map(p => (
            <Pill key={p} active={platform === p} onClick={() => setPlatform(p)}>{p}</Pill>
          ))}
        </div>
        <span className="opacity-40 mx-1 hidden sm:inline">|</span>
        <div className="inline-flex items-center gap-2 text-xs flex-1 sm:flex-none">
          <Globe2 className="h-3.5 w-3.5 text-white/60" />
          {['Global','EMEA','Americas','APAC','India'].map(r => (
            <Pill key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Pill>
          ))}
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-white/60">
          <Flag className="h-3.5 w-3.5" /> Official Tournaments
        </div>
      </div>
    </div>
  );
}
