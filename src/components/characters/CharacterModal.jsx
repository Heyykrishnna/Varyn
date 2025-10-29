import React, { useEffect } from 'react';

export default function CharacterModal({ character, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black" onClick={onClose} />
      <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-16 lg:inset-x-32 top-24 bottom-16 overflow-auto">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-6">
              <div className="w-28 sm:w-32 md:w-40 lg:w-48 aspect-square rounded-lg overflow-hidden shrink-0">
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <br/>
                    <h2 className="text-2xl md:text-6xl font-bold tracking-wide truncate pb-3">{character.name}</h2>
                    <div className="mt-1 text-white/80 truncate">{character.role} • {character.faction}</div>
                    <p className="mt-3 text-white/80 max-w-2xl">{character.tagline}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-3 py-2 rounded-md text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/15 whitespace-nowrap"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {character.skills.map((s, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">{s.type}</div>
                  <div className="mt-1 text-lg font-semibold">{s.name}</div>
                  <p className="mt-2 text-white/80 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/80">
              <span className="px-2 py-1 rounded border border-white/15 bg-white/5">Difficulty: {character.difficulty}</span>
              <span className="px-2 py-1 rounded border border-white/15 bg-white/5">Faction: {character.faction}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
