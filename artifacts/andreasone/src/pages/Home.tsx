import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MIXTAPE_VOL_12_URL, THE_GATHERING_TICKETS_URL } from "@/data/siteLinks";

import logoOutline from "@assets/AndreasOne_New_Logo_One_color_Transparent_1776997848574.png";
import heroPhoto from "@assets/Andreas_0217_1778035391882.jpeg";
import mxtpCover from "@assets/fmly-mxtp-vol-12-full.jpeg";
import gatheringPoster from "@assets/the-gathering-2026-hopland.png";
import worldBuildingBackdrop from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";
import artE from "@assets/IMG_0177_1776998601433.JPG";
import globalFrequencyPoster from "@assets/global-frequency-poster.jpeg";
import frequencyCultureMovementPoster from "@assets/frequency-culture-movement-poster.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* HERO — editorial: face top, logo bottom */}
      <section className="relative w-full h-[100svh] flex flex-col overflow-hidden bg-[#111111]">
        <img
          src={heroPhoto}
          alt="Andreas One"
          className="hero-portrait absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center 18%",
            filter: "brightness(0.6) contrast(1.1)",
          }}
        />

        {/* Top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-transparent via-35% to-transparent pointer-events-none" />
        {/* Bottom fade to black — shorter on mobile so chin stays visible, taller on desktop */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] md:h-[60%] bg-gradient-to-t from-[#111111] via-[#111111]/85 via-40% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#cf5d27] opacity-10 mix-blend-color pointer-events-none" />

        {/* Logo pinned to bottom */}
        <div className="absolute left-0 right-0 z-10 flex flex-col items-center px-2 sm:px-4 bottom-[22svh] sm:bottom-0 pb-0 sm:pb-16 translate-y-0 sm:translate-y-[48px]">
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
        </div>
      </section>

      {/* QUOTE BLOCK */}
      <section className="bg-[#111111] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center text-center overflow-hidden">
        <ScrollReveal>
          <h2 className="text-[17vw] md:text-[15vw] stacked-title-word text-[#cf5d27] uppercase">
            SIGNALS
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="text-[8vw] md:text-[6.5vw] stacked-title-word text-[#f6c45a] uppercase tracking-[0.18em] -mt-2 md:-mt-4">
            FROM THE
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <h2 className="text-[21vw] md:text-[18vw] stacked-title-word text-[#445829] uppercase -mt-4 md:-mt-8">
            SOIL
          </h2>
        </ScrollReveal>
      </section>

      {/* LATEST DROP */}
      <section className="bg-[#f6c45a] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center border-y-8 border-[#111111]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <ScrollReveal className="flex-1 w-full text-center lg:text-left" direction="left">
            <p className="font-sans text-xl md:text-2xl font-bold uppercase tracking-[0.3em] mb-4 text-[#111111]/60">LATEST TRANSMISSION</p>
            <h2 className="text-[12vw] leading-none mb-8 text-[#111111]">FMLY MXTP<br />VOL. 12</h2>
            <Button asChild size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none shadow-[8px_8px_0_#111111]">
              <a href={MIXTAPE_VOL_12_URL} target="_blank" rel="noreferrer">
                PLAY LOUD
              </a>
            </Button>
          </ScrollReveal>
          <ScrollReveal className="w-full lg:w-[45%] hover-img" direction="right">
            <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="w-full h-auto object-cover" />
          </ScrollReveal>
        </div>
      </section>

      {/* EDITORIAL PORTRAIT BLOCK */}
      <section className="bg-[#111111] w-full flex flex-col lg:flex-row min-h-[80vh]">
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[50vh] lg:min-h-full bg-[#cf5d27]">
          <img
            src={globalFrequencyPoster}
            alt="Andreas One editorial portrait"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-[#445829] flex flex-col justify-center w-full px-4 md:px-8 py-20 md:py-32">
          <ScrollReveal direction="right">
            <p className="font-sans text-xl uppercase tracking-[0.3em] text-[#d9decf]/70 mb-4">SIGNALS FROM THE SOIL</p>
            <h2 className="text-[10vw] lg:text-[7vw] leading-none text-[#f6c45a] mb-8">GLOBAL<br />FREQUENCY</h2>
            <p className="font-sans text-2xl font-bold uppercase tracking-wide text-[#efe7d7] leading-relaxed max-w-2xl">
              Rhythm as language.
              <br />
              Movement as ritual.
              <br />
              Sound, space &amp; visual culture in motion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WORLD BUILDING */}
      <Link href="/world-building" className="block">
        <section className="relative min-h-[70vh] overflow-hidden bg-[#cf5d27] flex items-center justify-center px-4 md:px-8 py-20 md:py-32 cursor-pointer">
          <img
            src={worldBuildingBackdrop}
            alt="World Building"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "saturate(1.05) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-[#111111]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-[#111111]/35" />
          <ScrollReveal className="relative z-10 text-center">
            <h2 className="text-[15vw] stacked-title-word text-[#111111] [text-shadow:0_0_24px_rgba(0,0,0,0.25)]">WORLD</h2>
            <h2 className="text-[15vw] stacked-title-word text-[#f6c45a] mt-0 md:-mt-12 [text-shadow:0_0_24px_rgba(0,0,0,0.35)]">BUILDING</h2>
          </ScrollReveal>
        </section>
      </Link>

      {/* EXPERIENCES */}
      <section className="bg-[#445829] w-full px-4 md:px-8 py-20 md:py-32 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <ScrollReveal className="w-full lg:w-1/2 hover-img" direction="left">
            <img src={gatheringPoster} alt="The Gathering" className="w-full h-auto" />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-right" direction="right">
            <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-6">UPCOMING</h2>
            <h2 className="text-[10vw] leading-none text-[#111111] mb-12">EXPERIENCES</h2>
            <p className="font-sans text-2xl font-bold uppercase text-[#d9decf] mb-12">The Gathering · July 31-August 2, 2026 · Hopland, CA</p>
            <Button asChild size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
              <a href={THE_GATHERING_TICKETS_URL} target="_blank" rel="noreferrer">
                GET TICKETS
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* PORTRAIT + TAGLINE */}
      <section className="bg-[#efe7d7] w-full flex flex-col lg:flex-row min-h-[70vh]">
        <div className="w-full lg:w-1/2 bg-[#111111] flex flex-col justify-center w-full px-4 md:px-8 py-20 md:py-32">
          <ScrollReveal direction="left">
            <img
              src={logoOutline}
              alt="AndreasOne"
              className="w-56 md:w-72 mb-8"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <h2 className="text-[11vw] lg:text-[7vw] leading-none text-[#efe7d7]">
              FREQUENCY
              <br />
              CULTURE
              <br />
              MOVEMENT
            </h2>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[50vh] lg:min-h-full">
          <img
            src={frequencyCultureMovementPoster}
            alt="Andreas One frequency culture movement portrait"
            className="absolute inset-0 w-full h-full object-cover object-center"
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
