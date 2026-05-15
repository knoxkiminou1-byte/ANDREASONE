import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MotionBackdrop } from "@/components/MotionBackdrop";
import { AndreasWordmark } from "@/components/AndreasWordmark";
import mxtpCover from "@assets/fmly-mxtp-vol-12-full.jpeg";
import { MIXTAPE_VOL_12_URL, SOCIAL_LINKS } from "@/data/siteLinks";

export default function Sounds() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center overflow-hidden">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#111111]">SOUND</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive stacked-title-word text-[#cf5d27] mt-0 md:-mt-10">ARCHIVE</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-xl md:text-2xl uppercase tracking-[0.25em] text-[#111111]/60 mt-8 max-w-4xl mx-auto">
            Selections, transmissions, and sound documents from the{" "}
            <AndreasWordmark text="AndreasOne" className="inline-flex align-baseline text-[#111111] text-[1.08em] tracking-[0.08em]" />
            world.
          </p>
        </ScrollReveal>
      </section>

      {/* Featured Mix */}
      <section className="bg-black poster-panel overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <ScrollReveal className="w-full lg:w-1/2 hover-img border-8 border-[#cf5d27] bg-[#cf5d27] p-4 shadow-[16px_16px_0_#f6c45a]" direction="left" >
            <a href={MIXTAPE_VOL_12_URL} target="_blank" rel="noreferrer" className="block">
              <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="w-full h-auto" />
            </a>
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-left text-[#efe7d7]" direction="right">
            <h2 className="text-[8vw] leading-none mb-4 text-[#f6c45a]">FMLY MXTP</h2>
            <h3 className="font-display text-5xl mb-3">VOL. 12</h3>
            <AndreasWordmark text="AndreasOne" className="mb-8 font-display text-[#efe7d7]/75 text-4xl md:text-5xl tracking-[0.06em]" />
            <p className="font-sans text-2xl mb-12 max-w-xl mx-auto lg:mx-0">
              A 68 min journey through Amapiano, Afro House, Deep House, Gqom, Baile Funk, and Global Edits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={MIXTAPE_VOL_12_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="h-20 px-12 text-2xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#f6c45a] hover:-translate-y-1 rounded-none border-4 border-[#cf5d27]">
                  SOUNDCLOUD
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
              title="AndreasOne latest tracks on SoundCloud"
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/andreasone/tracks&color=%23cf5d27&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
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

      {/* Philosophy */}
      <section className="relative isolate bg-olive poster-panel text-center overflow-hidden">
        <MotionBackdrop
          opacity={0.18}
          playbackRate={0.5}
          overlayStyle={{ background: "linear-gradient(180deg, rgba(69,88,41,0.14), rgba(17,17,17,0.44))" }}
        />
        <ScrollReveal>
          <p className="relative z-10 font-sans text-[11vw] md:text-[7vw] text-[#efe7d7] max-w-6xl mx-auto leading-[0.9] font-bold uppercase tracking-tight">
            "MUSIC IS THE WEAPON OF THE FUTURE"
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="relative z-10 font-sans text-lg md:text-2xl uppercase tracking-[0.3em] text-[#efe7d7]/70 mt-8">
            — Fela Kuti
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
