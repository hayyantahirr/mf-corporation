import React from "react";

const processSteps = [
  {
    step: "01",
    title: "Understand the Product Brief",
    description:
      "Review product attributes, storage conditions, target shelf life, and branding objectives.",
  },
  {
    step: "02",
    title: "Recommend a Suitable Format",
    description:
      "Select the optimal ready-made or custom pouch structure, barrier layer, and closure mechanism.",
  },
  {
    step: "03",
    title: "Confirm Artwork & Samples",
    description:
      "Verify print-ready CTP/digital artwork files, color accuracy, finishes, and sample approvals.",
  },
  {
    step: "04",
    title: "Approve Commercial Terms",
    description:
      "Finalize unit pricing, minimum order quantities (MOQs), and production scheduling.",
  },
  {
    step: "05",
    title: "Produce & Dispatch Goods",
    description:
      "Execute manufacturing across our China or Karachi facilities and fulfill local or global delivery.",
  },
];

export default function OrderProcess() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            From Brief to Dispatch
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Our Five-Step Order Fulfillment Process
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Structured execution designed for startups, resellers, and
            high-volume enterprise buyers alike.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 font-mono text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-5 text-base font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
