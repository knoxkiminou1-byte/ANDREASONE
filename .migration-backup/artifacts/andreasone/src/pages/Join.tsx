import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ScrollReveal";
import { toast } from "sonner";

export default function Join() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [joined, setJoined] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) {
      toast.error("Drop your email and we'll handle the rest.");
      return;
    }
    setJoined(true);
    toast.success("You're in. Welcome to the FMLY.");
  };

  return (
    <div className="w-full flex flex-col">
      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-massive text-[#cf5d27]">JOIN</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive text-[#111111] -mt-10">THE LIST</h1>
        </ScrollReveal>
      </section>

      <section className="bg-orange poster-panel flex items-center justify-center">
        <ScrollReveal className="w-full max-w-4xl bg-[#efe7d7] border-8 border-[#111111] shadow-[24px_24px_0_#111111] p-12 md:p-24 text-center">
          {joined ? (
            <div className="py-8">
              <h2 className="font-display text-[8vw] text-[#445829] leading-none mb-8">YOU'RE<br />IN.</h2>
              <p className="font-sans text-3xl font-bold uppercase tracking-wide text-[#111111] mb-4">Welcome to the FMLY.</p>
              <p className="font-sans text-xl uppercase tracking-widest text-[#111111]/60 mb-12">
                Expect drops, presales, and early access — before anyone else hears it.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                {[
                  { label: "SOUNDCLOUD", href: "https://soundcloud.com/andreasone" },
                  { label: "SPOTIFY", href: "https://open.spotify.com/artist/andreasone" },
                  { label: "INSTAGRAM", href: "https://www.instagram.com/andreasone/" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    <Button className="h-14 px-8 text-xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] rounded-none border-4 border-[#111111]">
                      {s.label}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="font-display text-[8vw] text-[#cf5d27] mb-4 leading-none">SIGN UP</h2>
              <p className="font-sans text-2xl font-bold uppercase tracking-wide text-[#111111]/70 mb-12 max-w-xl mx-auto">
                Mixtape drops, event presales, capsule releases — access before everyone else.
              </p>
              <div className="space-y-8 flex flex-col items-center w-full max-w-2xl mx-auto">
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="YOUR NAME"
                  className="h-20 w-full text-3xl font-display uppercase border-8 border-[#111111] bg-white rounded-none text-center placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] transition-colors"
                />
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="YOUR EMAIL *"
                  required
                  className="h-20 w-full text-3xl font-display uppercase border-8 border-[#111111] bg-white rounded-none text-center placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] transition-colors"
                />
                <Button type="submit" size="lg" className="h-24 w-full text-4xl font-display uppercase bg-[#cf5d27] text-[#111111] hover:bg-[#111111] hover:text-[#f6c45a] hover:-translate-y-1 rounded-none border-8 border-[#111111] mt-8">
                  JOIN THE FMLY
                </Button>
              </div>
            </form>
          )}
        </ScrollReveal>
      </section>

      <section className="bg-black poster-panel text-center border-t-8 border-[#cf5d27]">
        <ScrollReveal>
          <p className="font-sans text-3xl font-bold uppercase tracking-[0.2em] text-[#efe7d7]/60 mb-8">Follow Everywhere</p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "@andreasone", platform: "INSTAGRAM", href: "https://www.instagram.com/andreasone/" },
              { label: "andreasone", platform: "SOUNDCLOUD", href: "https://soundcloud.com/andreasone" },
              { label: "AndreasOne", platform: "SPOTIFY", href: "https://open.spotify.com/artist/andreasone" },
              { label: "@andreasone", platform: "YOUTUBE", href: "https://www.youtube.com/@andreasone" },
              { label: "andreasone.music", platform: "TIKTOK", href: "https://www.tiktok.com/@andreasone.music" },
              { label: "andreasone", platform: "BANDCAMP", href: "https://andreasone.bandcamp.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer">
                <div className="border-4 border-[#cf5d27] px-6 py-4 hover-lift hover:bg-[#cf5d27] transition-colors group">
                  <p className="font-sans font-bold text-sm uppercase tracking-widest text-[#cf5d27] group-hover:text-[#111111] mb-1">{s.platform}</p>
                  <p className="font-display text-2xl text-[#efe7d7] group-hover:text-[#111111]">{s.label}</p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
