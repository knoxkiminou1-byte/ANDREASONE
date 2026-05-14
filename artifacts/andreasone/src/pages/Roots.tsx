import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import layerPhoto from "@assets/Andreas_Layer_1778035395766.jpeg";
import rootsPoster from "@assets/roots-poster.jpeg";
import rootsOriginStage from "@assets/roots-origin-stage.jpg";

export default function Roots() {
  return (
    <div className="w-full flex flex-col">

      {/* TITLE BLOCK */}
      <section className="bg-orange poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] stacked-title-word text-[#111111]">SIGNALS</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[8vw] md:text-[6.5vw] stacked-title-word text-[#efe7d7] uppercase tracking-[0.18em] -mt-2 md:-mt-4">
            FROM THE
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <h1 className="text-[21vw] md:text-[18vw] stacked-title-word text-[#445829] uppercase -mt-4 md:-mt-8">
            SOIL
          </h1>
        </ScrollReveal>
      </section>

      {/* FULL-BLEED PORTRAIT */}
      <section className="w-full relative min-h-[85vh] overflow-hidden bg-[#111111]">
        <img
          src={rootsOriginStage}
          alt="Origin stage scene"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 poster-panel pb-16">
          <ScrollReveal direction="left">
            <p className="font-sans text-xl uppercase tracking-[0.4em] text-[#cf5d27] mb-4">Origin</p>
            <h2 className="text-[10vw] leading-none text-[#efe7d7]">THE ROOTS</h2>
          </ScrollReveal>
        </div>
      </section>

      {/* ORIGIN COPY */}
      <section className="bg-black poster-panel">
        <div className="flex flex-col lg:flex-row items-start gap-16 w-full">
          <ScrollReveal className="w-full lg:w-[45%] hover-img border-8 border-[#cf5d27] bg-[#cf5d27] p-4 shadow-[16px_16px_0_#f6c45a] flex-shrink-0" direction="left">
            <img
              src={rootsPoster}
              alt="Andreas roots portrait"
              className="w-full h-auto object-cover"
            />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-[#efe7d7]" direction="right">
            <div className="space-y-6 font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide leading-relaxed text-[#efe7d7]">
              <p>Reggae sound systems.</p>
              <p>Bay Area underground hip-hop.</p>
              <p>Warehouse parties, full moon raves, and late-night dance floors.</p>
              <p>World music concerts, dub sessions, and immersive festival environments.</p>
              <p className="text-[#d9decf]/70 mt-12 text-xl md:text-2xl">
                The foundation for a multidisciplinary practice rooted in rhythm, atmosphere, and connection.
              </p>
            </div>
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
            { year: "1997 — 2007", text: "Entered the Bay Area underground. Produced events, emceed parties, designed flyers and album covers across hip-hop, reggae, and rave culture. Sold original T-shirt designs at festivals and late-night gatherings." },
            { year: "2007", text: "Founded PEACE Fits — a cult streetwear label bridging festival culture, global influence, and Afro-inspired visual motifs." },
            { year: "2007 — 2015", text: "Performed internationally as an emcee, live visual artist, and designer. From Oakland warehouses to festivals in Australia, Costa Rica, and Canada." },
            { year: "2018", text: "First public DJ set at Lightning in a Bottle. Merging influences and experience into global dance music culture." },
            { year: "2020", text: "Launched FMLY BZNS as a livestream DJ and artist collective connecting music, visuals, and community during the pandemic era." },
            { year: "2022", text: "FMLY BZNS evolves into a live event series. Immersive dance floors rooted in diaspora sounds, rave energy, and visual world-building." },
            { year: "2023", text: "Performed at Coachella. Expanded FMLY BZNS takeovers to Lightning in a Bottle and Burning Man." },
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
            <div className="text-center px-8">
              <p className="font-sans text-3xl md:text-5xl font-bold uppercase tracking-[0.3em] text-[#f6c45a] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                "Music is the weapon of the future"
              </p>
              <p className="mt-6 font-sans text-lg md:text-2xl uppercase tracking-[0.35em] text-[#efe7d7] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                Fela Kuti
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-black poster-panel border-t-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-4">BOOK</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h2 className="text-[10vw] leading-none text-[#cf5d27] mb-16">ANDREASONE</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <Link href="/connect">
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#cf5d27]">
              GET IN TOUCH
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
