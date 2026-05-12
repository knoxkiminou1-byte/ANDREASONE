import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FMLY_SITE_URL, SOCIAL_LINKS } from "@/data/siteLinks";

const fmlyHref = FMLY_SITE_URL || SOCIAL_LINKS.soundcloud;

export default function Fmly() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-sage poster-panel border-b-8 border-[#111111] text-center">
        <a href={fmlyHref} target="_blank" rel="noreferrer" className="inline-block hover-lift">
          <ScrollReveal>
            <div className="leading-[0.82]">
              <h1 className="text-massive stacked-title-word text-[#7b7a4c] [text-shadow:10px_10px_0_#111111]">FMLY</h1>
              <h1 className="text-massive stacked-title-word text-[#ff8f11] mt-0 md:-mt-10 [text-shadow:10px_10px_0_#111111]">BZNS</h1>
            </div>
          </ScrollReveal>
        </a>
      </section>

      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-12">THE CREW</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="max-w-5xl mx-auto border-8 border-[#111111] bg-[#efe7d7] p-8 md:p-12 shadow-[12px_12px_0_#cf5d27] text-left">
            <p className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#111111] leading-relaxed">
              FMLY BZNS is a globally connected collective of DJs, producers, musicians, visual artists, dancers, and cultural creatives founded and envisioned by AndreasOne. Rooted in community and inspired by the sounds of the African diaspora and global underground culture, FMLY BZNS exists at the intersection of rhythm, movement, fashion, visual storytelling, and immersive experience, curating the evolution of Global Dance Music Culture through music, worldbuilding, and intentional spaces that bring people together through sound, space, and shared energy.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.16} className="mt-12">
          <a href={fmlyHref} target="_blank" rel="noreferrer">
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-4 border-[#111111]">
              ENTER FMLY BZNS
            </Button>
          </a>
        </ScrollReveal>
      </section>

      <section className="bg-black poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[12vw] leading-none text-[#cf5d27] mb-4">JOIN THE</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h2 className="text-[12vw] leading-none text-[#f6c45a] mb-12">FAMILY</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-3xl text-[#efe7d7] max-w-4xl mx-auto font-bold uppercase mb-16">
            Access to the world before everyone else. Mixtape drops, event presales, capsule releases.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link href="/join">
            <Button size="lg" className="h-24 px-20 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#cf5d27]">
              JOIN LIST
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
