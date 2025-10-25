import React from 'react';
import { X } from 'lucide-react';

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm py-2 border-b border-white/10 last:border-b-0">
      <span className="text-white/60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function RosterItem({ name, role }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-white/10 p-3 bg-white/5">
      <span>{name}</span>
      <span className="text-xs text-white/60">{role}</span>
    </div>
  );
}

function ResultItem({ event, placing }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-white/10 p-3 bg-white/5">
      <span className="text-sm">{event}</span>
      <span className="text-xs text-white/60">{placing}</span>
    </div>
  );
}

export default function TeamModal({ open, onClose, team, tab, setTab }) {
  if (!open || !team) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-black" onClick={(e)=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20">
          <X className="h-5 w-5" />
        </button>
        <div className="p-6">
          <div className="text-xl font-semibold">{team.name}</div>
          <div className="text-xs text-white/60">{team.region} • {team.platform}</div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            {['Details','Roster','Results'].map(t => (
              <button key={t} onClick={()=>setTab(t)} className={`px-3 py-1.5 rounded-md border ${tab===t ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>{t}</button>
            ))}
          </div>

          {tab === 'Details' && (
            <div className="mt-4 rounded-2xl border border-white/10 p-5 bg-white/5 grid gap-2">
              <Row label="Founded" value="2019" />
              <Row label="Coach" value="M. Rivera" />
              <Row label="Home" value={team.region} />
              <Row label="Platform" value={team.platform} />
            </div>
          )}

          {tab === 'Roster' && (
            <div className="mt-4 grid gap-2">
              <RosterItem name="Atlas" role="IGL" />
              <RosterItem name="Skye" role="Entry" />
              <RosterItem name="Drift" role="Flex" />
              <RosterItem name="Patch" role="Support" />
            </div>
          )}

          {tab === 'Results' && (
            <div className="mt-4 grid gap-2">
              <ResultItem event="{team.region} Super Cup" placing="1st" />
              <ResultItem event="Global Championship" placing="Top 8" />
              <ResultItem event="Regional Qualifier" placing="2nd" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
