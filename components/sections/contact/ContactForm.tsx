"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const services = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "IT Training & Consultations",
  "UI/UX Design",
  "Cloud & IT Consulting",
  "Other / Not Sure Yet",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Let&apos;s discuss",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@elitedigitalagency.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@elitedigitalagency.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+2347081087376",
    sub: "Mon–Fri, 9AM–6PM WAT",
    href: "tel:+2347081087376",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "1st powerline, Auchi Edo State",
    sub: "Auchi, Edo State, Nigeria",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri: 9AM – 6PM",
    sub: "Sat: 10AM – 2PM (by appointment)",
    href: "#",
  },
];

const socials = [
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", company: "", service: "",
    budget: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-20 items-start">

          {/* ── Left: contact info ── */}
          <FadeUp>
            <div>
              <h2 className="font-syne font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-2">
                Talk to Our Team
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Whether you have a clear brief or just an early idea — reach out. We&apos;ll help you figure out the right path forward.
              </p>

              {/* Contact items */}
              <div className="space-y-4 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group p-4 rounded-2xl border border-white/[0.06] hover:border-accent/25 bg-black/30 hover:bg-accent/[0.03] transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                      <Icon size={17} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="font-syne font-semibold text-white text-sm">{value}</p>
                      <p className="text-white/35 text-xs mt-0.5">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p className="text-white/25 text-xs uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/35 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-8 flex items-center gap-3 bg-accent/5 border border-accent/15 rounded-2xl px-5 py-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed">
                  <span className="text-accent font-semibold">Average response time: 4 hours.</span>{" "}
                  We&apos;re quick — because your time matters.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* ── Right: form ── */}
          <FadeUp delay={0.15}>
            <div className="bg-black border border-white/[0.08] rounded-3xl p-7 sm:p-10">

              {/* Success state */}
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-2">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="font-syne font-extrabold text-white text-2xl">Message Sent!</h3>
                  <p className="text-white/45 text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", service: "", budget: "", message: "" }); }}
                    className="mt-4 text-accent text-sm font-syne font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-syne font-extrabold text-white text-xl sm:text-2xl mb-1">Send Us a Message</h3>
                  <p className="text-white/35 text-xs mb-7">Fill in the details below and we&apos;ll be in touch shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                          First Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text" name="firstName" required
                          value={form.firstName} onChange={handleChange}
                          placeholder="John"
                          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:ring-0 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                          Last Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text" name="lastName" required
                          value={form.lastName} onChange={handleChange}
                          placeholder="Doe"
                          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                          Phone
                        </label>
                        <input
                          type="tel" name="phone"
                          value={form.phone} onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                        Company / Organisation
                      </label>
                      <input
                        type="text" name="company"
                        value={form.company} onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-colors duration-200"
                      />
                    </div>

                    {/* Service + Budget */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                          Service Needed <span className="text-accent">*</span>
                        </label>
                        <select
                          name="service" required
                          value={form.service} onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors duration-200 appearance-none"
                          style={{ color: form.service ? "#f5f5f0" : "rgba(245,245,240,0.2)" }}
                        >
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} style={{ background: "#111120", color: "#f5f5f0" }}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={form.budget} onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors duration-200 appearance-none"
                          style={{ color: form.budget ? "#f5f5f0" : "rgba(245,245,240,0.2)" }}
                        >
                          <option value="" disabled>Select budget</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} style={{ background: "#111120", color: "#f5f5f0" }}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white/40 text-xs font-syne font-medium mb-1.5 uppercase tracking-wide">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us about your project — what you're building, your goals, timeline, and any specific requirements..."
                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-accent/40 focus:outline-none rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 transition-colors duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-accent text-black font-syne font-bold text-sm py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,229,176,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none min-h-[48px]"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>Send Message <ArrowRight size={16} /></>
                      )}
                    </button>

                    <p className="text-white/20 text-[0.68rem] text-center">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
