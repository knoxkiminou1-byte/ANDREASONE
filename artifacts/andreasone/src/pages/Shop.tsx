import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Shop() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-mustard min-h-[80vh] px-4 md:px-8 py-24 md:py-32 border-b-8 border-[#111111] flex items-center justify-center text-center">
        <ScrollReveal>
          <h1 className="text-[16vw] md:text-[13vw] stacked-title-word text-[#cf5d27]">SHOP</h1>
          <h2 className="text-[12vw] md:text-[10vw] stacked-title-word text-[#111111] -mt-6 md:-mt-12">
            COMING SOON
          </h2>
        </ScrollReveal>
      </section>
    </div>
  );
}
