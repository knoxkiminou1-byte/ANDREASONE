import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import baliPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.57_PM_1776997719128.png";
import afroCollective from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";
import logoOrangePoster from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";

import bg01 from "@assets/IMG_0237_1776998601428.JPG";
import bg02 from "@assets/IMG_0188_1776998601429.JPG";
import bg03 from "@assets/IMG_0177_1776998601433.JPG";
import bg04 from "@assets/IMG_0361_1776998601427.JPG";
import bg05 from "@assets/IMG_0227_1776998601432.JPG";
import bg06 from "@assets/IMG_0184_1776998601435.JPG";
import bg07 from "@assets/IMG_0183_1776998601424.JPG";
import bg08 from "@assets/IMG_0362_1776998601428.JPG";
import bg09 from "@assets/IMG_0364_1776998601431.JPG";
import bg10 from "@assets/IMG_0360_1776998601436.JPG";
import bg11 from "@assets/IMG_0175_1776998601436.JPG";
import bg12 from "@assets/IMG_0180_1776998601422.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

type Upcoming = {
  id: number;
  title: string;
  date: string;
  city: string;
  venue: string;
  poster: string;
  status: "ON SALE" | "LAST TICKETS" | "PRESALE";
  lineup: string;
};

const upcomingEvents: Upcoming[] = [
  {
    id: 1,
    title: "THE GATHERING 2026",
    date: "MAY 24, 2026",
    city: "LOS ANGELES, CA",
    venue: "Resident — Downtown LA",
    poster: gatheringPoster,
    status: "ON SALE",
    lineup: "Andreas · TBA Special Guest · FMLY DJs",
  },
  {
    id: 2,
    title: "ANDREASONE × MARI BEACH CLUB",
    date: "JUL 11, 2026",
    city: "BALI, ID",
    venue: "Mari Beach Club — Canggu",
    poster: baliPoster,
    status: "PRESALE",
    lineup: "Andreas (extended set) · Local rotation",
  },
  {
    id: 3,
    title: "FMLY MXTP VOL. 13 RELEASE",
    date: "JUN 06, 2026",
    city: "BROOKLYN, NY",
    venue: "Knockdown Center",
    poster: logoOrangePoster,
    status: "LAST TICKETS",
    lineup: "Andreas · Special guests TBA",
  },
  {
    id: 4,
    title: "PASEO PRIVATE — TULUM EDITION",
    date: "AUG 17, 2026",
    city: "TULUM, MX",
    venue: "Casa Pueblo (private)",
    poster: afroCollective,
    status: "PRESALE",
    lineup: "Andreas · Strictly invite list",
  },
];

const residencies = [
  { name: "FIRST FRIDAYS",  venue: "House of Yes",     city: "BROOKLYN", cadence: "Monthly · First Fri" },
  { name: "PASEO PRIVATE",  venue: "Casa Pueblo",      city: "TULUM",    cadence: "Quarterly · Invite" },
  { name: "GOLDEN HOUR",    venue: "Mari Beach Club",  city: "BALI",     cadence: "Seasonal · Sun-down" },
];

type Past = { id: number; city: string; venue: string; date: string; year: 2024 | 2025; bg: string };

const pastEvents: Past[] = [
  { id: 1,  city: "LISBON",       venue: "Lux Frágil",         date: "OCT 2025", year: 2025, bg: bg01 },
  { id: 2,  city: "NEW YORK",     venue: "Elsewhere",          date: "AUG 2025", year: 2025, bg: bg02 },
  { id: 3,  city: "LAGOS",        venue: "Hard Rock Beach",    date: "DEC 2024", year: 2024, bg: bg03 },
  { id: 4,  city: "TORONTO",      venue: "Coda",               date: "JUL 2024", year: 2024, bg: bg04 },
  { id: 5,  city: "PARIS",        venue: "Colorr",             date: "MAY 2024", year: 2024, bg: bg05 },
  { id: 6,  city: "TOKYO",        venue: "La Machine",         date: "FEB 2024", year: 2024, bg: bg06 },
  { id: 7,  city: "CARTAGENA",    venue: "Bazurto Social Club",date: "NOV 2025", year: 2025, bg: bg07 },
  { id: 8,  city: "MARRAKECH",    venue: "Riad Yima",          date: "SEP 2025", year: 2025, bg: bg08 },
  { id: 9,  city: "MEXICO CITY",  venue: "Departamento",       date: "SEP 2025", year: 2025, bg: bg09 },
  { id: 10, city: "BERLIN",       venue: "Berghain Side Room", date: "AUG 2025", year: 2025, bg: bg10 },
  { id: 11, city: "BROOKLYN",     venue: "Knockdown Center",   date: "JUL 2025", year: 2025, bg: bg11 },
  { id: 12, city: "CAPE TOWN",    venue: "Truth",              date: "MAR 2024", year: 2024, bg: bg12 },
  { id: 13, city: "LOS ANGELES",  venue: "The Echo",           date: "JUN 2025", year: 2025, bg: bg01 },
  { id: 14, city: "MIAMI",        venue: "Club Space",         date: "MAR 2025", year: 2025, bg: bg02 },
  { id: 15, city: "ACCRA",        venue: "Bloombar",           date: "OCT 2024", year: 2024, bg: bg04 },
  { id: 16, city: "LONDON",       venue: "Fabric",             date: "APR 2024", year: 2024, bg: bg06 },
];

const cities = ["ALL", ...Array.from(new Set(pastEvents.map((e) => e.city))).sort()];
const years = ["ALL", "2025", "2024"] as const;

