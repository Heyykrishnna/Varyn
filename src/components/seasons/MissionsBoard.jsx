import React, { useState } from 'react';
import { ListChecks } from 'lucide-react';

function MissionItem({ title, xp, done, onToggle }) {
  return (
    <button onClick={onToggle} className={`flex items-center justify-between rounded-md border p-4 text-left ${done ? 'border-white bg-white text-black' : 'border-white/10 bg-white/5 text-white'}`}>
      <div>
        <div className="font-semibold">{title}</div>
        <div className={`text-xs ${done ? 'text-black/70' : 'text-white/60'}`}>+{xp} XP</div>
      </div>
      <div className={`text-xs font-semibold ${done ? 'text-black/80' : 'text-white/80'}`}>{done ? 'Completed' : 'Mark Done'}</div>
    </button>
  );
}

export default function MissionsBoard({ missions, onToggle }) {
  const [tab, setTab] = useState('daily');

  const list = tab === 'daily' ? missions.daily : missions.weekly;

  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-sm"><ListChecks className="h-4 w-4"/> Missions</div>
        <div className="flex items-center gap-2 text-xs">
          <button onClick={()=>setTab('daily')} className={`px-3 py-1.5 rounded-md border ${tab==='daily' ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>Daily</button>
          <button onClick={()=>setTab('weekly')} className={`px-3 py-1.5 rounded-md border ${tab==='weekly' ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>Weekly</button>
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {list.map((m, i) => (
          <MissionItem key={m.title} {...m} onToggle={() => onToggle(tab, i)} />
        ))}
      </div>
      <div className="mt-4 text-xs text-white/60">Tip: streak bonuses grant extra XP on consecutive daily completions.</div>
    </div>
  );
}
