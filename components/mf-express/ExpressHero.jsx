import React from "react";
import Link from "next/link";

const marketplaces = [
  "Alibaba",
  "DHgate",
  "Made in China",
  "Direct Chinese Factories",
];

export default function ExpressHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-red/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-red">
              <span>MF Corporation Subsidiary</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              MF Express: One-Stop Shipping From{" "}
              <span className="text-brand-red">China to Pakistan</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Encouraging Pakistan&apos;s entrepreneurship culture with
              hassle-free, cost-effective international shipping, safe China
              warehousing, shipment consolidation, custom clearances, and
              doorstep delivery for small and medium-sized businesses.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Supported Sourcing:
              </span>
              {marketplaces.map((source) => (
                <span
                  key={source}
                  className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                >
                  {source}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-colors hover:bg-brand-red-hover"
              >
                <span>Start Shipping With MF Express</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href="#consolidation"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                How Consolidation Works
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 shadow-2xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Why Importers Choose Us
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Eliminate Costly International Freight &amp; Customs Complexity
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold text-white">
                    Zero High Warehousing Fees
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Store items safely at our China warehouse until all your
                    orders are ready to consolidate.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold text-white">
                    Full Pakistani Custom Clearance
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Backed by MF Corporation&apos;s 22+ years of customs
                    brokerage and freight forwarding leadership.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold text-white">
                    Direct Doorstep Delivery
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    From Chinese factories straight to your home, shop, or
                    warehouse in Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
