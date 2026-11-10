"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const companies = [
  {
    name: "BawdicSoft",
    agent: "Mia",
    avatar: "B",
    logo: "/images/bawdicsoft-logo.jpg",
    theme: "bawdicsoft",
    messages: [
      { side: "question", text: "Hi, what is BawdicSoft?" },
      { side: "answer", text: "Hello! Welcome to BawdicSoft. We are a software development company focused on providing digital solutions to businesses." },
      { side: "question", text: "What services does BawdicSoft offer?" },
      { side: "answer", text: "BawdicSoft offers software and digital development services. Web Development, Mobile App Development, and UI/UX Design, Blockchain." },
      { side: "question", text: "How can I contact BawdicSoft?" },
      { side: "answer", text: "You can contact BawdicSoft.com through the contact details available on its official website." },
    ],
  },
  {
    name: "Everwell Dental",
    agent: "Ava",
    avatar: "E",
    logo: "/images/everwell-dental-logo.jpg",
    theme: "everwell",
    messages: [
      { side: "question", text: "Do you have any appointments this week?" },
      { side: "answer", text: "We do! Thursday at 10:30 or Friday at 2:00." },
      { side: "question", text: "Can I book the Thursday appointment?" },
      { side: "answer", text: "Absolutely. What name should I put that under?" },
      { side: "question", text: "Ayesha Khan, please." },
      { side: "answer", text: "You're all set, Ayesha. See you Thursday!" },
    ],
  },
  {
    name: "Northstar Fitness",
    agent: "Leo",
    avatar: "N",
    logo: "/images/northstar-fitness-logo.jpg",
    theme: "northstar",
    messages: [
      { side: "question", text: "Do you offer a free first class?" },
      { side: "answer", text: "Yes! Your first group class is on us." },
      { side: "question", text: "What classes do you have after work?" },
      { side: "answer", text: "We have strength training at 6 and yoga at 7." },
      { side: "question", text: "Can I save a spot for yoga?" },
      { side: "answer", text: "You're booked in. Bring a mat if you have one!" },
    ],
  },
] as const;

type Company = (typeof companies)[number];
type SlidePhase = "visible" | "exit" | "enter";

function CompanyLogo({
  company,
  className,
}: {
  company: Company;
  className: string;
}) {
  return (
    <Image
      src={company.logo}
      alt=""
      width={225}
      height={225}
      className={className}
    />
  );
}

function ConversationMessages({
  company,
  duplicate = false,
}: {
  company: Company;
  duplicate?: boolean;
}) {
  return (
    <div className="conversation-messages" aria-hidden={duplicate}>
      {company.messages.map((message, index) => (
        <div
          className={`conversation-row ${message.side}`}
          key={`${duplicate ? "duplicate-" : ""}${index}`}
        >
          <span className="message-avatar" aria-hidden="true">
            {message.side === "answer" ? (
              <CompanyLogo company={company} className="company-logo" />
            ) : (
              "A"
            )}
          </span>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function ConversationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<SlidePhase>("visible");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (phase === "visible") {
      if (paused) {
        return;
      }

      const timeout = window.setTimeout(() => setPhase("exit"), 6000);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "exit") {
      const timeout = window.setTimeout(() => {
        setActiveIndex((index) => (index + 1) % companies.length);
        setPhase("enter");
      }, 800);
      return () => window.clearTimeout(timeout);
    }

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => setPhase("visible"));
    });
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [activeIndex, paused, phase]);

  const company = companies[activeIndex];

  return (
    <section
      className={`conversation-card slide-${phase} chat-${company.theme}`}
      aria-label={`Example conversation with ${company.name}. Hover to pause the animation.`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="conversation-header">
        <div className="agent-avatar company-logo-frame" aria-hidden="true">
          <CompanyLogo company={company} className="company-logo" />
        </div>
        <div className="agent-details">
          <strong>
            {company.agent} at {company.name}
          </strong>
          <span>
            <i /> Your always-on assistant
          </span>
        </div>
        <span className="more-button" aria-hidden="true">
          ···
        </span>
      </div>
      <div className="conversation-window">
        <div className="conversation-track">
          <ConversationMessages company={company} />
          <ConversationMessages company={company} duplicate />
        </div>
      </div>
      <div className="conversation-footer">
        <span>
          <i /> Hover to pause
        </span>
        <span>Powered by Frontdesk</span>
      </div>
    </section>
  );
}
