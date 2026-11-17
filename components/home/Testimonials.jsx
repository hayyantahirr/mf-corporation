import React from "react";

const testimonials = [
  {
    quote:
      "MF Express completely simplified our Alibaba and factory imports. Consolidating everything in their China warehouse saved us heavy courier costs and cleared customs smoothly.",
    author: "Usman Tariq",
    role: "E-Commerce Importer, Lahore",
    division: "MF Express",
  },
  {
    quote:
      "Switching to MF Packages elevated our retail shelf presence. Their kraft stand-up pouches and HP Indigo print consistency matched our brand standards from the very first run.",
    author: "Sana Siddiqui",
    role: "Founder, Artisanal Roasters, Karachi",
    division: "MF Packages",
  },
  {
    quote:
      "We have trusted MF Corporation with our freight forwarding and custom clearance for years. Their transparent pricing and timely project cargo handling give us a real market edge.",
    author: "Kamran Qureshi",
    role: "Operations Director, Trade Linkers PK",
    division: "MF Corporation",
  },
];

function FiveStars() {
  return (
    <div className="flex items-center gap-1 text-brand-red" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg
          key={star}
          className="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.376 2.453a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.375-2.452a1 1 0 0 0-1.176 0l-3.375 2.452c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 0 0 .95-.69l1.289-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Client Voices
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Feedback from importers, brands, and trade partners across our
            logistics and packaging divisions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-8 shadow-xs transition-all hover:border-brand-red/50 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <FiveStars />
                  <span className="rounded-full bg-brand-red/8 px-3 py-1 text-[11px] font-bold text-brand-red">
                    {item.division}
                  </span>
                </div>

                <blockquote className="mt-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 border-t border-neutral-100 pt-5">
                <p className="text-sm font-bold text-neutral-900">
                  {item.author}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
