import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ScrollReveal";

import sigilMark from "@assets/Screen_Shot_2026-04-20_at_11.49.05_AM_1776997719110.png";
import logoOrange from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";
import monogram from "@assets/AndreasOne-AO_New_Logo.02_-2025_1776997848573.png";
import print01 from "@assets/IMG_0237_1776998601428.JPG";
import print02 from "@assets/IMG_0188_1776998601429.JPG";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import mxtpCover from "@assets/fmly-mxtp-vol-12-full.jpeg";

type Product = {
  id: string; name: string; price: number; status: string; image: string; bg: string; wobbleLogo?: boolean;
};

const products: Product[] = [
  { id: "ap1", name: "FMLY SIGIL TEE",        price: 45,  status: "AVAILABLE", image: sigilMark,      bg: "#efe7d7" },
  { id: "ap2", name: "PYRAMID LOGO TEE",       price: 45,  status: "LOW STOCK", image: logoOrange,     bg: "#cf5d27", wobbleLogo: true },
  { id: "ap3", name: "AO MONOGRAM CAP",        price: 38,  status: "AVAILABLE", image: monogram,       bg: "#f6c45a", wobbleLogo: true },
  { id: "pr1", name: "VISION PRINT",           price: 120, status: "AVAILABLE", image: print01,        bg: "#111111" },
  { id: "pr2", name: "NATURAL WINE PRINT",     price: 120, status: "AVAILABLE", image: print02,        bg: "#111111" },
  { id: "po1", name: "THE GATHERING POSTER",   price: 35,  status: "AVAILABLE", image: gatheringPoster,bg: "#111111" },
  { id: "mx1", name: "MXTP VOL. 12 CASSETTE", price: 22,  status: "AVAILABLE", image: mxtpCover,      bg: "#111111" },
];

export default function Shop() {
  const [cart, setCart] = useState<{id: string, qty: number}[]>([]);
  const [open, setOpen] = useState(false);

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const cartTotal = cart.reduce((s, c) => s + (products.find(p => p.id === c.id)?.price || 0) * c.qty, 0);

  const addToCart = (id: string, name: string) => {
    setCart(prev => {
      const ex = prev.find(c => c.id === id);
      if (ex) return prev.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id, qty: 1 }];
    });
    toast.success(`${name} added to cart`);
  };

  const updateQty = (id: string, d: number) => {
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty: c.qty + d } : c).filter(c => c.qty > 0));
  };

  return (
    <div className="w-full flex flex-col">
      <section className="bg-mustard poster-panel border-b-8 border-[#111111] text-center">
        <ScrollReveal>
          <h1 className="text-massive stacked-title-word text-[#cf5d27]">FMLY</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-massive stacked-title-word text-[#111111] mt-0 md:-mt-10">GOODS</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="mt-16 flex justify-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="lg" className="h-20 px-12 text-3xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none border-8 border-[#111111] shadow-[8px_8px_0_#111111]">
                <ShoppingBag className="mr-4 w-8 h-8" />
                CART ({cartCount})
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-[#efe7d7] border-l-8 border-[#111111] flex flex-col p-0">
              <SheetHeader className="p-8 bg-[#111111] border-b-8 border-[#cf5d27]">
                <SheetTitle className="font-display text-5xl text-[#f6c45a]">YOUR CART</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cart.map(c => {
                  const p = products.find(x => x.id === c.id);
                  if (!p) return null;
                  return (
                    <div key={c.id} className="flex gap-6 border-8 border-[#111111] bg-white p-4 shadow-[8px_8px_0_#cf5d27]">
                      <div className="w-24 h-24 bg-[#111111] border-4 border-[#111111]"><img src={p.image} alt={p.name} className={`w-full h-full object-cover ${p.wobbleLogo ? "pyramid-logo-wobble-subtle" : ""}`} /></div>
                      <div className="flex-1">
                        <h4 className="font-display text-2xl mb-2">{p.name}</h4>
                        <p className="font-sans text-xl font-bold mb-4">${p.price}</p>
                        <div className="flex items-center gap-4">
                          <button onClick={() => updateQty(c.id, -1)} className="bg-[#111111] text-white p-1 hover:bg-[#cf5d27]"><Minus className="w-4 h-4" /></button>
                          <span className="font-display text-2xl">{c.qty}</span>
                          <button onClick={() => updateQty(c.id, 1)} className="bg-[#111111] text-white p-1 hover:bg-[#cf5d27]"><Plus className="w-4 h-4" /></button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {cart.length === 0 && (
                  <p className="font-display text-3xl text-[#111111] text-center pt-12">CART IS EMPTY</p>
                )}
              </div>
              <div className="p-8 bg-[#111111] text-[#efe7d7] border-t-8 border-[#cf5d27]">
                <div className="flex justify-between font-display text-4xl mb-8">
                  <span>TOTAL</span>
                  <span className="text-[#f6c45a]">${cartTotal}</span>
                </div>
                <Button className="w-full h-20 text-3xl font-display uppercase bg-[#f6c45a] text-[#111111] hover:bg-[#cf5d27] hover:-translate-y-1 rounded-none border-4 border-[#cf5d27]">
                  CHECKOUT
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </ScrollReveal>
      </section>

      <section className="bg-cream poster-panel">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {products.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i % 3) * 0.08}>
              <div className="border-8 border-[#111111] bg-white shadow-[16px_16px_0_#cf5d27] hover-lift text-center flex flex-col">
                <div className="hover-img w-full aspect-square p-8 border-b-8 border-[#111111] relative" style={{ backgroundColor: p.bg }}>
                  <img src={p.image} alt={p.name} className={`w-full h-full object-contain drop-shadow-xl ${p.wobbleLogo ? "pyramid-logo-wobble-subtle" : ""}`} />
                  <div className="absolute top-4 left-4 bg-[#111111] text-[#f6c45a] font-sans font-bold px-4 py-2 border-4 border-[#111111]">
                    {p.status}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-4xl mb-4 text-[#111111]">{p.name}</h3>
                    <p className="font-sans text-3xl font-bold text-[#cf5d27] mb-8">${p.price}</p>
                  </div>
                  <Button
                    onClick={() => { addToCart(p.id, p.name); setOpen(true); }}
                    className="w-full h-16 text-2xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] rounded-none border-4 border-[#111111]"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
