import React from "react";
import Link from "next/link";

const companies = [
  {
    eyebrow: "01 • CHINA-TO-PAKISTAN LOGISTICS",
    name: "MF Express",
    summary:
      "A one-stop international shipping, China warehousing, and customs clearance solution enabling Pakistani businesses and shoppers to source directly from Chinese marketplaces and factories.",
    href: "/express",
  },
  {
    eyebrow: "02 • FLEXIBLE PACKAGING & PRINTING",
    name: "MF Packages",
    summary:
      "Serving emerging brands, food businesses, and bulk buyers since 2018 with custom-printed pouches, high-barrier packaging, and global fulfilment powered by HP Indigo and offset printing.",
    href: "/packages",
  },
];

export default function CompaniesShowcase() {
  return (
    <section
      id="companies"
      className="border-t border-[#E2E8F0] bg-[#F8F9FA] py-24 lg:py-32"
    >
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            OUR COMPANIES
          </p>
          <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            Two Specialized Divisions. One Holding Standard.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {companies.map((company) => (
            <article
              key={company.name}
              data-reveal-item
              className="group flex flex-col justify-between border border-[#E2E8F0] bg-[#FFFFFF] p-10 transition-colors duration-250 hover:border-[#0F172A] lg:p-12"
            >
              <div>
                <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
                  {company.eyebrow}
                </p>

                <h3 className="mt-5 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                  {company.name}
                </h3>

                <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                  {company.summary}
                </p>
              </div>

              <div className="mt-10 border-t border-[#E2E8F0] pt-6">
                <Link
                  href={company.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] transition-colors duration-250 group-hover:text-[#ED3B09]"
                >
                  <span>Visit Division</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-250 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
