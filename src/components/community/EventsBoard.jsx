import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import EventDetailsModal from './EventDetailsModal';

function EventCard({ data, onDetails }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="text-xs text-white/60 flex items-center gap-2"><Calendar className="h-3.5 w-3.5"/> {data.date} • {data.region}</div>
      <div className="mt-1.5 text-lg font-semibold">{data.title}</div>
      <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
        <span className="rounded-md border border-white/15 px-2 py-1">{data.type}</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Prizing</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Open Signup</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-semibold hover:brightness-95">Register</button>
        <button onClick={()=>onDetails(data)} className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10">Details</button>
      </div>
    </div>
  );
}

export default function EventsBoard() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openDetails = (data) => {
    setActive(data);
    setOpen(true);
  };

  const events = [
    { title: 'Community Cup #12', date: 'Fridays', region: 'Open', type: 'Weekly', desc: 'Weekly open bracket cup for all skill levels.', checkin: '23:00 IST', r1: '23:30 IST', r2: '00:15 IST', r3: '01:00 IST' },
  { title: 'Creators Showdown', date: 'Monthly', region: 'Online', type: 'Showmatch', desc: 'Invite-only showmatch featuring top creators.', checkin: '20:30 IST', r1: '21:00 IST', r2: '21:40 IST', r3: '22:20 IST' },
  { title: 'Regional Clash', date: 'Dec 10', region: 'EMEA', type: 'Qualifier', desc: 'Qualify for the EMEA Super Cup in this regional clash.', checkin: '22:30 IST', r1: '23:00 IST', r2: '23:40 IST', r3: '00:20 IST' },
  { title: 'Holiday Scrims', date: 'Dec 22', region: 'NA', type: 'Scrims', desc: 'Holiday-themed scrims with fun modifiers.', checkin: '18:00 IST', r1: '18:30 IST', r2: '19:10 IST', r3: '19:50 IST' },
  { title: 'India Battle Royale', date: 'Nov 30', region: 'India', type: 'Tournament', desc: 'Top Indian players compete for glory in this battle royale.', checkin: '18:00 IST', r1: '18:30 IST', r2: '19:10 IST', r3: '19:50 IST' },
  { title: 'Mumbai Clash', date: 'Dec 5', region: 'India', type: 'Qualifier', desc: 'Regional qualifier for Mumbai’s top esports talent.', checkin: '19:00 IST', r1: '19:30 IST', r2: '20:10 IST', r3: '20:50 IST' },
  { title: 'Delhi Duel', date: 'Dec 12', region: 'India', type: 'Scrims', desc: 'Friendly scrims for Delhi gamers with exciting modifiers.', checkin: '17:30 IST', r1: '18:00 IST', r2: '18:40 IST', r3: '19:20 IST' },
  { title: 'Bangalore Blitz', date: 'Dec 20', region: 'India', type: 'Weekly', desc: 'Weekly open bracket for Bangalore players of all levels.', checkin: '20:00 IST', r1: '20:30 IST', r2: '21:10 IST', r3: '21:50 IST' },
  { title: 'Chennai Championship', date: 'Jan 8', region: 'India', type: 'Tournament', desc: 'Championship tournament bringing Chennai’s finest together.', checkin: '21:00 IST', r1: '21:30 IST', r2: '22:10 IST', r3: '22:50 IST' },
  { title: 'Mobile Mayhem', date: 'Jan 3', region: 'APAC', type: 'Mobile', desc: 'Mobile-only mayhem with rapid matches.', checkin: '21:30 IST', r1: '22:00 IST', r2: '22:40 IST', r3: '23:20 IST' },
  { title: 'Console Circuit', date: 'Jan 12', region: 'Americas', type: 'Console', desc: 'Console-focused circuit qualifiers.', checkin: '19:00 IST', r1: '19:30 IST', r2: '20:10 IST', r3: '20:50 IST' },
  { title: 'Pro League Open', date: 'Jan 20', region: 'Global', type: 'Tournament', desc: 'Open global tournament for aspiring pros.', checkin: '22:00 IST', r1: '22:30 IST', r2: '23:15 IST', r3: '00:00 IST' },
  { title: 'Winter Brawl', date: 'Feb 5', region: 'Europe', type: 'Scrims', desc: 'Winter-themed scrims with seasonal surprises.', checkin: '20:00 IST', r1: '20:30 IST', r2: '21:10 IST', r3: '21:50 IST' },
  { title: 'Creators Clash', date: 'Feb 14', region: 'Online', type: 'Showmatch', desc: 'Top creators face off in an epic showdown.', checkin: '21:00 IST', r1: '21:30 IST', r2: '22:10 IST', r3: '22:50 IST' },
  { title: 'APAC Grand Cup', date: 'Mar 1', region: 'APAC', type: 'Qualifier', desc: 'Qualify for the APAC Grand Cup in this competitive event.', checkin: '23:30 IST', r1: '00:00 IST', r2: '00:40 IST', r3: '01:20 IST' },
  { title: 'Kolkata Kings', date: 'Jan 15', region: 'India', type: 'Showmatch', desc: 'Top streamers from Kolkata battle in an epic showmatch.', checkin: '18:30 IST', r1: '19:00 IST', r2: '19:40 IST', r3: '20:20 IST' },
  { title: 'Hyderabad Havoc', date: 'Jan 22', region: 'India', type: 'Scrims', desc: 'Fast-paced scrims for Hyderabad players to sharpen skills.', checkin: '19:30 IST', r1: '20:00 IST', r2: '20:40 IST', r3: '21:20 IST' },
  { title: 'Pune Pro Series', date: 'Feb 2', region: 'India', type: 'Qualifier', desc: 'Qualifier event for Pune’s aspiring esports pros.', checkin: '20:30 IST', r1: '21:00 IST', r2: '21:40 IST', r3: '22:20 IST' },
  { title: 'Jaipur Juggernauts', date: 'Feb 10', region: 'India', type: 'Weekly', desc: 'Weekly competition featuring Jaipur’s top gamers.', checkin: '18:15 IST', r1: '18:45 IST', r2: '19:25 IST', r3: '20:05 IST' },
  { title: 'India Grand Finale', date: 'Mar 5', region: 'India', type: 'Tournament', desc: 'The grand finale for India’s top gaming talent.', checkin: '21:30 IST', r1: '22:00 IST', r2: '22:40 IST', r3: '23:20 IST' }
  ];

  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex items-center justify-between gap-2 text-sm">
        <div className="font-semibold inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> Upcoming Community Events</div>
        <div className="text-xs text-white/60 inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5"/> Updated weekly</div>
      </div>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <EventCard key={e.title} data={e} onDetails={openDetails} />
        ))}
      </div>

      <EventDetailsModal open={open} onClose={()=>setOpen(false)} event={active} />
    </div>
  );
}
