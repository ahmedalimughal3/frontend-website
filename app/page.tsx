import ConversationCarousel from "@/components/conversation-carousel";
import ContactActions from "@/components/contact-actions";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const steps = [
  {
    number: "01",
    title: "Add a client",
    description:
      "Bring in their website, FAQs, and pricing so every answer stays grounded in their business.",
  },
  {
    number: "02",
    title: "Make it yours",
    description:
      "Match their brand, choose the agent's tone, and decide how new leads reach the team.",
  },
  {
    number: "03",
    title: "Go live",
    description:
      "Add one lightweight snippet to their site and start turning conversations into enquiries.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero page-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              A better first impression, around the clock
            </div>
            <h1>
              Every visitor deserves a <span>great answer.</span>
            </h1>
            <p className="hero-description">
              Meet the AI sales agent that helps your clients welcome visitors,
              answer questions, and capture more of the right leads.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#access">
                Get early access <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="/dashboard">
                Explore the dashboard <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>JD</span>
                <span>MK</span>
                <span>AR</span>
              </div>
              <p>
                A thoughtful experience for <strong>every conversation</strong>
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <ConversationCarousel />
            <div className="floating-note">
              <span className="floating-note-icon" aria-hidden="true">
                ↗
              </span>
              <span>
                <strong>New lead captured</strong>
                <small>Ayesha Khan · just now</small>
              </span>
            </div>
            <div className="visual-caption">
              <span className="caption-dot" />
              A conversation that keeps moving
            </div>
          </div>
        </section>

        <section className="trust-strip page-shell" aria-label="Platform benefits">
          <p>One calm, capable assistant for every client</p>
          <div>
            <span>Always on</span>
            <i />
            <span>On-brand</span>
            <i />
            <span>Built for better leads</span>
          </div>
        </section>

        <section className="section page-shell" id="how-it-works">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Simple by design</div>
              <h2>From first hello to ready-to-talk.</h2>
            </div>
            <p>
              Everything you need to launch a helpful, beautifully branded
              website agent for every client.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-icon" aria-hidden="true">
                  {step.number === "01" ? "⌘" : step.number === "02" ? "✳" : "↗"}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="step-arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div className="benefits-grid page-shell">
            <div className="benefits-intro">
              <div className="eyebrow">Made for your whole portfolio</div>
              <h2>A better experience for your clients. A clearer picture for you.</h2>
              <p>
                Keep every client conversation consistent, useful, and easy to
                follow up on.
              </p>
              <a className="text-link" href="/dashboard">
                Take a look inside <span aria-hidden="true">→</span>
              </a>
            </div>
            <article className="benefit-card benefit-light">
              <div className="benefit-icon" aria-hidden="true">
                ✦
              </div>
              <h3>For your clients</h3>
              <p>Helpful answers that feel like a natural extension of their team.</p>
              <ul>
                <li>Answers based on their own trusted information</li>
                <li>More enquiries captured, day and night</li>
                <li>A familiar, fully branded experience</li>
              </ul>
            </article>
            <article className="benefit-card benefit-dark">
              <div className="benefit-icon" aria-hidden="true">
                ◈
              </div>
              <h3>For your agency</h3>
              <p>One place to see what’s happening across your client work.</p>
              <ul>
                <li>A simple overview of conversations and leads</li>
                <li>Client-by-client activity and agent settings</li>
                <li>A repeatable service your team can grow</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="pricing-section page-shell" id="pricing">
          <div className="pricing-card">
            <div className="pricing-symbol" aria-hidden="true">
              ✳
            </div>
            <div>
              <div className="eyebrow">Early access</div>
              <h2>Founding pricing, built around your agency.</h2>
              <p>
                We’re onboarding a small group of agencies and shaping the
                product with their feedback. Get in touch to talk through
                founding pricing.
              </p>
            </div>
            <a className="button button-primary" href="#access">
              Ask about pricing <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section page-shell" id="access">
          <div className="contact-card">
            <div className="contact-copy">
              <div className="eyebrow">Let’s build something useful</div>
              <h2>Your next great client service starts here.</h2>
              <p>
                Tell us about your agency and the clients you look after. We’ll
                get back to you about early access.
              </p>
            </div>
            <ContactActions />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
