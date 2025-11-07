import React, { useMemo, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MapCard from '../maps/MapCard';
import MapModal from '../maps/MapModal';
import WeaponCard from '../weapon/WeaponCard';
import { motion } from 'framer-motion';

const gradients = {
  vandal: '/Weapon/Vandal.png',
  phantom: '/Weapon/Phantom.png',
  operator: '/Weapon/Operator.png',
  sheriff: '/Weapon/Sheriff.png',
  spectre: '/Weapon/Spectre.png',
  odin: '/Weapon/Odin.png',
  judge: '/Weapon/Judge.png',
  guardian: '/Weapon/Guardian.png',
  kar98k: '/Weapon/Kar98k.png',
  awm: '/Weapon/AWM.png',
  ump45: '/Weapon/UMP45.png',
  vector: '/Weapon/Vector.png',
  akm: '/Weapon/AKM.png',
  classic: '/Weapon/Classic.png',
  deagle: '/Weapon/deagle.png',
  mp5: '/Weapon/mp5.png',
  scar: '/Weapon/scar.png',
  m249: '/Weapon/m249.png',
  revolver: '/Weapon/revolver.png',
  uzi: '/Weapon/uzi.png',
  m416: '/Weapon/M416.png',
};

const WEAPONS = [
    {
      id: 'vandal',
      name: 'Vandal',
      biome: 'Rifle • Medium Range • High Damage',
      tagline: 'Fully automatic rifle offering consistent power and precision across all ranges.',
      previewImage: gradients.vandal,
    },
    {
      id: 'phantom',
      name: 'Phantom',
      biome: 'Rifle • Suppressed • Stealth',
      tagline: 'A silenced rifle ideal for stealth play and controlled sprays at close to mid-range.',
      previewImage: gradients.phantom,
    },
    {
      id: 'operator',
      name: 'Operator',
      biome: 'Sniper • Long Range • One-Shot Kill',
      tagline: 'High-caliber sniper that eliminates enemies instantly with accurate, single shots.',
      previewImage: gradients.operator,
    },
    {
      id: 'sheriff',
      name: 'Sheriff',
      biome: 'Pistol • High Impact • Precision',
      tagline: 'A hand cannon that rewards accuracy with lethal stopping power.',
      previewImage: gradients.sheriff,
    },
    {
      id: 'spectre',
      name: 'Spectre',
      biome: 'SMG • Short Range • High Fire Rate',
      tagline: 'A lightweight submachine gun with a rapid fire rate and strong recoil control.',
      previewImage: gradients.spectre,
    },
    {
      id: 'odin',
      name: 'Odin',
      biome: 'Machine Gun • Suppression • Heavy',
      tagline: 'A heavy machine gun designed for sustained fire and area denial.',
      previewImage: gradients.odin,
    },
    {
      id: 'judge',
      name: 'Judge',
      biome: 'Shotgun • Close Quarters • Automatic',
      tagline: 'Automatic shotgun built for rapid engagements in tight spaces.',
      previewImage: gradients.judge,
    },
    {
      id: 'guardian',
      name: 'Guardian',
      biome: 'Rifle • Semi-Auto • Precision',
      tagline: 'Semi-automatic rifle that rewards controlled bursts and precision shooting.',
      previewImage: gradients.guardian,
    },
    {
      id: 'kar98k',
      name: 'Kar98k',
      biome: 'Sniper • Bolt-Action • Extreme Range',
      tagline: 'Classic bolt-action sniper rifle famed for its deadly precision.',
      previewImage: gradients.kar98k,
    },
    {
      id: 'm416',
      name: 'M416',
      biome: 'Rifle • Versatile • Balanced',
      tagline: 'A balanced assault rifle combining control, power, and adaptability.',
      previewImage: gradients.m416,
    },
    {
      id: 'awm',
      name: 'AWM',
      biome: 'Sniper • Long Range • Extreme Damage',
      tagline: 'A legendary sniper rifle capable of one-shot kills to the head and chest.',
      previewImage: gradients.awm,
    },
    {
      id: 'ump45',
      name: 'UMP45',
      biome: 'SMG • Close Range • Moderate Damage',
      tagline: 'Reliable and easy to control SMG effective in close-quarters combat.',
      previewImage: gradients.ump45,
    },
    {
      id: 'vector',
      name: 'Vector',
      biome: 'SMG • Close Range • Ultra Fire Rate',
      tagline: 'Compact SMG with the highest fire rate, melting enemies up close.',
      previewImage: gradients.vector,
    },
    {
      id: 'akm',
      name: 'AKM',
      biome: 'Rifle • High Damage • Strong Recoil',
      tagline: 'Powerful assault rifle that trades control for devastating damage output.',
      previewImage: gradients.akm,
    },
    {
      id: 'classic',
      name: 'Classic',
      biome: 'Pistol • Default • Burst Mode',
      tagline: 'Reliable sidearm with burst fire mode for close-range encounters.',
      previewImage: gradients.classic,
    },
    {
      id: 'deagle',
      name: 'Desert Eagle',
      biome: 'Pistol • High Damage • Precision',
      tagline: 'A powerful sidearm with exceptional accuracy and stopping power, perfect for clutch rounds.',
      previewImage: gradients.deagle,
    },
    {
      id: 'mp5',
      name: 'MP5',
      biome: 'SMG • Mid Range • Steady Fire',
      tagline: 'A balanced SMG offering control, precision, and reliability in every close encounter.',
      previewImage: gradients.mp5,
    },
    {
      id: 'scar',
      name: 'SCAR-L',
      biome: 'Rifle • Long Range • Tactical',
      tagline: 'A modern rifle known for stability, low recoil, and high accuracy at range.',
      previewImage: gradients.scar,
    },
    {
      id: 'm249',
      name: 'M249',
      biome: 'LMG • Suppressive • Heavy Fire',
      tagline: 'Light machine gun built for heavy suppression and extended firefights.',
      previewImage: gradients.m249,
    },
    {
      id: 'revolver',
      name: 'Revolver',
      biome: 'Pistol • Classic • High Caliber',
      tagline: 'Vintage revolver delivering deadly shots with immense recoil and accuracy.',
      previewImage: gradients.revolver,
    },
    {
      id: 'uzi',
      name: 'Uzi',
      biome: 'SMG • Close Range • Rapid Fire',
      tagline: 'Compact and fast-firing SMG that dominates tight spaces and quick encounters.',
      previewImage: gradients.uzi,
    },
];

export default function MapsPage() {
  const maps = useMemo(() => WEAPONS, []);
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
            <h1 className="text-6xl sm:text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-white">
            CHOOSE YOUR <br/> WEAPON
              </h1>
              <p className="mt-2 text-white/70 max-w-2xl mb-16">Explore each weapon’s unique power, precision, and playstyle. Master recoil, learn damage patterns, and find your perfect loadout for every battle.</p>
            </div>
          </div>
        </section>

        <section className="relative py-6 sm:py-10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {maps.map((m) => (
                <WeaponCard key={m.id} map={m} onOpen={() => setActive(m)} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}