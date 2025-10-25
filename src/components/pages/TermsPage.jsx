import React from 'react';

export default function TermsPage() {
  return (
    <section className="relative py-20">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-white/70">By accessing or using Varyn // Solid, you agree to the following terms.</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80">
          <p>License: We grant you a limited, revocable license to access and play. Do not reverse engineer, exploit bugs, or distribute unauthorized copies.</p>
          <p>Conduct: No cheating, harassment, or hate speech. Usernames and content must comply with regional laws and platform policies.</p>
          <p>Purchases: All purchases are subject to the store terms of the platform you use. Refunds follow platform policy.</p>
          <p>Termination: We may suspend or terminate accounts for ToS violations or fraud. Appeals are available through Support.</p>
          <p>Changes: We may update these terms. Continued use constitutes acceptance of changes.</p>
        </div>
      </div>
    </section>
  );
}
