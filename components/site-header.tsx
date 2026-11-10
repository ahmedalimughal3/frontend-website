"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  dashboard?: boolean;
};

export default function SiteHeader({ dashboard = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header page-shell">
      <Link
        className="brand"
        href="/"
        aria-label="Frontdesk home"
        onClick={() => setMenuOpen(false)}
      >
        <img className="brand-logo" src="" alt="Frontdesk logo" />
        <span>frontdesk</span>
      </Link>
      <button
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`menu-toggle${menuOpen ? " menu-toggle-open" : ""}`}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        aria-label="Main navigation"
        className={`header-nav${menuOpen ? " header-nav-open" : ""}`}
        id="main-navigation"
      >
        {dashboard ? (
          <>
            <Link
              className="nav-link"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              className="nav-link nav-link-active"
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              className="button button-small button-primary"
              href="/#access"
              onClick={() => setMenuOpen(false)}
            >
              Get early access <span aria-hidden="true">↗</span>
            </Link>
          </>
        ) : (
          <>
            <a
              className="nav-link"
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </a>
            <a
              className="nav-link"
              href="#pricing"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <Link
              className="nav-link"
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <a
              className="button button-small button-primary"
              href="#access"
              onClick={() => setMenuOpen(false)}
            >
              Get early access <span aria-hidden="true">↗</span>
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
