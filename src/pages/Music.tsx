import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, Pause } from "lucide-react";

import mxtpCover from "@assets/Screen_Shot_2026-04-19_at_12.36.35_PM_1776997719111.png";
import cover02 from "@assets/IMG_0237_1776998601428.JPG";
import cover03 from "@assets/IMG_0188_1776998601429.JPG";
import cover04 from "@assets/IMG_0361_1776998601427.JPG";
import cover05 from "@assets/IMG_0360_1776998601436.JPG";
import cover06 from "@assets/IMG_0184_1776998601435.JPG";
import cover07 from "@assets/IMG_0183_1776998601424.JPG";
import cover08 from "@assets/IMG_0177_1776998601433.JPG";
import cover09 from "@assets/IMG_0362_1776998601428.JPG";
import cover10 from "@assets/IMG_0364_1776998601431.JPG";
import cover11 from "@assets/IMG_0227_1776998601432.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

type Mix = {
  id: number;
  vol: string;
  title: string;
  cover: string;
  date: string;
  duration: string;
  tags: string[];
  preview: string[];
};

const mixtapes: Mix[] = [
  { id: 1,  vol: "VOL. 12", title: "MARCH MEDITATIONS",     cover: mxtpCover, date: "MAR 2026", duration: "1:24:18", tags: ["AFRO HOUSE", "AMAPIANO", "EDITS"],
    preview: ["Tay Iwar — Stallion (AO Edit)", "Caiiro — The Akan", "Kelvin Momo — Khusela", "Sun-El Musician — Ubomi Abumanga", "DJ Black Coffee — Drive (AO Edit)"] },
  { id: 2,  vol: "VOL. 11", title: "LAGOS NIGHTS",          cover: cover02,   date: "JAN 2026", duration: "1:08:42", tags: ["AFROBEATS", "FUJI", "PERCUSSION"],
    preview: ["Wizkid — Ginger", "Burna Boy — Ye", "Fela Kuti — Water No Get Enemy", "Tems — Free Mind", "Asake — Lonely At The Top"] },
  { id: 3,  vol: "VOL. 10", title: "BAHIA AT DAWN",         cover: cover03,   date: "NOV 2025", duration: "1:32:05", tags: ["BRAZILIAN", "SAMBA HOUSE", "SOULFUL"],
    preview: ["Seu Jorge — Carolina", "Marcos Valle — Estrelar", "Joyce — Aldeia de Ogum", "Banda Black Rio — Maria Fumaça", "Tim Maia — Gostava Tanto De Você"] },
  { id: 4,  vol: "VOL. 09", title: "BROOKLYN BASEMENT",     cover: cover04,   date: "SEP 2025", duration: "1:11:27", tags: ["DEEP HOUSE", "GOSPEL HOUSE", "CLASSICS"],
    preview: ["Theo Parrish — Falling Up", "Moodymann — I Can't Kick This Feeling", "Ron Trent — Altered States", "Larry Heard — Mystery of Love", "Joe Claussell — Agora"] },
  { id: 5,  vol: "VOL. 08", title: "CARTAGENA SUNSET",      cover: cover05,   date: "JUL 2025", duration: "1:18:54", tags: ["LATIN", "CUMBIA", "TROPICAL"],
    preview: ["Bomba Estéreo — Soy Yo", "ChocQuibTown — De Donde Vengo Yo", "Quantic — Mi Swing Es Tropical", "Joe Cuba — Bang Bang", "Romperayo — La Cumbia"] },
  { id: 6,  vol: "VOL. 07", title: "TULUM JUNGLE",          cover: cover06,   date: "MAY 2025", duration: "1:42:11", tags: ["ORGANIC HOUSE", "ETHNO", "DOWNTEMPO"],
    preview: ["Bedouin — Sandfall", "Be Svendsen — Tonight In Tunisia", "Acid Pauli — Mst", "Dixon — Where We At", "&ME — The Rapture Pt. III"] },
  { id: 7,  vol: "VOL. 06", title: "DAKAR ROOTS",           cover: cover07,   date: "MAR 2025", duration: "1:05:33", tags: ["MBALAX", "AFRO FUNK", "GRIOT"],
    preview: ["Youssou N'Dour — Birima", "Cheikh Lô — Bamba Sunu", "Orchestra Baobab — Utru Horas", "Pape & Cheikh — Yatal Gueew", "Ismael Lô — Tajabone"] },
  { id: 8,  vol: "VOL. 05", title: "CAPE TOWN GROOVE",      cover: cover08,   date: "JAN 2025", duration: "1:21:46", tags: ["AFRO TECH", "AMAPIANO", "MAIN ROOM"],
    preview: ["Black Motion — Joy Joy", "Black Coffee — Drive", "Da Capo — Voices In My Head", "Culoe De Song — Bright Forest", "Themba — Who Is Themba"] },
  { id: 9,  vol: "VOL. 04", title: "MARRAKECH MORNING",     cover: cover09,   date: "NOV 2024", duration: "0:58:19", tags: ["GNAWA", "WORLD", "MEDITATIVE"],
    preview: ["Hamid El Kasri — Marhaba", "Maâlem Mahmoud Guinia — Boulandi", "Bab L' Bluz — Africa Manayo", "Nass El Ghiwane — Ya Sah", "Innov Gnawa — Lalla Mira"] },
  { id: 10, vol: "VOL. 03", title: "BERLIN CONCRETE",       cover: cover10,   date: "SEP 2024", duration: "1:36:02", tags: ["MINIMAL", "DUB TECHNO", "AFTER HOURS"],
    preview: ["Ricardo Villalobos — Easy Lee", "DJ Koze — Pick Up", "Lawrence — Spark", "Marcel Dettmann — Quicksand", "Robag Wruhme — Thora Vukk"] },
  { id: 11, vol: "VOL. 02", title: "MEXICO CITY HEAT",      cover: cover11,   date: "JUL 2024", duration: "1:12:08", tags: ["LATIN HOUSE", "EDITS", "DANCEFLOOR"],
    preview: ["Sotomayor — Conga", "Mateo Kingman — Manantial", "DJ Tennis — Boy Asleep", "Glüme — Heaven", "Rosalía — Saoko (AO Edit)"] },
  { id: 12, vol: "VOL. 01", title: "FIRST FAMILY",          cover: mxtpCover, date: "MAR 2024", duration: "1:00:00", tags: ["MANIFESTO", "FOUNDATION", "ALL VIBES"],
    preview: ["Fela Kuti — Zombie", "Nina Simone — Sinnerman", "Pat Thomas — Yamona", "Ebo Taylor — Heaven", "Tony Allen — Black Voices"] },
];

