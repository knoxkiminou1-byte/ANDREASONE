import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import mxtpCover from "@assets/fmly-mxtp-vol-12-full.jpeg";
import { MIXTAPE_VOL_12_URL, SOCIAL_LINKS } from "@/data/siteLinks";

export default function Music() {
  return (
    <div className="w-full flex flex-col">
      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#111111]">SOUND</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive stacked-title-word text-[#cf5d27] mt-0 md:-mt-10">ARCHIVE</h1>
        </ScrollReveal>
      </section>

      {/* Featured Mix */}
      <section className="bg-black poster-panel">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <ScrollReveal className="w-full lg:w-1/2 hover-img border-8 border-[#cf5d27] bg-[#cf5d27] p-4 shadow-[16px_16px_0_#f6c45a]" direction="left">
            <a href={MIXTAPE_VOL_12_URL} target="_blank" rel="noreferrer" className="block">
              <img src={mxtpCover} alt="FMLY MXTP VOL. 12" className="w-full h-auto" />
            </a>
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full text-center lg:text-left text-[#efe7d7]" direction="right">
            <h2 className="text-[8vw] leading-none mb-4 text-[#f6c45a]">FMLY MXTP</h2>
            <h3 className="font-display text-5xl mb-3">VOL. 12</h3>
            <p className="font-sans text-xl md:text-2xl font-bold uppercase tracking-[0.18em] text-[#efe7d7]/75 mb-8">
              AndreasOne
            </p>
            <p className="font-sans text-2xl mb-12 max-w-xl mx-auto lg:mx-0">
              A 68 min journey through Amapiano, Afro House, Deep House, Gqom, Baile Funk, and Global Edits.
            </p>
            <div className="flex flex-col gap-4 justify-center lg:justify-start">
              <a href={MIXTAPE_VOL_12_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="h-20 px-12 text-2xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none border-4 border-[#f6c45a] w-full sm:w-auto">
                  YOUTUBE
                </Button>
              </a>
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
          <a
            href="https://www.youtube.com/@andreasone"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" className="h-20 px-16 text-3xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#f6c45a] hover:-translate-y-1 rounded-none border-4 border-[#cf5d27]">
              ALL VIDEOS
            </Button>
          </a>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="bg-olive poster-panel text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#f6c45a] mb-12">THE LINEAGE</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-sans text-3xl md:text-5xl text-[#efe7d7] max-w-5xl mx-auto leading-tight font-bold uppercase tracking-wide">
            "Music is the weapon of the future"
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="font-sans text-xl md:text-2xl text-[#efe7d7]/75 mt-8 uppercase tracking-[0.35em]">
            Fela Kuti
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
