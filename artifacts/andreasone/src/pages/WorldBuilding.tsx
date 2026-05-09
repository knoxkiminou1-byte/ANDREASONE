import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { worldBuildingIntro, worldBuildingCategories } from "@/data/worldBuilding";

import afroCollective from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";
import logoOrange from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";

export default function WorldBuilding() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-black poster-panel border-b-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#cf5d27]">WORLD</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[12vw] stacked-title-word text-[#f6c45a] -mt-2 md:mt-0">BUILDING</h1>
        </ScrollReveal>
      </section>

      {/* Intro statement */}
      <section className="bg-[#efe7d7] poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <p className="font-sans text-3xl md:text-5xl font-bold uppercase tracking-wide text-[#111111] max-w-6xl mx-auto leading-tight">
            {worldBuildingIntro}
          </p>
        </ScrollReveal>
      </section>

      {/* Four category doorways */}
      <section className="bg-cream poster-panel">
        <div className="flex flex-col gap-0 w-full">
          {worldBuildingCategories.map((cat, i) => (
            <ScrollReveal key={cat.tag} delay={i * 0.09}>
              <div
                className="w-full flex flex-col md:flex-row items-stretch border-b-8 border-[#111111] hover-lift cursor-pointer group"
                style={{ backgroundColor: cat.bg }}
              >
                <div className="flex-shrink-0 flex items-center justify-center px-8 md:px-16 py-10 border-b-8 md:border-b-0 md:border-r-8 border-[#111111]/20">
                  <span
                    className="font-sans font-bold text-xl uppercase tracking-[0.3em]"
                    style={{ color: cat.sub, opacity: 0.6 }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="flex-1 px-8 md:px-16 py-12 md:py-16 text-center md:text-left">
                  <h2
                    className="font-display text-[8vw] md:text-[5vw] leading-none mb-6 group-hover:opacity-80 transition-opacity"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h2>
                  <p
                    className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide leading-relaxed max-w-3xl"
                    style={{ color: cat.sub }}
                  >
                    {cat.description}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center px-8 md:px-16 py-8 md:py-0">
                  <span
                    className="font-display text-5xl md:text-7xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ color: cat.color }}
                  >
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Case studies — renamed to "Projects" */}
      <section className="bg-orange poster-panel border-y-8 border-[#111111]">
        <ScrollReveal>
          <h2 className="text-[12vw] text-[#111111] text-center mb-16 leading-none">PROJECTS</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {[
            { img: logoOrange, tag: "VISUAL IDENTITY", client: "FMLY BZNS", title: "BRAND IDENTITY" },
            { img: afroCollective, tag: "IMMERSIVE ENVIRONMENTS", client: "PANGEA SOUND", title: "SOUND DIRECTION" },
            { img: gatheringPoster, tag: "CREATIVE COLLABORATION", client: "THE GATHERING", title: "FESTIVAL DESIGN" },
          ].map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-8 border-[#111111] bg-[#efe7d7] p-6 shadow-[12px_12px_0_#111111] hover-lift cursor-pointer text-center">
                <div className="hover-img w-full aspect-[4/5] border-b-8 border-[#111111] mb-6 relative bg-[#111111]">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
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
          <h2 className="text-[8vw] leading-none text-[#111111] mb-12">WE BUILD WORLDS</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-wide text-[#111111] max-w-6xl mx-auto leading-tight mb-16">
            A few collaborations at a time. Real depth on each one.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.18}>
          <Link href="/connect">
            <Button size="lg" className="h-24 px-20 text-4xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#111111] hover:text-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              START A SIGNAL
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
