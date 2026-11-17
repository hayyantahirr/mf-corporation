import React from "react";
import Link from "next/link";

const orderSteps = [
  {
    number: "01",
    title: "Product Brief",
    description:
      "Define storage conditions, target shelf life, and brand goals.",
  },
  {
    number: "02",
    title: "Format Recommendation",
    description:
      "Select the optimal pouch structure, barrier layer, and closure.",
  },
  {
    number: "03",
    title: "Artwork & Sampling",
    description: "Confirm print-ready artwork files and physical samples.",
  },
  {
    number: "04",
    title: "Commercial Approval",
    description: "Finalize unit pricing and Minimum Order Quantities (MOQs).",
  },
  {
    number: "05",
    title: "Production & Dispatch",
    description: "Manufacture in Karachi and ship locally or globally.",
  },
];

export default function OrderAndContact() {
  return (
    <section id="packages-contact" className="bg-[#F8F9FA] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div data-reveal-item className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            5-STEP ORDER WORKFLOW
          </p>
          <h2 className="mt-4 max-w-[28ch] font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
            From Product Brief to Global Dispatch.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orderSteps.map((step) => (
            <article
              key={step.number}
              data-reveal-item
              className="border border-[#E2E8F0] bg-[#FFFFFF] p-8"
            >
              <p className="font-mono text-sm font-bold tracking-wider text-[#ED3B09]">
                {step.number}
              </p>
              <h3 className="mt-4 font-heading text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div
          data-reveal-item
          className="mt-20 border border-[#E2E8F0] bg-[#FFFFFF] p-10 lg:p-12"
        >
          <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
            KARACHI FACILITY &amp; QUOTE DESK
          </p>
          <h3 className="mt-4 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
            Connect With MF Packages.
          </h3>

          <div className="mt-8 grid grid-cols-1 divide-y divide-[#E2E8F0] border-t border-[#E2E8F0] pt-8 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-4 md:pr-8">
              <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#475569]">
                ADDRESS
              </p>
              <p className="mt-3 max-w-[32ch] text-base leading-[1.65] text-[#0F172A]">
                Suite #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan
              </p>
            </div>

            <div className="py-4 md:px-8">
              <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#475569]">
                DIRECT CONTACT
              </p>
              <div className="mt-3 space-y-2 text-base leading-[1.65]">
                <p>
                  <a
                    href="tel:+923322464729"
                    className="font-semibold text-[#0F172A] transition-colors duration-250 hover:text-[#ED3B09]"
                  >
                    +92 332 2464729
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@mfpackages.com"
                    className="text-[#475569] transition-colors duration-250 hover:text-[#ED3B09]"
                  >
                    info@mfpackages.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:mfpackages0@gmail.com"
                    className="text-[#475569] transition-colors duration-250 hover:text-[#ED3B09]"
                  >
                    mfpackages0@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 py-4 md:pl-8">
              <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#475569]">
                STOREFRONT &amp; INQUIRIES
              </p>

              <div className="flex flex-col items-start gap-4">
                <a
                  href="https://www.mfpackages.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none bg-[#ED3B09] px-7 py-4 text-sm font-semibold text-[#FFFFFF] transition-colors duration-250 hover:bg-[#C82E04]"
                >
                  Visit mfpackages.com/contact &#8599;
                </a>

                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                  <a
                    href="https://www.mfpackages.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0F172A] transition-colors duration-250 hover:text-[#ED3B09]"
                  >
                    mfpackages.com &#8599;
                  </a>
                  <span className="text-[#E2E8F0]" aria-hidden="true">
                    /
                  </span>
                  <a
                    href="https://mfexpress.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#475569] transition-colors duration-250 hover:text-[#ED3B09]"
                  >
                    mfexpress.pk &#8599;
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] transition-colors duration-250 hover:text-[#ED3B09]"
                >
                  <span>Group Contact Directory</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-250 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
