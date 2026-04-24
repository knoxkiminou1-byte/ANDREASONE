import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import afroCollective from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";
import paintedFigure from "@assets/Screen_Shot_2026-04-19_at_12.33.46_PM_1776997719117.png";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import baliPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.57_PM_1776997719128.png";
import sigilMark from "@assets/Screen_Shot_2026-04-20_at_11.49.05_AM_1776997719110.png";
import logoOrange from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

type Service = { name: string; blurb: string; price: string; turnaround: string };

const services: Record<"music" | "design" | "consulting", { tagline: string; items: Service[] }> = {
  music: {
    tagline: "Curated sound for rooms, brands, and ritual gatherings.",
    items: [
      { name: "DJ SERVICES",       blurb: "Open-format club sets, festival slots, private gatherings. 1–6 hour formats.", price: "From $5K",       turnaround: "Confirm 4–8 weeks out" },
      { name: "EVENT PRODUCTION",  blurb: "End-to-end event design — venue, lineup, production, brand world.",           price: "Project quote",  turnaround: "8–16 weeks" },
      { name: "TALENT CURATION",   blurb: "Lineup design and booking for festivals, brand activations, residencies.",     price: "Retainer",       turnaround: "Ongoing" },
      { name: "SOUND CURATION",    blurb: "Bespoke playlists and mix programs for hotels, restaurants, retail.",          price: "From $3K",       turnaround: "2–4 weeks" },
      { name: "SONIC BRANDING",    blurb: "Audio identity systems — logos, transitions, soundscapes.",                    price: "From $8K",       turnaround: "4–8 weeks" },
    ],
  },
  design: {
    tagline: "Visual identity rooted in cultural specificity.",
    items: [
      { name: "LOGO DESIGN",            blurb: "Identity systems with depth — logos that say where they come from.",     price: "From $4K",      turnaround: "3–5 weeks" },
      { name: "BRAND ASSETS",           blurb: "Type, color, layout systems, social templates, packaging.",               price: "From $6K",      turnaround: "4–8 weeks" },
      { name: "COMMISSIONED PORTRAITS", blurb: "Custom digital paintings — figures, hands, soundsystems, landscapes.",    price: "From $1.5K",    turnaround: "2–4 weeks" },
      { name: "EVENT FLYERS",           blurb: "Posters, motion flyers, animated assets for drops and gatherings.",       price: "From $1K",      turnaround: "1–2 weeks" },
      { name: "VISUAL SYSTEMS",         blurb: "Full visual ecosystems for tours, drops, residency programs.",            price: "From $15K",     turnaround: "8–12 weeks" },
    ],
  },
  consulting: {
    tagline: "Strategy for brands trying to live inside culture, not on top of it.",
    items: [
      { name: "BRAND DEVELOPMENT",      blurb: "0-to-1 brand strategy — positioning, voice, audience architecture.",      price: "From $20K",     turnaround: "8–12 weeks" },
      { name: "MUSIC / EVENT BRANDING", blurb: "Building festival, label, and residency identities from the inside.",     price: "Project quote", turnaround: "8–16 weeks" },
      { name: "FASHION BRANDS",         blurb: "Cultural collaborations, drop strategy, soundtrack and event tie-ins.",   price: "Retainer",      turnaround: "Ongoing" },
      { name: "CANNABIS BRANDS",        blurb: "Brand world-building for cannabis-adjacent companies and product lines.", price: "Project quote", turnaround: "12+ weeks" },
      { name: "CULTURAL PARTNERSHIPS",  blurb: "Connecting brands to artists, venues, and scenes that already trust us.", price: "Retainer",      turnaround: "Ongoing" },
    ],
  },
};

type Case = { client: string; project: string; tag: "MUSIC" | "DESIGN" | "CONSULTING"; outcome: string; image: string };

const caseStudies: Case[] = [
  { client: "FMLY BZNS",          project: "BRAND IDENTITY SYSTEM",        tag: "DESIGN",     outcome: "Built the umbrella identity — wordmark, monogram, mixtape series art direction, and event poster system.",       image: logoOrange },
  { client: "MARI BEACH CLUB",    project: "GOLDEN HOUR RESIDENCY",        tag: "MUSIC",      outcome: "Designed and executed a recurring sunset residency — three sold-out seasons, 40K+ attendees over the run.",      image: baliPoster },
  { client: "PANGEA SOUND",       project: "SOUND DIRECTION & CURATION",   tag: "CONSULTING", outcome: "Curated lineup and sound program for the Global Sound Showcase tour — 6 cities, 12 artists, one cohesive arc.",  image: afroCollective },
  { client: "[CANNABIS BRAND]",   project: "VISUAL SYSTEM & LAUNCH",       tag: "CONSULTING", outcome: "Built the brand world from naming through packaging, including launch event series in NYC and LA.",            image: paintedFigure },
  { client: "[FASHION HOUSE]",    project: "CAPSULE COLLABORATION",        tag: "DESIGN",     outcome: "Co-designed a 12-piece capsule with art direction, soundtrack, and 3-city release tour.",                       image: sigilMark },
  { client: "THE GATHERING",      project: "FESTIVAL DESIGN & PRODUCTION", tag: "MUSIC",      outcome: "Founder, curator, and creative director of The Gathering — annual festival now in its 4th year.",               image: gatheringPoster },
];

