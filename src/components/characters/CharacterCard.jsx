import React from 'react';

export default function CharacterCard({ character, onOpen }) {
  const { name, role, tagline, difficulty, faction, image } = character;

  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
      <div className="w-full aspect-square overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${name} banner`}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-white/10" />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-wide">{name}</h3>
          <span className="text-[10px] uppercase px-2 py-1 rounded bg-white/10 border border-white/15 text-white/80">{difficulty}</span>
        </div>
        <div className="mt-2 text-sm text-white/70">{role} • {faction}</div>
        <p className="mt-3 text-white/80 text-sm leading-relaxed">{tagline}</p>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={onOpen}
            className="px-3 py-2 rounded-md text-sm font-medium border-black bg-black text-white hover:bg-white hover:text-black shadow-md hover:shadow-lg transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      <div className="pointer-events-none absolute -inset-px bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}


