"use client";

import FadeUp from "@/components/ui/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";

const offices = [
  {
    city: "Lagos",
    country: "Nigeria 🇳🇬",
    address: "258 Innovation Hub, Akesan Lagos",
    phone: "+2349032236191",
    email: "info@elitedigitalagency.com",
    hours: "Mon–Fri: 9AM–6PM WAT",
    primary: true,
  },
  {
    city: "Auchi",
    country: "Nigeria 🇳🇬",
    address: "1st powerline, Auchi Edo State",
    phone: "+2347081087376",
    email: "info@elitedigitalagency.com",
    hours: "Mon–Fri: 9AM–6PM WAT",
    primary: false,
  },
  // {
  //   city: "London",
  //   country: "United Kingdom 🇬🇧",
  //   address: "Suite 12, 30 Moorgate, EC2R 6PJ",
  //   phone: "+44 20 1234 5678",
  //   email: "london@elitedigital.agency",
  //   hours: "Mon–Fri: 9AM–5PM GMT",
  //   primary: false,
  // },
];

export default function ContactOffices() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <FadeUp><SectionLabel>Our Offices</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-syne font-extrabold text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Find Us Around the World
            </h2>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offices.map(({ city, country, address, phone, email, hours, primary }, i) => (
            <FadeUp key={city} delay={i * 0.1}>
              <div className={`group relative h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden
                ${primary
                  ? "bg-gradient-to-br from-accent/8 to-transparent border-accent/25 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(0,229,176,0.08)]"
                  : "bg-black border-white/[0.07] hover:border-white/[0.15]"
                }`}
              >
                {primary && (
                  <span className="absolute top-5 right-5 text-[0.62rem] font-syne font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                    HQ
                  </span>
                )}

                {/* City + flag */}
                <div className="mb-5">
                  <h3 className="font-syne font-extrabold text-white text-2xl mb-1">{city}</h3>
                  <p className="text-white/35 text-xs">{country}</p>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {[
                    { label: "Address", value: address },
                    { label: "Phone",   value: phone },
                    { label: "Email",   value: email },
                    { label: "Hours",   value: hours },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-white/25 text-[0.65rem] uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-white/70 text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Map placeholder — styled to look intentional */}
        <FadeUp delay={0.3}>
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/[0.07] h-64 sm:h-80 flex items-center justify-center">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,176,0.05) 0%, transparent 70%)" }}
            />

            {/* Fake map pins */}
            {[
              { label: "Lagos HQ", x: "30%",  y: "58%", primary: true },
              { label: "Auchi",    x: "33%",  y: "48%", primary: false },
              { label: "London",   x: "47%",  y: "22%", primary: false },
            ].map(({ label, x, y, primary: isPrimary }) => (
              <div key={label} className="absolute" style={{ left: x, top: y }}>
                <div className={`relative flex flex-col items-center`}>
                  <div className={`w-3 h-3 rounded-full border-2 ${isPrimary ? "bg-accent border-accent shadow-[0_0_10px_rgba(0,229,176,0.6)]" : "bg-white/60 border-white/80"}`} />
                  <div className={`w-px h-3 ${isPrimary ? "bg-accent/50" : "bg-white/30"}`} />
                  <span className={`text-[0.6rem] font-syne font-bold whitespace-nowrap mt-1 px-2 py-0.5 rounded-full ${isPrimary ? "text-accent bg-accent/10 border border-accent/20" : "text-white/50 bg-white/5 border border-white/10"}`}>
                    {label}
                  </span>
                </div>
              </div>
            ))}

            <p className="relative z-10 text-white/15 text-xs font-syne tracking-widest uppercase">
              Global Presence
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
