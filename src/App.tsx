import { useState } from "react";

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path d="M4 16 16 4M7 4h9v9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CompassMark() {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true" className="h-8 w-8">
      <circle cx="22" cy="22" r="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="m28.6 15.4-4.8 10.1-10.2 4.8 4.8-10.1 10.2-4.8Z" fill="currentColor" />
      <circle cx="22" cy="22" r="2" fill="#0e0d0b" />
    </svg>
  );
}

export default function App() {
  const [message, setMessage] = useState("");

  const returnHome = () => {
    setMessage("Route reset. You are back at the starting point.");
  };

  const reportIssue = () => {
    setMessage("Thanks. Error 26 has been added to the signal log.");
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#e6e6e1] text-[#11110f] selection:bg-[#d5ff62] selection:text-[#11110f]">
      <div className="grain pointer-events-none absolute inset-0 opacity-50" />
      <div className="absolute -left-32 top-[34%] h-72 w-72 rounded-full bg-[#d5ff62] blur-[1px]" />
      <div className="orbital-line absolute left-1/2 top-1/2 h-[min(72vw,760px)] w-[min(72vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#11110f]/15" />
      <div className="orbital-line-delay absolute left-1/2 top-1/2 h-[min(54vw,560px)] w-[min(54vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#11110f]/15" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-2.5 text-sm font-bold tracking-[-0.04em]" aria-label="Northstar home">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#11110f] text-[#d5ff62] transition-transform duration-300 group-hover:rotate-12">
            <CompassMark />
          </span>
          <span className="text-base tracking-[-0.06em]">NORTHSTAR</span>
        </a>
        <button
          onClick={reportIssue}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11110f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e6e6e1]"
        >
          Report a problem <ArrowUpRight />
        </button>
      </nav>

      <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl flex-col justify-center px-6 pb-24 pt-10 sm:px-10 lg:px-16 lg:pb-28">
        <div className="max-w-5xl">
          <p className="reveal-up mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#56564f]" style={{ animationDelay: "80ms" }}>
            Off the map / 404
          </p>
          <h1 className="font-display reveal-up text-[clamp(5.5rem,20vw,15rem)] font-black leading-[0.72] tracking-[-0.105em]" style={{ animationDelay: "150ms" }}>
            404<span className="text-[#6f8e00]">.</span>
          </h1>
          <div className="reveal-up mt-10 grid max-w-3xl gap-7 md:grid-cols-[1.2fr_0.8fr] md:items-end" style={{ animationDelay: "240ms" }}>
            <h2 className="font-display text-4xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-5xl">
              You've wandered beyond the known world.
            </h2>
            <p className="max-w-xs text-base leading-relaxed text-[#56564f]">
              The page you were looking for has moved, vanished, or never made it onto our map.
            </p>
          </div>
          <div className="reveal-up mt-10 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ animationDelay: "330ms" }}>
            <button
              onClick={returnHome}
              className="group inline-flex items-center gap-4 bg-[#11110f] px-5 py-3.5 text-sm font-bold text-[#f3f3ed] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11110f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e6e6e1]"
            >
              Take me home
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d5ff62] text-[#11110f] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
            </button>
            <a href="mailto:hello@northstar.example" className="border-b border-[#11110f]/50 pb-1 text-sm font-bold transition-colors hover:border-[#6f8e00] hover:text-[#6f8e00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#11110f]">
              Contact support
            </a>
          </div>
          <p aria-live="polite" className="mt-5 min-h-5 text-sm text-[#56564f]">{message}</p>
        </div>
      </section>

      <div className="absolute bottom-6 left-6 z-10 sm:bottom-8 sm:left-10 lg:left-16">
        <p className="max-w-[17rem] text-xs leading-relaxed text-[#56564f]">
          Ucdavcbw12hjkSantaNil4iojkjkkjiuyghdsuwbbc7867lkghe
        </p>
      </div>
      <p className="absolute bottom-6 right-6 z-10 text-xs font-bold uppercase tracking-[0.18em] text-[#56564f] sm:bottom-8 sm:right-10">Est. 2026</p>
    </main>
  );
}
