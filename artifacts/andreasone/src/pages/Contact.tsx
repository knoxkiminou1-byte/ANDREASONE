import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ScrollReveal";
import { toast } from "sonner";

const inquiryTypes = [
  "DJ BOOKING",
  "CREATIVE DIRECTION",
  "BRAND PARTNERSHIP",
  "MERCH COLLAB",
  "PRESS / MEDIA",
  "GENERAL INQUIRY",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", city: "", type: "", date: "", details: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.type) {
      toast.error("Please fill in your name, email, and inquiry type.");
      return;
    }
    setSent(true);
    toast.success("Message received. We'll be in touch shortly.");
  };

  return (
    <div className="w-full flex flex-col">
      <section className="bg-black poster-panel border-b-8 border-[#cf5d27] text-center">
        <ScrollReveal>
          <h1 className="text-[15vw] leading-none text-[#f6c45a]">BOOKING</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.07}>
          <h1 className="text-[12vw] leading-none text-[#cf5d27]">& CONTACT</h1>
        </ScrollReveal>
      </section>

      <section className="bg-olive poster-panel flex items-center justify-center">
        <ScrollReveal className="w-full max-w-5xl bg-[#efe7d7] border-8 border-[#111111] shadow-[24px_24px_0_#f6c45a] p-12 md:p-24">
          {sent ? (
            <div className="text-center py-16">
              <h2 className="font-display text-[8vw] text-[#445829] leading-none mb-8">MESSAGE<br />RECEIVED</h2>
              <p className="font-sans text-2xl font-bold uppercase tracking-wide text-[#111111] mb-12">
                We'll be in touch shortly. Serious inquiries only — and you clearly are.
              </p>
              <Button
                onClick={() => { setSent(false); setForm({ name: "", email: "", city: "", type: "", date: "", details: "" }); }}
                className="h-16 px-12 text-2xl font-display uppercase bg-[#111111] text-[#f6c45a] hover:bg-[#cf5d27] hover:text-[#111111] rounded-none border-4 border-[#111111]"
              >
                SEND ANOTHER
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="text-center lg:text-left">
                  <h2 className="font-display text-[8vw] md:text-[6vw] text-[#cf5d27] leading-none mb-8">INQUIRE</h2>
                  <p className="font-sans text-2xl font-bold uppercase mb-12 text-[#111111]">
                    For DJ bookings, creative direction, brand partnerships, or general inquiries. Serious inquiries only.
                  </p>
                  <div className="space-y-6 text-[#445829]">
                    <div>
                      <h3 className="font-display text-3xl">MANAGEMENT</h3>
                      <p className="font-sans text-xl font-bold uppercase hover:text-[#cf5d27] transition-colors cursor-pointer">mgmt@andreasone.co</p>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl">LOCATION</h3>
                      <p className="font-sans text-xl font-bold uppercase">Los Angeles / Global</p>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl">DOMAIN</h3>
                      <p className="font-sans text-xl font-bold uppercase">andreasone.co</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="NAME *"
                    required
                    className="h-16 w-full text-2xl font-display uppercase border-4 border-[#111111] bg-white rounded-none placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] transition-colors"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL *"
                    required
                    className="h-16 w-full text-2xl font-display uppercase border-4 border-[#111111] bg-white rounded-none placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] transition-colors"
                  />
                  <Input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="CITY / VENUE"
                    className="h-16 w-full text-2xl font-display uppercase border-4 border-[#111111] bg-white rounded-none placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] transition-colors"
                  />
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="h-16 w-full text-2xl font-display uppercase border-4 border-[#111111] bg-white rounded-none px-4 text-[#111111]/60 focus:border-[#cf5d27] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{ fontFamily: "var(--app-font-display)" }}
                  >
                    <option value="" disabled>INQUIRY TYPE *</option>
                    {inquiryTypes.map(t => (
                      <option key={t} value={t} style={{ color: "#111111" }}>{t}</option>
                    ))}
                  </select>
                  <Input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    placeholder="EVENT DATE (IF APPLICABLE)"
                    className="h-16 w-full text-2xl font-display uppercase border-4 border-[#111111] bg-white rounded-none placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] transition-colors"
                  />
                  <Textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="DETAILS"
                    className="h-36 w-full text-2xl font-display uppercase border-4 border-[#111111] bg-white rounded-none placeholder:text-[#111111]/30 focus-visible:ring-0 focus-visible:border-[#cf5d27] resize-none transition-colors"
                  />
                  <Button type="submit" size="lg" className="h-20 w-full text-3xl font-display uppercase bg-[#445829] text-[#efe7d7] hover:bg-[#cf5d27] hover:text-[#111111] hover:-translate-y-1 rounded-none border-8 border-[#111111]">
                    SEND MESSAGE
                  </Button>
                </div>
              </div>
            </form>
          )}
        </ScrollReveal>
      </section>
    </div>
  );
}
