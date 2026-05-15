import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MotionBackdrop } from "@/components/MotionBackdrop";
import { AndreasWordmark } from "@/components/AndreasWordmark";
import { FMLY_BZNS_URL } from "@/data/siteLinks";
import fmlyLogo from "@assets/fmly-bzns-logo-goat.png";

export default function Fmly() {
  return (
    <div className="w-full flex flex-col">
      <section className="relative isolate bg-sage min-h-[72vh] md:min-h-[82vh] flex items-center justify-center px-4 py-16 md:py-20 border-b-8 border-[#111111] text-center overflow-hidden">
        <MotionBackdrop
          opacity={0.2}
          playbackRate={0.5}
          overlayStyle={{ background: "linear-gradient(180deg, rgba(69,88,41,0.12), rgba(17,17,17,0.42))" }}
        />
        <a href={FMLY_BZNS_URL} target="_blank" rel="noreferrer" className="inline-block w-full hover-lift">
          <ScrollReveal className="relative z-10">
            <img src={fmlyLogo} alt="FMLY BZNS" className="w-full max-w-[min(92vw,980px)] mx-auto" />
          </ScrollReveal>
        </a>
      </section>

      <section className="relative isolate bg-mustard poster-panel border-b-8 border-[#111111] text-center overflow-hidden">
        <MotionBackdrop
          opacity={0.14}
          playbackRate={0.5}
          overlayStyle={{ background: "linear-gradient(180deg, rgba(246,196,90,0.14), rgba(17,17,17,0.24))" }}
        />
        <ScrollReveal className="relative z-10">
          <div className="max-w-5xl mx-auto border-8 border-[#111111] bg-[#efe7d7]/92 p-8 md:p-12 shadow-[12px_12px_0_#cf5d27] text-left">
            <p className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#111111] leading-relaxed">
              FMLY BZNS is a globally connected collective of DJs, producers, musicians, visual artists, dancers, and cultural creatives founded and envisioned by{" "}
              <AndreasWordmark text="AndreasOne" className="inline-flex align-baseline text-[#111111] text-[1.08em] tracking-[0.06em]" />.
              Rooted in community and inspired by the sounds of the African diaspora and global underground culture, FMLY BZNS exists at the intersection of rhythm, movement, fashion, visual storytelling, and immersive experience, curating the evolution of Global Dance Music Culture through music, worldbuilding, and intentional spaces that bring people together through sound, space, and shared energy.
            </p>
            <a
              href={FMLY_BZNS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center font-sans text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-[#cf5d27] underline underline-offset-4"
            >
              fmlybzns.com
            </a>
          </div>
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
