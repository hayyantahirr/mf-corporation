import React from "react";

export default function ContactCards() {
  return (
    <section className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-950">
              Corporate Headquarters
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Suit #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan
            </p>
          </div>

          {/* Phone Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-950">
              Direct Phone
            </h2>
            <a
              href="tel:+923322464729"
              className="mt-2 block text-base font-bold text-brand-red hover:text-brand-red-hover"
            >
              +92 332 2464729
            </a>
            <p className="mt-1 text-xs text-slate-500">
              Logistics, customs &amp; packaging desk
            </p>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-950">
              Email Desks
            </h2>
            <div className="mt-2 space-y-1 text-sm">
              <a
                href="mailto:info@mfpackages.com"
                className="block font-semibold text-slate-900 hover:text-brand-red"
              >
                info@mfpackages.com
              </a>
              <a
                href="mailto:mfpackages0@gmail.com"
                className="block text-slate-600 hover:text-brand-red"
              >
                mfpackages0@gmail.com
              </a>
            </div>
          </div>

          {/* Packaging Store Portal */}
          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-wider text-white">
              MF Packages Portal
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Explore ready-made stock pouches and custom packaging online.
            </p>
            <a
              href="https://www.mfpackages.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>www.mfpackages.com</span>
              <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
