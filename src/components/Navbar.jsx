import React from 'react';
import { Gamepad2, Trophy, Users, Newspaper, CalendarDays, ShieldCheck, ShoppingBag, Sparkles, Webhook, Map, Sword } from 'lucide-react';
import { navigateTo } from './Router';
import Button from './playnow';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/20 backdrop-blur-xl bg-black/70 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => navigateTo('')} className="flex items-center group">
          <img
            src="/VARYNLOGOF-removebg-preview.png"
            alt="VARYN Logo"
            className="h-14 w-auto"
            style={{ maxHeight: '6rem' }}
          />
          <span className="font-semibold tracking-widest text-white uppercase">VARYN</span>
        </button>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <li>
            <button onClick={() => navigateTo('community')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><Users className="h-4 w-4" /> Community</button>
          </li>
          <li>
            <button onClick={() => navigateTo('maps')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><Map className="h-4 w-4" /> Maps</button>
          </li>
          <li>
            <button onClick={() => navigateTo('characters')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><Webhook className="h-4 w-4" /> Characters</button>
          </li>
          <li>
            <button onClick={() => navigateTo('esports')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><Trophy className="h-4 w-4" /> Esports</button>
          </li>
          <li>
            <button onClick={() => navigateTo('seasons')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Seasons</button>
          </li>
          <li>
            <button onClick={() => navigateTo('news')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><Newspaper className="h-4 w-4" /> News</button>
          </li>
          <li>
            <button onClick={() => navigateTo('weapon')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><Sword className="h-4 w-4" /> Weapons</button>
          </li>
          <li>
            <button onClick={() => navigateTo('store')} className="hover:text-white hover:drop-shadow-[0_0_6px_#a855f7] transition-all flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Store</button>
          </li>
        </ul>
        <div className="hover:drop-shadow-[0_0_8px_#a855f7] transition-all">
          <Button />
        </div>
      </nav>
    </header>
  );
}