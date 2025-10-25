import React, { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, Globe2 } from 'lucide-react';

function Dot({ status }) {
  const color = status==='Operational' ? 'bg-emerald-400' : status==='Degraded' ? 'bg-yellow-300' : 'bg-red-400';
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />;
}

function ServiceRow({ name, regions }) {
  return (
    <div className="grid grid-cols-12 items-center gap-2 px-3 py-3 border-t border-white/10">
      <div className="col-span-4 text-sm">{name}</div>
      {regions.map((s, i)=> (
        <div key={i} className="col-span-2 flex items-center gap-2 text-xs">
          <Dot status={s} />
          <span className="text-white/70 hidden sm:inline">{s}</span>
        </div>
      ))}
    </div>
  );
}

function UptimeBar({ value }) {
  return (
    <div className="w-full h-2 rounded-md bg-white/10 overflow-hidden">
      <div className="h-full bg-white" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function StatusPage() {
  const [regionView, setRegionView] = useState('Global');
  const lastUpdated = new Date().toLocaleString();

  const matrix = useMemo(() => ({
    services: [
      { name: 'Game Services (Matchmaking)', NA: 'Operational', EU: 'Operational', APAC: 'Operational', SA: 'Operational' },
      { name: 'Authentication', NA: 'Operational', EU: 'Operational', APAC: 'Operational', SA: 'Operational' },
      { name: 'Store & Purchases', NA: 'Operational', EU: 'Operational', APAC: 'Degraded', SA: 'Operational' },
      { name: 'Social & Parties', NA: 'Degraded', EU: 'Operational', APAC: 'Operational', SA: 'Operational' },
      { name: 'Leaderboards', NA: 'Operational', EU: 'Operational', APAC: 'Operational', SA: 'Operational' },
      { name: 'Telemetry', NA: 'Operational', EU: 'Operational', APAC: 'Operational', SA: 'Operational' },
    ],
    uptime: { last24h: 99.92, last7d: 99.80, last30d: 99.72 },
  }), []);

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5" />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Status</h1>
          </div>
          <div className="text-xs text-white/60 flex items-center gap-2"><Clock className="h-3.5 w-3.5"/> Last updated: {lastUpdated}</div>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Live service health across regions and core services.</p>

        <div className="mt-6 flex items-center gap-2 text-xs">
          {['Global','NA','EU','APAC','SA'].map(r => (
            <button key={r} onClick={()=>setRegionView(r)} className={`px-3 py-1.5 rounded-md border ${regionView===r ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>{r}</button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-12 bg-white/10 px-3 py-2 text-xs text-white/80">
            <div className="col-span-4">Service</div>
            <div className="col-span-2">NA</div>
            <div className="col-span-2">EU</div>
            <div className="col-span-2">APAC</div>
            <div className="col-span-2">SA</div>
          </div>
          {matrix.services.map(s => (
            <ServiceRow key={s.name} name={s.name} regions={[s.NA, s.EU, s.APAC, s.SA]} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-xs text-white/60">Uptime (24h)</div>
            <div className="mt-1 text-lg font-semibold">{matrix.uptime.last24h}%</div>
            <div className="mt-2"><UptimeBar value={matrix.uptime.last24h} /></div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-xs text-white/60">Uptime (7d)</div>
            <div className="mt-1 text-lg font-semibold">{matrix.uptime.last7d}%</div>
            <div className="mt-2"><UptimeBar value={matrix.uptime.last7d} /></div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-xs text-white/60">Uptime (30d)</div>
            <div className="mt-1 text-lg font-semibold">{matrix.uptime.last30d}%</div>
            <div className="mt-2"><UptimeBar value={matrix.uptime.last30d} /></div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex items-center gap-2 font-semibold"><AlertTriangle className="h-4 w-4 text-yellow-300"/> Incidents</div>
          <p className="mt-2 text-sm text-white/70">No major incidents reported in the last 24 hours.</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-md border border-white/15 px-2 py-1"><CheckCircle2 className="h-3.5 w-3.5"/> Subscribe to updates</span>
            <span className="text-white/50">•</span>
            <span className="underline decoration-dotted">View history</span>
          </div>
        </div>
      </div>
    </section>
  );
}
