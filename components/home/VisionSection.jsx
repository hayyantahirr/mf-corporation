import React from "react";

const statements = [
  {
    eyebrow: "Our Vision",
    title: "Uncompromising Quality & Global Recognition",
    description:
      "We intend to maintain quality in every department, remain firm with our commitments to clients, and bring our group to national and international recognition.",
  },
  {
    eyebrow: "Our Mission",
    title: "Customer Satisfaction & Sustainable Growth",
    description:
      "Every function centers on customer satisfaction—empowering small and medium businesses to trade effortlessly while advancing eco-conscious packaging.",
  },
];

export default function VisionSection() {
  return (
    <section className="bg-brand-red py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Vision &amp; Purpose
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Driven by Commitment, Focused on the Future
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {statements.map((item) => (
            <div
              key={item.eyebrow}
              className="rounded-2xl bg-white p-8 text-neutral-900 shadow-lg sm:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                {item.eyebrow}
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
