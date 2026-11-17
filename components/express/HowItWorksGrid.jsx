import React from "react";

const steps = [
  {
    number: "01",
    title: "China Marketplace Sourcing & Warehouse Storage",
    description:
      "Purchase goods from Alibaba, DHgate, Made-in-China, or Chinese factories and store them at our China warehouse without high storage fees.",
  },
  {
    number: "02",
    title: "Shipment Consolidation",
    description:
      "We combine packages from multiple Chinese suppliers into one cost-effective shipment to Pakistan.",
  },
  {
    number: "03",
    title: "Pakistan Customs Clearance & Doorstep Delivery",
    description:
      "Backed by MF Corporation's 25+ years of customs and freight expertise, we clear customs and deliver directly to your doorstep.",
  },
];

export default function HowItWorksGrid() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Three Steps from Chinese Factories to Your Doorstep.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-[#E2E8F0] border border-[#E2E8F0] md:grid-cols-3 md:divide-x md:divide-y-0">
          {steps.map((step) => (
            <article
              key={step.number}
              data-reveal-item
              className="p-8 lg:p-10"
            >
              <p className="font-mono text-sm font-bold tracking-[0.12em] text-[#ED3B09]">
                {step.number}
              </p>

              <h3 className="mt-5 font-heading text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[65ch] text-sm leading-[1.65] text-[#475569]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
