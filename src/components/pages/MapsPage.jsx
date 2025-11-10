import React, { useMemo, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MapCard from '../maps/MapCard';
import MapModal from '../maps/MapModal';
import { motion } from 'framer-motion';

const gradients = {
  dunes1: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/57b91410-3a1d-471e-ae1e-91cfac260e08.png',
  dunes2: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/42334946-40bf-4a2e-99de-df845ed7553a.png',
  dunes3: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/f5259e45-1d78-464c-809e-f0bcb36efb67.png',
  tundra1: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/afe59588-be73-4d77-b17c-6742d9cf6d53.png',
  tundra2: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/8a8c8d22-c0a5-485e-b0bb-5c9dbf408838.png',
  tundra3: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/41f0e4fd-0dc1-44db-a8ce-d12826335a6c.png',
  jungle1: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/2cae702f-babb-4cc1-a9e3-dd59a68d5191.png',
  jungle2: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6daeec35-c3fa-435f-a076-7b35ac71b233.png',
  jungle3: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/7f9cca19-f59f-4c78-a0c0-4d348e2338be.png',
  city1: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9e4d9a43-f5b2-4840-b8b9-442f2c26be79.png',
  city2: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/7af75142-9a30-4d13-9110-ff68b9c547c9.png',
  city3: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/598959fd-e95a-48dc-9812-442fc1eaf0f0.png',
  isles1: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/53a3d480-fd16-4364-9335-4084da799c33.png',
  isles2: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6832253d-0790-482b-88f1-f7717c080b4c.png',
  isles3: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/572a0e9b-3253-448a-bc8f-d1d39ee1adba.png',
  crater1: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/356e95b6-e648-4265-8366-24ee0f145d83.png',
  crater2: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9c0e5d2a-a352-4b73-875d-a4adf4ba7c1b.png',
  crater3: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/0bb4903b-03d9-44bc-bfe0-a7f5b2090493.png',
};

const MAPS = [
  {
    id: 'auric-dunes',
    name: 'Auric Dunes',
    biome: 'Desert • Open Fields • Wind Tunnels',
    size: 'XL',
    tagline: 'Golden sands, shifting cover, and zip-wind caverns for dynamic rotations.',
    description: 'Auric Dunes features wide macro sightlines broken by ruined pillars and dune arcs. Wind tunnels enable high-risk, high-reward rotations. Control water wells and relay towers to dictate endgames.',
    previewGradient: gradients.dunes1,
    previewImage: gradients.dunes1,
    gallery: [gradients.dunes1, gradients.dunes2, gradients.dunes3],
    features: [
      { tag: 'Rotation', title: 'Wind Caverns', description: 'Bidirectional tunnels to traverse POIs quickly with audible cues for counterplay.' },
      { tag: 'POI', title: 'Obelisk Ridge', description: 'High ground with limited cover. Rewarding but vulnerable to cross angles.' },
      { tag: 'Objective', title: 'Relay Towers', description: 'Activate to reveal next two circles. Hotly contested mid-game objective.' },
    ],
  },
  {
    id: 'frost-tundra',
    name: 'Frost Tundra',
    biome: 'Arctic • Frozen Lakes • Snowstorms',
    size: 'L',
    tagline: 'Whiteout storms change fights. Ice lakes crack under fire, forcing displacement.',
    description: 'A layered arctic with cliff networks and frozen lakes. Timed snowstorms reduce visibility and dampen audio. Smart flanks and vertical play rule the endgame.',
    previewGradient: gradients.tundra1,
    previewImage: gradients.tundra1,
    gallery: [gradients.tundra1, gradients.tundra2, gradients.tundra3],
    features: [
      { tag: 'Dynamic', title: 'Whiteout Fronts', description: 'Periodic blizzards limit vision and change push timings.' },
      { tag: 'Traversal', title: 'Ice Cracks', description: 'Sustained fire shatters ice, creating noise and forcing rotations.' },
      { tag: 'Loot', title: 'Supply Bunkers', description: 'Hidden vaults with late-game meds and ammo corridors.' },
    ],
  },
  {
    id: 'verdant-expanse',
    name: 'Verdant Expanse',
    biome: 'Jungle • Waterfalls • Rope Lanes',
    size: 'M',
    tagline: 'Dense foliage, vertical waterfalls, and rope lanes for daring flanks.',
    description: 'A lush rainforest with sound-masking waterfalls and looping rope lanes. Third-party risk is high; positioning and timing separate winners.',
    previewGradient: gradients.jungle1,
    previewImage: gradients.jungle1,
    gallery: [gradients.jungle1, gradients.jungle2, gradients.jungle3],
    features: [
      { tag: 'Audio', title: 'Waterfall Mask', description: 'Mask pushes with ambient waterfall noise to break stalemates.' },
      { tag: 'Traversal', title: 'Rope Lanes', description: 'One-way zip networks that enable surgical flanks.' },
      { tag: 'POI', title: 'Canopy Labs', description: 'Mid-map lab complex with layered fights and multi-entry control.' },
    ],
  },
  {
    id: 'neon-sprawl',
    name: 'Neon Sprawl',
    biome: 'Urban • Rooftops • Holo Ads',
    size: 'L',
    tagline: 'Close-quarters urban grids with rooftop chains and neon-lit lanes.',
    description: 'A cyber-urban sandbox of rooftops, alleys, and vertical signage. Rooftop chains define power positions; street-level lanes favor shotguns and smokes.',
    previewGradient: gradients.city1,
    previewImage: gradients.city1,
    gallery: [gradients.city1, gradients.city2, gradients.city3],
    features: [
      { tag: 'Vertical', title: 'Rooftop Chains', description: 'Connected rooftops that reward early control and anchor play.' },
      { tag: 'Vision', title: 'Holo Flicker', description: 'Neon ads intermittently flicker, creating timing windows for crosses.' },
      { tag: 'POI', title: 'Transit Nexus', description: 'Hub station with rotating cover and loot escalations.' },
    ],
  },
  {
    id: 'azure-isles',
    name: 'Azure Isles',
    biome: 'Archipelago • Bridges • Sea Caves',
    size: 'M',
    tagline: 'Island hopping with bridge choke points and tide-driven sea caves.',
    description: 'A chain of islands connected by destructible bridges. Tide cycles open sea caves; flanking paths appear and disappear with rhythm.',
    previewGradient: gradients.isles1,
    previewImage: gradients.isles1,
    gallery: [gradients.isles1, gradients.isles2, gradients.isles3],
    features: [
      { tag: 'Dynamic', title: 'Tide Cycles', description: 'Sea level shifts reveal or block rotational shortcuts.' },
      { tag: 'Objective', title: 'Beacon Towers', description: 'Signal flares mark your squad and bait fights—use sparingly.' },
      { tag: 'Traversal', title: 'Bridge Control', description: 'Destroy or repair bridges to shape enemy routes.' },
    ],
  },
  {
    id: 'ember-crater',
    name: 'Ember Crater',
    biome: 'Volcanic • Basalt Tunnels • Ash Storms',
    size: 'S',
    tagline: 'Tight rings around an active crater with dangerous tunnels and ash fronts.',
    description: 'High-intensity fights around a central caldera. Basalt tunnel shortcuts collapse under damage. Ash fronts roll through with low visibility and DOT exposure.',
    previewGradient: gradients.crater1,
    previewImage: gradients.crater1,
    gallery: [gradients.crater1, gradients.crater2, gradients.crater3],
    features: [
      { tag: 'Hazard', title: 'Ash Fronts', description: 'Mobile hazards that slow pushes and require reroutes.' },
      { tag: 'Traversal', title: 'Basalt Tunnels', description: 'Fast but fragile tunnels—commit wisely or get trapped.' },
      { tag: 'POI', title: 'Caldera Labs', description: 'Tight interior fights with explosive environmental barrels.' },
    ],
  },
];

export default function MapsPage() {
  const maps = useMemo(() => MAPS, []);
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
            <div className="text-xs tracking-widest uppercase text-white/70">Explore</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-white">
              Maps
              </h1>
              <p className="mt-2 text-white/70 max-w-2xl mb-16">Master rotations, learn power positions, and discover dynamic map events. Each arena is crafted for memorable endgames and clean, tactical fights.</p>
            </div>
          </div>
        </section>

        <section className="relative py-6 sm:py-10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {maps.map((m) => (
                <MapCard key={m.id} map={m} onOpen={() => setActive(m)} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {active && (
        <MapModal map={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
