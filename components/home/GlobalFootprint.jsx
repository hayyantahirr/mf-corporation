import React from "react";

const regions = [
  {
    code: "US",
    country: "United States",
    role: "Corporate Registration",
    description:
      "MF-Packages LLC is registered in the United States, anchoring our packaging subsidiary with international brand governance and global market reach.",
    highlights: [
      "MF-Packages LLC US entity",
      "Global fulfillment & export alignment",
      "International packaging standards",
    ],
  },
  {
    code: "CN",
    country: "China",
    role: "Consolidation & Manufacturing",
    description:
      "Home to MF Express's dedicated consolidation warehouses for Pakistani shoppers and MF Packages' high-capacity flexible packaging manufacturing lines.",
    highlights: [
      "Safe China warehouse storage for Alibaba, DHgate & Made in China orders",
      "Multi-vendor shipment consolidation",
      "Flexible packaging & printing production",
    ],
  },
  {
    code: "PK",
    country: "Pakistan (Karachi HQ)",
    role: "Operations & Distribution Hub",
    description:
      "Our corporate headquarters at Rafiq Mansion, Jethamal Road, Karachi, backed by 50+ skilled specialists, custom clearance experts, and nationwide distribution.",
    highlights: [
      "Custom clearance, freight & project cargo",
      "Karachi packaging & 50+ skilled workers",
      "Doorstep parcel delivery across Pakistan",
    ],
  },
];

export default function GlobalFootprint() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Tri-Nation Presence
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Connecting the USA, China &amp; Pakistan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            MF Corporation bridges global manufacturing and international
            commerce through strategic operations across three key trade
            corridors.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {regions.map((region) => (
            <div
              key={region.code}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 font-mono text-sm font-bold text-white">
                    {region.code}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    {region.role}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {region.country}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {region.description}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs font-medium text-slate-700">
                {region.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
