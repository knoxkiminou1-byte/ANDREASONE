import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LIB_PASSES_URL, THE_GATHERING_TICKETS_URL } from "@/data/siteLinks";

import gatheringPoster from "@assets/the-gathering-2026-hopland.png";
import lib2026Poster from "@assets/lib2026-fmly-bzns.png";

const experienceEntries = [
  {
    date: "MAY 2026",
    title: "FMLY BZNS TAKEOVER — CROSSROADS @ LIB",
    copy: "FMLY BZNS takes over Crossroads at Lightning in a Bottle on Sunday, May 24.",
    tags: ["TAKEOVER", "LIB", "CROSSROADS"],
    image: lib2026Poster,
    href: LIB_PASSES_URL,
    cta: "PASSES",
  },
  {
    date: "JUL 2026",
    title: "THE GATHERING 2026 — ANNOUNCED",
    copy:
      "The Gathering returns July 31-August 2, 2026 in Hopland, California at Gateway Mendocino. A boutique gathering rooted in music, movement, healing arts, immersive environments, and global dancefloor culture.",
    tags: ["ANNOUNCEMENT", "EXPERIENCES", "THE-GATHERING"],
    image: gatheringPoster,
    href: THE_GATHERING_TICKETS_URL,
    cta: "GET TICKETS",
  },
];

export default function Experiences() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-olive poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-[18vw] stacked-title-word text-[#f6c45a] tracking-tight">EXPERIENCES</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[12vw] stacked-title-word text-[#cf5d27] -mt-6 md:-mt-12">& GATHERINGS</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-xl md:text-2xl uppercase tracking-[0.25em] text-[#efe7d7]/60 mt-8 max-w-3xl mx-auto">
            Live sets, festival appearances, activations, nightlife moments, and immersive environments.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-cream poster-panel">
        <ScrollReveal>
          <h2 className="text-[10vw] text-[#111111] text-center mb-16 leading-none">UPCOMING</h2>
        </ScrollReveal>

        <div className="flex flex-col gap-10 w-full">
          {experienceEntries.map((entry, i) => (
            <ScrollReveal key={entry.title} delay={i * 0.05}>
              <article className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 border-8 border-[#111111] bg-[#efe7d7] p-4 md:p-6 shadow-[10px_10px_0_#cf5d27] hover-lift">
                <div className="bg-[#111111] border-4 border-[#111111] overflow-hidden min-h-[260px]">
                  <img src={entry.image} alt={entry.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center text-left py-4">
                  <p className="font-sans text-xl md:text-2xl font-bold uppercase tracking-[0.22em] text-[#cf5d27] mb-3">
                    {entry.date}
                  </p>
                  <h3 className="text-4xl md:text-6xl leading-none text-[#111111] mb-5">{entry.title}</h3>
                  <p className="font-sans text-lg md:text-xl font-bold uppercase leading-relaxed text-[#111111]/75 mb-6">
                    {entry.copy}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {entry.tags.map(tag => (
                      <span key={tag} className="font-sans text-sm md:text-base font-bold uppercase tracking-widest border-2 border-[#445829] text-[#445829] px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {entry.href && (
                    <Button asChild size="lg" className="mt-8 h-16 w-fit px-10 text-2xl font-display uppercase bg-[#445829] text-[#efe7d7] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-4 border-[#111111]">
                      <a href={entry.href} target="_blank" rel="noreferrer">
                        {entry.cta}
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-black poster-panel border-y-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h2 className="text-[12vw] stacked-title-word text-[#f6c45a]">PAST</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="text-[12vw] stacked-title-word text-[#cf5d27] -mt-6 md:-mt-10 mb-16">FLOORS</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {[
            { city: "COACHELLA", venue: "DoLab Stage", date: "APR 2023" },
            { city: "LIGHTNING IN A BOTTLE", venue: "Lightning Stage", date: "MAY 2025" },
            { city: "SAME SAME BUT DIFFERENT", venue: "Lake Perris", date: "SEPT 2025" },
            { city: "BALI", venue: "DiskoAfrika", date: "NOV 2025" },
          ].map((ev, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="border-8 border-[#cf5d27] bg-[#111111] p-8 hover-lift shadow-[8px_8px_0_#cf5d27]">
                <p className="font-sans text-xl font-bold text-[#f6c45a] tracking-widest mb-4">{ev.date}</p>
                <h3 className="font-display text-5xl text-[#efe7d7] mb-2">{ev.city}</h3>
                <p className="font-sans text-lg uppercase text-[#cf5d27]">{ev.venue}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-orange poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-12">BOOK ANDREAS</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Link href="/connect">
            <Button size="lg" className="h-24 px-20 text-4xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#f6c45a] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              INQUIRE NOW
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
