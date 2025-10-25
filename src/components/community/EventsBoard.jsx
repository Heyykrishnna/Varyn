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
    { title: 'Community Cup #12', date: 'Fridays', region: 'Open', type: 'Weekly', desc: 'Weekly open bracket cup for all skill levels.', checkin: '17:30 UTC', r1: '18:00 UTC', r2: '18:40 UTC', r3: '19:20 UTC' },
    { title: 'Creators Showdown', date: 'Monthly', region: 'Online', type: 'Showmatch', desc: 'Invite-only showmatch featuring top creators.' },
    { title: 'Regional Clash', date: 'Dec 10', region: 'EMEA', type: 'Qualifier', desc: 'Qualify for the EMEA Super Cup in this regional clash.' },
    { title: 'Holiday Scrims', date: 'Dec 22', region: 'NA', type: 'Scrims', desc: 'Holiday-themed scrims with fun modifiers.' },
    { title: 'Mobile Mayhem', date: 'Jan 3', region: 'APAC', type: 'Mobile', desc: 'Mobile-only mayhem with rapid matches.' },
    { title: 'Console Circuit', date: 'Jan 12', region: 'Americas', type: 'Console', desc: 'Console-focused circuit qualifiers.' },
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
