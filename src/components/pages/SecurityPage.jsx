import React from 'react';

export default function SecurityPage() {
  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Security</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Our commitment to fair play and data protection.</p>

        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Anti-Cheat Measures</div>
            <p className="mt-2 text-sm text-white/70">We utilize both server-side and client-side anti-cheat systems, including machine learning models, to detect and prevent cheating. Violations are addressed promptly, with clear strike notifications and an appeal process.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Account Security</div>
            <p className="mt-2 text-sm text-white/70">Enable two-factor authentication (2FA), avoid sharing credentials, and monitor your login history regularly. <strong>Varyn // Solid</strong> will never ask for your password via email or other channels.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Data Protection</div>
            <p className="mt-2 text-sm text-white/70">All personal data is encrypted and stored securely. We implement industry-standard security measures to protect your information from unauthorized access, loss, or disclosure.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Vulnerability Disclosure</div>
            <p className="mt-2 text-sm text-white/70">If you discover a potential security vulnerability, report it to <a href="mailto:security@Varyn-solid.example">security@Varyn-solid.example</a> with detailed reproduction steps. Responsible disclosure may be eligible for bounty rewards.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Fair Play Commitment</div>
            <p className="mt-2 text-sm text-white/70">We strictly prohibit cheating, exploiting bugs, using unauthorized third-party tools, or any other activity that gives unfair advantage. Players found violating these rules will face penalties or account suspension.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Secure Transactions</div>
            <p className="mt-2 text-sm text-white/70">All in-game purchases and transactions are processed through secure, trusted platforms. Payment information is handled according to platform standards, and we never store sensitive payment details directly.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Reporting & Appeals</div>
            <p className="mt-2 text-sm text-white/70">Users may report suspicious activity or security concerns via in-game tools or email. Reports are investigated promptly, and a transparent appeals process is available for any actions taken.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Session Management</div>
            <p className="mt-2 text-sm text-white/70">Always log out of shared or public devices. Sessions may automatically expire after periods of inactivity to reduce unauthorized access risks.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Software Updates</div>
            <p className="mt-2 text-sm text-white/70">Keep your game client and system software up to date. Updates include security patches, bug fixes, and performance improvements to ensure a safe gaming experience.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="font-semibold">Community Responsibility</div>
            <p className="mt-2 text-sm text-white/70">Players are expected to maintain respectful behavior, report malicious activity, and comply with all regional laws and platform policies. Collective responsibility ensures a safer and fairer environment for everyone.</p>
          </div>
          <br/>
          <p><em>Last Updated: [December, 2025]</em></p>
        </div>
      </div>
    </section>
  );
}
