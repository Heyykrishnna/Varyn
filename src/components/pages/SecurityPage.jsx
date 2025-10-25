import React from 'react';

export default function SecurityPage() {
  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Security</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Our commitment to fair play and data protection.</p>

        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Anti-Cheat</div>
            <p className="mt-2 text-sm text-white/70">We use server-side and client-side detection with ML models. Reports are processed within minutes and strike transparency is provided for appeals.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Vulnerability Disclosure</div>
            <p className="mt-2 text-sm text-white/70">If you believe you have found a security issue, contact security@Varyn-solid.example with reproduction steps. Bounties are considered for impactful findings.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Account Safety</div>
            <p className="mt-2 text-sm text-white/70">Enable 2FA, avoid sharing credentials, and review login history regularly. We never ask for your password.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
