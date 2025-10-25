import React from 'react';
import { Megaphone, Link as LinkIcon, Users, Calendar, Gamepad2 } from 'lucide-react';

export default function CommunityHero() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white text-black">
      <div className="grid lg:grid-cols-3">
        <div className="p-8 sm:p-10 lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-md bg-black text-white px-2 py-1 text-xs">
            Community Hub
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">Join the official community channels</h2>
          <p className="mt-3 text-black/70">Find squads, share highlights, and get updates. Weekly community cups, creator collabs, and squad recruitment.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="#/community" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 font-semibold hover:opacity-90"><Megaphone className="h-4 w-4"/> Join Discord</a>
            <a href="#/news" className="inline-flex items-center gap-2 rounded-md border border-black/20 px-4 py-2 font-semibold hover:bg-black/5"><LinkIcon className="h-4 w-4"/> Community Guidelines</a>
          </div>

        </div>
        <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-black/10 bg-gray-50">
          <div className="grid gap-3 text-sm">
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Active Squads</div>
              <div className="mt-1 font-semibold">3,240+</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Weekly Events</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> 12+</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Platforms</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><Gamepad2 className="h-4 w-4"/> PC • Console • Mobile</div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4">
              <div className="text-xs text-black/60">Members</div>
              <div className="mt-1 font-semibold inline-flex items-center gap-2"><Users className="h-4 w-4"/> 820k+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
