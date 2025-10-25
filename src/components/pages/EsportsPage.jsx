import React, { useMemo, useState } from 'react';
import EsportsHero from '../esports/EsportsHero';
import TournamentFilter from '../esports/TournamentFilter';
import MatchSchedule from '../esports/MatchSchedule';
import Standings from '../esports/Standings';
import TeamsGrid from '../esports/TeamsGrid';
import { Trophy } from 'lucide-react';

export default function EsportsPage() {
  const [category, setCategory] = useState('Global Championship');
  const [platform, setPlatform] = useState('PC');
  const [region, setRegion] = useState('Global');
  const [scheduleTab, setScheduleTab] = useState('Live');

  const headline = useMemo(() => {
    if (category === 'Global Championship') return 'PMGC Grand Finals';
    if (category === 'Regional Leagues') return `${region} Super Cup`;
    return 'Community Cups & Showmatches';
  }, [category, region]);

  return (
    <section className="relative py-10 sm:py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Trophy className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Esports</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Events, standings, and teams — follow Varyn Esports across regions with live schedules and results.</p>

        <div className="mt-8 grid gap-8">
          <EsportsHero title={headline} category={category} platform={platform} />

          <TournamentFilter
            category={category}
            setCategory={setCategory}
            platform={platform}
            setPlatform={setPlatform}
            region={region}
            setRegion={setRegion}
          />

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MatchSchedule
                tab={scheduleTab}
                setTab={setScheduleTab}
                region={region}
                platform={platform}
              />
            </div>
            <div className="lg:col-span-1">
              <Standings region={region} platform={platform} />
            </div>
          </div>

          <TeamsGrid region={region} platform={platform} />
        </div>
      </div>
    </section>
  );
}
