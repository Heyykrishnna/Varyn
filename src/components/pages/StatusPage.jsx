import React, { useMemo, useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Clock, Globe2, RefreshCcw } from 'lucide-react';

function Dot({ status }) {
  const color =
    status === 'Operational'
      ? 'bg-emerald-400'
      : status === 'Degraded'
      ? 'bg-yellow-300'
      : 'bg-red-400'
    status === 'Not Created'
      ? 'bg-red-300'
      : 'bg-red-400';
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />;
}

function ServiceRow({ name, status }) {
  return (
    <div className="grid grid-cols-12 items-center gap-2 px-3 py-3 border-t border-white/10 hover:bg-white/5 transition-colors">
      <div className="col-span-6 text-sm">{name}</div>
      <div className="col-span-6 flex items-center gap-2 text-xs">
        <Dot status={status} />
        <span className="text-white/70">{status}</span>
      </div>
    </div>
  );
}

function UptimeBar({ value }) {
  return (
    <div className="w-full h-2 rounded-md bg-white/10 overflow-hidden">
      <div className="h-full bg-white transition-all duration-300" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function StatusPage() {
  const [regionView, setRegionView] = useState('Global');
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [matrix, setMatrix] = useState({ services: [], uptime: {} });

  const fetchData = () => {
    // Simulated live data fetch
    const randomStatus = () => {
      const statuses = ['Operational', 'Degraded', 'Outage'];
      return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const newMatrix = {
      services: [
        { name: 'Game Services (Matchmaking)', IN: 'Operational', EU: 'Operational', US: 'Degraded', CA: 'Degraded' },
        { name: 'Authentication', IN: 'Operational', EU: 'Degraded', US: 'Operational', CA: 'Operational' },
        { name: 'Store & Purchases', IN: 'Operational', EU: 'Operational', US: 'Not Created', CA: 'Not Created' },
        { name: 'Social & Parties', IN: 'Operational', EU: 'Degraded', US: 'Degraded', CA: 'Degraded' },
        { name: 'Leaderboards', IN: 'Operational', EU: 'Operational', US: 'Operational', CA: 'Operational' },
        { name: 'Telemetry', IN: 'Operational', EU: 'Degraded', US: 'Operational', CA: 'Degraded' },
      ],
      uptime: {
        last24h: (99 + Math.random()).toFixed(2),
        last7d: (99 + Math.random()).toFixed(2),
        last30d: (99 + Math.random()).toFixed(2),
      },
    };
    setMatrix(newMatrix);
    setLastUpdated(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter services dynamically based on region
  const filteredServices = useMemo(() => {
    if (regionView === 'Global') return matrix.services;
    return matrix.services.map(s => ({
      name: s.name,
      status: s[regionView],
    }));
  }, [regionView, matrix]);

  return (
    <section className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5" />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Service Status</h1>
          </div>
          <div className="flex items-center gap-3 text-xs text-white">
            <Clock className="h-3.5 w-3.5" />
            Last updated: {lastUpdated}
            <button
              onClick={fetchData}
              className="ml-2 flex items-center gap-1 px-2 py-1 rounded-md border border-white/15 hover:bg-white/10 transition-all"
            >
              <RefreshCcw className="h-3.5 w-3.5" /> Refresh
            </button>
          </div>
        </div>

        <p className="mt-2 text-white/70 max-w-2xl">
          Live health status of all core services across regions.
        </p>

        {/* Region Selector */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          {['Global', 'IN', 'EU', 'US', 'CA'].map((r) => (
            <button
              key={r}
              onClick={() => setRegionView(r)}
              className={`px-3 py-1.5 rounded-md border transition-all ${
                regionView === r
                  ? 'bg-white text-black border-white'
                  : 'border-white/15 text-white/80 hover:bg-white/10'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Service Table */}
        <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-12 bg-white/10 px-3 py-2 text-s text-white font-bold">
            <div className="col-span-6">Service</div>
            <div className="col-span-6">
              {regionView === 'Global' ? 'All Regions' : `Region: ${regionView}`}
            </div>
          </div>

          {regionView === 'Global'
            ? matrix.services.map((s) => (
                <div key={s.name} className="grid grid-cols-12 items-center gap-2 px-3 py-3 border-t border-white/10">
                  <div className="col-span-4 text-sm">{s.name}</div>
                  {[s.IN, s.EU, s.US, s.CA].map((region, i) => (
                    <div key={i} className="col-span-2 flex items-center gap-2 text-xs">
                      <Dot status={region} />
                      <span className="text-white/70">{region}</span>
                    </div>
                  ))}
                </div>
              ))
            : filteredServices.map((s) => (
                <ServiceRow key={s.name} name={s.name} status={s.status} />
              ))}
        </div>

        {/* Uptime Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {Object.entries(matrix.uptime).map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="text-xs text-white/60">
                Uptime ({label.replace('last', '').replace('h', 'h').replace('d', 'd')})
              </div>
              <div className="mt-1 text-lg font-semibold">{value}%</div>
              <div className="mt-2">
                <UptimeBar value={value} />
              </div>
            </div>
          ))}
        </div>

        {/* Incidents */}
        <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-4 w-4 text-yellow-300" /> Incidents
          </div>
          <p className="mt-2 text-sm text-white/70">
            No major incidents reported in the last 24 hours.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-md border border-white/15 px-2 py-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Subscribe to updates
            </span>
            <span className="text-white/50">•</span>
            <Clock className='h-3.5 w-3.5'/>
            <a href='https://github.com/Heyykrishnna' className="underline decoration-dotted cursor-pointer">
              View history
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}