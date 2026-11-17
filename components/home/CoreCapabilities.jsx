import React from "react";

const capabilities = [
  {
    number: "01",
    title: "Custom Clearance & Compliance",
    division: "MF Corporation & MF Express",
    description:
      "Decades of hands-on regulatory expertise ensuring rapid, compliant Pakistani port and border clearances with reduced cost overheads.",
  },
  {
    number: "02",
    title: "Freight Forwarding & Project Cargo",
    division: "MF Corporation",
    description:
      "End-to-end air, sea, and land freight forwarding alongside specialized heavy and oversized project cargo handling across Pakistan.",
  },
  {
    number: "03",
    title: "Warehousing & Distribution",
    division: "China & Pakistan Hubs",
    description:
      "Secure inventory storage, order management, and distribution facilities designed to optimize supply-chain efficiency and lower overhead.",
  },
  {
    number: "04",
    title: "China-to-Pakistan Consolidation",
    division: "MF Express",
    description:
      "Buy from Alibaba, DHgate, Made in China, or direct factories, store safely in our China warehouse, consolidate parcels, and receive doorstep delivery.",
  },
  {
    number: "05",
    title: "Custom Flexible & Eco Packaging",
    division: "MF Packages LLC",
    description:
      "Organic, kraft paper, high-barrier aluminium, retort, flat-bottom, spout, and coffee pouches engineered for shelf appeal and barrier performance.",
  },
  {
    number: "06",
    title: "HP Indigo & Offset Printing",
    division: "MF Packages LLC",
    description:
      "HP Indigo 25K, 20000s, and 6900s digital presses paired with Heidelberg and Roland offset printing, CTP pre-press, UV coating, and lamination.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Integrated Group Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              End-to-End Supply Chain &amp; Packaging Infrastructure
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            From sourcing in Chinese factories to custom-printed pouches and
            nationwide Pakistani distribution, every capability operates under
            one unified group.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-brand-red">
                  {cap.number}
                </span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                  {cap.division}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950 group-hover:text-brand-red transition-colors">
                {cap.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
