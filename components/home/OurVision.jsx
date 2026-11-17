import React from "react";

const visionPillars = [
  {
    index: "01",
    title: "Uncompromising Departmental Quality",
    description:
      "Maintaining strict operational standards across customs clearance, freight forwarding, and flexible packaging manufacturing.",
  },
  {
    index: "02",
    title: "Firm Client Commitments",
    description:
      "Honoring every delivery timeline and service promise while building national and international recognition.",
  },
  {
    index: "03",
    title: "Eco-Conscious Stewardship",
    description:
      "Championing organic, kraft-paper, and sustainable packaging alternatives to reduce conventional plastic waste.",
  },
];

export default function OurVision() {
  return (
    <section
      id="vision"
      className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-24 lg:py-32"
    >
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left: 5-Column Editorial Heading */}
          <div data-reveal-item className="lg:col-span-5">
            <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
              OUR VISION
            </p>
            <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
              Built on Quality, Commitment &amp; Sustainable Growth.
            </h2>
            <p className="mt-5 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
              Since April 1998, MF Corporation has united disciplined logistics
              with environmentally responsible packaging—operating with one
              priority: dependable client outcomes.
            </p>
          </div>

          {/* Right: 7-Column Architectural Hairline List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {visionPillars.map((pillar) => (
                <div
                  key={pillar.index}
                  data-reveal-item
                  className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-2">
                    <span className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
                      {pillar.index}
                    </span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-heading text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
