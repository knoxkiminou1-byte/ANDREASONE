import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { publishedSignals, signalTypeLabel, signalTypeColor } from "@/data/signals";

export default function Signals() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-black poster-panel border-b-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] leading-none text-[#f6c45a]">SIGNALS</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <p className="font-sans text-xl md:text-2xl uppercase tracking-[0.3em] text-[#efe7d7]/50 mt-6 max-w-3xl mx-auto">
            Transmissions, field notes, cultural dispatches, and sound documents from the AndreasOne world.
          </p>
        </ScrollReveal>
      </section>

      {/* Signal feed */}
      <section className="bg-cream poster-panel">
        <div className="flex flex-col gap-0 w-full">
          {publishedSignals.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.06}>
              <div className="border-b-8 border-[#111111] py-10 flex flex-col md:flex-row md:items-start gap-6 hover-lift cursor-pointer group">

                {/* Type badge */}
                <div className="flex-shrink-0 w-full md:w-56">
                  <span
                    className="inline-block font-sans font-bold text-xl uppercase tracking-widest px-4 py-2 border-4 border-[#111111]"
                    style={{
                      backgroundColor: signalTypeColor[s.type],
                      color: s.type === "art" || s.type === "field-note" ? "#111111" : "#efe7d7",
                    }}
                  >
                    {signalTypeLabel[s.type]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="font-sans font-bold text-2xl uppercase tracking-widest text-[#cf5d27] mb-3">{s.date}</p>
                  <h3 className="font-display text-3xl md:text-5xl text-[#111111] leading-tight mb-4 group-hover:text-[#cf5d27] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-sans text-xl text-[#111111]/70 leading-relaxed max-w-3xl">
                    {s.excerpt}
                  </p>
                  {/* Audio embed preview */}
                  {s.audioEmbed && (
                    <div className="mt-6 border-4 border-[#111111] overflow-hidden">
                      <iframe
                        title={s.title}
                        width="100%"
                        height="120"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={s.audioEmbed}
                      />
                    </div>
                  )}
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {s.tags.map(tag => (
                      <span key={tag} className="font-sans text-sm font-bold uppercase tracking-widest text-[#111111]/40 border-2 border-[#111111]/20 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External link arrow */}
                {s.externalLink && (
                  <div className="flex-shrink-0 flex items-start pt-2">
                    <Link href={s.externalLink}>
                      <span className="font-display text-5xl text-[#111111]/20 group-hover:text-[#cf5d27] transition-colors">→</span>
                    </Link>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}

          {publishedSignals.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-display text-5xl text-[#111111]/30">TRANSMISSION INCOMING</p>
              <p className="font-sans text-xl text-[#111111]/30 mt-4 uppercase tracking-widest">Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Recognition carried from Press */}
      <section className="bg-orange poster-panel border-y-8 border-[#111111]">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] text-center mb-16">RECOGNITION</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: "BEST EMERGING ARTIST", org: "Afro House Awards", year: "2025" },
            { title: "BEST EVENT SERIES", org: "LA Music Pulse", year: "2025" },
            { title: "BREAKOUT DJ", org: "Mixmag", year: "2024" },
          ].map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-8 border-[#111111] bg-[#efe7d7] p-10 shadow-[12px_12px_0_#111111] hover-lift text-center">
                <p className="font-sans font-bold text-xl uppercase tracking-widest text-[#cf5d27] mb-4">{a.year}</p>
                <h3 className="font-display text-4xl text-[#111111] mb-4 leading-tight">{a.title}</h3>
                <p className="font-sans text-xl font-bold uppercase text-[#445829]">{a.org}</p>
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
          <Link href="/connect">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none border-8 border-[#f6c45a]">
              REQUEST KIT
            </Button>
          </Link>
          <Link href="/roots">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-transparent text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#efe7d7]">
              ROOTS
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
