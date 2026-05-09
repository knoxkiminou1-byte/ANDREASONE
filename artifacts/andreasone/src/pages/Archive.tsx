import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { activeArchive } from "@/data/archive";

export default function Archive() {
  const [active, setActive] = useState<typeof activeArchive[0] | null>(null);

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <section className="bg-sage poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] leading-none text-[#cf5d27]">VISUAL</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[18vw] leading-none text-[#111111] -mt-8">ARCHIVE</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <p className="font-sans text-xl md:text-2xl uppercase tracking-[0.25em] text-[#111111]/50 mt-8 max-w-3xl mx-auto">
            A living document of visual work — growing over time.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-cream poster-panel">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 w-full [&>*]:mb-8">
          {activeArchive.map((p, i) => (
            <motion.div
              key={p.id}
              onClick={() => setActive(p)}
              className="group relative block w-full break-inside-avoid overflow-hidden border-8 border-[#111111] shadow-[8px_8px_0_#111111] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <img src={p.image} alt={p.alt} className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-[#cf5d27]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                {p.series && <p className="font-display text-xl text-[#f6c45a] mb-2">{p.series.toUpperCase()}</p>}
                <p className="font-display text-4xl text-[#111111]">{p.title}</p>
                {p.year && <p className="font-sans text-lg text-[#111111]/70 mt-2 uppercase tracking-widest">{p.year}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-orange poster-panel border-t-8 border-[#111111] text-center">
        <ScrollReveal>
          <h2 className="text-[10vw] leading-none text-[#111111] mb-12">COMMISSION</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/connect">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#111111] text-[#efe7d7] hover:bg-[#f6c45a] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
              INQUIRE
            </Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" className="h-24 px-16 text-4xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#111111] hover:text-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
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
            <div className="relative max-w-7xl max-h-full w-full flex flex-col items-center border-8 border-[#cf5d27] bg-[#efe7d7] p-4 shadow-[16px_16px_0_#f6c45a]" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 bg-[#111111] text-[#f6c45a] p-2 hover:bg-[#cf5d27] transition-colors">
                <X className="w-8 h-8" />
              </button>
              <img src={active.image} alt={active.alt} className="max-w-full max-h-[70vh] object-contain mb-8 border-8 border-[#111111]" />
              <div className="text-center w-full bg-[#111111] p-6 text-[#efe7d7]">
                <h3 className="font-display text-5xl mb-2 text-[#f6c45a]">{active.title}</h3>
                <p className="font-sans text-xl uppercase tracking-widest">
                  {[active.series, active.medium, active.year].filter(Boolean).join(" · ")}
                </p>
                {active.description && (
                  <p className="font-sans text-lg text-[#efe7d7]/70 mt-4 max-w-2xl mx-auto">{active.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
