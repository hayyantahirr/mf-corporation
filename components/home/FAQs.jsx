import React from "react";

const faqs = [
  {
    question: "What is MF Corporation and which companies operate under it?",
    answer:
      "Established on April 1, 1998 in Karachi, Pakistan, MF Corporation is a holding group specializing in logistics and packaging. It oversees MF Express (China-to-Pakistan shipping and customs) and MF Packages (custom flexible packaging and printing).",
  },
  {
    question: "How does MF Express handle shipping from China to Pakistan?",
    answer:
      "Pakistani shoppers and businesses purchase from Alibaba, DHgate, Made-in-China, or Chinese factories and ship to our China warehouse. We store, consolidate multiple orders, clear Pakistani customs, and deliver straight to your doorstep.",
  },
  {
    question:
      "What packaging formats and printing options does MF Packages offer?",
    answer:
      "MF Packages supplies stand-up, flat-bottom, kraft paper, high-barrier aluminium, retort, spout, coffee, and transparent pouches plus shrink capsules. Printing combines HP Indigo digital presses with Heidelberg and Roland offset systems.",
  },
  {
    question:
      "Does MF Packages support both startups and bulk enterprise orders?",
    answer:
      "Yes. Since 2018, our 50+ specialists in Karachi have served startups with ready-made stock or short-run digital custom pouches alongside bulk brand buyers and wholesale distributors across local and international markets.",
  },
  {
    question: "Where is MF Corporation headquartered and how can we reach you?",
    answer:
      "Our headquarters is located at Suite #9, Rafiq Mansion, Jethamal Road, Karachi, Pakistan. You can call +92 332 2464729 or email info@mfpackages.com for group, logistics, or packaging inquiries.",
  },
];

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="border-t border-[#E2E8F0] bg-[#F8F9FA] py-24 lg:py-32"
    >
      <div
        data-reveal-group
        className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left: 4-Column Section Header */}
          <div data-reveal-item className="lg:col-span-4">
            <p className="text-[12px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-[#ED3B09]">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mt-4 font-heading text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[40px]">
              Key Answers About Our Group.
            </h2>
            <p className="mt-5 max-w-[42ch] text-base leading-[1.65] text-[#475569]">
              Essential details on MF Corporation, China-to-Pakistan shipping,
              and custom packaging solutions.
            </p>
          </div>

          {/* Right: 8-Column Hairline Accordion */}
          <div data-reveal-item className="lg:col-span-8">
            <div className="divide-y divide-[#E2E8F0] border border-[#E2E8F0] bg-[#FFFFFF]">
              {faqs.map((item) => (
                <details key={item.question} className="group p-6 sm:p-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-lg font-semibold leading-[1.35] text-[#0F172A] transition-colors duration-250 group-open:text-[#ED3B09]">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#E2E8F0] text-base font-normal text-[#0F172A] transition-transform duration-250 group-open:rotate-45 group-open:border-[#ED3B09] group-open:text-[#ED3B09]"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[65ch] text-base leading-[1.65] text-[#475569]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
