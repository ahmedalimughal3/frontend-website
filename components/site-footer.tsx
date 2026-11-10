import Link from "next/link";

export default function SiteFooter({ dashboard = false }: { dashboard?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-main page-shell">
        <div className="footer-brand-block">
          <Link className="brand" href="/" aria-label="Frontdesk home">
            <span className="brand-mark">f</span>
            <span>frontdesk</span>
          </Link>
          <p>Thoughtful conversations. Better first impressions.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <span>Explore</span>
          <Link href="/">Home</Link>
          {dashboard ? (
            <Link href="/dashboard">Agency dashboard</Link>
          ) : (
            <>
              <Link href="/#how-it-works">How it works</Link>
              <Link href="/dashboard">Agency dashboard</Link>
            </>
          )}
        </nav>
        <div className="footer-contact">
          <span>Get in touch</span>
          <a href="mailto:info@bawdicsoft.com">info@bawdicsoft.com</a>
          <a href="https://wa.me/923178866631">WhatsApp · +92 317 8866631</a>
        </div>
      </div>
      <div className="site-footer-bottom page-shell">
        <span>© 2026 Frontdesk. All rights reserved.</span>
        <a href="https://bawdicsoft.com" target="_blank" rel="noreferrer">
          Built by BawdicSoft <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
