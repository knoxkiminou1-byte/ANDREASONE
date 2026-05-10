import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

import logoOutline from "@assets/AndreasOne_New_Logo_One_color_Transparent_1776997848574.png";
import heroPhoto from "@assets/Andreas_0217_1778035391882.jpeg";
import layerPhoto from "@assets/Andreas_Layer_1778035395766.jpeg";
import portraitPhoto from "@assets/Andreas-48_1778035403218.jpeg";
import mxtpCover from "@assets/Screen_Shot_2026-04-19_at_12.36.35_PM_1776997719111.png";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import artE from "@assets/IMG_0177_1776998601433.JPG";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* HERO — editorial: face top, logo bottom */}
      <section className="relative w-full h-[100svh] flex flex-col overflow-hidden bg-[#111111]">
        <img
          src={heroPhoto}
          alt="Andreas One"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center 18%",
            filter: "brightness(0.6) contrast(1.1)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 via-transparent via-40% to-[#111111] pointer-events-none" />
        <div className="absolute inset-0 bg-[#cf5d27] opacity-10 mix-blend-color pointer-events-none" />

        {/* Logo pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-10 sm:pb-16 px-2 sm:px-4 translate-y-[34px] sm:translate-y-[48px]">
          <motion.div
            role="img"
            aria-label="ANDREASONE"
            className="w-full max-w-[80vw] sm:max-w-5xl md:max-w-6xl aspect-[2700/932] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]"
            style={{
              backgroundColor: "#EEC76C",
              maskImage: `url(${logoOutline})`,
              WebkitMaskImage: `url(${logoOutline})`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="font-sans font-bold uppercase tracking-[0.35em] sm:tracking-[0.5em] text-[#f6c45a] text-[10px] sm:text-sm md:text-base mt-2 sm:mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            SIGNALS FROM THE SOIL
          </motion.p>

          <motion.div
            className="flex flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link href="/sounds">
              <Button size="lg" className="h-10 sm:h-14 px-6 sm:px-10 text-base sm:text-xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-4 border-[#111111]">
                LISTEN
              </Button>
            </Link>
            <Link href="/connect">
              <Button size="lg" className="h-10 sm:h-14 px-6 sm:px-10 text-base sm:text-xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#f6c45a] hover:-translate-y-1 rounded-none border-4 border-[#111111]">
                BOOKING
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUOTE BLOCK */}
      <section className="bg-[#111111] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center text-center">
        <ScrollReveal>
          <h2 className="text-massive text-[#cf5d27] break-words uppercase">
            MUSIC IS THE
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="text-massive text-[#f6c45a] break-words uppercase">
            WEAPON
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <h2 className="text-massive text-[#d9decf]/40 break-words uppercase">
            OF THE FUTURE
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.18}>
          <p className="font-sans text-sm md:text-base uppercase tracking-[0.25em] text-[#efe7d7]/35 text-right mt-8 pr-2">
            — Fela Kuti
          </p>
        </ScrollReveal>
      </section>

      {/* LATEST DROP */}
      <section className="bg-[#f6c45a] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center border-y-8 border-[#111111]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <ScrollReveal className="flex-1 w-full text-center lg:text-left" direction="left">
            <p className="font-sans text-xl md:text-2xl font-bold uppercase tracking-[0.3em] mb-4 text-[#111111]/60">LATEST TRANSMISSION</p>
            <h2 className="text-[12vw] leading-none mb-8 text-[#111111]">FMLY MXTP<br />VOL. 12</h2>
            <Link href="/sounds">
              <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none shadow-[8px_8px_0_#111111]">
                PLAY LOUD
              </Button>
            </Link>
          </ScrollReveal>
          <ScrollReveal className="w-full lg:w-[45%] hover-img" direction="right">
            <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="w-full h-auto object-cover" />
          </ScrollReveal>
        </div>
      </section>

      {/* EDITORIAL PORTRAIT BLOCK */}
      <section className="bg-[#111111] w-full flex flex-col lg:flex-row min-h-[80vh]">
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[50vh] lg:min-h-full">
          <img
            src={layerPhoto}
            alt="Andreas One"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.75) contrast(1.15)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/60" />
        </div>
        <div className="w-full lg:w-1/2 bg-[#445829] flex flex-col justify-center w-full px-4 md:px-8 py-20 md:py-32">
          <ScrollReveal direction="right">
            <p className="font-sans text-xl uppercase tracking-[0.3em] text-[#d9decf]/70 mb-4">GLOBAL DJ · CREATIVE DIRECTOR</p>
            <h2 className="text-[10vw] lg:text-[7vw] leading-none text-[#f6c45a] mb-8">BLENDING<br />WORLDS</h2>
            <p className="font-sans text-2xl font-bold uppercase tracking-wide text-[#efe7d7] leading-relaxed mb-12">
              Earthy + Urban. Festival Culture meets Global Music. A frequency you step into.
            </p>
            <Link href="/roots">
              <Button size="lg" className="h-16 px-12 text-2xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none">
                THE ROOTS
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* WORLD BUILDING */}
      <section className="bg-[#cf5d27] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center">
        <ScrollReveal className="w-full text-center mb-16">
          <h2 className="text-[15vw] stacked-title-word text-[#111111]">WORLD</h2>
          <h2 className="text-[15vw] stacked-title-word text-[#f6c45a] -mt-5 md:-mt-12">BUILDING</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 w-full">
          {[
            { tag: "VISUAL IDENTITY",       bg: "#111111", color: "#f6c45a", sub: "#efe7d7" },
            { tag: "IMMERSIVE ENVIRONMENTS", bg: "#f6c45a", color: "#cf5d27", sub: "#111111" },
            { tag: "FASHION & OBJECTS",      bg: "#445829", color: "#f6c45a", sub: "#d9decf" },
            { tag: "CREATIVE COLLAB",        bg: "#efe7d7", color: "#111111", sub: "#111111" },
          ].map((c, i) => (
            <ScrollReveal key={c.tag} delay={i * 0.1}>
              <div className="p-10 md:p-12 text-center" style={{ backgroundColor: c.bg }}>
                <h3 className="font-display text-3xl md:text-4xl mb-2 leading-tight" style={{ color: c.color }}>{c.tag}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-16 flex justify-center" delay={0.2}>
          <Link href="/world-building">
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#f6c45a] hover:text-[#111111] hover:-translate-y-1 rounded-none">
              ENTER THE WORLD
            </Button>
          </Link>
        </ScrollReveal>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-[#445829] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <ScrollReveal className="w-full lg:w-1/2 hover-img" direction="left">
            <img src={gatheringPoster} alt="The Gathering" className="w-full h-auto" />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-right" direction="right">
            <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-6">UPCOMING</h2>
            <h2 className="text-[10vw] leading-none text-[#111111] mb-12">EXPERIENCES</h2>
            <p className="font-sans text-2xl font-bold uppercase text-[#d9decf] mb-12">The Gathering · May 24, 2026 · Los Angeles</p>
            <Link href="/experiences">
              <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
                GET TICKETS
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* PORTRAIT + TAGLINE */}
      <section className="bg-[#efe7d7] w-full flex flex-col lg:flex-row min-h-[70vh]">
        <div className="w-full lg:w-1/2 bg-[#111111] flex flex-col justify-center w-full px-4 md:px-8 py-20 md:py-32">
          <ScrollReveal direction="left">
            <p className="font-sans text-lg uppercase tracking-[0.4em] text-[#cf5d27] mb-6">SOUND MOVES PEOPLE</p>
            <h2 className="text-[11vw] lg:text-[8vw] leading-none text-[#efe7d7] mb-8">GLOBAL<br /><span className="text-[#f6c45a]">FREQUENCY</span></h2>
            <p className="font-sans text-xl font-bold uppercase tracking-wide text-[#d9decf]/80 leading-relaxed max-w-lg">
              A living world of sound, culture, and movement — rooted in the soil, reaching every corner of the globe.
            </p>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[50vh] lg:min-h-full">
          <img
            src={portraitPhoto}
            alt="Andreas One"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.8) contrast(1.1)" }}
          />
        </div>
      </section>

      {/* ARCHIVE PORTAL */}
      <section className="bg-[#efe7d7] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center overflow-hidden border-t-8 border-[#111111]">
        <ScrollReveal>
          <h2 className="text-massive text-center text-[#445829] mb-12">ARCHIVE</h2>
        </ScrollReveal>
        <ScrollReveal className="w-full relative hover-img">
          <img src={artE} alt="Visual Archive" className="w-full object-cover max-h-[80vh]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/archive">
              <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none">
                VIEW ARCHIVE
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* JOIN THE FAMILY CTA */}
      <section className="bg-[#111111] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center border-t-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h2 className="text-[12vw] leading-none text-[#cf5d27] mb-4">JOIN THE</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="text-[12vw] leading-none text-[#f6c45a] mb-16">FAMILY</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Link href="/join">
            <Button size="lg" className="h-24 px-20 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#cf5d27]">
              SIGN UP
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
