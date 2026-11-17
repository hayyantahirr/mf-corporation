import React from "react";
import Link from "next/link";

export default function PackagesCTA() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-emerald-950/50 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Direct Packaging Inquiries
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get a Quote From MF Packages
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Visit our dedicated storefront at{" "}
              <a
                href="https://www.mfpackages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-brand-red underline-offset-4 hover:text-brand-red"
              >
                www.mfpackages.com
              </a>{" "}
              or contact our Karachi office directly for stock pouches and
              custom print runs.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href="tel:+923322464729" className="hover:text-white">
                  +92 332 2464729
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:info@mfpackages.com"
                  className="hover:text-white"
                >
                  info@mfpackages.com
                </a>
              </p>
              <p>
                <strong className="text-white">Alt Email:</strong>{" "}
                <a
                  href="mailto:mfpackages0@gmail.com"
                  className="hover:text-white"
                >
                  mfpackages0@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Address:</strong> Suit #9, Rafiq
                Mansion, Jethamal Road, Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col">
            <a
              href="https://www.mfpackages.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-hover"
            >
              <span>Visit www.mfpackages.com</span>
              <span aria-hidden="true">&#8599;</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
            >
              Submit Packaging Brief
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
