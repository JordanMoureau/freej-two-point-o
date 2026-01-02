"use client";

import { useState } from "react";

import Logo from "./logo";

const MENUS = [
  {
    label: "We Rank Sites",
    href: "/we-rank-sites",
    items: [
      { label: "Why Get SEO", href: "/we-rank-sites/why-get-seo" },
      { label: "What to Expect", href: "/we-rank-sites/what-to-expect" },
      { label: "Case Studies", href: "/we-rank-sites/case-studies" },
    ],
  },
  {
    label: "Our Services",
    href: "/our-services",
    items: [
      { label: "Custom Websites", href: "/our-services/custom-websites" },
      { label: "Logos & Branding", href: "/our-services/logos-and-branding" },
      { label: "SEO Optimization", href: "/our-services/seo-optimization" },
      { label: "PPC Ad Services", href: "/our-services/ppc-ad-services" },
    ],
  },
  {
    label: "Our Story",
    href: "/our-story",
    items: [
      { label: "Contact Us", href: "/our-story/contact-us" },
      { label: "Journal", href: "/our-story/journal" },
      { label: "Press Releases", href: "/our-story/press-releases" },
    ],
  },
];

export default function NavBar({ color }) {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <a href="/">
          <Logo color={color} />
        </a>

        <nav className="main-nav" aria-label="Primary">
          {MENUS.map((menu, i) => {
            const open = hovered === i;
            return (
              <div
                key={menu.label}
                className={`menu-group ${open ? "open" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)} // keyboard focus opens
                onBlur={(e) => {
                  // close only when focus leaves the whole group
                  if (!e.currentTarget.contains(e.relatedTarget))
                    setHovered(null);
                }}
              >
                <div className="main-nav-item" aria-haspopup="true">
                  <a href={menu.href} aria-expanded={open} aria-haspopup="true">
                    + {menu.label}
                  </a>
                </div>

                <ul className="dropdown" role="menu" aria-hidden={!open}>
                  {menu.items.map((item) => (
                    <div className="nav-list" key={item.href} role="none">
                      <a role="menuitem" href={item.href}>
                        {item.label}
                      </a>
                    </div>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="small-button">
            <a href="/book-a-call">Book a Call</a>
          </div>
        </nav>

        <nav className="mobile-nav">
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <ul className="mobile-nav-list" aria-label="Mobile primary">
          {MENUS.map((menu) => (
            <div className="mobile-group" key={menu.href}>
              <a className="mobile-group-title" href={menu.href}>
                + {menu.label}
              </a>
              <ul className="mobile-sublist">
                {menu.items.map((item) => (
                  <div key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <div className="nav-footer">
          <h3>Custom Websites Built for SEO</h3>
          <h5>
            Get Visibility on Google in{" "}
            <span className="bold">Four Months</span> or less
          </h5>
          <div className="foot-row">
            <div className="small-button">
              <a href="/book-a-call">Book a call</a>
            </div>
            <div className="small-button">
              <a href="/book-a-call">Get A proposal</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
