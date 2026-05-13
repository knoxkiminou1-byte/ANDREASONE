import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import mxtpCover from "@assets/Screen_Shot_2026-04-19_at_12.36.35_PM_1776997719111.png";
import cover02 from "@assets/IMG_0237_1776998601428.JPG";
import cover03 from "@assets/IMG_0188_1776998601429.JPG";
import { MIXTAPE_VOL_12_URL, SOCIAL_LINKS } from "@/data/siteLinks";

export default function Sounds() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#111111]">SOUND</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive stacked-title-word text-[#cf5d27] mt-0 md:-mt-10">ARCHIVE</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-xl md:text-2xl uppercase tracking-[0.25em] text-[#111111]/60 mt-8 max-w-3xl mx-auto">
            Selections, transmissions, and sound documents from the AndreasOne world.
          </p>
        </ScrollReveal>
      </section>

      {/* Featured Mix */}
      <section className="bg-black poster-panel">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <ScrollReveal className="w-full lg:w-1/2 hover-img border-8 border-[#cf5d27] bg-[#cf5d27] p-4 shadow-[16px_16px_0_#f6c45a]" direction="left">
            <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="w-full h-auto" />
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-left text-[#efe7d7]" direction="right">
            <h2 className="text-[8vw] leading-none mb-4 text-[#f6c45a]">VOL. 12</h2>
            <h3 className="font-display text-5xl mb-8">MARCH MEDITATIONS</h3>
            <p className="font-sans text-2xl mb-12 max-w-xl mx-auto lg:mx-0">
              A 84-minute journey through afro house, amapiano, and unreleased edits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noreferrer">
                <Button size="lg" className="h-20 px-12 text-2xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#f6c45a] hover:-translate-y-1 rounded-none border-4 border-[#cf5d27]">
                  SOUNDCLOUD
                </Button>
              </a>
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noreferrer">
                <Button size="lg" className="h-20 px-12 text-2xl font-display uppercase bg-transparent text-[#f6c45a] hover:bg-[#f6c45a] hover:text-[#111111] hover:-translate-y-1 rounded-none border-4 border-[#f6c45a]">
                  SPOTIFY
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SoundCloud Embed */}
      <section className="bg-orange poster-panel border-y-8 border-[#111111]">
        <ScrollReveal>
          <h2 className="text-[10vw] text-[#111111] text-center mb-12 leading-none">LISTEN NOW</h2>
        </ScrollReveal>
        <ScrollReveal className="w-full">
          <div className="border-8 border-[#111111] overflow-hidden shadow-[16px_16px_0_#111111]">
            <iframe
              title="AndreasOne on SoundCloud"
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/andreasone&color=%23cf5d27&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* YouTube / Watch */}
      <section className="bg-black poster-panel border-y-8 border-[#cf5d27]">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#f6c45a] text-center mb-12">WATCH</h2>
        </ScrollReveal>
        <ScrollReveal className="w-full">
          <div className="border-8 border-[#cf5d27] overflow-hidden shadow-[16px_16px_0_#f6c45a] relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              title="AndreasOne on YouTube"
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=andreasone&rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="text-center mt-12">
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer">
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#f6c45a] hover:-translate-y-1 rounded-none border-4 border-[#cf5d27]">
              ALL VIDEOS
            </Button>
          </a>
        </ScrollReveal>
      </section>

      {/* Mixtape Grid */}
      <section className="bg-orange poster-panel border-y-8 border-[#111111]">
        <ScrollReveal>
          <h2 className="text-[10vw] text-[#111111] text-center mb-16 leading-none">THE MIXTAPES</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {[
            { img: mxtpCover, title: "VOL. 12", sub: "MARCH MEDITATIONS" },
            { img: cover02, title: "VOL. 11", sub: "LAGOS NIGHTS" },
            { img: cover03, title: "VOL. 10", sub: "BAHIA AT DAWN" },
          ].map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-8 border-[#111111] bg-[#f6c45a] p-4 shadow-[12px_12px_0_#111111] hover-lift cursor-pointer text-center">
              <div className="hover-img w-full mb-6 border-b-8 border-[#111111]">
                <img src={m.img} alt={m.title} className="w-full aspect-square object-cover" />
              </div>
              <h3 className="font-display text-5xl text-[#cf5d27] mb-2">{m.title}</h3>
              <p className="font-sans text-2xl font-bold uppercase tracking-wider text-[#111111] mb-6">{m.sub}</p>
              <Button asChild className="w-full h-16 text-2xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] rounded-none border-4 border-[#111111]">
                <a href={i === 0 ? MIXTAPE_VOL_12_URL : SOCIAL_LINKS.soundcloud} target="_blank" rel="noreferrer">
                  PLAY MIX
                </a>
              </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-olive poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-12">THE LINEAGE</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-sans text-3xl md:text-5xl text-[#efe7d7] max-w-5xl mx-auto leading-tight font-bold uppercase tracking-wide">
            "MUSIC IS THE WEAPON OF THE FUTURE"
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="font-sans text-lg md:text-2xl uppercase tracking-[0.3em] text-[#efe7d7]/70 mt-8">
            — Fela Kuti
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
