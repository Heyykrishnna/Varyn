import React, { useMemo, useState } from 'react';
import CommunityHero from '../community/CommunityHero';
import SquadFinder from '../community/SquadFinder';
import EventsBoard from '../community/EventsBoard';
import CreatorsSpotlight from '../community/CreatorsSpotlight';
import { Users } from 'lucide-react';

export default function CommunityPage() {
  const [region, setRegion] = useState('All');
  const [platform, setPlatform] = useState('All');
  const [q, setQ] = useState('');
  const [tab, setTab] = useState('Squads');

  const squads = useMemo(() => [
  { name: 'Nebula Raiders', region: 'EU', platform: 'PC', desc: 'Competitive-friendly, nightly scrims.' },
  { name: 'Desert Fox', region: 'NA', platform: 'Console', desc: 'Casual squad with weekly events.' },
  { name: 'Polar Eclipse', region: 'APAC', platform: 'PC', desc: 'High MMR ranked grinders.' },
  { name: 'Emerald Dawn', region: 'SA', platform: 'Mobile', desc: 'Mobile-only tournaments and duos.' },
  { name: 'Metro Wolves', region: 'EU', platform: 'PC', desc: 'Beginner-friendly, coaching nights.' },

  { name: 'Crimson Vanguard', region: 'IN', platform: 'PC', desc: 'Indian esports community hosting weekend tournaments and ranked sessions.' },
  { name: 'Shadow Lotus', region: 'IN', platform: 'Mobile', desc: 'Focused on BGMI and CoD Mobile, daily room matches and prize events.' },
  { name: 'Titan Mirage', region: 'NA', platform: 'PC', desc: 'MMORPG and shooter fans, organized raids and clan wars.' },
  { name: 'Aurora Pulse', region: 'EU', platform: 'Console', desc: 'Cross-platform fun nights and seasonal championships.' },
  { name: 'Iron Wolves', region: 'IN', platform: 'PC', desc: 'FPS-focused with mentorship sessions and local LAN meetups.' },

  { name: 'Solar Hawks', region: 'APAC', platform: 'Mobile', desc: 'Competitive team specializing in battle royale tournaments.' },
  { name: 'Phantom Syndicate', region: 'NA', platform: 'PC', desc: 'Hardcore ranked mode squad, streamer-friendly environment.' },
  { name: 'Scarlet Knights', region: 'EU', platform: 'PC', desc: 'Weekly scrims, Discord-based strategy reviews, and coaching.' },
  { name: 'Night Serpents', region: 'IN', platform: 'Console', desc: 'Console gamers from India, focus on casual and story-mode collabs.' },
  { name: 'Quantum Blaze', region: 'SA', platform: 'PC', desc: 'Cross-country ranked squads, focused on tactical gameplay.' },

  { name: 'Lunar Reapers', region: 'APAC', platform: 'Console', desc: 'PvP grinders with regular community challenges and leaderboards.' },
  { name: 'Nova Titans', region: 'IN', platform: 'Mobile', desc: 'Growing BGMI and Free Fire hub with daily tournaments and giveaways.' },
  { name: 'Cyber Ronin', region: 'EU', platform: 'PC', desc: 'Tech-inspired esports club with chill scrims and weekend events.' },
  { name: 'Obsidian Veil', region: 'NA', platform: 'Mobile', desc: 'Competitive mobile players focusing on teamwork and fun.' },
  { name: 'Eclipse Core', region: 'IN', platform: 'PC', desc: 'PC esports enthusiasts playing Valorant and CS2 with local scrims.' },

  { name: 'Savage Horizons', region: 'APAC', platform: 'PC', desc: 'Friendly yet skilled players with custom lobby nights.' },
  { name: 'Crater Legion', region: 'EU', platform: 'Mobile', desc: 'Casual gaming circle with themed events and community showcases.' },
  { name: 'Rogue Phoenix', region: 'IN', platform: 'Console', desc: 'Focused on PS and Xbox multiplayer titles, weekend fun nights.' },
  { name: 'Tempest Order', region: 'NA', platform: 'PC', desc: 'Competitive gamers across genres, offering coaching and ranked play.' },
  { name: 'Echo Titans', region: 'IN', platform: 'PC', desc: 'Top-tier Indian gamers community hosting scrims and watch parties.' },

  ].filter(s => (region==='All'||s.region===region) && (platform==='All'||s.platform===platform) && (!q || s.name.toLowerCase().includes(q.toLowerCase()))), [region, platform, q]);

  return (
    <section className="relative py-10 sm:py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Community</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Find squads, join events, and follow creators. Build your crew and drop in together.</p>

        <div className="mt-8 grid gap-8">
          <CommunityHero />

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {['Squads', 'Events', 'Creators'].map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-md border ${tab===t ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>{t}</button>
            ))}
          </div>

          {tab === 'Squads' && (
            <SquadFinder
              region={region}
              setRegion={setRegion}
              platform={platform}
              setPlatform={setPlatform}
              q={q}
              setQ={setQ}
              squads={squads}
            />
          )}

          {tab === 'Events' && (
            <EventsBoard />
          )}

          {tab === 'Creators' && (
            <CreatorsSpotlight />
          )}
        </div>
      </div>
    </section>
  );
}
