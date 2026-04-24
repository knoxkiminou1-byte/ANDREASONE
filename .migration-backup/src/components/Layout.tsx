import React from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Music2, Disc3, Youtube, Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Music", href: "/music" },
    { label: "Events", href: "/events" },
    { label: "Work", href: "/work" },
    { label: "Art", href: "/art" },
    { label: "Shop", href: "/shop" },
    { label: "Join List", href: "/join" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Music2, href: "#", label: "Spotify" },
    { icon: Disc3, href: "#", label: "SoundCloud" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-noise" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-widest text-foreground hover:text-primary transition-colors">
            ANDREASONE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <Button variant="ghost" size="icon" className="ml-2 hover:bg-primary/10 hover:text-primary">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col p-8"
          >
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </Button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {links.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.href}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-4xl tracking-widest uppercase hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex gap-6 pb-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-[#efe7d7] py-16 mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-display text-3xl tracking-widest mb-6">ANDREASONE</h2>
              <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
                Global DJ, producer, artist, designer, and cultural curator. Shaping the evolution of Global Dance Music Culture.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl tracking-wide mb-6 text-[#f6c45a]">Explore</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/events" className="text-white/60 hover:text-white transition-colors">Past Events</Link></li>
                <li><Link href="/art" className="text-white/60 hover:text-white transition-colors">Art Portfolio</Link></li>
                <li><Link href="/fmly" className="text-white/60 hover:text-white transition-colors">FMLY BZNS</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl tracking-wide mb-6 text-[#f6c45a]">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
                <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} AndreasOne. All rights reserved.</p>
            <p className="font-display text-white/40 tracking-widest text-sm">MUSIC IS THE WEAPON OF THE FUTURE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
