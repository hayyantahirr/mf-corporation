import React from "react";

const steps = [
  {
    step: "01",
    title: "Source From Chinese Marketplaces",
    description:
      "Shop or place bulk B2B orders on Alibaba, DHgate, Made in China, or directly with Chinese factories.",
  },
  {
    step: "02",
    title: "Deliver to MF Express China Warehouse",
    description:
      "Have your Chinese suppliers dispatch parcels locally to our secure MF Express warehouse facility in China.",
  },
  {
    step: "03",
    title: "Safe Storage & Shipment Consolidation",
    description:
      "Avoid steep third-party warehousing fees while we store and consolidate multiple supplier orders into one optimized shipment.",
  },
  {
    step: "04",
    title: "International Freight & Custom Clearance",
    description:
      "We manage China-to-Pakistan freight forwarding and handle all Pakistani custom clearance procedures upon arrival.",
  },
  {
    step: "05",
    title: "Doorstep Delivery Across Pakistan",
    description:
      "Your consolidated cargo clears local distribution and arrives safely right at your business or home doorstep.",
  },
];

export default function ShippingProcess() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            5-Step Logistics Workflow
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            How China-to-Pakistan Shipping Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A streamlined, cost-saving process built for entrepreneurs, SMEs,
            and individual importers across Pakistan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red font-mono text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-5 text-base font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
