"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function ContactActions() {
  const [copyState, setCopyState] = useState("Copy email");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("info@bawdicsoft.com");
      setCopyState("Copied");
    } catch {
      setCopyState("Copy unavailable");
    }

    window.setTimeout(() => setCopyState("Copy email"), 1800);
  }

  return (
    <div className="contact-actions">
      <div className="contact-method-group">
        <a className="contact-method" href="mailto:info@bawdicsoft.com">
          <span className="contact-method-icon" aria-hidden="true">
            <Mail size={17} strokeWidth={1.7} />
          </span>
          <span>
            <small>Email us</small>
            <strong>info@bawdicsoft.com</strong>
          </span>
          <span className="contact-arrow" aria-hidden="true">
            <ArrowUpRight size={16} strokeWidth={1.7} />
          </span>
        </a>
        <button
          className="contact-copy-button"
          onClick={copyEmail}
          type="button"
        >
          {copyState}
        </button>
      </div>
      <a
        className="contact-method"
        href="https://wa.me/923178866631"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-method-icon" aria-hidden="true">
          <MessageCircle size={17} strokeWidth={1.7} />
        </span>
        <span>
          <small>Chat on WhatsApp</small>
          <strong>+92 317 8866631</strong>
        </span>
        <span className="contact-arrow" aria-hidden="true">
          <ArrowUpRight size={16} strokeWidth={1.7} />
        </span>
      </a>
    </div>
  );
}
