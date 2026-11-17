import React from "react";

const messageParagraphs = [
  "Since commencing operations on April 1, 1998, MF Corporation has grown through over two decades of dedicated work across both prosperous and challenging market cycles.",
  "Today, we lead in customs clearance, freight forwarding, project cargo handling, and warehousing—earning a competitive edge in Pakistan through significantly reduced costs.",
  "With a hardworking team, we extended operations into organic and biodegradable flexible packaging to help protect the planet from pollution caused by conventional plastics.",
  "Grateful to our loyal employees, supportive dealers, and understanding vendors, we remain dedicated to clear career growth and “shade-less” customer service.",
];

export default function ChairmansMessage() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8F9FA] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div data-reveal-item className="lg:col-span-5">
            <figure className="border border-[#E2E8F0] bg-[#FFFFFF] p-8 lg:p-10">
              <span
                aria-hidden="true"
                className="block font-heading text-4xl font-bold leading-none text-[#ED3B09]"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 font-heading text-[20px] font-semibold leading-[1.4] tracking-[-0.015em] text-[#0F172A] sm:text-[22px]">
                Sound management, clear direction, and a result-oriented
                approach enable us to navigate any market cycle.
              </blockquote>
              <figcaption className="mt-8 border-t border-[#E2E8F0] pt-6">
                <p className="font-heading text-base font-bold text-[#0F172A]">
                  Tahir Yaseen
                </p>
                <p className="mt-1 text-sm text-[#475569]">
                  Chairman &ndash; MF Corporation
                </p>
                <p className="mt-2 text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#475569]">
                  Operating Since April 1, 1998
                </p>
              </figcaption>
            </figure>
          </div>

          <div data-reveal-item className="lg:col-span-7">
            <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
              CHAIRMAN&apos;S MESSAGE
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
              Over Two Decades of Discipline &amp; Stewardship.
            </h2>

            <div className="mt-8 space-y-5">
              {messageParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-[65ch] text-base leading-[1.65] text-[#475569]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
