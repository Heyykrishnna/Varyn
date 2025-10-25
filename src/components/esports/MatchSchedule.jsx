import React, { useMemo, useState } from 'react';
import { Clock, Play, Tv2 } from 'lucide-react';

function Tab({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-md text-xs font-medium border ${active ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>
      {children}
    </button>
  );
}

function MatchRow({ a, b, time, status, stage }) {
  const live = status === 'Live';
  return (
    <div className="flex items-center justify-between rounded-md border border-white/10 p-4 bg-white/5">
      <div>
        <div className="text-xs text-white/60">{stage}</div>
        <div className="mt-1 font-semibold">{a} vs. {b}</div>
        <div className="mt-1 text-xs text-white/60 flex items-center gap-2"><Clock className="h-3.5 w-3.5"/> {time}</div>
      </div>
      <div className="flex gap-2 text-xs">
        <button className={`rounded-md px-3 py-1.5 font-semibold ${live ? 'bg-white text-black' : 'border border-white/15 hover:bg-white/10'}`}>{live ? 'Live' : 'Details'}</button>
        <button className="rounded-md bg-white text-black px-3 py-1.5 font-semibold hover:brightness-95"><Play className="h-3.5 w-3.5 mr-1 inline"/> Watch</button>
      </div>
    </div>
  );
}

export default function MatchSchedule({ tab, setTab, region, platform }) {
  const [tz, setTz] = useState('UTC');
  const data = useMemo(() => ({
    Live: [
      { a: 'Orion Esports', b: 'Valkyrie', time: 'Live • 18:22', status: 'Live', stage: `${region} Playoffs` },
    ],
    Upcoming: [
      { a: 'StormUnit', b: 'Nebula', time: 'Today • 20:00 ' + tz, status: 'Upcoming', stage: `${region} Groups` },
      { a: 'Crimson', b: 'Azure', time: 'Tomorrow • 16:00 ' + tz, status: 'Upcoming', stage: `${region} Groups` },
    ],
    Results: [
      { a: 'Lotus', b: 'TigerClaw', time: 'Yesterday • 14:00 ' + tz, status: 'Results', stage: `${region} Qualifier` },
      { a: 'Sakura', b: 'PolarWave', time: 'Nov 12 • 17:00 ' + tz, status: 'Results', stage: `${region} Qualifier` },
    ],
  }), [region, tz]);

  const list = data[tab] || [];

  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex flex-wrap items-center gap-2">
        {['Live','Upcoming','Results'].map(t => (
          <Tab key={t} active={tab === t} onClick={() => setTab(t)}>{t}</Tab>
        ))}
        <span className="opacity-40 mx-1">|</span>
        <div className="inline-flex items-center gap-2 text-xs">
          <Tv2 className="h-3.5 w-3.5 text-white/60" /> Platform
          {['PC','Mobile'].map(p => (
            <span key={p} className={`px-2 py-1 rounded-md border text-[11px] ${platform===p ? 'bg-white text-black border-white' : 'border-white/15 text-white/70'}`}>{p}</span>
          ))}
        </div>
        <div className="ml-auto inline-flex items-center gap-2 text-xs">
          <span className="text-white/60">Timezone</span>
          <select value={tz} onChange={(e)=>setTz(e.target.value)} className="rounded-md bg-transparent border border-white/15 px-2 py-1 outline-none text-white/80">
            <option value="UTC">UTC</option>
            <option value="PST">PST</option>
            <option value="CET">CET</option>
            <option value="KST">KST</option>
          </select>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {list.map((m, i) => (
          <MatchRow key={i} {...m} />
        ))}
        {list.length === 0 && (
          <div className="text-sm text-white/60 py-6 text-center">No matches found.</div>
        )}
      </div>
    </div>
  );
}
