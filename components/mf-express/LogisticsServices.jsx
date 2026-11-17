import React from "react";

const services = [
  {
    title: "Custom Clearance",
    description:
      "End-to-end customs documentation, duty assessment, and clearance backed by MF Corporation's 22+ years of regulatory experience in Pakistan.",
  },
  {
    title: "Freight Forwarding",
    description:
      "Cost-reduced international shipping corridors between China and Pakistan tailored to safeguard customers from inflated courier charges.",
  },
  {
    title: "Project Cargo Handling",
    description:
      "Dedicated logistics planning and specialized transport for heavy equipment, industrial machinery, and commercial project consignments.",
  },
  {
    title: "China Warehousing & Consolidation",
    description:
      "Safe holding facilities in China where goods from multiple suppliers are received, stored without high fees, and consolidated efficiently.",
  },
  {
    title: "Warehousing & Distribution Management",
    description:
      "Structured inventory staging and last-mile distribution management upon arrival in Pakistan until doorstep handover.",
  },
  {
    title: "SME Import Advisory",
    description:
      "Guidance for small and medium-sized Pakistani businesses and entrepreneurs importing products from China for the first time.",
  },
];

export default function LogisticsServices() {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Core Logistics Services
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Full-Spectrum Trade &amp; Freight Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Powered by MF Corporation&apos;s established market presence since
            1998, MF Express delivers significant cost savings and operational
            reliability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 transition-all hover:border-brand-red/40 hover:bg-white hover:shadow-md"
            >
              <div className="h-1.5 w-10 rounded-full bg-brand-red" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
