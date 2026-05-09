import React from "react";
import { Link, useLocation } from "wouter";
import { Instagram, Music2, Disc3, Apple, Menu, X, ShoppingBag, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS, FMLY_SITE_URL } from "@/data/siteLinks";

interface LayoutProps {
  children: React.ReactNode;
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.469-.077-.336.132-.67.469-.746 3.809-.87 7.076-.496 9.713 1.115.293.18.386.563.207.856zm1.223-2.723c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.233 1.329.366.226.48.707.257 1.07zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.129-1.166-.623-.148-.495.13-1.016.625-1.166 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.284.326z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.83 1.54V6.76a4.84 4.84 0 0 1-1.06-.07z"/>
    </svg>
  );
}

const BRAND_GOLD = "#EEC76C";
const BRAND_SYMBOL_MASK = "url(/brand/andreasone-symbol.svg)";

const NAV_COLORS = ["#cf5d27", BRAND_GOLD, "#445829", "#d9decf", "#efe7d7", "#cf5d27", BRAND_GOLD, "#445829", "#cf5d27", BRAND_GOLD];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { label: "HOME",           href: "/" },
    { label: "SOUNDS",         href: "/sounds" },
    { label: "EXPERIENCES",    href: "/experiences" },
    { label: "WORLD BUILDING", href: "/world-building" },
    { label: "ARCHIVE",        href: "/archive" },
    { label: "SHOP",           href: "/shop" },
    { label: "FMLY",           href: FMLY_SITE_URL || "/fmly", external: !!FMLY_SITE_URL },
    { label: "ROOTS",          href: "/roots" },
    { label: "SIGNALS",        href: "/signals" },
    { label: "CONNECT",        href: "/connect" },
  ];

  const socialLinks = [
    { icon: Instagram,   href: SOCIAL_LINKS.instagram,   label: "Instagram" },
    { icon: Disc3,       href: SOCIAL_LINKS.soundcloud,  label: "SoundCloud" },
    { icon: SpotifyIcon, href: SOCIAL_LINKS.spotify,     label: "Spotify" },
    { icon: Youtube,     href: SOCIAL_LINKS.youtube,     label: "YouTube" },
    { icon: TikTokIcon,  href: SOCIAL_LINKS.tiktok,      label: "TikTok" },
    { icon: Music2,      href: SOCIAL_LINKS.bandcamp,    label: "Bandcamp" },
    { icon: Apple,       href: SOCIAL_LINKS.appleMusic,  label: "Apple Music" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#efe7d7] selection:bg-[#f6c45a] selection:text-[#111111]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b-4 border-[#cf5d27]">
        <div className="w-full px-4 md:px-8 h-24 flex items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="pyramid-logo-wobble-subtle h-10 md:h-12 aspect-[769/855] flex-shrink-0"
              style={{
                backgroundColor: BRAND_GOLD,
                maskImage: BRAND_SYMBOL_MASK,
                WebkitMaskImage: BRAND_SYMBOL_MASK,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-3 flex-1 justify-center">
            {links.map((link, i) => {
              const active = !link.external && isActive(link.href);
              const navEl = (
                <span
                  className="nav-link font-display text-lg uppercase transition-opacity whitespace-nowrap"
                  style={{
                    color: NAV_COLORS[i % NAV_COLORS.length],
                    opacity: active ? 1 : 0.55,
                    borderBottom: active ? `3px solid ${NAV_COLORS[i % NAV_COLORS.length]}` : "3px solid transparent",
                    paddingBottom: "2px",
                  }}
                >
                  {link.label}
                </span>
              );
              return link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {navEl}
                </a>
              ) : (
                <Link key={link.href} href={link.href}>
                  {navEl}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            {socialLinks.slice(0, 4).map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="social-icon text-[#efe7d7] hover:text-[#f6c45a]"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <Link href="/shop" className="social-icon text-[#efe7d7] hover:text-[#cf5d27]" aria-label="Shop">
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>

          <div className="xl:hidden flex items-center gap-4">
            <Link href="/shop" className="social-icon hover:text-[#cf5d27]">
              <ShoppingBag className="w-8 h-8" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="social-icon hover:text-[#f6c45a]"
              aria-label="Open menu"
            >
              <Menu className="w-10 h-10 text-[#f6c45a]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#111111] flex flex-col p-8 pt-24 overflow-y-auto"
          >
            <button
              className="absolute top-8 right-8 social-icon hover:text-[#f6c45a]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-12 h-12 text-[#cf5d27]" />
            </button>
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link, i) => {
                const active = !link.external && isActive(link.href);
                const label = (
                  <span
                    className="nav-link font-display text-5xl uppercase block"
                    style={{
                      color: NAV_COLORS[i % NAV_COLORS.length],
                      opacity: active ? 1 : 0.5,
                    }}
                  >
                    {active ? "→ " : ""}{link.label}
                  </span>
                );
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
                        {label}
                      </a>
                    ) : (
                      <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                        {label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div className="flex gap-6 mt-10 pt-8 border-t-4 border-[#cf5d27]/40">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="social-icon text-[#efe7d7]/60 hover:text-[#f6c45a]"
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full pt-24">
        {children}
      </main>

      <footer className="bg-[#111111] text-[#efe7d7] w-full px-4 md:px-8 py-20 border-t-8 border-[#cf5d27]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden="true"
                className="pyramid-logo-wobble-subtle h-10 aspect-[769/855] opacity-60 flex-shrink-0"
                style={{
                  backgroundColor: BRAND_GOLD,
                  maskImage: BRAND_SYMBOL_MASK,
                  WebkitMaskImage: BRAND_SYMBOL_MASK,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
              <span className="font-display text-3xl tracking-widest" style={{ color: BRAND_GOLD }}>
                <span style={{ fontSize: "1.15em" }}>A</span>ndreas<span style={{ fontSize: "1.15em" }}>O</span>ne
              </span>
            </div>
            <p className="font-sans text-xl uppercase tracking-[0.3em] text-[#efe7d7]/60">SIGNALS FROM THE SOIL</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex flex-wrap gap-5">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="social-icon hover:text-[#cf5d27]"
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <div className="flex gap-6 flex-wrap">
              {[
                { label: "Signals", href: "/signals" },
                { label: "Join",    href: "/join" },
                { label: "Connect", href: "/connect" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="nav-link font-sans text-sm uppercase tracking-widest text-[#efe7d7]/50 hover:text-[#f6c45a]">
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="font-sans text-sm uppercase tracking-widest text-[#d9decf] opacity-40">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
