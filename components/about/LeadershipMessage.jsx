import React from "react";

const stakeholders = [
  {
    role: "Employees",
    detail:
      "Providing a clear career path, strong benefits, and an environment built on mutual loyalty and competence.",
  },
  {
    role: "Dealers",
    detail:
      "Partnering closely with supportive trade dealers across domestic and cross-border channels.",
  },
  {
    role: "Vendors",
    detail:
      "Maintaining long-term trust with understanding global manufacturing and freight vendors.",
  },
  {
    role: "Customers",
    detail:
      "Delivering shade-less, cost-effective, and dependable service from China consolidation to final packaging.",
  },
];

export default function LeadershipMessage() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Leadership Perspective
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Message From Chairman Tahir Yaseen
            </h2>

            <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-7 text-sm leading-relaxed text-slate-700 sm:p-9 sm:text-base">
              <p>
                &ldquo;As Chairman of MF Corporation, I feel extremely honored
                and privileged to write this message. With 22 years of hard
                work, this company has faced both good and challenging times
                throughout the whole journey. We started operating first on 1st
                April 1998, and have worked tirelessly since then to build our
                brand. Our company has now become a prominent service provider
                to our customers in the areas of custom clearance, freight
                forwarding, project cargo handling, warehousing and distribution
                management, and other logistics services that have
                significantly-reduced cost, having a competitive edge in the
                Pakistani market.&rdquo;
              </p>
              <p>
                &ldquo;With a great, hardworking team, we have extended our
                operations to the packaging field, where we focus on organic and
                biodegradable solutions for everyday packaging needs. It is
                necessary to be environment-friendly to protect our planet from
                further global warming damage, a prominent cause of which is
                conventional plastic packaging.&rdquo;
              </p>
              <p>
                &ldquo;It is with gratitude I say that this company has been
                fortunate enough to have loyal and competent employees,
                supportive dealers, and understanding vendors. When the
                qualities of sound management, clear direction, and
                result-oriented approach blend together, we sail through
                troubled water without much difficulty. As a company, we will
                continue to soar up for higher goals, provide a perfect career
                path and benefits to the employees, and shade-less service to
                customers.&rdquo;
              </p>
              <p className="pt-3 font-bold text-slate-950">
                Tahir Yaseen &mdash; Chairman, MF Corporation
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold text-slate-950">
              Our Four Stakeholder Pillars
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Every milestone achieved by MF Corporation reflects our commitment
              to the four groups who power our enterprise every day.
            </p>

            <div className="mt-6 space-y-4">
              {stakeholders.map((item) => (
                <div
                  key={item.role}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
                >
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-red">
                    {item.role}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
