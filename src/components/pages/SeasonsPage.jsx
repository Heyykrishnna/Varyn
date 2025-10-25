import React, { useMemo, useState } from 'react';
import SeasonHero from '../seasons/SeasonHero';
import BattlePassProgress from '../seasons/BattlePassProgress';
import MissionsBoard from '../seasons/MissionsBoard';
import RewardsTrack from '../seasons/RewardsTrack';
import { Target } from 'lucide-react';

export default function SeasonsPage() {
  const [xp, setXp] = useState(4200);
  const level = Math.min(100, Math.floor(xp / 100));
  const progress = (xp % 100);

  const [missions, setMissions] = useState({
    daily: [
      { title: 'Win a Squad Royale match', xp: 300, done: false },
      { title: 'Deal 1000 damage in any mode', xp: 200, done: true },
      { title: 'Revive teammates 5 times', xp: 150, done: false },
    ],
    weekly: [
      { title: 'Loot 3 supply drops', xp: 250, done: false },
      { title: 'Top 5 finish 3 times', xp: 400, done: false },
      { title: 'Travel 10km in vehicles', xp: 200, done: false },
    ],
  });

  const rewards = useMemo(()=>[
    { name: 'Reactive AR Skin', tier: 5 },
    { name: 'Galaxy Wrap', tier: 10 },
    { name: 'Animated Banner', tier: 15 },
    { name: '1,000 Credits', tier: 20 },
    { name: 'Legendary Emote', tier: 25 },
    { name: 'Nebula Parachute', tier: 30 },
    { name: 'Kill Tracker Charm', tier: 35 },
    { name: 'Title: Eclipse', tier: 40 },
  ], []);

  const toggleMission = (scope, i) => {
    setMissions(prev => {
      const copy = { ...prev, [scope]: prev[scope].map((m, idx) => idx===i ? { ...m, done: !m.done } : m) };
      const delta = prev[scope][i].done ? -prev[scope][i].xp : prev[scope][i].xp;
      setXp(x => Math.max(0, x + delta));
      return copy;
    });
  };

  return (
    <section className="relative py-10 sm:py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Target className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Season 28: Cosmic Drop</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Progress your pass, complete missions, and unlock solid cosmetics. Earn seasonal ranked rewards for top performance.</p>

        <div className="mt-8 grid gap-8">
          <SeasonHero />

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <BattlePassProgress level={level} xp={xp} progress={progress} rewards={rewards} />
            </div>
            <div className="lg:col-span-1">
              <MissionsBoard missions={missions} onToggle={toggleMission} />
            </div>
          </div>

          <RewardsTrack rewards={rewards} level={level} />
        </div>
      </div>
    </section>
  );
}
