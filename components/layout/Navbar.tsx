"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/hosting", label: "Hosting" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="shell header-inner">
        <Brand />
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={open ? "site-nav is-open" : "site-nav"}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="button button-primary" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>
            Start a project <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
