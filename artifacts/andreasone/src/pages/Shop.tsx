import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

import sigilMark from "@assets/Screen_Shot_2026-04-20_at_11.49.05_AM_1776997719110.png";
import logoOrange from "@assets/Screen_Shot_2026-04-20_at_11.46.48_AM_1776997719112.png";
import wordmark from "@assets/AndreasOne_New_Logo_One_color_Transparent_1776997848574.png";
import monogram from "@assets/AndreasOne-AO_New_Logo.02_-2025_1776997848573.png";
import mxtpCover from "@assets/Screen_Shot_2026-04-19_at_12.36.35_PM_1776997719111.png";
import gatheringPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.08_PM_1776997719109.png";
import baliPoster from "@assets/Screen_Shot_2026-04-19_at_12.37.57_PM_1776997719128.png";
import afroCollective from "@assets/Screen_Shot_2026-04-19_at_12.34.46_PM_1776997719113.png";

import print01 from "@assets/IMG_0237_1776998601428.JPG";
import print02 from "@assets/IMG_0188_1776998601429.JPG";
import print03 from "@assets/IMG_0177_1776998601433.JPG";
import print04 from "@assets/IMG_0361_1776998601427.JPG";
import print05 from "@assets/IMG_0227_1776998601432.JPG";
import print06 from "@assets/IMG_0184_1776998601435.JPG";
import print07 from "@assets/IMG_0183_1776998601424.JPG";
import print08 from "@assets/IMG_0180_1776998601422.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};

type Cat = "ALL" | "APPAREL" | "PRINTS" | "POSTERS" | "MIXTAPES" | "ARCHIVE";
type Status = "AVAILABLE" | "LOW STOCK" | "PRESALE" | "SOLD OUT";

type Product = {
  id: string;
  name: string;
  price: number;
  cat: Exclude<Cat, "ALL">;
  status: Status;
  image: string;
  bg: string;
  fit?: "cover" | "contain";
  edition?: string;
};

const products: Product[] = [
  // APPAREL — stylized brand-asset-on-color cards
  { id: "ap1", name: "FMLY SIGIL TEE",        price: 45, cat: "APPAREL", status: "AVAILABLE", image: sigilMark,  bg: "#efe7d7", fit: "contain" },
  { id: "ap2", name: "PYRAMID LOGO TEE",      price: 45, cat: "APPAREL", status: "LOW STOCK", image: logoOrange, bg: "#cf5d27", fit: "contain" },
  { id: "ap3", name: "AO MONOGRAM CAP",       price: 38, cat: "APPAREL", status: "AVAILABLE", image: monogram,   bg: "#f6c45a", fit: "contain" },
  { id: "ap4", name: "ANDREASONE CANVAS TOTE",price: 32, cat: "APPAREL", status: "AVAILABLE", image: wordmark,   bg: "#d9decf", fit: "contain" },
  { id: "ap5", name: "OLIVE FAMILY HOODIE",   price: 95, cat: "APPAREL", status: "PRESALE",   image: monogram,   bg: "#445829", fit: "contain" },
  { id: "ap6", name: "BURNT ORANGE CREWNECK", price: 75, cat: "APPAREL", status: "SOLD OUT",  image: sigilMark,  bg: "#cf5d27", fit: "contain" },

  // PRINTS — limited edition signed art
  { id: "pr1", name: "EYE OF THE SUN",     price: 120, cat: "PRINTS", status: "AVAILABLE", image: print01, bg: "#000", fit: "cover", edition: "Edition of 50" },
  { id: "pr2", name: "GOLDEN HOUR",        price: 120, cat: "PRINTS", status: "AVAILABLE", image: print02, bg: "#000", fit: "cover", edition: "Edition of 50" },
  { id: "pr3", name: "AFRO REPOSE",        price: 120, cat: "PRINTS", status: "LOW STOCK", image: print03, bg: "#000", fit: "cover", edition: "Edition of 50" },
  { id: "pr4", name: "SWING A LING",       price: 150, cat: "PRINTS", status: "AVAILABLE", image: print04, bg: "#000", fit: "cover", edition: "Edition of 25" },
  { id: "pr5", name: "SUN HAT",            price: 120, cat: "PRINTS", status: "PRESALE",   image: print05, bg: "#000", fit: "cover", edition: "Edition of 50" },
  { id: "pr6", name: "STACKED FORMS II",   price: 95,  cat: "PRINTS", status: "AVAILABLE", image: print06, bg: "#000", fit: "cover", edition: "Open edition" },
  { id: "pr7", name: "MOON SIT",           price: 120, cat: "PRINTS", status: "SOLD OUT",  image: print07, bg: "#000", fit: "cover", edition: "Edition of 50" },
  { id: "pr8", name: "GUITAR HANDS",       price: 150, cat: "PRINTS", status: "AVAILABLE", image: print08, bg: "#000", fit: "cover", edition: "Edition of 25" },

  // POSTERS
  { id: "po1", name: "THE GATHERING 2026 POSTER", price: 35, cat: "POSTERS", status: "AVAILABLE", image: gatheringPoster, bg: "#000", fit: "cover" },
  { id: "po2", name: "MARI BEACH CLUB POSTER",    price: 35, cat: "POSTERS", status: "AVAILABLE", image: baliPoster,      bg: "#000", fit: "cover" },
  { id: "po3", name: "AFRO COLLECTIVE PRINT",     price: 45, cat: "POSTERS", status: "LOW STOCK", image: afroCollective,  bg: "#000", fit: "cover" },

  // MIXTAPES
  { id: "mx1", name: "MXTP VOL. 12 CASSETTE", price: 22, cat: "MIXTAPES", status: "AVAILABLE", image: mxtpCover, bg: "#1a1a1a", fit: "contain" },
  { id: "mx2", name: "MXTP VOL. 11 CASSETTE", price: 22, cat: "MIXTAPES", status: "LOW STOCK", image: mxtpCover, bg: "#445829", fit: "contain" },
  { id: "mx3", name: "FMLY MXTP BOX SET",     price: 95, cat: "MIXTAPES", status: "PRESALE",   image: mxtpCover, bg: "#cf5d27", fit: "contain" },

  // ARCHIVE
  { id: "ar1", name: "FIRST FAMILY POSTER (2024)", price: 60, cat: "ARCHIVE", status: "SOLD OUT",  image: logoOrange, bg: "#cf5d27", fit: "contain" },
  { id: "ar2", name: "FMLY MXTP VOL. 01 (2024)",   price: 40, cat: "ARCHIVE", status: "LOW STOCK", image: mxtpCover,  bg: "#1a1a1a", fit: "contain" },
];

