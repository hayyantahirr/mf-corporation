import React from "react";

const packagingFormats = [
  {
    number: "01",
    name: "Stand-Up Pouches",
    description:
      "Versatile self-standing pouches engineered for snacks, dry foods, and retail shelf appeal.",
  },
  {
    number: "02",
    name: "Kraft Paper Pouches",
    description:
      "Natural-looking kraft paper formats with optional clear windows and resealable zippers.",
  },
  {
    number: "03",
    name: "High-Barrier Aluminium Pouches",
    description:
      "Multi-layer foil structures protecting sensitive goods against light, oxygen, and moisture.",
  },
  {
    number: "04",
    name: "Transparent Plastic Pouches",
    description:
      "High-clarity flexible pouches designed for direct retail product visibility.",
  },
  {
    number: "05",
    name: "Flat-Bottom Pouches",
    description:
      "Box-bottom geometry delivering upright shelf stability and five printable panels.",
  },
  {
    number: "06",
    name: "Retort Pouches",
    description:
      "Heat-processable pouches engineered for prepared meals and thermally sterilized foods.",
  },
  {
    number: "07",
    name: "Spout Pouches",
    description:
      "Leak-resistant flexible pouches fitted with secure spouts for liquids and semi-liquids.",
  },
  {
    number: "08",
    name: "Coffee Valve Pouches",
    description:
      "Aroma-locking pouches with degassing valves, zippers, and companion coffee brewing filters.",
  },
  {
    number: "09",
    name: "Shrink Capsules",
    description:
      "Tamper-evident bottle finishing and closure capsules for beverages and specialty oils.",
  },
];

export default function PackagingCatalog() {
  return (
    <section
      id="formats"
      className="border-b border-[#E2E8F0] bg-[#F8F9FA] py-24 lg:py-32"
    >
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            PACKAGING FORMATS CATALOG
          </p>
          <h2 className="mt-4 max-w-[28ch] font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Nine Ready-Made &amp; Custom Pouch Structures.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 border-t border-l border-[#E2E8F0] md:grid-cols-2 lg:grid-cols-3">
          {packagingFormats.map((format) => (
            <article
              key={format.number}
              data-reveal-item
              className="border-r border-b border-[#E2E8F0] bg-[#FFFFFF] p-8 transition-colors duration-250 hover:bg-[#F8F9FA] lg:p-10"
            >
              <p className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
                {format.number}
              </p>
              <h3 className="mt-5 font-heading text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                {format.name}
              </h3>
              <p className="mt-3 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                {format.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
