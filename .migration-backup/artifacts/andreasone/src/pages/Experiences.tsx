import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import baliPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.57_PM_1776997719128.png";

export default function Experiences() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-olive poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-[18vw] stacked-title-word text-[#f6c45a] tracking-tight">EXPERIENCES</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[12vw] stacked-title-word text-[#cf5d27] -mt-2 md:mt-0">& GATHERINGS</h1>
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

        <div className="flex flex-col lg:flex-row items-center gap-12 w-full mb-24">
          <ScrollReveal className="w-full lg:w-1/2 hover-img border-8 border-[#111111] bg-[#cf5d27] p-4 shadow-[16px_16px_0_#445829]" direction="left">
            <img src={gatheringPoster} alt="The Gathering 2026" className="w-full h-auto" />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-left" direction="right">
            <span className="inline-block bg-[#cf5d27] text-[#111111] font-sans font-bold text-2xl px-6 py-2 border-4 border-[#111111] mb-6 uppercase tracking-widest">
              ON SALE
            </span>
            <h3 className="text-[8vw] leading-none text-[#445829] mb-4">THE GATHERING</h3>
            <p className="font-sans text-3xl font-bold uppercase mb-2">MAY 24, 2026 · LOS ANGELES</p>
            <p className="font-sans text-xl uppercase tracking-widest text-[#111111]/70 mb-12">Resident — Downtown LA</p>
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#445829] text-[#efe7d7] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              GET TICKETS
            </Button>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 w-full">
          <ScrollReveal className="w-full lg:w-1/2 hover-img border-8 border-[#111111] bg-[#f6c45a] p-4 shadow-[-16px_16px_0_#cf5d27]" direction="right">
            <img src={baliPoster} alt="Mari Beach Club" className="w-full h-auto" />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-right" direction="left">
            <span className="inline-block bg-[#f6c45a] text-[#111111] font-sans font-bold text-2xl px-6 py-2 border-4 border-[#111111] mb-6 uppercase tracking-widest">
              PRESALE
            </span>
            <h3 className="text-[8vw] leading-none text-[#cf5d27] mb-4">MARI BEACH CLUB</h3>
            <p className="font-sans text-3xl font-bold uppercase mb-2">JUL 11, 2026 · BALI, ID</p>
            <p className="font-sans text-xl uppercase tracking-widest text-[#111111]/70 mb-12">Canggu</p>
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              RSVP
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black poster-panel border-y-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h2 className="text-[12vw] leading-none text-[#f6c45a] mb-4">PAST</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="text-[12vw] leading-none text-[#cf5d27] mb-16">FLOORS</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {[
            { city: "LISBON", venue: "Lux Frágil", date: "OCT 2025" },
            { city: "NEW YORK", venue: "Elsewhere", date: "AUG 2025" },
            { city: "LAGOS", venue: "Hard Rock", date: "DEC 2024" },
            { city: "TOKYO", venue: "La Machine", date: "FEB 2024" },
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
