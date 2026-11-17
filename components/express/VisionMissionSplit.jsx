import React from "react";

const charterItems = [
  {
    eyebrow: "01 • OUR VISION",
    title: "National & International Logistics Benchmark",
    copy: "To maintain uncompromising quality across every department, honor every client commitment, and establish MF Express as a benchmark for national and international logistics recognition.",
  },
  {
    eyebrow: "02 • OUR MISSION",
    title: "Customer Satisfaction Above All",
    copy: "Customer satisfaction above all—empowering Pakistani entrepreneurs and SMEs to import anything from China without complicated freight bottlenecks or inflated shipping costs.",
  },
];

export default function VisionMissionSplit() {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F8F9FA] py-24 lg:py-32">
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {charterItems.map((item) => (
            <article
              key={item.eyebrow}
              data-reveal-item
              className="border border-[#E2E8F0] bg-[#FFFFFF] p-10 transition-colors duration-250 hover:border-[#0F172A] lg:p-12"
            >
              <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
                {item.eyebrow}
              </p>

              <h2 className="mt-5 font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#0F172A]">
                {item.title}
              </h2>

              <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
