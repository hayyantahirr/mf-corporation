import React from "react";
import Link from "next/link";

export default function ChairmanMessage() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
          <div className="grid lg:grid-cols-12">
            {/* Left Executive Summary Panel */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 lg:col-span-5 lg:border-r lg:border-white/10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red ring-1 ring-brand-red/30">
                  Executive Leadership
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Chairman&apos;s Message
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Reflections on over two decades of building trust in Pakistani
                  logistics and expanding into sustainable global packaging.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red text-lg font-extrabold text-white">
                    TY
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Tahir Yaseen</p>
                    <p className="text-sm font-medium text-brand-red">
                      Chairman &ndash; MF Corporation
                    </p>
                    <p className="text-xs text-slate-400">
                      Serving Since 1st April 1998
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-red"
                >
                  <span>Read Full Corporate Heritage</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Verbatim CEO/Chairman Message */}
            <div className="p-8 sm:p-12 lg:col-span-7">
              <svg
                className="h-10 w-10 text-brand-red/60"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="mt-6 space-y-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                <p>
                  &ldquo;As Chairman of MF Corporation, I feel extremely honored
                  and privileged to write this message. With 22 years of hard
                  work, this company has faced both good and challenging times
                  throughout the whole journey. We started operating first on
                  1st April 1998, and have worked tirelessly since then to build
                  our brand. Our company has now become a prominent service
                  provider to our customers in the areas of custom clearance,
                  freight forwarding, project cargo handling, warehousing and
                  distribution management, and other logistics services that
                  have significantly reduced cost, having a competitive edge in
                  the Pakistani market.&rdquo;
                </p>
                <p>
                  &ldquo;With a great, hardworking team, we have extended our
                  operations to the packaging field, where we focus on organic
                  and biodegradable solutions for everyday packaging needs. It
                  is necessary to be environment-friendly to protect our planet
                  from further global warming damage, a prominent cause of which
                  is conventional plastic packaging.&rdquo;
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
              </blockquote>

              <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                <span className="font-bold text-white">
                  &mdash; Tahir Yaseen, Chairman &ndash; MF Corporation
                </span>
                <span className="hidden text-xs text-slate-400 sm:inline">
                  Karachi, Pakistan
                </span>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
