import React from 'react';

export default function PrivacyPage() {
  return (
    <section className="relative py-20">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-white/70">How we collect, use, and protect your data.</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80">
          <p>Data We Collect: Account identifiers, gameplay telemetry, device info, and purchase history where applicable.</p>
          <p>Usage: To operate the game, improve balance, combat fraud/cheating, and provide support.</p>
          <p>Sharing: We may share data with anti-cheat providers, payment processors, and platform partners. We do not sell personal data.</p>
          <p>Your Rights: Access, correction, deletion, and portability. Contact privacy@Varyn-solid.example for requests.</p>
          <p>Security: We use encryption in transit and industry-standard practices to safeguard data.</p>
        </div>
      </div>
    </section>
  );
}
