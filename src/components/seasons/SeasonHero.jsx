import React from 'react';
import { Clock, Download, Trophy, Gift } from 'lucide-react';
import { navigateTo } from '../Router';

export default function SeasonHero() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white text-black">
      <div className="grid lg:grid-cols-3">
        <div className="p-8 sm:p-10 lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-md bg-black text-white px-2 py-1 text-xs">
            Season Pass • S28
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">Claim rewards as you level up</h2>
          <p className="mt-3 text-black/70">Play matches, complete missions, and earn XP to unlock weapons skins, banners, and currency.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <button onClick={() => navigateTo('download')} className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 font-semibold hover:opacity-90"><Download className="h-4 w-4"/> Get the Game</button>
            <button onClick={() => navigateTo('esports')} className="inline-flex items-center gap-2 rounded-md border border-black/20 px-4 py-2 font-semibold hover:bg-black/5"><Trophy className="h-4 w-4"/> Esports</button>
          </div>
        </div>
        <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-black/10 bg-gray-50">
          <div className="grid gap-3 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Time Remaining</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><Clock className="h-4 w-4"/> 26 days</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Featured Reward</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><Gift className="h-4 w-4"/> Reactive AR Skin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
