import React from "react";
import Link from "next/link";

const stats = [
  { label: "Established", value: "2018" },
  { label: "Skilled Team", value: "50+ Workers" },
  { label: "Registration", value: "USA LLC" },
  { label: "Manufacturing", value: "China & Karachi" },
];

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">
              <span>MF Corporation Subsidiary &bull; Est. 2018</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              MF Packages:{" "}
              <span className="text-emerald-400">Flexible Packaging</span> &amp;
              Precision Printing
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              <strong className="text-white">MF-Packages LLC</strong>,
              registered in the USA with a global manufacturing footprint in
              China and Karachi, Pakistan, merges technical printing innovation
              with eco-conscious packaging solutions for growing brands,
              retailers, food businesses, and bulk distributors worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.mfpackages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-colors hover:bg-brand-red-hover"
              >
                <span>Visit www.mfpackages.com</span>
                <span aria-hidden="true">&#8599;</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                <span>Request Custom Quote</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 shadow-2xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Operational Snapshot
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Balanced Protection, Usability &amp; Visual Identity
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Operating out of Karachi, Pakistan with international fulfillment
                capabilities, we help brands choose stock or custom structures
                aligned with shelf life and MOQ goals.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-lg font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
