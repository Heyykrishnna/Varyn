import React, { useMemo, useState, useRef } from 'react';
import { Play, X, Globe2, RefreshCw, Download, ChevronDown } from 'lucide-react';

function TrailerModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden border border-white/15" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 z-10 inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 text-white">
          <X className="h-5 w-5" />
        </button>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState('IN');
  const [players, setPlayers] = useState(284_312);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const refreshPlayers = () => {
    const delta = Math.floor(Math.random() * 5000) - 2500;
    setPlayers((p) => Math.max(100_000, p + delta));
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center">
      {/* Full Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/GAMETRAILER.mp4"
          autoPlay
          loop
          muted={muted}
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 bg-black/50 text-white/50 p-2 rounded-md hover:bg-black/70 transition-colors"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-8xl md:text-9xl font-black text-white tracking-wider mb-4 drop-shadow-2xl">
          VARYN
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
          Drop In. Adapt Fast. Outlast Everyone.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href='/#/download'>
            <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-lg font-bold hover:bg-gray-200 transition-colors">
              <Download className="h-5 w-5" /> GET THE GAME
            </button>
          </a>
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white/10 transition-colors">
            <Play className="h-5 w-5" /> WATCH TRAILER
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/20 px-5 py-3 rounded">
            <Globe2 className="h-5 w-5 text-white" />
            <select 
              value={region} 
              onChange={(e) => setRegion(e.target.value)} 
              className="bg-transparent text-white outline-none font-semibold cursor-pointer"
            >
              <option value="IN" className="bg-black">IN</option>
              <option value="EU" className="bg-black">EU</option>
              <option value="US" className="bg-black">US</option>
              <option value="CA" className="bg-black">CA</option>
            </select>
          </div>
          
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/20 px-5 py-3 rounded">
            <span className="font-bold text-white text-lg">{players.toLocaleString()}</span>
            <span className="text-white/70">PLAYERS ONLINE</span>
            <button 
              onClick={refreshPlayers} 
              className="ml-2 hover:bg-white/10 p-1 rounded transition-colors" 
              aria-label="Refresh"
            >
              <RefreshCw className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium tracking-wider bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition">
            SCROLL DOWN
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>

      <TrailerModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
