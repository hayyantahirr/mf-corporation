import React from "react";

const pillars = [
  {
    title: "Sound Management & Clear Direction",
    description:
      "Over 22 years of seasoned leadership navigating both prosperous and challenging market cycles with steady governance.",
  },
  {
    title: "Result-Oriented Approach",
    description:
      "Focused execution across custom clearance, cargo consolidation, and custom packaging delivery timelines.",
  },
  {
    title: "Cost-Effective Competitive Edge",
    description:
      "Logistics and warehousing models engineered to significantly reduce overhead costs for Pakistani businesses and importers.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "Dedicated expansion into organic, kraft paper, and eco-conscious packaging to combat conventional plastic pollution.",
  },
  {
    title: "Empowering SMEs & Entrepreneurs",
    description:
      "Enabling startups, online sellers, and growing Pakistani brands to source from China and package professionally.",
  },
  {
    title: "Shade-Less Service to Customers",
    description:
      "Transparent, dedicated client care alongside long-standing relationships with competent employees, dealers, and vendors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Why MF Corporation
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Built on Integrity, Cost Efficiency &amp; Long-Term Partnerships
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Since April 1, 1998, our corporate philosophy has centered on
              uniting competent teams, supportive dealers, and trusted vendors
              to deliver dependable value across every shipment and package.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-950">
                Ready for National &amp; International Growth
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Whether importing consolidated goods from China via{" "}
                <strong className="text-slate-900">MF Express</strong> or
                launching custom pouches with{" "}
                <strong className="text-slate-900">MF Packages</strong>, our
                group scales alongside your business.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-brand-red/30 hover:bg-white"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
