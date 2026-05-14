import React, { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { archiveCollections, type ArchiveItem } from "@/data/archive";

export default function Archive() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [active, setActive] = useState<ArchiveItem | null>(null);

  const selectedCollection = useMemo(
    () => archiveCollections.find((collection) => collection.slug === selectedSlug) ?? null,
    [selectedSlug],
  );

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <section className="bg-sage poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] stacked-title-word text-[#cf5d27]">VISUAL</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[18vw] stacked-title-word text-[#111111] mt-0 md:-mt-8">ARCHIVE</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-xl md:text-2xl uppercase tracking-[0.25em] text-[#111111]/50 mt-8 max-w-4xl mx-auto">
            Three collections. One doorway each. Enter the full gallery from the cover art.
          </p>
        </ScrollReveal>
      </section>

      {!selectedCollection ? (
        <section className="bg-cream poster-panel">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {archiveCollections.map((collection, i) => (
              <ScrollReveal key={collection.slug} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setSelectedSlug(collection.slug)}
                  className="w-full text-left group"
                >
                  <div className="border-8 border-[#111111] bg-[#efe7d7] p-5 shadow-[12px_12px_0_#111111] hover:-translate-y-1 transition-transform">
                    <div className="overflow-hidden border-8 border-[#111111] bg-[#111111]">
                      <img
                        src={collection.cover}
                        alt={collection.alt}
                        className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="pt-6 text-center">
                      <h2 className="font-display text-5xl md:text-4xl text-[#111111] leading-none">
                        {collection.title}
                      </h2>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </section>
      ) : (
        <section className="bg-cream poster-panel">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="font-sans text-lg uppercase tracking-[0.3em] text-[#cf5d27] mb-4">
                  {selectedCollection.items.length} works
                </p>
                <h2 className="font-display text-[12vw] md:text-[8vw] leading-none text-[#111111]">
                  {selectedCollection.title}
                </h2>
                {selectedCollection.description && (
                  <p className="font-sans text-xl md:text-2xl uppercase tracking-wide text-[#111111]/60 mt-6 max-w-4xl">
                    {selectedCollection.description}
                  </p>
                )}
              </div>
              <Button
                size="lg"
                onClick={() => setSelectedSlug(null)}
                className="h-20 px-12 text-2xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#cf5d27] hover:text-[#111111] rounded-none border-4 border-[#111111] self-start lg:self-auto"
              >
                ALL COLLECTIONS
              </Button>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 w-full [&>*]:mb-8">
              {selectedCollection.items.map((piece, i) => (
                <motion.div
                  key={piece.id}
                  onClick={() => setActive(piece)}
                  className="group relative block w-full break-inside-avoid overflow-hidden border-8 border-[#111111] shadow-[8px_8px_0_#111111] cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <img src={piece.image} alt={piece.alt} className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-x-0 bottom-0 bg-[#efe7d7] border-t-4 border-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                    <p className="font-display text-4xl text-[#111111]">{piece.title}</p>
                    {piece.year && (
                      <p className="font-sans text-lg text-[#111111]/70 mt-2 uppercase tracking-widest">{piece.year}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-orange poster-panel border-t-8 border-[#111111] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-12">COMMISSION</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/connect">
            <Button
              size="lg"
              className="h-24 px-16 text-4xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#f6c45a] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#111111]"
            >
              INQUIRE
            </Button>
          </Link>
          <Link href="/shop">
            <Button
              size="lg"
              className="h-24 px-16 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#111111] hover:text-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111]"
            >
              SHOP PRINTS
            </Button>
          </Link>
        </ScrollReveal>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#111111]/95 flex flex-col items-center justify-center p-4 md:p-12 cursor-pointer backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <div
              className="relative max-w-7xl max-h-full w-full flex flex-col items-center border-8 border-[#cf5d27] bg-[#efe7d7] p-4 shadow-[16px_16px_0_#f6c45a]"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 bg-[#111111] text-[#f6c45a] p-2 hover:bg-[#cf5d27] transition-colors">
                <X className="w-8 h-8" />
              </button>
              <img src={active.image} alt={active.alt} className="max-w-full max-h-[70vh] object-contain mb-8 border-8 border-[#111111]" />
              <div className="text-center w-full bg-[#111111] p-6 text-[#efe7d7]">
                <h3 className="font-display text-5xl mb-2 text-[#f6c45a]">{active.title}</h3>
                <p className="font-sans text-xl uppercase tracking-widest">
                  {[active.series, active.medium, active.year].filter(Boolean).join(" · ")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
