import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import heroPhoto from "@assets/Andreas_0217_1778035391882.jpeg";
import layerPhoto from "@assets/Andreas_Layer_1778035395766.jpeg";
import portraitPhoto from "@assets/Andreas-48_1778035403218.jpeg";

export default function About() {
  return (
    <div className="w-full flex flex-col">

      {/* TITLE BLOCK */}
      <section className="bg-orange poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#111111]">GLOBAL</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive stacked-title-word text-[#efe7d7] mt-0 md:-mt-10">OPERATOR</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-2xl uppercase tracking-[0.3em] text-[#111111]/60 mt-8">DJ · Creative Director · Vibe Curator</p>
        </ScrollReveal>
      </section>

      {/* FULL-BLEED PORTRAIT */}
      <section className="w-full relative min-h-[85vh] overflow-hidden bg-[#111111]">
        <img
          src={heroPhoto}
          alt="Andreas One"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 poster-panel pb-16">
          <ScrollReveal direction="left">
            <p className="font-sans text-xl uppercase tracking-[0.4em] text-[#cf5d27] mb-4">Signals from the soil</p>
            <h2 className="text-[10vw] leading-none text-[#efe7d7]">THE ROOTS</h2>
          </ScrollReveal>
        </div>
      </section>

      {/* BIO */}
      <section className="bg-black poster-panel">
        <div className="flex flex-col lg:flex-row items-start gap-16 w-full">
          <ScrollReveal className="w-full lg:w-[45%] hover-img border-8 border-[#cf5d27] bg-[#cf5d27] p-4 shadow-[16px_16px_0_#f6c45a] flex-shrink-0" direction="left">
            <img src={portraitPhoto} alt="Andreas" className="w-full h-auto object-cover" />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-[#efe7d7]" direction="right">
            <p className="font-sans text-3xl uppercase tracking-wide leading-relaxed font-bold mb-8 text-[#efe7d7]">
              Andreas grew up between two worlds — afro-diaspora roots and the global club. He learned music the way most people learn language: by being inside it.
            </p>
            <p className="font-sans text-xl tracking-wider leading-relaxed text-[#d9decf]/80 mb-8">
              Records on Sundays, percussion at family parties, gospel on Wednesdays, dub on the radio late at night. That bilingual ear became the foundation of everything that came after.
            </p>
            <p className="font-sans text-xl tracking-wider leading-relaxed text-[#d9decf]/80">
              He started DJing in Brooklyn in 2018 — first lofts and house parties, then proper rooms — and within a year had founded FMLY BZNS. His sound blends Global Music with Festival Culture. Earthy + Urban.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-olive poster-panel border-y-8 border-[#cf5d27]">
        <ScrollReveal>
          <h2 className="text-[12vw] leading-none text-[#f6c45a] mb-16 text-center">THE TIMELINE</h2>
        </ScrollReveal>
        <div className="max-w-5xl mx-auto space-y-12 text-left">
          {[
            { year: "2018", text: "Started DJing in Brooklyn — house parties, lofts, basement nights." },
            { year: "2019", text: "Founded FMLY BZNS as a creative studio and event series." },
            { year: "2022", text: "Launches The Gathering — annual cultural festival, sold out year one." },
            { year: "2025", text: "Lisbon, Lagos, New York, Tokyo. Global rooms. One sound." },
            { year: "2026", text: "Touring NYC, Lagos, Lisbon, Berlin, Mexico City. andreasone.co" },
          ].map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 0.09} direction="left">
              <div className="border-l-8 border-[#cf5d27] pl-8 hover-lift">
                <h3 className="font-display text-6xl text-[#cf5d27] mb-4">{t.year}</h3>
                <p className="font-sans text-2xl font-bold uppercase text-[#efe7d7]">{t.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* EDITORIAL SECOND PHOTO */}
      <section className="w-full relative min-h-[70vh] overflow-hidden bg-[#111111]">
        <img
          src={layerPhoto}
          alt="Andreas One"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <p className="font-sans text-3xl md:text-5xl font-bold uppercase tracking-[0.3em] text-[#f6c45a] text-center px-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              "A vibe, a frequency"
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRESS LOGOS */}
      <section className="bg-cream poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#cf5d27] mb-16">PRESS & MEDIA</h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-8">
          {["RESIDENT ADVISOR", "MIXMAG", "OKAYAFRICA", "HIGHSNOBIETY", "i-D", "BOILER ROOM"].map((p, i) => (
            <ScrollReveal key={p} delay={i * 0.06}>
              <span className="block font-display text-3xl md:text-5xl text-[#111111] hover:text-[#f6c45a] transition-colors bg-[#cf5d27] px-6 py-2 border-4 border-[#111111] shadow-[6px_6px_0_#111111] hover-lift cursor-pointer">
                {p}
              </span>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3} className="mt-16">
          <Link href="/press">
            <Button size="lg" className="h-16 px-12 text-2xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-4 border-[#111111]">
              PRESS KIT
            </Button>
          </Link>
        </ScrollReveal>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-black poster-panel border-t-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-4">BOOK</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h2 className="text-[10vw] leading-none text-[#cf5d27] mb-16">ANDREAS</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <Link href="/contact">
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#cf5d27]">
              GET IN TOUCH
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