const tagColor: Record<Case["tag"], string> = {
  MUSIC:      "bg-primary text-primary-foreground",
  DESIGN:     "bg-foreground text-background",
  CONSULTING: "bg-[#445829] text-[#efe7d7]",
};

const clients = [
  "MARI BEACH CLUB", "PANGEA SOUND", "HOUSE OF YES", "SOULECTION",
  "OKAYAFRICA", "BOILER ROOM", "AFRO NATION", "EVERYDAY PEOPLE",
  "FRIED RICE NYC", "RESIDENT ADVISOR", "MIXMAG", "DEPARTAMENTO",
];

export default function Work() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-6">CREATIVE PRACTICE</p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-6">WORK<br/>& OFFERINGS</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Sound, visual systems, cultural strategy. FMLY BZNS is a small studio operating across three lanes — built to take on a few right partners at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THREE LANES */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible defaultValue="music" className="w-full">
            {(["music", "design", "consulting"] as const).map((key) => {
              const data = services[key];
              return (
                <AccordionItem key={key} value={key} className="border-b-2 border-foreground/10">
                  <AccordionTrigger className="font-display text-3xl md:text-5xl uppercase hover:no-underline hover:text-primary transition-colors py-8 text-left">
                    <span className="flex items-baseline gap-6">
                      <span>{key.toUpperCase()}</span>
                      <span className="font-display tracking-widest text-xs text-foreground/40 hidden md:inline">{data.tagline}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-2">
                      {data.items.map((s) => (
                        <div key={s.name} className="border-t border-foreground/10 pt-5">
                          <div className="flex items-baseline justify-between gap-3 mb-2">
                            <h4 className="font-display text-xl md:text-2xl">{s.name}</h4>
                            <span className="font-display tracking-widest text-xs text-primary whitespace-nowrap">{s.price}</span>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed mb-3">{s.blurb}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-display tracking-widest text-[10px] text-foreground/50">{s.turnaround.toUpperCase()}</span>
                            <Link href="/contact" className="font-display tracking-widest text-xs border-b border-foreground hover:text-primary hover:border-primary transition-colors">
                              INQUIRE →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* SELECTED CASE STUDIES */}
      <section className="py-24 px-4 bg-[#efe7d7]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 border-b border-foreground/15 pb-6">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">SELECTED WORK</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">CASE STUDIES</h2>
            </div>
            <span className="font-display tracking-widest text-xs text-foreground/60">{caseStudies.length} PROJECTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((c, i) => (
              <motion.article
                key={c.client + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group cursor-pointer"
                data-testid={`case-${i}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-foreground/5 mb-5 relative">
                  <img src={c.image} alt={c.project} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 font-display tracking-widest text-[10px] px-3 py-1.5 ${tagColor[c.tag]}`}>{c.tag}</span>
                </div>
                <p className="font-display tracking-widest text-xs text-foreground/50 mb-2">{c.client}</p>
                <h3 className="font-display text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">{c.project}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{c.outcome}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT WALL */}
      <section className="py-20 px-4 bg-background overflow-hidden border-y border-foreground/10">
        <div className="container mx-auto max-w-6xl">
          <p className="font-display text-sm tracking-[0.3em] text-primary text-center mb-10">TRUSTED BY · COLLABORATED WITH</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {clients.map((c) => (
              <span key={c} className="font-display text-lg md:text-2xl tracking-widest text-foreground/40 hover:text-foreground transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 px-4 bg-[#cf5d27] text-[#efe7d7]">
        <div className="container mx-auto max-w-4xl">
          <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-6">WHO WE TAKE ON</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1] mb-10">
            WE WORK WITH BRANDS<br/>WHO ALREADY HAVE<br/>SOMETHING TO SAY.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg leading-relaxed text-[#efe7d7]/85">
            <p>
              We're not for sale to the highest bidder. We work with founders, artists, and operators who are building something with cultural roots — not just chasing the next quarter.
            </p>
            <p>
              That means a few partners at a time, real depth on each, and the honesty to say no when the fit isn't there. If that sounds like you, we should talk.
            </p>
          </div>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-none font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#cf5d27] px-12 h-14">
                START A CONVERSATION
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
