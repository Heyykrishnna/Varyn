import React, { useMemo } from 'react';

function Row({ i, team, pts }) {
  return (
    <div className="grid grid-cols-12 px-4 py-3 border-t border-white/10 bg-white/5">
      <div className="col-span-8 flex items-center gap-2"><span className="text-white/50 text-xs w-5">{i}</span> {team}</div>
      <div className="col-span-4 text-right font-semibold">{pts}</div>
    </div>
  );
}

export default function Standings({ region, platform }) {
  const rows = useMemo(() => {
    const base = {
      Global: [
        { team: 'Orion Esports', pts: 98 },
        { team: 'Valkyrie', pts: 91 },
        { team: 'StormUnit', pts: 87 },
        { team: 'Nebula', pts: 81 },
      ],
      EMEA: [
        { team: 'Valkyrie', pts: 102 },
        { team: 'PolarWave', pts: 96 },
        { team: 'Crimson', pts: 90 },
        { team: 'Azure', pts: 84 },
      ],
      APAC: [
        { team: 'Nebula', pts: 104 },
        { team: 'Lotus', pts: 97 },
        { team: 'TigerClaw', pts: 88 },
        { team: 'Sakura', pts: 83 },
      ],
      Americas: [
        { team: 'Orion Esports', pts: 101 },
        { team: 'StormUnit', pts: 95 },
        { team: 'DesertFox', pts: 89 },
        { team: 'Rift', pts: 82 },
      ],
    };
    return base[region] || base.Global;
  }, [region]);

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="grid grid-cols-12 bg-white/10 px-4 py-2 text-xs text-white/80">
        <div className="col-span-8">Standings • {region} • {platform}</div>
        <div className="col-span-4 text-right">Points</div>
      </div>
      {rows.map((r, idx) => (
        <Row key={r.team} i={idx+1} team={r.team} pts={r.pts} />
      ))}
    </div>
  );
}