const liveSets = [
  { date: "MAR 14, 2026", event: "FMLY × Mari Beach Club Residency",     city: "BALI",         venue: "Mari Beach Club",      length: "5h 20m" },
  { date: "FEB 22, 2026", event: "House of Yes — First Fridays",         city: "BROOKLYN",     venue: "House of Yes",         length: "3h 10m" },
  { date: "JAN 18, 2026", event: "Pangea Sound — Global Sound Showcase", city: "LISBON",       venue: "Lux Frágil",           length: "2h 45m" },
  { date: "DEC 06, 2025", event: "Afro Nation — Pre-Party",              city: "LAGOS",        venue: "Hard Rock Beach",      length: "2h 00m" },
  { date: "NOV 09, 2025", event: "Boiler Room",                          city: "NYC",          venue: "Avant Gardner",        length: "1h 30m" },
  { date: "OCT 12, 2025", event: "Paseo Private",                        city: "TULUM",        venue: "Casa Pueblo",          length: "4h 00m" },
  { date: "SEP 19, 2025", event: "FMLY MXTP Vol. 09 Release Party",      city: "MEXICO CITY",  venue: "Departamento",         length: "3h 30m" },
  { date: "AUG 23, 2025", event: "Berghain Side Room",                   city: "BERLIN",       venue: "Berghain",             length: "4h 15m" },
  { date: "JUL 04, 2025", event: "Independence — Open Air",              city: "BROOKLYN",     venue: "Knockdown Center",     length: "2h 30m" },
  { date: "JUN 14, 2025", event: "Soulection Takeover",                  city: "LOS ANGELES",  venue: "The Echo",             length: "2h 00m" },
];

