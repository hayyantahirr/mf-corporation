import React from "react";

export default function ExpressVisionMission() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Subsidiary Charter
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            MF Express History, Vision &amp; Mission
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Our History
            </span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">
              Built on Two Decades of Client Trust
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              MF Corporation has been the face of the market for over 22 years.
              Although MF Express is a relatively new subsidiary, our bonds are
              well-connected with our clients who have been with us for over two
              decades in other departments of business. Encouraging an
              entrepreneurship culture, MF Express provides hassle-free and
              cost-effective China-to-Pakistan shipping to small and
              medium-sized businesses.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Vision
            </span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">
              Quality &amp; Global Recognition
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              MF Express holds an astute vision for the company. We not only
              intend to maintain quality in every department, but we have
              envisioned it for ourselves to be firm with our commitments to
              clients and bring our company to the national and international
              level of recognition.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Mission
            </span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">
              Priority: Customer Satisfaction
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              MF Express navigates all functions toward one priority: customer
              satisfaction. We simply work to enable small and medium-sized
              business owners to import anything from China without worrying
              about complicated and expensive shipping and customs problems.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
