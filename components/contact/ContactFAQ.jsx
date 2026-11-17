import React from "react";

export const contactFaqs = [
  {
    question: "What is MF Corporation and which companies operate under it?",
    answer:
      "MF Corporation started operating on 1st April 1998 under Chairman Tahir Yaseen and is a leading Pakistani logistics and packaging parent group. It oversees two flagship subsidiaries: MF Express (China-to-Pakistan international shipping, warehousing, and custom clearance) and MF Packages / MF-Packages LLC (flexible packaging and printing across the USA, China, and Karachi, Pakistan).",
  },
  {
    question:
      "How does MF Express help Pakistani shoppers and SMEs buy from China?",
    answer:
      "MF Express provides a warehouse in China where Pakistani shoppers and small-to-medium businesses can receive and store products ordered from Alibaba, DHgate, Made in China, or Chinese factories—saving high third-party warehousing fees. MF Express then consolidates the shipment, transports it to Pakistan, completes all custom clearances, and delivers it directly to the customer's doorstep.",
  },
  {
    question:
      "What packaging formats and printing technologies does MF Packages offer?",
    answer:
      "Operating since 2018 with 50+ skilled workers in Karachi and global manufacturing in China and Pakistan, MF Packages supplies stand-up pouches, kraft paper pouches with optional windows and zippers, high-barrier aluminium pouches, transparent plastic pouches, flat-bottom pouches, retort pouches, spout pouches, valved coffee pouches, coffee brewing filters, and shrink capsules. Printing combines HP Indigo digital presses (25K, 20000s, 6900s) with Heidelberg and Roland offset systems, CTP pre-press, UV coating, and lamination.",
  },
  {
    question: "Where is MF Corporation headquartered and how can I get a quote?",
    answer:
      "Our Karachi office is located at Suit #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan. You can call +92 332 2464729, email info@mfpackages.com or mfpackages0@gmail.com, or visit www.mfpackages.com.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Common Questions
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {contactFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-950">
                <span>{faq.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-transform group-open:rotate-45 group-open:bg-brand-red group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