const influences = [
  { name: "FELA KUTI",       line: "The blueprint. Music as politics, rhythm as resistance." },
  { name: "TONY ALLEN",      line: "Pocket so deep it became a religion." },
  { name: "DJ BLACK COFFEE", line: "Proof that South African house could move the world." },
  { name: "THEO PARRISH",    line: "Detroit instructor. Spiritual selector." },
];

export default function Music() {
  const [openMix, setOpenMix] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Hero — featured mix */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-[#445829] text-[#efe7d7] relative overflow-hidden">
        <div className="ao-contour-swirl ao-contour-swirl--panel" />
        <div className="ao-contour-scrim" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-6">
            SOUND ARCHIVE · LATEST RELEASE
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 relative group">
              <div className="absolute inset-0 bg-primary/30 blur-3xl scale-90 group-hover:scale-100 transition-transform duration-700" />
              <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="relative w-full max-w-[480px] mx-auto shadow-2xl" />
            </div>
            <div className="md:col-span-7">
              <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
                FMLY MXTP<br/>VOL. 12
              </h1>
              <p className="text-lg text-[#efe7d7]/82 mb-3 max-w-xl">
                <span className="font-display tracking-widest text-[#efe7d7]">MARCH MEDITATIONS</span> — A 84-minute journey through afro house, amapiano, and unreleased edits. Recorded live, mixed in one take.
              </p>
              <p className="font-display tracking-widest text-sm text-[#efe7d7]/70 mb-8">
                1:24:18 · 21 TRACKS · MAR 2026
              </p>

              {/* Mock waveform */}
              <div className="flex items-end gap-[2px] h-16 mb-6">
                {Array.from({ length: 80 }).map((_, i) => {
                  const h = 20 + Math.abs(Math.sin(i * 0.4) * 60) + (i % 7) * 6;
                  const isPlayed = i < 28;
                  return (
                    <div
                      key={i}
                      style={{ height: `${Math.min(h, 64)}px` }}
                      className={`w-[3px] ${isPlayed ? "bg-[#f6c45a]" : "bg-[#efe7d7]/25"} transition-colors`}
                    />
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() => setPlaying(!playing)}
                  className="rounded-none h-14 px-8 font-display tracking-widest bg-primary hover:bg-foreground text-primary-foreground"
                  data-testid="play-featured-mix"
                >
                  {playing ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {playing ? "PAUSE" : "PLAY MIX"}
                </Button>
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 font-display tracking-widest border-2">
                  SOUNDCLOUD
                </Button>
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 font-display tracking-widest border-2">
                  SPOTIFY
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MIXTAPE SERIES */}
      <section className="py-24 px-4 bg-[#efe7d7]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">FMLY MXTP SERIES</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">THE ARCHIVE</h2>
            </div>
            <p className="font-display tracking-widest text-sm text-foreground/60">
              {mixtapes.length} VOLUMES · 2024–2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {mixtapes.map((mix, i) => (
              <motion.div
                key={mix.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.06 }}
                onClick={() => setOpenMix(openMix === mix.id ? null : mix.id)}
                className="group cursor-pointer"
                data-testid={`mixtape-${mix.id}`}
              >
                <div className="aspect-square overflow-hidden mb-4 relative bg-foreground/5">
                  <img
                    src={mix.cover}
                    alt={mix.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100">
                    <Play className="w-10 h-10 text-[#f6c45a] mb-3" />
                    <p className="font-display text-xs tracking-[0.3em] text-white">{mix.duration}</p>
                  </div>
                  <div className="absolute top-3 left-3 bg-foreground text-background font-display text-[10px] tracking-[0.3em] px-2 py-1">
                    {mix.vol}
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-2 gap-2">
                  <h3 className="font-display text-base md:text-lg leading-tight group-hover:text-primary transition-colors">{mix.title}</h3>
                  <span className="text-[10px] font-display tracking-widest text-foreground/50 whitespace-nowrap">{mix.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {mix.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[9px] font-display tracking-widest text-foreground/60 border border-foreground/20 px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracklist preview drawer */}
      <AnimatePresence>
        {openMix !== null && (() => {
          const mix = mixtapes.find((m) => m.id === openMix);
          if (!mix) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
              onClick={() => setOpenMix(null)}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-background max-w-2xl w-full p-8 md:p-12"
              >
                <p className="font-display text-xs tracking-[0.3em] text-primary mb-3">{mix.vol} · {mix.date}</p>
                <h3 className="font-display text-3xl md:text-5xl mb-2">{mix.title}</h3>
                <p className="font-display tracking-widest text-sm text-foreground/60 mb-8">{mix.duration} · TRACKLIST PREVIEW</p>
                <ol className="space-y-3 mb-8">
                  {mix.preview.map((track, i) => (
                    <li key={i} className="flex gap-4 border-b border-foreground/10 pb-3">
                      <span className="font-display tracking-widest text-xs text-foreground/40 w-6">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm text-foreground/90">{track}</span>
                    </li>
                  ))}
                  <li className="font-display tracking-widest text-xs text-foreground/40 pt-2">+ FULL TRACKLIST ON SOUNDCLOUD</li>
                </ol>
                <div className="flex gap-3">
                  <Button className="rounded-none flex-1 h-12 font-display tracking-widest">
                    <Play className="w-4 h-4 mr-2" /> PLAY MIX
                  </Button>
                  <Button variant="outline" className="rounded-none h-12 font-display tracking-widest" onClick={() => setOpenMix(null)}>
                    CLOSE
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* LIVE SETS */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">LIVE & DIRECT</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">RECORDED SETS</h2>
          </div>
          <div className="border-t-2 border-foreground/10">
            {liveSets.map((set, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-12 gap-4 items-center py-5 border-b border-foreground/10 group hover:bg-foreground/[0.03] transition-colors px-2"
              >
                <span className="col-span-12 md:col-span-2 font-display tracking-widest text-xs text-foreground/60">{set.date}</span>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-display text-base md:text-lg leading-tight group-hover:text-primary transition-colors">{set.event}</p>
                </div>
                <span className="col-span-6 md:col-span-2 font-display tracking-widest text-sm">{set.city}</span>
                <span className="col-span-3 md:col-span-2 text-xs text-foreground/60">{set.venue}</span>
                <span className="col-span-3 md:col-span-1 font-display tracking-widest text-xs text-foreground/60 text-right">{set.length}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="font-display tracking-widest text-sm border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              FULL ARCHIVE ON SOUNDCLOUD →
            </a>
          </div>
        </div>
      </section>

      {/* SOUND PHILOSOPHY */}
      <section className="py-24 px-4 bg-[#445829] text-[#efe7d7]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-4">SOUND PHILOSOPHY</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-0">
                THE LINEAGE
              </h2>
            </div>
            <div className="md:col-span-7 text-base md:text-lg leading-relaxed text-[#efe7d7]/85 space-y-5">
              <p>
                Every set is a translation. From Fela's horns in Lagos to a basement in Brooklyn, from amapiano in Soweto to organic house at sunrise in Tulum — these aren't different musics. They're the same conversation moving through different rooms.
              </p>
              <p>
                I select for the lineage. The afro-diaspora roots running through everything global club music pretends to invent. House came from gospel. Amapiano came from kwaito came from disco came from the church. The dance floor remembers, even when the algorithm forgets.
              </p>
              <p>
                The FMLY MXTP series is the long version of that idea. Each volume is a city, a season, a feeling. None of them are playlists. All of them are mixed in one take.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#efe7d7]/15">
            {influences.map((inf) => (
              <div key={inf.name}>
                <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-2">{inf.name}</p>
                <p className="text-sm text-[#efe7d7]/70 leading-relaxed">{inf.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#111111] text-[#efe7d7] text-center px-4 relative">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto relative"
        >
          <h2 className="font-display text-5xl md:text-7xl mb-8 leading-none">BRING THIS SOUND<br/>TO YOUR CITY</h2>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-none font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#111111] uppercase px-12 h-14 text-lg">
              Book Andreas
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
