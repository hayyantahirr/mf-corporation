import React from "react";

export default function WhatWeDo() {
  return (
    <section id="consolidation" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* What Do We Do? */}
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <span className="inline-block rounded-md bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              Our Role
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              What Do We Do?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              MF Express enables Pakistani shoppers and businesses to purchase
              goods from Chinese marketplaces such as{" "}
              <strong className="text-slate-950">
                Alibaba, DHgate, Made in China
              </strong>
              , or direct Chinese factories and have them delivered to the MF
              Express warehouse without worrying about the hassle of
              international shipping from China to Pakistan or custom
              clearances.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              MF Express aims to protect customers from expensive international
              delivery charges and deliver goods reliably from China straight to
              their doorstep.
            </p>
          </article>

          {/* What is MF Express? */}
          <article className="rounded-2xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
            <span className="inline-block rounded-md bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              China Warehouse &amp; Consolidation
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
              What Is MF Express?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Our service offers a dedicated warehouse in China to Pakistani
              shoppers so they can buy products from Chinese stores and
              factories and keep them stored safely at MF Express warehouse
              facilities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              This saves customers from paying high warehousing fees to shipping
              companies and provides a safe holding hub until the shipment is
              consolidated. MF Express then consolidates the shipment and ships
              it to Pakistan. Once the shipment arrives in Pakistan, MF Express
              takes care of all logistics and custom clearances until the parcel
              is delivered to the customer&apos;s doorstep. MF Express is an
              easy, affordable, and one-stop solution for all to ship from
              China.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
