import React from 'react';
import { Crown, Gift } from 'lucide-react';

function Reward({ name, tier, owned }) {
  return (
    <div className={`rounded-xl border ${owned ? 'border-white' : 'border-white/10'} p-4 bg-white/5`}> 
      <div className="text-xs text-white/60">Tier {tier}</div>
      <div className="mt-1 font-semibold">{name}</div>
      {owned && <div className="mt-2 text-xs text-emerald-300">Owned</div>}
    </div>
  );
}

export default function RewardsTrack({ rewards, level }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <div className="flex items-center gap-2 font-semibold text-sm"><Gift className="h-4 w-4"/> Rewards Track</div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rewards.map(r => (
          <Reward key={r.tier} name={r.name} tier={r.tier} owned={level >= r.tier} />
        ))}
      </div>
      <div className="mt-4 rounded-md border border-white/10 p-4 text-xs text-white/70">
        <div className="font-semibold inline-flex items-center gap-2"><Crown className="h-3.5 w-3.5"/> Ranked Rewards</div>
        <p className="mt-2">Climb divisions for end-season cosmetics and titles. Top 1% unlock animated frames and an exclusive badge.</p>
      </div>
    </div>
  );
}
