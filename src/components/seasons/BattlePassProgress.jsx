import React from 'react';

function ProgressBar({ value }) {
  return (
    <div className="w-full h-3 rounded-md bg-white/10 overflow-hidden">
      <div className="h-full bg-white" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

function RewardMini({ name, tier, owned }) {
  return (
    <div className={`rounded-lg border ${owned ? 'border-white' : 'border-white/10'} p-3 bg-white/5`}> 
      <div className="text-[11px] text-white/60">T{tier}</div>
      <div className="mt-1 text-xs font-semibold">{name}</div>
      {owned && <div className="mt-1 text-[10px] text-emerald-300">Owned</div>}
    </div>
  );
}

export default function BattlePassProgress({ level, xp, progress, rewards }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs text-white/60">Level</div>
          <div className="text-3xl font-extrabold">{level}</div>
        </div>
        <div className="text-sm text-white/70">{xp.toLocaleString()} XP</div>
      </div>
      <div className="mt-3">
        <ProgressBar value={progress} />
        <div className="mt-1 text-xs text-white/60">{progress}% to next level</div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rewards.map((r) => (
          <RewardMini key={r.tier} name={r.name} tier={r.tier} owned={level >= r.tier} />
        ))}
      </div>
    </div>
  );
}
