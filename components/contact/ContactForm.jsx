"use client";

import React, { useState } from "react";

const divisions = [
  "MF Corporation - General & Corporate",
  "MF Express - China to Pakistan Shipping",
  "MF Packages - Custom Packaging & Printing",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    division: divisions[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoHref = `mailto:info@mfpackages.com?subject=${encodeURIComponent(
    `[${formData.division}] Inquiry from ${formData.name || "Website Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDivision: ${formData.division}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Form Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Send an Inquiry
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Division Quote &amp; Consultation Form
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Select the subsidiary or department matching your inquiry and
                share your shipment or packaging brief.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="text-lg font-bold text-emerald-950">
                    Inquiry Prepared Successfully
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                    Thank you,{" "}
                    <span className="font-semibold">
                      {formData.name || "Valued Partner"}
                    </span>
                    . Your request for{" "}
                    <span className="font-semibold">{formData.division}</span>{" "}
                    is ready. You can launch your email client directly with all
                    details pre-filled or call our Karachi desk immediately.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={mailtoHref}
                      className="rounded-xl bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-hover"
                    >
                      Send via Email Client
                    </a>
                    <a
                      href="tel:+923322464729"
                      className="rounded-xl border border-emerald-700/30 bg-white px-5 py-2.5 text-sm font-bold text-emerald-900 transition-colors hover:bg-emerald-100"
                    >
                      Call +92 332 2464729
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-950"
                    >
                      Edit Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="division"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Select Department / Subsidiary
                    </label>
                    <select
                      id="division"
                      name="division"
                      value={formData.division}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                    >
                      {divisions.map((div) => (
                        <option key={div} value={div}>
                          {div}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Muhammad Ali"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Company / Brand Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Business Ltd."
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 3XX XXXXXXX"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Project / Shipment Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your China-to-Pakistan shipping requirements, customs/cargo needs, or packaging format, dimensions, and quantity..."
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-red-hover sm:w-auto"
                  >
                    <span>Prepare Corporate Inquiry</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Guidance Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Shipping From China?
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">
                MF Express Consolidation Desk
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Purchasing from Alibaba, DHgate, Made in China, or Chinese
                factories? Mention your supplier locations, parcel weight or
                CBM volume, and destination city in Pakistan so our team can
                assign China warehouse storage and consolidation rates.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Ordering Custom Packaging?
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-950">
                MF Packages Specification Brief
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Share your product type (snacks, coffee, liquids, prepared
                foods, retail), desired pouch format (kraft, stand-up,
                flat-bottom, aluminium, retort, spout), storage conditions, and
                quantity so we can recommend the ideal print method (HP Indigo
                digital or Heidelberg/Roland offset).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
