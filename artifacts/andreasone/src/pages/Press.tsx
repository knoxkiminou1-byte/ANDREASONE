import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    outlet: "RESIDENT ADVISOR",
    headline: "AndreasOne Is Quietly Building One of the Most Distinct Sounds in Afro House",
    date: "NOV 2025",
    type: "FEATURE",
    color: "#cf5d27",
  },
  {
    outlet: "MIXMAG",
    headline: "The 10 DJs Shaping the Sound of 2025 — AndreasOne, Brooklyn via Lagos",
    date: "AUG 2025",
    type: "LIST",
    color: "#f6c45a",
  },
  {
    outlet: "OKAYAFRICA",
    headline: "FMLY BZNS and the New Architecture of Diaspora Club Culture",
    date: "JUL 2025",
    type: "INTERVIEW",
    color: "#445829",
  },
  {
    outlet: "HIGHSNOBIETY",
    headline: "The Gathering Is the Festival That Understands the Room",
    date: "JUN 2025",
    type: "REVIEW",
    color: "#cf5d27",
  },
  {
    outlet: "i-D MAGAZINE",
    headline: "Meet the Creatives Turning Club Nights Into Cultural Movements",
    date: "MAR 2025",
    type: "PROFILE",
    color: "#f6c45a",
  },
  {
    outlet: "BOILER ROOM",
    headline: "AndreasOne Set — Live from The Gathering, Los Angeles",
    date: "OCT 2024",
    type: "STREAM",
    color: "#445829",
  },
];

export default function Press() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-black poster-panel border-b-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] leading-none text-[#f6c45a]">PRESS</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[12vw] leading-none text-[#cf5d27]">& MEDIA</h1>
        </ScrollReveal>
      </section>

      <section className="bg-cream poster-panel">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-16">AS SEEN IN</h2>
        </ScrollReveal>
        <div className="flex flex-col gap-0 w-full">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="border-b-8 border-[#111111] py-10 flex flex-col md:flex-row md:items-center gap-6 hover-lift cursor-pointer group">
                <div className="flex-shrink-0 w-full md:w-56">
                  <span
                    className="inline-block font-sans font-bold text-xl uppercase tracking-widest px-4 py-2 border-4 border-[#111111]"
                    style={{ backgroundColor: f.color, color: f.color === "#f6c45a" ? "#111111" : "#efe7d7" }}
                  >
                    {f.type}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-sans font-bold text-2xl uppercase tracking-widest text-[#cf5d27] mb-3">{f.outlet}</p>
                  <h3 className="font-display text-3xl md:text-5xl text-[#111111] leading-tight group-hover:text-[#cf5d27] transition-colors">
                    {f.headline}
                  </h3>
                </div>
                <div className="flex-shrink-0 font-sans font-bold text-xl text-[#111111]/40 uppercase tracking-widest">
                  {f.date}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-olive poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-8">PRESS KIT</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-sans text-3xl font-bold uppercase text-[#efe7d7] max-w-3xl mx-auto mb-16">
            High-resolution photos, logo files, bio, and press releases available on request.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.18} className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/contact">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none border-8 border-[#f6c45a]">
              REQUEST KIT
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-transparent text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#efe7d7]">
              FULL BIO
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
