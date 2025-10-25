import React, { useState } from 'react';
import { Monitor, Smartphone, Gamepad2, Download } from 'lucide-react';
import Radio from '../downloadpage';

export default function DownloadPage() {
  const [platform, setPlatform] = useState('pc');

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,212,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Download</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Choose your platform and get started. Cross-play supported where available.</p>

        <Radio
          className="mt-8"
          options={[
            { value: 'pc', label: 'PC', icon: Monitor },
            { value: 'mac', label: 'MAC', icon: Monitor },
            { value: 'console', label: 'Console', icon: Gamepad2 },
            { value: 'mobile', label: 'Mobile', icon: Smartphone },
          ]}
          value={platform}
          onChange={setPlatform}
        />

        <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-black/40">
          {platform === 'pc' && (
            <div>
              <div className="text-lg font-semibold">PC</div>
              <div className="mt-1 text-sm text-white/70">Windows 10+, 8 GB RAM, GTX 1060 or better recommended.</div>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> Download Launcher</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Steam</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Epic</a>
              </div>
            </div>
          )}
          {platform === 'mac' && (
            <div>
              <div className="text-lg font-semibold">MAC</div>
              <div className="mt-1 text-sm text-white/70">Sonoma or later, 8 GB RAM, M3 or better recommended.</div>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> Download .dmg</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Steam</a>
              </div>
            </div>
          )}
          {platform === 'console' && (
            <div>
              <div className="text-lg font-semibold">Console</div>
              <div className="mt-1 text-sm text-white/70">PlayStation and Xbox supported. Requires online subscription for multiplayer.</div>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> PlayStation Store</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Xbox Store</a>
              </div>
            </div>
          )}
          {platform === 'mobile' && (
            <div>
              <div className="text-lg font-semibold">Mobile</div>
              <div className="mt-1 text-sm text-white/70">iOS 14+/Android 9+. Cross-progression not supported on mobile.</div>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold inline-flex items-center gap-2"><Download className="h-4 w-4"/> App Store</a>
                <a href="#" className="rounded-xl border border-white/15 px-4 py-2.5 text-sm hover:bg-white/10">Google Play</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
