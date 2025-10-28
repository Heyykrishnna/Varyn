import React, { useMemo, useState } from 'react';
import { Filter, Newspaper, Search, Tag } from 'lucide-react';

function PostCard({ title, tag, excerpt, date }) {
  return (
    <article className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <div className="text-xs text-white/60 flex items-center gap-2"><Tag className="h-3.5 w-3.5"/> {tag} • {date}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{excerpt}</p>
    </article>
  );
}

export default function NewsPage() {
  const [active, setActive] = useState('All');
  const [q, setQ] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest');
  const posts = useMemo(()=>[
    { title: 'Patch 28.1 Balance Tweaks', tag: 'Patch Notes', date: 'Nov 09', excerpt: 'AR recoil tuned, zone pacing adjusted, and loot economics refreshed.' },
    { title: 'Nebula Erangel Variant', tag: 'Map Update', date: 'Nov 02', excerpt: 'Explore a solid reimagining with reactive cover and new POIs.' },
    { title: 'Creators Program', tag: 'Community', date: 'Oct 28', excerpt: 'Apply to join, earn drops for viewers, and access early features.' },
    { title: 'Esports Roadmap', tag: 'Competitive', date: 'Oct 22', excerpt: 'Season structure, point system, and qualification details for 2025.' },
    { title: 'Anti-Cheat Module', tag: 'Security', date: 'Oct 14', excerpt: 'Live detection, strike transparency, and real-time appeals.' },
    { title: 'Double XP Weekend', tag: 'Event', date: 'Oct 07', excerpt: 'Grind your pass with bonus XP active this weekend only.' },
    { title: 'Winter Event Teaser', tag: 'Event', date: 'Nov 12', excerpt: 'Sneak peek at the upcoming Winter Festival with exclusive skins and missions.' },
    { title: 'Weapon Mastery Update', tag: 'Patch Notes', date: 'Nov 05', excerpt: 'Enhanced weapon progression, new attachments, and balancing adjustments.' },
    { title: 'Community Spotlight', tag: 'Community', date: 'Nov 01', excerpt: 'Highlighting top creators and community events from October.' },
    { title: 'New Ranked Season', tag: 'Competitive', date: 'Oct 29', excerpt: 'Rank reset details, rewards, and leaderboard changes for the season.' },
    { title: 'Server Stability Enhancements', tag: 'Security', date: 'Oct 20', excerpt: 'Reduced latency, improved matchmaking, and better anti-exploit protections.' },
    { title: 'Halloween Event Recap', tag: 'Event', date: 'Oct 15', excerpt: 'Check out the highlights, winners, and spooky skins from the Halloween event.' },
    { title: 'Map Optimization Patch', tag: 'Map Update', date: 'Nov 14', excerpt: 'Improved terrain rendering, reduced load times, and smoother transitions.' },
    { title: 'Spectator Mode Revamp', tag: 'Community', date: 'Nov 11', excerpt: 'New camera angles, replay features, and enhanced streaming tools.' },
    { title: 'Cross-Platform Play Beta', tag: 'Competitive', date: 'Nov 08', excerpt: 'Test cross-play functionality across PC, console, and mobile platforms.' },
    { title: 'Client Security Update', tag: 'Security', date: 'Nov 06', excerpt: 'Patch applied to prevent exploit attempts and strengthen authentication.' },
    { title: 'Holiday Loot Crate Preview', tag: 'Event', date: 'Nov 04', excerpt: 'Sneak peek at limited-time cosmetics, skins, and collectibles.' },
    { title: 'Tutorial & Training Mode', tag: 'Patch Notes', date: 'Nov 03', excerpt: 'Enhanced beginner tutorials and new practice arenas for skill improvement.' },
    { title: 'Community Feedback Roundup', tag: 'Community', date: 'Oct 31', excerpt: 'Summary of top suggestions and upcoming features based on player input.' },
    { title: 'Competitive Rules Update', tag: 'Competitive', date: 'Oct 25', excerpt: 'Revised scoring, penalties, and tie-breaker rules for official matches.' },
    {title: 'New Seasonal Battle Pass', tag: 'Event', date: 'Nov 15', excerpt: 'Unlock exclusive skins, missions, and rewards with the launch of the new seasonal battle pass.' },
  ], []);

  const filtered = useMemo(() => {
    const list = posts.filter(
      p =>
        (active === 'All' || p.tag.toLowerCase() === active.toLowerCase()) &&
        (!q || p.title.toLowerCase().includes(q.toLowerCase()))
    );
    return list.sort((a, b) =>
      sortOrder === 'Newest'
        ? new Date(b.date + ', 2025') - new Date(a.date + ', 2025')
        : new Date(a.date + ', 2025') - new Date(b.date + ', 2025')
    );
  }, [posts, active, q, sortOrder]);

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Newspaper className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">News</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Patch notes, updates, events, and announcements.</p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {['All','Patch Notes','Map Update','Community','Competitive','Security','Event'].map(t => (
            <button key={t} onClick={()=>setActive(t)} className={`px-3 py-1.5 rounded-md text-xs border ${active===t ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>{t}</button>
          ))}
          <div className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm">
            <Search className="h-4 w-4 text-white/60" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search posts" className="bg-transparent outline-none placeholder:text-white/50 text-sm" />
          </div>
          <button
            onClick={() => setSortOrder(sortOrder === 'Newest' ? 'Oldest' : 'Newest')}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
          >
            <Filter className="h-3.5 w-3.5" /> Sort: {sortOrder}
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p)=> (
            <PostCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
