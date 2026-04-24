import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import logoOutline from "@assets/AndreasOne_New_Logo_One_color_Transparent_1776997848574.png";
import mxtpCover from "@assets/Screen_Shot_2026-04-19_at_12.36.35_PM_1776997719111.png";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import crowdImg from "@assets/zip2/IMG_0171.JPG";
import artA from "@assets/IMG_0237_1776998601428.JPG";
import artB from "@assets/IMG_0180_1776998601422.JPG";
import artC from "@assets/IMG_0188_1776998601429.JPG";
import artD from "@assets/IMG_0361_1776998601427.JPG";
import artE from "@assets/IMG_0177_1776998601433.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, staggerChildren: 0.08 } }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={crowdImg} 
            alt="AndreasOne Crowd" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-20"
        >
          <img 
            src={logoOutline} 
            alt="ANDREASONE" 
            className="w-[80vw] max-w-4xl opacity-90 invert dark:invert-0 mb-12 drop-shadow-2xl"
          />
          
          <motion.h1 
            variants={fadeUp}
            className="text-2xl md:text-4xl font-display tracking-[0.2em] text-foreground max-w-3xl leading-snug"
          >
            GLOBAL DJ, PRODUCER, ARTIST, DESIGNER, <br/><span className="text-primary">AND CULTURAL CURATOR</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link href="/music">
              <Button size="lg" className="h-14 px-8 text-lg font-display tracking-widest rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-background hover:text-primary transition-all">
                LISTEN TO THE SOUND
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-display tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                BOOK ANDREAS
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-[#111111] text-[#efe7d7] text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="container mx-auto max-w-4xl"
        >
          <h2 className="font-serif text-4xl md:text-6xl italic leading-tight mb-8">
            "Music is the weapon of the future."
          </h2>
          <p className="font-display tracking-widest text-xl text-[#f6c45a]">— FELA KUTI</p>
        </motion.div>
      </section>

      {/* Featured Mix */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <h3 className="font-display text-xl text-primary tracking-widest mb-4">LATEST RELEASE</h3>
            <h2 className="font-display text-5xl md:text-7xl mb-8 leading-none">FMLY MXTP<br/>VOL. 12</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              The latest installment in the FMLY BZNS mixtape series. A journey through Afro-diaspora sound, house, and global club cuts.
            </p>
            <Link href="/music">
              <Button size="lg" className="rounded-none font-display tracking-widest">
                EXPLORE MUSIC
              </Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="w-full max-w-lg mx-auto shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Work Preview Strip */}
      <section className="py-20 bg-background border-y border-foreground/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">CREATIVE PRACTICE</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[0.95]">WORK & OFFERINGS</h2>
            </div>
            <Link href="/work" className="font-display tracking-widest text-sm border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15">
            {[
              { tag: "01 / MUSIC",       title: "DJ SETS · CURATION · SONIC BRANDING",   blurb: "Open-format club sets, festival slots, residency design, sound programs for brands." },
              { tag: "02 / DESIGN",      title: "IDENTITY · FLYERS · COMMISSIONED ART",   blurb: "Logos with depth, visual systems, posters, and custom digital paintings." },
              { tag: "03 / CONSULTING",  title: "BRAND · FASHION · CANNABIS · CULTURE",   blurb: "Strategy for founders building inside culture, not on top of it." },
            ].map((c, i) => (
              <motion.div
                key={c.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-background p-8 md:p-10 hover:bg-[#efe7d7] transition-colors group"
              >
                <p className="font-display tracking-widest text-xs text-primary mb-4">{c.tag}</p>
                <h3 className="font-display text-xl mb-3 leading-tight group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{c.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Strip */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl"
            >
              UPCOMING EVENTS
            </motion.h2>
            <Link href="/events" className="hidden md:block font-display tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              VIEW ALL
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative overflow-hidden bg-background"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={gatheringPoster} alt="The Gathering 2026" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-[#f6c45a] font-display tracking-widest mb-2">MAY 2026</p>
                <h3 className="text-white font-display text-3xl mb-4">THE GATHERING</h3>
                <Button className="w-fit rounded-none font-display tracking-widest bg-white text-black hover:bg-primary hover:text-white">GET TICKETS</Button>
              </div>
            </motion.div>
            
            <div className="flex flex-col justify-center gap-8 bg-[#445829] text-[#efe7d7] p-12 text-center items-center">
              <h3 className="font-display text-3xl tracking-widest">BRING ANDREAS TO YOUR CITY</h3>
              <p className="max-w-xs text-center opacity-80">Booking inquiries for DJ sets, festival curation, and immersive event production.</p>
              <Link href="/contact">
                <Button variant="outline" className="rounded-none border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#445829] font-display tracking-widest">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Art */}
      <section className="py-24 bg-[#efe7d7]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <p className="font-display text-sm tracking-[0.3em] text-primary mb-4">VISUAL WORK</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
                ART<br/>FROM THE ROAD
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <p className="text-foreground/70 text-lg leading-relaxed mb-6 max-w-md">
                Digital paintings, figure studies, and visual translations of sound — made between studios, hotel rooms, and beach balconies.
              </p>
              <Link href="/art" className="inline-block font-display tracking-widest border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                VIEW PORTFOLIO →
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="row-span-2 overflow-hidden bg-black aspect-[3/4] md:aspect-auto"
            >
              <img src={artB} alt="Guitar Hands" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="overflow-hidden bg-black aspect-square"
            >
              <img src={artA} alt="Eye of the Sun" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden bg-black aspect-square"
            >
              <img src={artD} alt="Swing A Ling" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="row-span-2 overflow-hidden bg-black aspect-[3/4] md:aspect-auto"
            >
              <img src={artE} alt="Afro Repose" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2 overflow-hidden bg-black aspect-[2/1]"
            >
              <img src={artC} alt="Golden Hour" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FMLY Connected World Strip */}
      <section className="py-24 bg-[#445829] text-[#efe7d7] relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-4">FMLY BZNS · A CONNECTED WORLD</p>
              <h2 className="font-display text-4xl md:text-7xl leading-[0.95]">
                ONE FAMILY,<br/>FOUR LANES,<br/>ONE PRACTICE.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base md:text-lg text-[#efe7d7]/85 leading-relaxed mb-8 max-w-md">
                FMLY BZNS is the umbrella — mixtape series, event production, brand studio, and cultural partnerships. Built around a small crew, a few right partners at a time.
              </p>
              <Link href="/fmly">
                <Button size="lg" variant="outline" className="rounded-none font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#445829] px-10 h-14">
                  ENTER THE WORLD →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join List CTA */}
      <section className="py-32 container mx-auto px-4 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-6">JOIN THE FAMILY</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Sign up for early access to music drops, limited edition merch, secret events, and cultural insights.
          </p>
          <Link href="/join">
            <Button size="lg" className="h-14 px-12 text-xl font-display tracking-widest rounded-none">
              SIGN UP
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
