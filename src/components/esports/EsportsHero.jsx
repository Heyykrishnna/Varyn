import React from 'react';
import { Play, Radio, ExternalLink } from 'lucide-react';
import { navigateTo } from '../Router';

export default function EsportsHero({ title, category, platform }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white text-black">
      <div className="grid lg:grid-cols-3">
        <div className="p-8 sm:p-10 lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-md bg-black text-white px-2 py-1 text-xs">
            {category} • {platform}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-3 text-black/70">Watch the top teams battle for the trophy. Catch the action live with instant results and standings updates.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="#/esports" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 font-semibold hover:opacity-90"><Play className="h-4 w-4"/> Watch Live</a>
            <a href="https://youtu.be/Y1J9_9-vNcU" target='blank' className="inline-flex items-center gap-2 rounded-md border border-black/20 px-4 py-2 font-semibold hover:bg-black/5"><Radio className="h-4 w-4"/> Highlights</a>
            <button onClick={() => navigateTo('community')} className="inline-flex items-center gap-2 rounded-md border border-black/20 px-4 py-2 font-semibold hover:bg-black/5"><ExternalLink className="h-4 w-4"/> Community Events</button>
          </div>
        </div>
        <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-black/10 bg-gray-50">
          <div className="grid gap-3 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Next Match</div>
              <div className="mt-1 font-semibold">Orion Esports vs. Valkyrie</div>
              <div className="mt-2 text-xs text-black/60">Today • 18:00 UTC</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Prize Pool</div>
              <div className="mt-1 font-semibold">$1,000,000</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Format</div>
              <div className="mt-1 font-semibold">Groups ➝ Playoffs • BO5 Finals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
