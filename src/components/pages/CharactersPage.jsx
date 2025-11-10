import React, { useMemo, useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CharacterCard from '../characters/CharacterCard';
import CharacterModal from '../characters/CharacterModal';

const CHARACTERS = [
  {
    id: 'valoris',
    name: 'Valoris',
    role: 'Vanguard',
    tagline: 'Frontline defender with adaptive shields.',
    difficulty: 'Medium',
    faction: 'Aegis',
    skills: [
      { name: 'Bulwark Field', type: 'Ability', description: 'Deploys a forward barrier that absorbs projectile damage and amplifies allied shots passing through.' },
      { name: 'Kinetic Rush', type: 'Movement', description: 'Short dash that grants brief damage reduction and staggers enemies on contact.' },
      { name: 'Aegis Overload', type: 'Ultimate', description: 'Expands shields to allies in range, converting blocked damage into temporary health.' },
      { name: 'Reactive Armor', type: 'Passive', description: 'Automatically reinforces armor when taking heavy damage, reducing incoming attacks.' },
      { name: 'Guardian Slam', type: 'Ability', description: 'Leaps forward and slams the ground, generating an energy pulse that pushes enemies back.' },
      { name: 'Radiant Wall', type: 'Ability', description: 'Projects a holographic wall that blocks enemy vision and bullets for a short time.' },
    ],
    image: '/Valoris.png',
  },
  {
    id: 'embera',
    name: 'Embera',
    role: 'Artillery',
    tagline: 'Area denial and scorched-zone control.',
    difficulty: 'High',
    faction: 'Helios',
    skills: [
      { name: 'Incendiary Arc', type: 'Ability', description: 'Lobs a magma charge that leaves a burning trail, slowing enemies.' },
      { name: 'Thermal Bloom', type: 'Ability', description: 'Ignites ground zones that intensify over time, forcing repositioning.' },
      { name: 'Solar Flare', type: 'Ultimate', description: 'Calls down a concentrated flare that explodes after a delay for massive damage.' },
      { name: 'Volcanic Surge', type: 'Ability', description: 'Erupts molten rock from the ground, damaging enemies in a wide radius.' },
      { name: 'Overheat Protocol', type: 'Passive', description: 'Increases fire damage as weapon temperature rises.' },
      { name: 'Flame Vortex', type: 'Ability', description: 'Creates a spinning vortex of fire that pulls enemies inward before exploding.' },
    ],
    image: '/Embera.png',
  },
  {
    id: 'nyria',
    name: 'Nyria',
    role: 'Infiltrator',
    tagline: 'Silent movement, perfect chaos.',
    difficulty: 'Low',
    faction: 'NullSec',
    skills: [
      { name: 'Shadow Mesh', type: 'Ability', description: 'Cloaks herself in digital static, becoming undetectable to tracking systems.' },
      { name: 'Echo Spike', type: 'Ability', description: 'Deploys a pulse that reveals enemies and disables their abilities.' },
      { name: 'Oblivion Drive', type: 'Ultimate', description: 'Temporarily erases herself from sensors while draining nearby enemy energy.' },
      { name: 'Phase Dagger', type: 'Ability', description: 'Throws an energy dagger that teleports her to the target location.' },
      { name: 'Silent Protocol', type: 'Passive', description: 'Makes footsteps inaudible while cloaked.' },
      { name: 'Disrupt Field', type: 'Ability', description: 'Generates an EMP that disables enemy shields temporarily.' },
    ],
    image: '/Nyria.png',
  },
  {
    id: 'rheon',
    name: 'Rheon',
    role: 'Support',
    tagline: 'The architect of resilience and renewal.',
    difficulty: 'Medium',
    faction: 'Echelon',
    skills: [
      { name: 'Regen Field', type: 'Ability', description: 'Deploys a zone that restores ally health gradually.' },
      { name: 'Pulse Revive', type: 'Ability', description: 'Instantly revives a fallen ally within range.' },
      { name: 'Sanctum Core', type: 'Ultimate', description: 'Creates a dome that grants invulnerability for a brief duration.' },
      { name: 'Nano Beacon', type: 'Ability', description: 'Summons a beacon that increases healing received by allies nearby.' },
      { name: 'Deflective Aura', type: 'Passive', description: 'Reflects a small portion of damage back to attackers.' },
      { name: 'Repair Burst', type: 'Ability', description: 'Heals nearby allies instantly when activated.' },
    ],
    image: '/Rheon.png',
  },
  {
    id: 'lyra',
    name: 'Lyra',
    role: 'Sniper',
    tagline: 'Long-range precision and cosmic focus.',
    difficulty: 'High',
    faction: 'Vortex',
    skills: [
      { name: 'Astral Scope', type: 'Ability', description: 'Activates thermal vision for perfect accuracy on marked targets.' },
      { name: 'Phase Shot', type: 'Ability', description: 'Bullet passes through cover but loses minor damage.' },
      { name: 'Celestial Strike', type: 'Ultimate', description: 'Summons a beam of starlight that obliterates enemies in a line.' },
      { name: 'Holo Decoy', type: 'Ability', description: 'Creates a light projection to mislead enemies.' },
      { name: 'Silent Breach', type: 'Passive', description: 'Firing from stealth deals bonus damage.' },
      { name: 'Orbital Sync', type: 'Ability', description: 'Marks targets for orbital precision support fire.' },
    ],
    image: '/Lyra.png',
  },
  {
    id: 'draven',
    name: 'Draven',
    role: 'Brawler',
    tagline: 'Close combat dominance powered by rage systems.',
    difficulty: 'Medium',
    faction: 'ForgeCore',
    skills: [
      { name: 'Overdrive', type: 'Ability', description: 'Temporarily boosts melee speed and damage.' },
      { name: 'Impact Surge', type: 'Ability', description: 'Slam the ground to create a shockwave that knocks enemies back.' },
      { name: 'Titan Protocol', type: 'Ultimate', description: 'Activates full armor mode, increasing defense and regeneration drastically.' },
      { name: 'Molten Fist', type: 'Ability', description: 'Launches a flaming punch that burns enemies over time.' },
      { name: 'Adrenal Core', type: 'Passive', description: 'Regains health on each kill during Overdrive.' },
      { name: 'Earthsplitter', type: 'Ability', description: 'Cracks the ground with a heavy blow, dealing massive AOE damage.' },
    ],
    image: '/Draven.png',
  },
  {
    id: 'zephyr',
    name: 'Zephyr',
    role: 'Scout',
    tagline: 'Speed and wind are his greatest allies.',
    difficulty: 'Medium',
    faction: 'Stratos',
    skills: [
      { name: 'Wind Dash', type: 'Movement', description: 'Instantly dashes in a direction leaving a wind trail that damages enemies.' },
      { name: 'Aerial Surge', type: 'Ability', description: 'Leaps into the air and performs a spinning slash.' },
      { name: 'Cyclone Edge', type: 'Ultimate', description: 'Creates a massive cyclone that lifts enemies and slams them down.' },
      { name: 'Swift Steps', type: 'Passive', description: 'Movement speed increases as health decreases.' },
      { name: 'Tempest Kick', type: 'Ability', description: 'A high-velocity kick that pushes enemies backward.' },
      { name: 'Storm Burst', type: 'Ability', description: 'Channels wind energy into a radial burst attack.' },
    ],
    image: '/Zephyr.png',
  },
  {
    id: 'kaelis',
    name: 'Kaelis',
    role: 'Technomancer',
    tagline: 'Master of digital sorcery and energy constructs.',
    difficulty: 'High',
    faction: 'NeonCoven',
    skills: [
      { name: 'Data Surge', type: 'Ability', description: 'Overloads enemy systems causing temporary paralysis.' },
      { name: 'Drone Swarm', type: 'Ability', description: 'Releases nano-drones that seek out enemies.' },
      { name: 'Quantum Rift', type: 'Ultimate', description: 'Creates a dimensional tear pulling enemies into stasis.' },
      { name: 'Hologram Clone', type: 'Ability', description: 'Creates a decoy that explodes when destroyed.' },
      { name: 'Mana Core', type: 'Passive', description: 'Regenerates ability power faster while stationary.' },
      { name: 'Pulse Matrix', type: 'Ability', description: 'Deploys a rotating field that reflects projectiles.' },
    ],
    image: '/Kaelis.png',
  },
  {
    id: 'astra',
    name: 'Astra',
    role: 'Controller',
    tagline: 'Cosmic manipulation through gravitational fields.',
    difficulty: 'High',
    faction: 'Celestia',
    skills: [
      { name: 'Starfall', type: 'Ability', description: 'Summons meteor fragments to strike a target area.' },
      { name: 'Gravity Well', type: 'Ability', description: 'Pulls enemies into a small radius, slowing them drastically.' },
      { name: 'Supernova', type: 'Ultimate', description: 'Unleashes cosmic energy, stunning all enemies in range.' },
      { name: 'Orbital Shift', type: 'Ability', description: 'Teleports to any marked ally or beacon.' },
      { name: 'Constellation Guard', type: 'Passive', description: 'Generates a shield every few seconds that absorbs one hit.' },
      { name: 'Celestial Chains', type: 'Ability', description: 'Links enemies together causing shared damage.' },
    ],
    image: '/Astra.png',
  },
  {
    id: 'draxon',
    name: 'Draxon',
    role: 'Heavy Gunner',
    tagline: 'A powerhouse with unstoppable firepower.',
    difficulty: 'Medium',
    faction: 'ForgeCore',
    skills: [
      { name: 'Plasma Barrage', type: 'Ability', description: 'Fires a stream of molten plasma rounds.' },
      { name: 'Overclock', type: 'Ability', description: 'Temporarily boosts weapon fire rate.' },
      { name: 'Annihilator Core', type: 'Ultimate', description: 'Deploys shoulder cannons for sustained area bombardment.' },
      { name: 'Shockwave Stomp', type: 'Ability', description: 'Creates a seismic shockwave that damages and slows enemies.' },
      { name: 'Iron Shell', type: 'Passive', description: 'Reduces recoil and damage taken when stationary.' },
      { name: 'Burnout Strike', type: 'Ability', description: 'Overheats his gun to deliver a close-range explosive attack.' },
    ],
    image: '/Draxon.png',
  },
  {
    id: 'vera',
    name: 'Vera',
    role: 'Hacker',
    tagline: 'Code is her weapon, chaos her art.',
    difficulty: 'Medium',
    faction: 'GlitchNet',
    skills: [
      { name: 'System Breach', type: 'Ability', description: 'Hacks enemy systems to disable abilities temporarily.' },
      { name: 'Data Storm', type: 'Ability', description: 'Sends out a pulse that reveals and slows enemies.' },
      { name: 'Digital Overload', type: 'Ultimate', description: 'Overheats all enemy weapons and HUDs simultaneously.' },
      { name: 'Viral Upload', type: 'Ability', description: 'Infects enemies, causing damage over time.' },
      { name: 'Silent Patch', type: 'Passive', description: 'Remains invisible to enemy radar while crouching.' },
      { name: 'Backdoor Entry', type: 'Ability', description: 'Teleports through digital terminals across short distances.' },
    ],
    image: '/Vera.png',
  },
  {
    id: 'orion',
    name: 'Orion',
    role: 'Commander',
    tagline: 'Strategic brilliance forged in light and discipline.',
    difficulty: 'High',
    faction: 'Aegis Prime',
    skills: [
      { name: 'Command Pulse', type: 'Ability', description: 'Boosts ally speed and damage in an area.' },
      { name: 'Judgment Blade', type: 'Ability', description: 'Swings an energy sword releasing a shockwave.' },
      { name: 'Divine Order', type: 'Ultimate', description: 'Summons orbital beams to strike enemy lines.' },
      { name: 'Tactical Rally', type: 'Ability', description: 'Calls nearby allies to regroup and heal slightly.' },
      { name: 'Honor Guard', type: 'Passive', description: 'Allies near Orion take reduced damage.' },
      { name: 'Solar Command', type: 'Ability', description: 'Deploys a drone that attacks enemies and highlights them for allies.' },
    ],
    image: '/Orion.png',
  },
];

export default function CharactersPage() {
  const [activeId, setActiveId] = useState(null);
  const [gridVisible, setGridVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const toggleMute = () => setMuted(prev => !prev);
  const activeCharacter = useMemo(() => CHARACTERS.find(c => c.id === activeId) || null, [activeId]);

  useEffect(() => {
    setGridVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden pt-6">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://res.cloudinary.com/dqh5g2nmn/video/upload/v1762752130/GAMECHARCTERS_w9ksfs.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <button
          onClick={toggleMute}
          className="absolute top-28 left-36 z-20 bg-black text-white p-2 rounded-md hover:bg-black/70 transition-colors"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm -z-5" />

      <Navbar />
      <main className="pt-36 pb-24 relative z-10">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Particle Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full absolute animate-pulse top-1/3 left-1/4 opacity-60 blur-sm"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full absolute animate-pulse top-2/3 left-2/3 opacity-60 blur-sm"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full absolute animate-pulse top-1/2 left-3/4 opacity-60 blur-sm"></div>
          </div>
          <header className="mb-10 flex items-end justify-between relative z-10">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-white">
                Operatives
              </h1>
              <p className="mt-2 text-white/70 max-w-2xl">Explore a roster of specialized operatives. Inspect their roles, kits, and strategic identities in a sleek, futuristic interface.</p>
            </div>
          </header>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ease-in-out ${gridVisible ? 'opacity-100' : 'opacity-0'}`}>
            {CHARACTERS.map((c) => (
              <CharacterCard
                key={c.id}
                character={c}
                onOpen={() => setActiveId(c.id)}
                className="hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-transform duration-300 ease-out animate-[zoomIn_0.6s_ease-out_forwards]"
              />
            ))}
          </div>
        </section>
      </main>
      {activeCharacter && (
        <div className="fixed inset-0 flex items-center justify-center p-4 ring-2 ring-fuchsia-400/60 ring-offset-4 ring-offset-black rounded-lg shadow-[0_0_30px_rgba(217,70,239,0.5)] z-50 transition-transform transition-opacity duration-300 ease-out scale-100 opacity-100">
          <CharacterModal character={activeCharacter} onClose={() => setActiveId(null)} />
        </div>
      )}
    </div>
  );
}
