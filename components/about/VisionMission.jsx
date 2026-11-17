import React from "react";

export default function VisionMission() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Purpose &amp; Direction
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Vision, Mission &amp; Environmental Commitment
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <span className="inline-flex rounded-lg bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              Our Vision
            </span>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              National &amp; International Recognition
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We hold an astute vision across every division: to maintain
              uncompromising quality in every department, stay firm with our
              commitments to clients, and elevate our group to national and
              international recognition.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <span className="inline-flex rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Our Mission
            </span>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Customer Satisfaction &amp; SME Growth
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We navigate all functions toward one priority: customer
              satisfaction. We encourage an entrepreneurship culture by enabling
              small and medium-sized businesses to import seamlessly from China
              and launch market-ready brands without logistics or packaging
              barriers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
            <span className="inline-flex rounded-lg bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              Sustainability
            </span>
            <h3 className="mt-4 text-xl font-bold text-slate-950">
              Organic &amp; Eco-Conscious Packaging
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Recognizing that conventional plastic packaging is a major driver
              of global warming damage, we extended our operations into organic,
              kraft-paper, and biodegradable packaging solutions designed for
              everyday commercial needs while maintaining transparent technical
              compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
