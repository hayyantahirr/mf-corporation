import React from "react";

const metrics = [
  {
    value: "26",
    suffix: "+",
    label: "Years Heritage",
    detail: "Founded April 1, 1998 in Karachi",
  },
  {
    value: "2",
    suffix: "",
    label: "Operating Subsidiaries",
    detail: "MF Express & MF Packages",
  },
  {
    value: "50",
    suffix: "+",
    label: "Skilled Specialists",
    detail: "Dedicated logistics & packaging workforce",
  },
];

export default function MetricsStrip() {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] md:grid-cols-3 md:divide-x md:divide-y-0">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              data-reveal-item
              className="py-10 md:px-10 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-heading text-[44px] font-bold leading-[1.05] tracking-[-0.03em] tabular-nums text-[#0F172A] sm:text-[52px]">
                {metric.value}
                {metric.suffix ? (
                  <span className="text-[#ED3B09]">{metric.suffix}</span>
                ) : (
                  <span
                    className="ml-2 inline-block h-2 w-2 align-baseline bg-[#ED3B09]"
                    aria-hidden="true"
                  />
                )}
              </p>
              <p className="mt-3 text-base font-semibold text-[#0F172A]">
                {metric.label}
              </p>
              <p className="mt-1 text-sm leading-[1.65] text-[#475569]">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
