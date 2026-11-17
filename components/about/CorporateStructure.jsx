import React from "react";
import Link from "next/link";

export default function CorporateStructure() {
  return (
    <section className="border-t border-slate-200 bg-slate-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Corporate Structure
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Parent Company &amp; Operating Subsidiaries
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            MF Corporation governs strategic direction, shared logistics
            relationships, and quality standards across two dedicated operating
            companies.
          </p>
        </div>

        {/* Parent Holding Node */}
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-brand-red/40 bg-slate-900 p-7 text-center shadow-lg">
          <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Parent Organization
          </span>
          <h3 className="mt-3 text-2xl font-extrabold text-white">
            MF Corporation
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Est. 1st April 1998 &bull; Karachi, Pakistan &bull; Custom Clearance,
            Freight Forwarding, Project Cargo, Warehousing &amp; Corporate
            Governance
          </p>
        </div>

        {/* Connector Line */}
        <div className="mx-auto hidden h-8 w-px bg-slate-700 md:block" />
        <div className="mx-auto hidden h-px max-w-3xl bg-slate-700 md:block" />

        {/* Subsidiary Nodes */}
        <div className="mt-8 grid gap-8 md:mt-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Subsidiary 01 &bull; Logistics
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white">MF Express</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              One-stop China-to-Pakistan international shipping, Chinese
              warehouse storage, multi-supplier consolidation, customs
              clearance, and doorstep delivery for Pakistani SMEs and shoppers.
            </p>
            <Link
              href="/mf-express"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-orange-400"
            >
              <span>View MF Express</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Subsidiary 02 &bull; Packaging &amp; Printing
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white">
              MF Packages (MF-Packages LLC)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              USA-registered flexible packaging and printing specialist (since
              2018) with manufacturing in China and Karachi, Pakistan, offering
              HP Indigo digital &amp; Heidelberg/Roland offset printing and 10+
              pouch formats.
            </p>
            <Link
              href="/mf-packages"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>View MF Packages</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
