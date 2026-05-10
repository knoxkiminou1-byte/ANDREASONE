import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

import crew01 from "@assets/IMG_0237_1776998601428.JPG";
import crew02 from "@assets/IMG_0177_1776998601433.JPG";
import crew03 from "@assets/IMG_0227_1776998601432.JPG";
import crew04 from "@assets/IMG_0184_1776998601435.JPG";

export default function Fmly() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-sage poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#cf5d27]">FMLY</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive stacked-title-word text-[#445829] mt-0 md:-mt-10">BZNS</h1>
        </ScrollReveal>
      </section>

      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-12">THE CREW</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          {[
            { img: crew01, name: "ANDREAS", role: "FOUNDER", city: "LA" },
            { img: crew02, name: "MAYA O.", role: "VISUAL DIR", city: "BK" },
            { img: crew03, name: "TUNDE A.", role: "MUSIC DIR", city: "LOS" },
            { img: crew04, name: "ISABELA R.", role: "EVENTS", city: "CDMX" },
          ].map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.09}>
              <div className="border-8 border-[#111111] bg-[#efe7d7] p-4 shadow-[12px_12px_0_#cf5d27] hover-lift text-center">
                <div className="hover-img w-full aspect-[4/5] border-4 border-[#111111] mb-6 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500" />
                </div>
                <h3 className="font-display text-5xl text-[#cf5d27] mb-2">{c.name}</h3>
                <p className="font-sans text-2xl font-bold uppercase tracking-wider text-[#111111] mb-2">{c.role}</p>
                <p className="font-sans text-xl text-[#445829] font-bold">{c.city}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
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
