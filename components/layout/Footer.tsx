import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  Company:  [
    { label: "Home",     href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact",  href: "/contact" },
  ],
  Services: [
    { label: "Web Development",    href: "/services" },
    { label: "Mobile Apps",        href: "/services" },
    { label: "Digital Marketing",  href: "/services" },
    { label: "IT Training",        href: "/services" },
    { label: "IT Consulting",      href: "/services" },
  ],
};

const socials = [
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c18] border-t border-white/[0.06]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" className="font-syne font-extrabold text-xl text-white tracking-tight">
            Elite<span className="text-accent"> Digital</span> Agency
          </Link>
          <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-xs">
            Transforming visions into powerful digital experiences — from code to campaigns.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-syne font-bold text-sm text-white mb-5 tracking-wide">{heading}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4 className="font-syne font-bold text-sm text-white mb-5 tracking-wide">Contact</h4>
          <ul className="space-y-3">
            {[
              { icon: Mail,    text: "info@elitedigitalagency.net" },
              { icon: Phone,   text: "+2347081087376" },
              { icon: MapPin,  text: "1st powerline, Auchi Edo State" },
              { icon: MapPin,  text: "akesan Lagos" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-white/40">
                <Icon size={14} className="mt-0.5 flex-shrink-0 text-accent/70" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Elite Digital Agency. All rights reserved.
        </p>
        <p className="text-xs text-white/25">
          Crafted with precision &amp; purpose.
        </p>
      </div>
    </footer>
  );
}
