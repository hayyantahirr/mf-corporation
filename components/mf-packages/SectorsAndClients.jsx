import React from "react";

const sectors = [
  {
    name: "Food & Snacks",
    detail:
      "High-barrier pouches and stand-up bags keeping dry foods, nuts, confectionery, and snacks crisp and protected.",
  },
  {
    name: "Coffee & Beverages",
    detail:
      "Valved coffee pouches, brewing filters, spout pouches, and bottle shrink capsules built for freshness and aroma retention.",
  },
  {
    name: "Prepared Foods",
    detail:
      "Heat-processable retort pouches engineered for ready meals, sauces, and thermally sterilized food items.",
  },
  {
    name: "Personal Care & Specialty Retail",
    detail:
      "Custom-printed pouches and protective formats offering standout visual identity for cosmetic and retail goods.",
  },
];

const clientTypes = [
  {
    name: "Bulk Brand Buyers",
    detail:
      "Established enterprises requiring large-scale offset runs, strict barrier specs, and reliable global dispatch.",
  },
  {
    name: "Small Businesses & Startups",
    detail:
      "Emerging brands leveraging ready-made stock pouches or low-MOQ HP Indigo entry-level custom printing.",
  },
  {
    name: "Online & Retail Resellers",
    detail:
      "E-commerce and boutique resellers seeking shelf-ready packaging that elevates unboxing and shelf appeal.",
  },
  {
    name: "Regional & Wholesale Distributors",
    detail:
      "Trade partners supplying diverse pouch lines across domestic Pakistani hubs and international markets.",
  },
];

export default function SectorsAndClients() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Sectors Served */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Industries We Serve
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Four Core Industry Sectors
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-base font-bold text-slate-950">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {sector.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Profiles */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Who We Partner With
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Four Primary Client Profiles
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {clientTypes.map((client) => (
                <div
                  key={client.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-base font-bold text-slate-950">
                    {client.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {client.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
