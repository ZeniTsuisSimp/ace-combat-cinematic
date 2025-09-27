"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function HeroCinematic() {
  return (
    <section
      className={cn("relative isolate min-h-[92vh] w-full overflow-clip", "bg-cinematic-sky animate-clouds")}
      aria-label="Cinematic hero"
    >
      {/* Background fighter jet silhouette */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/jet-silhouette.jpg"
          alt="Fighter jet silhouette cutting through a cloudy sky"
          fill
          priority
          className="object-cover opacity-60 [filter:contrast(1.05)_saturate(0.9)]"
        />
        {/* motion blur sweep overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent animate-sweep" />
        {/* scanlines + grid overlays */}
        <div className="pointer-events-none absolute inset-0 scanlines" />
        <div className="pointer-events-none absolute inset-0 grid-overlay" />
      </div>

      {/* Top frame geometry HUD corners */}
      <div className="pointer-events-none absolute left-6 top-24 hidden h-10 w-10 border-l-2 border-t-2 border-[color(from_var(--ring)_oklch_l_c_h_/_0.6)] md:block hud-glow" />
      <div className="pointer-events-none absolute right-6 top-24 hidden h-10 w-10 border-r-2 border-t-2 border-[color(from_var(--ring)_oklch_l_c_h_/_0.6)] md:block hud-glow" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 pb-28 pt-40 md:gap-10 md:px-6 md:pb-36 md:pt-48">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-foreground/60">
            Project Stratos // Simulation Protocol
          </p>

          <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Air Superiority, Redefined.
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            Enter an atmospheric battlespace inspired by cutting‑edge aerospace systems. Experience a cockpit‑grade HUD,
            tactical clarity, and cinematic immersion.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#download"
            className={cn(
              "group relative inline-flex items-center gap-3 rounded-md px-6 py-3",
              "text-sm font-semibold uppercase tracking-wider",
              "bg-[color(from_var(--primary)_oklch_l_c_h_/_0.12)] text-primary",
              "ring-1 ring-inset ring-[color(from_var(--ring)_oklch_l_c_h_/_0.55)]",
              "transition-all duration-300 hover:bg-[color(from_var(--primary)_oklch_l_c_h_/_0.18)] hover:translate-y-[-1px]",
              "hud-glow",
            )}
            aria-label="Engage Mission"
          >
            <span className="relative">
              Engage Mission
              <span
                aria-hidden
                className="absolute -inset-x-1 -bottom-1 h-px bg-[color(from_var(--ring)_oklch_l_c_h_/_0.7)]"
              />
            </span>
            <span
              aria-hidden
              className="ml-1 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-[color(from_var(--ring)_oklch_l_c_h_/_0.7)] transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#overview"
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm uppercase tracking-wider",
              "text-foreground/70 ring-1 ring-inset ring-border hover:text-foreground",
              "transition-colors duration-300",
            )}
          >
            Mission Briefing
          </a>
        </div>

        {/* Bottom telemetry readout */}
        <div
          className={cn(
            "mt-6 grid w-full grid-cols-2 gap-3 rounded-md border border-border/60 bg-background/30 p-4 backdrop-blur",
            "md:grid-cols-4",
          )}
          role="region"
          aria-label="Telemetry readout"
        >
          {[
            { k: "Altitude", v: "35,000 ft" },
            { k: "Airspeed", v: "Mach 1.8" },
            { k: "Heading", v: "045° NE" },
            { k: "Systems", v: "Nominal" },
          ].map((t) => (
            <div key={t.k} className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">{t.k}</span>
              <span className="font-semibold text-foreground">{t.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
