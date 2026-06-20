"use client";

import React, { useState } from "react";

const SOCIALS = [
  {
    id: "email",
    label: "Email",
    value: "valanimanav61@gmail.com",
    href: "mailto:valanimanav61@gmail.com",
    display: "valanimanav61@gmail.com",
    color: "#e18845",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "Manav948",
    href: "https://github.com/Manav948",
    display: "github",
    color: "#24292e",
    icon: (
      <svg viewBox="0 0 496 512" fill="currentColor" className="w-5 h-5">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "Twitter / X",
    value: "@ManavValani",
    href: "https://x.com/ManavValani",
    display: "x",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Manav Valani",
    href: "https://www.linkedin.com/in/manavvalani/",
    display: "linkedin",
    color: "#0077B5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "calendly",
    label: "Book a Call",
    value: "calendly.com/manav-valani",
    href: "https://calendly.com/manav-valani",
    display: "calendly",
    color: "#006BFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
];


function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };
  return { copied, copy };
}

function SocialRow({
  social,
  copied,
  onCopy,
}: {
  social: (typeof SOCIALS)[0];
  copied: string | null;
  onCopy: (text: string, id: string) => void;
}) {
  const isCopied = copied === social.id;

  return (
    <div className="group flex items-center justify-between gap-4 py-3.5 px-4 rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800/60 hover:shadow-sm transition-all duration-200">

      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: social.color }}
        >
          {social.icon}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 leading-none mb-0.5">
            {social.label}
          </span>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#e18845] dark:hover:text-[#fb923c] truncate transition-colors duration-200 leading-snug"
          >
            {social.display}
          </a>
        </div>
      </div>


      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">

        {social.id === "email" && (
          <button
            onClick={() => onCopy(social.value, social.id)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-700 dark:hover:text-neutral-200 transition-all duration-150"
            title="Copy email"
          >
            {isCopied ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-emerald-500">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-emerald-500">Copied!</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        )}

        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-700 dark:hover:text-neutral-200 transition-all duration-150"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15,3 21,3 21,9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span>Open</span>
        </a>
      </div>
    </div>
  );
}


const Contact = () => {
  const { copied, copy } = useCopy();

  return (
    <section className="w-full flex flex-col gap-8">

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Get in Touch
        </h2>
        <p className="text-[13.5px] text-[#e18845] dark:text-[#fb923c] font-medium font-satisfy">
          let&apos;s build something great together!
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">

        <div className="flex flex-col gap-2.5">
          {SOCIALS.map((social) => (
            <SocialRow
              key={social.id}
              social={social}
              copied={copied}
              onCopy={copy}
            />
          ))}
        </div>


        <div className="md:w-56 flex flex-col gap-3">

          <div className="rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40 bg-emerald-50/60 dark:bg-emerald-950/20 p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2.5 h-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Available
              </span>
            </div>
            <p className="text-[12px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              Open to new opportunities, freelance projects, and collaborations.
            </p>
          </div>


          <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/40 p-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-widest">Response Time</span>
            </div>
            <p className="text-[13px] font-semibold text-neutral-700 dark:text-neutral-300">
              Usually within 24h
            </p>
            <p className="text-[11.5px] text-neutral-400 dark:text-neutral-500 leading-relaxed">
              Prefer email or LinkedIn for serious enquiries.
            </p>
          </div>


          <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/40 p-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-widest">Location</span>
            </div>  
            <p className="text-[13px] font-semibold text-neutral-700 dark:text-neutral-300">
              Dhoraji , Rajkot, India 🇮🇳
            </p>
            <p className="text-[11.5px] text-neutral-400 dark:text-neutral-500">
              Open to remote worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
