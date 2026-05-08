import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

import afroCollective from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";
import logoOrange from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";

export default function Work() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-black poster-panel border-b-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h1 className="text-massive text-[#cf5d27]">WORK</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[12vw] leading-none text-[#f6c45a]">& OFFERINGS</h1>
        </ScrollReveal>
      </section>

      <section className="bg-cream poster-panel">
        <div className="flex flex-col gap-16 w-full">
          {[
            { tag: "MUSIC", desc: "Curated sound for rooms, brands, and ritual gatherings." },
            { tag: "DESIGN", desc: "Visual identity rooted in cultural specificity." },
            { tag: "CONSULTING", desc: "Strategy for brands trying to live inside culture." },
          ].map((lane, i) => (
            <ScrollReveal key={lane.tag} delay={i * 0.1}>
              <div className="border-8 border-[#111111] bg-[#efe7d7] p-8 md:p-16 shadow-[16px_16px_0_#cf5d27] hover-lift text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <h2 className="font-display text-[10vw] md:text-[8vw] text-[#445829] leading-none flex-shrink-0">{lane.tag}</h2>
                <p className="font-sans text-3xl md:text-5xl font-bold uppercase tracking-wide text-[#111111] leading-tight">
                  {lane.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-orange poster-panel border-y-8 border-[#111111]">
        <ScrollReveal>
          <h2 className="text-[12vw] text-[#111111] text-center mb-16 leading-none">CASE STUDIES</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {[
            { img: logoOrange, tag: "DESIGN", client: "FMLY BZNS", title: "BRAND IDENTITY" },
            { img: afroCollective, tag: "CONSULTING", client: "PANGEA SOUND", title: "SOUND DIRECTION" },
            { img: gatheringPoster, tag: "MUSIC", client: "THE GATHERING", title: "FESTIVAL DESIGN" },
          ].map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-8 border-[#111111] bg-[#efe7d7] p-6 shadow-[12px_12px_0_#111111] hover-lift cursor-pointer text-center">
                <div className="hover-img w-full aspect-[4/5] border-b-8 border-[#111111] mb-6 relative bg-[#111111]">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                  <span className="absolute top-4 left-4 bg-[#111111] text-[#f6c45a] font-sans font-bold text-xl px-4 py-1 border-4 border-[#cf5d27]">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-display text-4xl text-[#cf5d27] mb-2">{c.client}</h3>
                <p className="font-sans text-2xl font-bold uppercase tracking-wider text-[#111111]">{c.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-mustard poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[8vw] leading-none text-[#111111] mb-12">WHO WE TAKE ON</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-wide text-[#111111] max-w-6xl mx-auto leading-tight mb-16">
            We work with brands who already have something to say. A few partners at a time. Real depth on each.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.18}>
          <Link href="/contact">
            <Button size="lg" className="h-24 px-20 text-4xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#111111] hover:text-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              START A CONVERSATION
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
