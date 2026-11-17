import React from "react";
import Link from "next/link";

const highlights = [
  {
    value: "Apr 1, 1998",
    label: "Founded",
    detail: "Over 22+ years of trusted corporate leadership",
  },
  {
    value: "2 Divisions",
    label: "Core Subsidiaries",
    detail: "MF Express Logistics & MF Packages LLC",
  },
  {
    value: "USA • CN • PK",
    label: "Global Footprint",
    detail: "Registered in USA, operating in China & Pakistan",
  },
  {
    value: "50+ Experts",
    label: "Skilled Workforce",
    detail: "Dedicated logistics, customs & printing specialists",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Subtle geometric corporate background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200">
              <span className="h-2 w-2 rounded-full bg-brand-red" />
              <span>Parent Group &bull; Operating Since 1st April 1998</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Powering{" "}
              <span className="text-brand-red">Global Logistics</span> &amp;{" "}
              <span className="text-slate-200">Sustainable Packaging</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              MF Corporation is a prominent Pakistani corporate group with over
              22 years of excellence in custom clearance, freight forwarding,
              project cargo handling, warehousing, and eco-conscious packaging.
              We serve businesses worldwide through our two specialized
              subsidiaries: <strong className="text-white">MF Express</strong>{" "}
              and <strong className="text-white">MF Packages</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/mf-express"
                className="inline-flex items-center gap-2.5 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-hover"
              >
                <span>Explore MF Express</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/mf-packages"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/35 hover:bg-white/15"
              >
                <span>Explore MF Packages</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
              >
                <span>Contact Headquarters</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Executive Group Overview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                    Group Architecture
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    MF Corporation Holding
                  </h2>
                </div>
                <span className="rounded-lg bg-brand-red/15 px-2.5 py-1 text-xs font-bold text-brand-red ring-1 ring-brand-red/30">
                  Est. 1998
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <Link
                  href="/mf-express"
                  className="group block rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-brand-red/50 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                        Logistics Subsidiary
                      </span>
                      <h3 className="mt-1 text-base font-bold text-white group-hover:text-brand-red transition-colors">
                        MF Express
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        China-to-Pakistan warehouse consolidation, international
                        freight, custom clearance &amp; doorstep delivery.
                      </p>
                    </div>
                    <span className="mt-1 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white">
                      &rarr;
                    </span>
                  </div>
                </Link>

                <Link
                  href="/mf-packages"
                  className="group block rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-emerald-400/50 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Packaging &amp; Printing Subsidiary
                      </span>
                      <h3 className="mt-1 text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        MF Packages (MF-Packages LLC)
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        USA-registered flexible packaging &amp; printing
                        specialist with manufacturing in China &amp; Karachi.
                      </p>
                    </div>
                    <span className="mt-1 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
                <span>Chairman: Tahir Yaseen</span>
                <span>Karachi, Pakistan HQ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Corporate Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 lg:grid-cols-4 lg:gap-8">
          {highlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {item.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                {item.label}
              </p>
              <p className="text-xs leading-relaxed text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
