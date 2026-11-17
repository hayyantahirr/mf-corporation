import React from "react";

const formats = [
  {
    name: "Stand-Up Pouches",
    category: "Ready-Made & Custom",
    description:
      "Versatile self-standing pouches engineered for snacks, dry foods, and high-visibility retail displays.",
  },
  {
    name: "Kraft Paper Pouches",
    category: "Natural & Sustainable Look",
    description:
      "Natural-looking kraft paper pouches available with optional clear viewing windows and resealable zippers.",
  },
  {
    name: "High-Barrier Aluminium Pouches",
    category: "Maximum Protection",
    description:
      "Multi-layer aluminium barrier structures designed to shield sensitive products against light, oxygen, and moisture.",
  },
  {
    name: "Transparent Plastic Pouches",
    category: "Clear Visibility",
    description:
      "Crystal-clear flexible pouches enabling direct product inspection on retail shelves and e-commerce fulfillment.",
  },
  {
    name: "Flat-Bottom Pouches",
    category: "Box Pouch Structure",
    description:
      "Five-panel flat-bottom pouches providing superior upright stability and premium shelf presentation.",
  },
  {
    name: "Heat-Processable Retort Pouches",
    category: "Prepared Foods",
    description:
      "Thermal-resistant retort pouches engineered for ready-to-eat meals and heat-processed prepared foods.",
  },
  {
    name: "Spout Pouches",
    category: "Liquids & Semi-Liquids",
    description:
      "Leak-resistant flexible pouches fitted with secure spouts for sauces, beverages, oils, and semi-liquid products.",
  },
  {
    name: "Specialized Coffee Pouches",
    category: "Valves & Zippers",
    description:
      "Aroma-preserving coffee packaging equipped with one-way degassing valves and resealable pocket zippers.",
  },
  {
    name: "Coffee Brewing Filters",
    category: "Beverage Accessories",
    description:
      "Precision-cut drip and brewing filters supporting specialty coffee brands and hospitality distributors.",
  },
  {
    name: "Shrink Capsules",
    category: "Bottle Finishing",
    description:
      "Tamper-evident shrink capsules crafted for clean bottle neck finishing and beverage or oil closure security.",
  },
];

export default function PackagingFormats() {
  return (
    <section id="formats" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Product Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Ready-Made &amp; Custom-Manufactured Packaging Formats
            </h2>
          </div>
          <a
            href="https://www.mfpackages.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-brand-red hover:text-brand-red-hover"
          >
            <span>Browse Live Store Catalog</span>
            <span aria-hidden="true">&#8599;</span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {formats.map((format, index) => (
            <article
              key={format.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-600/40 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    {format.category}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">
                  {format.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {format.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
