import React from "react";

const pillars = [
  {
    number: "01",
    title: "Heritage & Trust",
    description:
      "Over 25 years of customs clearance, freight forwarding, and supply chain reliability across Pakistan.",
  },
  {
    number: "02",
    title: "Sustainable Transition",
    description:
      "Replacing conventional plastics with organic, kraft-paper, and eco-conscious packaging alternatives.",
  },
  {
    number: "03",
    title: "Workforce & Partners",
    description:
      "Built on loyal employees, supportive dealers, and understanding vendors guided by sound management.",
  },
];

export default function CorePillars() {
  return (
    <section className="bg-[#FFFFFF] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            CORPORATE PILLARS
          </p>
          <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Principles Guiding Every Division.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-[#E2E8F0] border border-[#E2E8F0] md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              data-reveal-item
              className="p-8 lg:p-10"
            >
              <span className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
                {pillar.number}
              </span>
              <h3 className="mt-5 font-heading text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
