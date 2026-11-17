import React from "react";

const customizationOptions = [
  "Brand identity & custom full-bleed graphics",
  "Tailored pouch dimensions & gusset geometry",
  "Functional closures: zippers, tear notches & valves",
  "Surface finishes: matte, gloss, tactile & UV coating",
  "Barrier calibration matched to storage conditions & target shelf life",
];

export default function PrintingTechnology() {
  return (
    <section
      id="technology"
      className="border-y border-slate-200 bg-slate-50 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Machinery & Presses */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Manufacturing &amp; Printing Infrastructure
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              HP Indigo Digital Presses &amp; Heidelberg / Roland Offset Systems
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Beyond stock packaging, MF Packages delivers precision custom
              manufacturing that pairs agile digital print runs with high-volume
              offset production and in-house finishing.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="inline-block rounded-md bg-brand-red/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
                  Digital Printing
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  HP Indigo Press Fleet
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Equipped with{" "}
                  <strong className="text-slate-900">
                    HP Indigo 25K, 20000s, and 6900s
                  </strong>{" "}
                  digital presses—ideal for short-run, rapid-turnaround, and
                  variable-design SKU projects without cylinder fees.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="inline-block rounded-md bg-slate-900 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Offset &amp; Finishing
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-950">
                  Heidelberg, Roland &amp; Finishing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  High-speed{" "}
                  <strong className="text-slate-900">
                    Heidelberg and Roland offset systems
                  </strong>{" "}
                  supported by CTP pre-press, binding, gluing, UV coating, and
                  multi-layer lamination lines.
                </p>
              </div>
            </div>

            {/* Technical & Environmental Advisory Callout */}
            <div className="mt-6 rounded-2xl border border-amber-300/80 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
                <div>
                  <h4 className="text-sm font-bold text-amber-950">
                    Compliance &amp; Sustainability Verification Advisory
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-amber-900 sm:text-sm">
                    While MF Packages highlights sustainable and kraft-paper
                    solutions, we advise clients to verify food-contact
                    compliance, exact material structures, and environmental
                    claims against full technical data sheets and current
                    certificates rather than assuming a paper outer layer makes
                    a multilayer pouch recyclable or biodegradable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Customization Dimensions */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-950 p-8 text-white shadow-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Bespoke Engineering
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Full Customization Options
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Every custom run is engineered around your specific product
                chemistry, transit environment, and shelf-life expectations.
              </p>

              <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {customizationOptions.map((option) => (
                  <li key={option} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <svg
                        className="h-3.5 w-3.5"
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
                    </span>
                    <span className="text-slate-200">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
