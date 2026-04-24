import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import wordmark from "@assets/AndreasOne_New_Logo_One_color_Transparent_1776997848574.png";
import work01 from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import work02 from "@assets/Screen_Shot_2026-04-19_at_12.36.35_PM_1776997719111.png";
import work03 from "@assets/Screen_Shot_2026-04-19_at_12.37.57_PM_1776997719128.png";
import work04 from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";
import work05 from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";
import work06 from "@assets/IMG_0188_1776998601429.JPG";

import crew01 from "@assets/IMG_0237_1776998601428.JPG";
import crew02 from "@assets/IMG_0177_1776998601433.JPG";
import crew03 from "@assets/IMG_0227_1776998601432.JPG";
import crew04 from "@assets/IMG_0184_1776998601435.JPG";
import crew05 from "@assets/IMG_0361_1776998601427.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

const lanes = [
  { tag: "01", title: "MIXTAPE SERIES",       blurb: "Quarterly FMLY MXTP volumes. One-take live mixes spanning afro house, amapiano, deep house, and edits from the road." },
  { tag: "02", title: "EVENT PRODUCTION",     blurb: "End-to-end gathering design — venue, lineup, brand world, production. The Gathering, Paseo Private, Mari Beach Club residency." },
  { tag: "03", title: "BRAND STUDIO",         blurb: "Identity systems, capsule design, and visual direction for fashion, hospitality, music, and cannabis brands." },
  { tag: "04", title: "CULTURAL PARTNERSHIPS",blurb: "Connecting brands to artists, venues, and scenes. Curated activations that don't read as marketing." },
];

const crew = [
  { name: "ANDREAS",     role: "FOUNDER · CREATIVE DIRECTION", city: "BROOKLYN / BALI", img: crew01 },
  { name: "MAYA O.",     role: "VISUAL DIRECTION",             city: "BROOKLYN",        img: crew02 },
  { name: "TUNDE A.",    role: "MUSIC DIRECTION",              city: "LAGOS",           img: crew03 },
  { name: "ISABELA R.",  role: "EVENT PRODUCTION",             city: "MEXICO CITY",     img: crew04 },
  { name: "OMAR D.",     role: "BRAND STRATEGY",               city: "LISBON",          img: crew05 },
];

const recentWork = [
  { title: "THE GATHERING 2026",    tag: "FESTIVAL",   img: work01 },
  { title: "FMLY MXTP VOL. 12",     tag: "MIXTAPE",    img: work02 },
  { title: "MARI BEACH CLUB",       tag: "RESIDENCY",  img: work03 },
  { title: "AFRO COLLECTIVE",       tag: "ART",        img: work04 },
  { title: "PYRAMID IDENTITY",      tag: "BRAND",      img: work05 },
  { title: "GOLDEN HOUR",           tag: "PRINT",      img: work06 },
];

export default function Fmly() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* HERO — massive wordmark */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-[#cf5d27] text-[#efe7d7] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="container mx-auto max-w-7xl text-center relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xs md:text-sm tracking-[0.4em] text-[#f6c45a] mb-8"
          >
            FMLY BZNS · CREATIVE COLLECTIVE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[14vw] md:text-[12rem] leading-[0.85] tracking-tight mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            FMLY<br/>BZNS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-base md:text-2xl tracking-widest max-w-2xl mx-auto leading-relaxed"
          >
            A creative collective at the intersection of sound, vision, and culture.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">WHAT WE DO</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">FOUR LANES,<br/>ONE PRACTICE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15">
            {lanes.map((l) => (
              <motion.div
                key={l.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background p-8 md:p-12 hover:bg-[#efe7d7] transition-colors"
              >
                <p className="font-display tracking-widest text-xs text-primary mb-6">/ {l.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{l.title}</h3>
                <p className="text-base text-foreground/70 leading-relaxed">{l.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CREW */}
      <section className="py-24 px-4 bg-[#111111] text-[#efe7d7] relative">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="mb-12">
            <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-3">THE CREW</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">A FEW OF<br/>THE FAMILY.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {crew.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-foreground/10 mb-3">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="font-display tracking-widest text-sm">{m.name}</p>
                <p className="text-[10px] text-[#efe7d7]/60 mt-1 uppercase tracking-wider">{m.role}</p>
                <p className="font-display tracking-widest text-[10px] text-[#f6c45a] mt-1">{m.city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="py-24 px-4 bg-[#efe7d7]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 border-b border-foreground/15 pb-6">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">RECENT WORK</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">FROM THE STUDIO</h2>
            </div>
            <Link href="/work" className="hidden md:inline-block font-display tracking-widest text-sm border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              ALL CASE STUDIES →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {recentWork.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="group cursor-pointer relative aspect-[4/5] overflow-hidden bg-foreground/5"
              >
                <img src={w.img} alt={w.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display tracking-widest text-[10px] text-[#f6c45a] mb-1">{w.tag}</p>
                  <p className="font-display text-lg md:text-xl text-white">{w.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE FAMILY */}
      <section className="py-24 px-4 bg-[#445829] text-[#efe7d7]">
        <div className="container mx-auto max-w-3xl text-center">
          <img src={wordmark} alt="AndreasOne" className="w-48 mx-auto mb-10 opacity-80" style={{ filter: "invert(1)" }} />
          <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-4">JOIN THE FAMILY</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1] mb-8">
            ACCESS TO THE WORLD<br/>BEFORE EVERYONE ELSE.
          </h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
            Mixtape drops, event presales, capsule releases, art editions. Join the list and we'll keep you close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button size="lg" className="rounded-none h-14 px-10 font-display tracking-widest bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-white border-0">
                JOIN LIST
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-none h-14 px-10 font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#445829]">
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
