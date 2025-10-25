import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Gift, Shield, Timer } from 'lucide-react';

export default function EventDetailsModal({ open, onClose, event }) {
  const [tab, setTab] = useState('Overview');
  if (!open || !event) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-white text-black" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <div>
            <div className="text-xs text-black/60">{event.type}</div>
            <div className="text-lg font-semibold">{event.title}</div>
          </div>
          <button onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/5 hover:bg-black/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-0">
          <div className="lg:col-span-2 p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {['Overview','Prizing','Rules','Schedule'].map((t)=> (
                <button key={t} onClick={()=>setTab(t)} className={`px-3 py-1.5 rounded-md border ${tab===t ? 'bg-black text-white border-black' : 'border-black/15 text-black/80 hover:bg-black/5'}`}>{t}</button>
              ))}
            </div>

            <div className="mt-4 text-sm">
              {tab === 'Overview' && (
                <div className="space-y-3">
                  <p>{event.desc || 'Open signup community tournament. Bring your squad, follow fair play guidelines, and have fun.'}</p>
                  <ul className="space-y-2">
                    <li className="inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> {event.date} • <MapPin className="h-4 w-4"/> {event.region}</li>
                    <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> Check-in 30m prior to start</li>
                  </ul>
                  <div className="rounded-md border border-black/10 p-3 bg-black/[0.03]">
                    <div className="font-semibold">Format</div>
                    <p className="text-black/70">Lobby of 16 squads • 3 rounds • Points by placements and eliminations.</p>
                  </div>
                </div>
              )}
              {tab === 'Prizing' && (
                <div className="grid gap-3">
                  <div className="rounded-md border border-black/10 p-3 inline-flex items-center gap-2"><Gift className="h-4 w-4"/> 1st: 5,000 Credits + Exclusive Banner</div>
                  <div className="rounded-md border border-black/10 p-3 inline-flex items-center gap-2"><Gift className="h-4 w-4"/> 2nd: 2,500 Credits</div>
                  <div className="rounded-md border border-black/10 p-3 inline-flex items-center gap-2"><Gift className="h-4 w-4"/> MVP: Legendary Emote</div>
                </div>
              )}
              {tab === 'Rules' && (
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 font-semibold"><Shield className="h-4 w-4"/> Key Rules</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>No cheating, macroing, or third-party tools.</li>
                    <li>Proper team names and respectful conduct.</li>
                    <li>Admins may request POV VODs for verification.</li>
                    <li>Late check-ins may be disqualified.</li>
                  </ul>
                  <div className="rounded-md border border-black/10 p-3 text-xs text-black/70">Full rulebook provided upon registration confirmation.</div>
                </div>
              )}
              {tab === 'Schedule' && (
                <div className="space-y-2 text-sm">
                  <div className="inline-flex items-center gap-2"><Timer className="h-4 w-4"/> Check-in: {event.checkin || '17:30 UTC'}</div>
                  <div>Round 1: {event.r1 || '18:00 UTC'}</div>
                  <div>Round 2: {event.r2 || '18:40 UTC'}</div>
                  <div>Round 3: {event.r3 || '19:20 UTC'}</div>
                </div>
              )}
            </div>
          </div>

          <aside className="p-5 border-t lg:border-t-0 lg:border-l border-black/10 bg-gray-50 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Event Date</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> {event.date}</div>
            </div>
            <div className="mt-3 rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Region</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> {event.region}</div>
            </div>
            <div className="mt-3 rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Type</div>
              <div className="mt-1 font-semibold">{event.type}</div>
            </div>
            <div className="mt-4 grid gap-2">
              <a href="#/community" className="rounded-md bg-black text-white px-4 py-2 text-center font-semibold hover:opacity-90">Register</a>
              <a href="#/community" className="rounded-md border border-black/15 px-4 py-2 text-center hover:bg-black/5">Contact Admin</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
