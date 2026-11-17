import React from "react";

export default function ContactHero() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
            Contact &amp; Quote Desk
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Connect With MF Corporation, MF Express &amp; MF Packages
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Whether you are consolidating cargo from China to Pakistan,
            scheduling custom clearance and project cargo, or ordering custom
            printed flexible pouches, our Karachi headquarters and division teams
            are ready to assist.
          </p>
        </div>
      </div>
    </section>
  );
}