const statusColor: Record<Upcoming["status"], string> = {
  "ON SALE":       "bg-[#445829] text-[#efe7d7]",
  "LAST TICKETS":  "bg-[#cf5d27] text-white",
  "PRESALE":       "bg-[#f6c45a] text-foreground",
};

export default function Events() {
  const [year, setYear] = useState<typeof years[number]>("ALL");
  const [city, setCity] = useState<string>("ALL");

  const filteredPast = useMemo(() => {
    return pastEvents.filter((e) => {
      const yMatch = year === "ALL" || String(e.year) === year;
      const cMatch = city === "ALL" || e.city === city;
      return yMatch && cMatch;
    });
  }, [year, city]);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 bg-[#445829] text-[#efe7d7] relative overflow-hidden">
        <div className="ao-contour-swirl ao-contour-swirl--panel" />
        <div className="ao-contour-scrim" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-6">LIVE & DIRECT · 2024 — 2026</p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-6">EVENTS<br/>& GATHERINGS</h1>
            <p className="text-lg md:text-xl text-[#efe7d7]/82 max-w-2xl leading-relaxed">
              Immersive event design and global sound curation. From private beach sunsets to all-night warehouse rituals — every gathering is built like a room you don't want to leave.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-10 border-b border-foreground/10 pb-6">
            <h2 className="font-display text-3xl md:text-5xl">UPCOMING</h2>
            <span className="font-display tracking-widest text-xs text-foreground/60">{upcomingEvents.length} CONFIRMED</span>
          </div>
          <div className="flex flex-col gap-16 md:gap-24">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center group`}
                data-testid={`upcoming-${event.id}`}
              >
                <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] bg-foreground/5">
                  <img src={event.poster} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-display tracking-widest text-[10px] px-3 py-1.5 ${statusColor[event.status]}`}>{event.status}</span>
                    <span className="font-display tracking-widest text-primary text-sm">{event.date}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl uppercase mb-4 leading-[0.95]">{event.title}</h2>
                  <p className="font-display tracking-widest text-foreground/60 text-base mb-2">{event.city}</p>
                  <p className="text-sm text-foreground/70 mb-2">{event.venue}</p>
                  <p className="text-sm text-foreground/60 italic mb-8">Lineup: {event.lineup}</p>
                  <Button size="lg" className="rounded-none font-display tracking-widest h-14 px-10">
                    GET TICKETS
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Residencies */}
      <section className="py-24 px-4 bg-[#efe7d7]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">RECURRING ROOMS</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">RESIDENCIES & TAKEOVERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15">
            {residencies.map((r) => (
              <div key={r.name} className="bg-[#efe7d7] p-8 md:p-10 hover:bg-background transition-colors">
                <p className="font-display text-sm tracking-[0.3em] text-primary mb-4">{r.cadence.toUpperCase()}</p>
                <h3 className="font-display text-3xl mb-2">{r.name}</h3>
                <p className="font-display tracking-widest text-foreground/60 text-sm mb-1">{r.city}</p>
                <p className="text-sm text-foreground/70">{r.venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="py-24 px-4 bg-[#111111] text-[#efe7d7] relative">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4 border-b border-[#efe7d7]/15 pb-6">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-3">PAST GATHERINGS</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">THE ARCHIVE</h2>
            </div>
            <span className="font-display tracking-widest text-xs text-[#efe7d7]/60">{filteredPast.length} OF {pastEvents.length}</span>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="font-display tracking-widest text-[10px] text-[#efe7d7]/50 self-center mr-2">YEAR</span>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`font-display tracking-widest text-xs px-3 py-1.5 border transition-colors ${
                    year === y
                      ? "bg-[#f6c45a] text-[#111111] border-[#f6c45a]"
                      : "border-[#efe7d7]/30 text-[#efe7d7]/80 hover:bg-[#efe7d7]/10"
                  }`}
                  data-testid={`filter-year-${y}`}
                >
                  {y}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-display tracking-widest text-[10px] text-[#efe7d7]/50 self-center mr-2">CITY</span>
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className={`font-display tracking-widest text-[11px] px-3 py-1.5 border transition-colors ${
                    city === c
                      ? "bg-[#f6c45a] text-[#111111] border-[#f6c45a]"
                      : "border-[#efe7d7]/30 text-[#efe7d7]/80 hover:bg-[#efe7d7]/10"
                  }`}
                  data-testid={`filter-city-${c}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredPast.map((ev, i) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                data-testid={`past-event-${ev.id}`}
              >
                <img src={ev.bg} alt={ev.city} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <p className="font-display tracking-widest text-xs text-[#f6c45a] mb-1">{ev.date}</p>
                  <h3 className="font-display text-2xl text-[#efe7d7] leading-tight mb-1">{ev.city}</h3>
                  <p className="text-xs text-[#efe7d7]/70">{ev.venue}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPast.length === 0 && (
            <p className="text-center font-display tracking-widest text-[#efe7d7]/50 py-12">NO EVENTS MATCH THESE FILTERS</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#445829] text-[#efe7d7] text-center px-4 relative">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="container mx-auto max-w-2xl relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-6 leading-none">BRING ANDREAS<br/>TO YOUR CITY</h2>
          <p className="text-lg opacity-80 mb-10">
            Available for DJ sets, festival curation, and complete event production globally.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-none font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#445829] px-12 h-14 text-lg">
              INQUIRE NOW
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
