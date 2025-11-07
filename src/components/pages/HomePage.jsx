import React, { useEffect } from 'react';
import Hero from '../Hero';
import ModesShowcase from '../ModesShowcase';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Radar, Cpu } from 'lucide-react';
import { navigateTo } from '../Router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LogoCloudAnimated } from '../logo';


function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-5">
      <Icon className="h-5 w-5 text-white" />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function CTASection() {
  return (
    <section className="relative py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
          <div className="p-8 sm:p-12 grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to Drop In?</h3>
              <p className="mt-2 text-white/70">Download free and claim your Season 28 starter rewards: solid skins and an animated banner.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => navigateTo('download')} className="rounded-md bg-white text-black text-sm font-semibold px-4 py-2.5 hover:brightness-95">Get the Game</button>
                <button onClick={() => navigateTo('seasons')} className="rounded-md border border-white/20 text-white text-sm font-semibold px-4 py-2.5 hover:bg-white/10">View Season</button>
              </div>
            </div>
            <div className="relative h-48 sm:h-56 rounded-xl border border-white/10 bg-white text-black grid place-items-center text-center p-6">
              <div>
                <div className="text-sm text-black/70">Season 28: Cosmic Drop</div>
                <div className="mt-1 text-3xl font-extrabold tracking-tight">Bonus XP Weekend</div>
                <div className="mt-2 text-black/70 text-sm">Double XP on missions and ranked from Fri–Sun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".text p").forEach((el) => {
      gsap.fromTo(
        el,
        {
          backgroundPositionX: "100%",
          opacity: 0.2,
          y: 80,
        },
        {
          backgroundPositionX: "0%",
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1.5,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Hero />

      <section className="relative py-32 overflow-hidden">
        <div className="text text-center">
          <p className='pb-4'>Beyond speed</p>
          <p className='pb-4'>Beyond power</p>
          <p className='pb-4'>Welcome to the next reality!</p>
        </div>
      </section>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Varyn // Solid</h2>
              <p className="mt-2 text-white/60 max-w-2xl">Classic battle royale energy with no clutter. Crisp visuals, fluid movement, and tactical depth.</p>
            </div>
            <button onClick={() => navigateTo('news')} className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition">Latest News</button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Feature icon={ShieldCheck} title="Anti-Cheat+" desc="Machine-learning detection with transparent strikes." />
            <Feature icon={Zap} title="Fluid Movement" desc="Slide, mantle, and boost through reactive cover." />
            <Feature icon={Radar} title="Dynamic Zones" desc="Shifting circles keep every endgame fresh." />
            <Feature icon={Cpu} title="Smart Matchmaking" desc="Latency-aware lobbies and squad balancing." />
          </div>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <ModesShowcase />
      </motion.div>

      <CTASection />

      <LogoCloudAnimated />


      <style jsx>{`
        .text > p {
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(to right, #ffffff 50%, #333333 50%);
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          transition: background-position 0.3s ease;
          margin: 0;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(80px);
        }
      `}</style>
    </>
  );
}
