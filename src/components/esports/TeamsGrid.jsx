import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import TeamModal from './TeamModal';

function TeamCard({ name, region, platform, onDetails, onRoster, onResults }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-1 text-xs text-white/60">{region} • {platform}</div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <button onClick={onDetails} className="rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10">Details</button>
        <button onClick={onRoster} className="rounded-md bg-white text-black px-3 py-1.5 font-semibold hover:brightness-95">Roster</button>
        <button onClick={onResults} className="rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10">Results</button>
      </div>
    </div>
  );
}

export default function TeamsGrid({ region, platform }) {
  const [q, setQ] = useState('');
  const [reg, setReg] = useState(region);
  const [plat, setPlat] = useState('All');
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('Roster');
  const [team, setTeam] = useState(null);

  const teams = useMemo(() => [
    { name: 'Orion Esports', region: 'Americas', platform: 'PC' },
    { name: 'Valkyrie', region: 'EMEA', platform: 'PC' },
    { name: 'StormUnit', region: 'Americas', platform: 'PC' },
    { name: 'Nebula', region: 'APAC', platform: 'Mobile' },
    { name: 'PolarWave', region: 'EMEA', platform: 'Mobile' },
    { name: 'Lotus', region: 'APAC', platform: 'PC' },
    { name: 'Crimson', region: 'EMEA', platform: 'PC' },
    { name: 'Azure', region: 'EMEA', platform: 'Mobile' },
    { name: 'Hyderabad Havoc', region: 'India', platform: 'Mobile' },
    { name: 'Mumbai Mavericks', region: 'India', platform: 'PC' },
  ], []);

  const filtered = teams.filter(t =>
    (!q || t.name.toLowerCase().includes(q.toLowerCase())) &&
    (reg === 'Global' ? true : t.region === reg) &&
    (plat === 'All' || t.platform === plat)
  );

  const openModal = (tm, initialTab) => { setTeam(tm); setTab(initialTab); setOpen(true); };

  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm">
          <Search className="h-4 w-4 text-white/60" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search teams" className="bg-transparent outline-none placeholder:text-white/50 text-sm" />
        </div>
        <span className="opacity-40 mx-1">|</span>
        <div className="text-xs">Region</div>
        {['Global','EMEA','Americas','APAC','India'].map(r => (
          <button key={r} onClick={()=>setReg(r)} className={`px-3 py-1.5 rounded-md border text-xs ${reg===r ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>{r}</button>
        ))}
        <span className="opacity-40 mx-1">|</span>
        <div className="text-xs">Platform</div>
        {['All','PC','Mobile'].map(p => (
          <button key={p} onClick={()=>setPlat(p)} className={`px-3 py-1.5 rounded-md border text-xs ${plat===p ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>{p}</button>
        ))}
      </div>

      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map(t => (
          <TeamCard
            key={t.name}
            {...t}
            onDetails={() => openModal(t, 'Details')}
            onRoster={() => openModal(t, 'Roster')}
            onResults={() => openModal(t, 'Results')}
          />
        ))}
        {filtered.length === 0 && (
          <div className="text-sm text-white/60 py-6 text-center sm:col-span-2 lg:col-span-4">No teams found.</div>
        )}
      </div>

      <TeamModal open={open} onClose={()=>setOpen(false)} team={team} tab={tab} setTab={setTab} />
    </div>
  );
}
