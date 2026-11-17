import React from "react";

const milestones = [
  {
    period: "1st April 1998",
    title: "Foundation of MF Corporation",
    description:
      "MF Corporation began operations on 1st April 1998 with a commitment to sound management, clear direction, and result-oriented logistics execution.",
  },
  {
    period: "22+ Years",
    title: "Market Leadership in Pakistan Logistics",
    description:
      "Established as a prominent provider in custom clearance, freight forwarding, project cargo handling, warehousing, and distribution management with significantly reduced costs and a strong competitive edge.",
  },
  {
    period: "2018",
    title: "Expansion Into Flexible Packaging (MF-Packages LLC)",
    description:
      "Extended operations into sustainable, organic, and biodegradable packaging solutions—registering MF-Packages LLC in the USA while operating manufacturing and fulfillment across China and Karachi, Pakistan.",
  },
  {
    period: "Present Era",
    title: "Launch & Growth of MF Express",
    description:
      "Leveraging 20+ years of trusted client bonds, MF Express emerged as a one-stop international shipping, China warehouse consolidation, and customs clearance gateway for Pakistani SMEs and shoppers.",
  },
];

export default function OurHistory() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Our History
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              The Face of the Market for Over 22 Years
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              MF Corporation has navigated both prosperous and challenging eras
              since 1998 through dedicated teamwork, loyal employees, supportive
              dealers, and dependable vendors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Although MF Express is a newer subsidiary, our bonds remain deeply
              connected with clients who have partnered with us across
              logistics, customs, and packaging for more than two decades.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-6 border-l-2 border-slate-200 pl-6 sm:pl-8">
              {milestones.map((item) => (
                <li key={item.period} className="relative">
                  <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red ring-4 ring-white sm:-left-[41px]" />
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <span className="inline-block rounded-md bg-brand-red/10 px-2.5 py-1 font-mono text-xs font-bold text-brand-red">
                      {item.period}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