const categories: Cat[] = ["ALL", "APPAREL", "PRINTS", "POSTERS", "MIXTAPES", "ARCHIVE"];

const statusBadge: Record<Status, string> = {
  "AVAILABLE": "",
  "LOW STOCK": "bg-[#f6c45a] text-foreground",
  "PRESALE":   "bg-[#445829] text-[#efe7d7]",
  "SOLD OUT":  "bg-foreground text-background",
};

// Drop countdown — set a hardcoded future drop date
const NEXT_DROP = new Date("2026-06-01T00:00:00Z").getTime();

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const mins = Math.floor((ms % 3_600_000) / 60_000);
  const secs = Math.floor((ms % 60_000) / 1000);
  return { days, hours, mins, secs };
}

type CartItem = { id: string; qty: number };

export default function Shop() {
  const [cat, setCat] = useState<Cat>("ALL");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const { days, hours, mins, secs } = useCountdown(NEXT_DROP);

  const filtered = useMemo(() => cat === "ALL" ? products : products.filter((p) => p.cat === cat), [cat]);

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);
  const cartTotal = cart.reduce((sum, c) => {
    const p = products.find((p) => p.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);

  const addToCart = (id: string, name: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing) {
        return prev.map((c) => c.id === id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { id, qty: 1 }];
    });
    toast.success(`${name} added to cart`);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => c.id === id ? { ...c, qty: c.qty + delta } : c)
        .filter((c) => c.qty > 0)
    );
  };

  const removeItem = (id: string) => setCart((prev) => prev.filter((c) => c.id !== id));

  const notifyMe = (name: string) => {
    toast.success(`We'll notify you when ${name} is back.`);
  };

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Drop hero strip */}
      <section className="pt-24 pb-6 md:pt-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#cf5d27] text-[#efe7d7] p-6 md:p-10 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.3em] text-[#f6c45a] mb-2">DROP 03 — LIVE NOW · NEXT DROP IN</p>
              <h2 className="font-display text-3xl md:text-5xl leading-none">FMLY GOODS</h2>
            </div>
            <div className="flex gap-4 md:gap-6 md:justify-end font-display tracking-widest" data-testid="countdown">
              {[
                { v: days,  l: "DAYS"  },
                { v: hours, l: "HRS"   },
                { v: mins,  l: "MIN"   },
                { v: secs,  l: "SEC"   },
              ].map((t) => (
                <div key={t.l} className="text-center min-w-[60px]">
                  <div className="font-display text-3xl md:text-5xl tabular-nums">{String(t.v).padStart(2, "0")}</div>
                  <div className="text-[10px] tracking-[0.3em] text-[#efe7d7]/70 mt-1">{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category filter + cart */}
      <section className="px-4 pb-6">
        <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 border-b border-foreground/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`font-display tracking-widest text-xs px-4 py-2 border-2 transition-colors ${
                  cat === c ? "bg-foreground text-background border-foreground" : "bg-transparent border-foreground/20 hover:border-foreground"
                }`}
                data-testid={`cat-${c}`}
              >
                {c}
              </button>
            ))}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="font-display tracking-widest rounded-none border-2 border-foreground h-11 px-5 gap-2" data-testid="cart-trigger">
                <ShoppingBag className="w-4 h-4" />
                CART ({cartCount})
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-background border-l border-foreground/10 flex flex-col">
              <SheetHeader>
                <SheetTitle className="font-display text-3xl tracking-widest text-left">YOUR CART</SheetTitle>
                <SheetDescription className="text-left">Review your selections before checkout.</SheetDescription>
              </SheetHeader>

              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <ShoppingBag className="w-12 h-12 text-foreground/30" />
                  <p className="font-display tracking-widest text-foreground/60">YOUR CART IS EMPTY</p>
                  <Button variant="outline" className="rounded-none font-display tracking-widest" onClick={() => setOpen(false)}>
                    KEEP SHOPPING
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto py-4 space-y-4">
                    {cart.map((c) => {
                      const p = products.find((p) => p.id === c.id);
                      if (!p) return null;
                      return (
                        <div key={c.id} className="flex gap-4 pb-4 border-b border-foreground/10">
                          <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center" style={{ background: p.bg }}>
                            <img src={p.image} alt={p.name} className={`w-full h-full ${p.fit === "contain" ? "object-contain p-3" : "object-cover"}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="font-display text-sm leading-tight">{p.name}</h4>
                              <button onClick={() => removeItem(c.id)} className="text-foreground/40 hover:text-primary"><X className="w-4 h-4" /></button>
                            </div>
                            <p className="font-display tracking-widest text-xs text-foreground/50 mt-1">${p.price}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button onClick={() => updateQty(c.id, -1)} className="w-7 h-7 border border-foreground/20 flex items-center justify-center hover:border-foreground"><Minus className="w-3 h-3" /></button>
                              <span className="font-display tracking-widest text-sm w-6 text-center">{c.qty}</span>
                              <button onClick={() => updateQty(c.id, 1)} className="w-7 h-7 border border-foreground/20 flex items-center justify-center hover:border-foreground"><Plus className="w-3 h-3" /></button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-foreground/10 pt-4 space-y-3">
                    <div className="flex justify-between font-display tracking-widest">
                      <span>SUBTOTAL</span>
                      <span>${cartTotal}</span>
                    </div>
                    <p className="text-xs text-foreground/50">Free US shipping on orders over $75. Calculated at checkout.</p>
                    <Button className="w-full rounded-none h-12 font-display tracking-widest">
                      CHECKOUT
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-8 px-4 flex-1">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="group flex flex-col"
                data-testid={`product-${p.id}`}
              >
                <div
                  className="aspect-[3/4] relative overflow-hidden flex items-center justify-center mb-4"
                  style={{ background: p.bg }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${p.fit === "contain" ? "object-contain p-8 md:p-10" : "object-cover"}`}
                  />
                  {p.status !== "AVAILABLE" && (
                    <div className={`absolute top-3 left-3 font-display tracking-widest text-[10px] px-2.5 py-1 ${statusBadge[p.status]}`}>
                      {p.status}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/85 transition-colors duration-300 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
                    {p.status === "SOLD OUT" || p.status === "PRESALE" ? (
                      <Button
                        onClick={() => notifyMe(p.name)}
                        className="rounded-none font-display tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                        variant="outline"
                      >
                        NOTIFY ME
                      </Button>
                    ) : (
                      <Button
                        onClick={() => { addToCart(p.id, p.name); setOpen(true); }}
                        className="rounded-none font-display tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        QUICK ADD
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="font-display text-base md:text-lg leading-tight mb-1">{p.name}</h3>
                    <p className="font-display tracking-widest text-[10px] text-foreground/50">
                      {p.cat}{p.edition ? ` · ${p.edition.toUpperCase()}` : ""}
                    </p>
                  </div>
                  <span className="font-display text-base md:text-lg whitespace-nowrap">${p.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-display tracking-widest text-foreground/50 py-16">NO PRODUCTS IN THIS CATEGORY</p>
          )}
        </div>
      </section>

      {/* COLLAB FEATURE */}
      <section className="py-24 px-4 bg-[#445829] text-[#efe7d7] mt-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={afroCollective} alt="FMLY × FRIED RICE NYC" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-[#f6c45a] mb-4">CAPSULE COLLABORATION · COMING SUMMER 2026</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6">FMLY ×<br/>FRIED RICE NYC</h2>
            <p className="text-lg text-[#efe7d7]/85 leading-relaxed mb-8 max-w-md">
              A 12-piece capsule built from the road. Tees, sweats, hats, and a cassette mixtape — releasing alongside The Gathering 2026.
            </p>
            <Link href="/join">
              <Button size="lg" variant="outline" className="rounded-none font-display tracking-widest border-[#efe7d7] text-[#efe7d7] hover:bg-[#efe7d7] hover:text-[#445829] px-10 h-14">
                JOIN LIST FOR EARLY ACCESS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SHIPPING / RETURNS */}
      <section className="py-12 px-4 border-t border-foreground/10">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="font-display tracking-widest text-xs text-primary mb-2">FREE US SHIPPING</p>
            <p className="text-sm text-foreground/70">On orders over $75. Standard 3–5 business days.</p>
          </div>
          <div>
            <p className="font-display tracking-widest text-xs text-primary mb-2">SHIPS WORLDWIDE</p>
            <p className="text-sm text-foreground/70">International shipping calculated at checkout.</p>
          </div>
          <div>
            <p className="font-display tracking-widest text-xs text-primary mb-2">RETURNS & EXCHANGES</p>
            <p className="text-sm text-foreground/70">30 days on apparel. Prints and editions are final sale.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
