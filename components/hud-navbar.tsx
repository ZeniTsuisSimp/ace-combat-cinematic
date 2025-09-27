"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function HudNavbar() {
  const linkBase =
    "relative px-3 py-2 text-sm uppercase tracking-wider text-foreground/80 transition-colors duration-300"
  const linkGlow =
    "hover:text-primary focus-visible:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          "glass border-b border-border/60",
          "mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6",
        )}
        aria-label="Primary"
      >
        <div className="flex items-center gap-3 py-3">
          <div
            aria-hidden
            className="size-2.5 rounded-[2px] bg-primary shadow-[0_0_0_2px_color(from_var(--primary)_oklch_l_c_h_/_0.25)] hud-glow"
          />
          <span className="text-sm font-mono tracking-widest text-foreground/70">AERO-COMBAT</span>
        </div>

        <ul className="flex items-center gap-1">
          {[
            { href: "#missions", label: "01 Missions" },
            { href: "#aircraft", label: "02 Aircraft" },
            { href: "#settings", label: "03 Settings" },
            { href: "#overview", label: "04 Overview" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group", // add group to trigger group-hover effects
                  linkBase,
                  linkGlow,
                  "hover:drop-shadow-[0_0_10px_color(from_var(--ring)_oklch_l_c_h_/_0.6)]",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute inset-x-2 -bottom-1 h-px scale-x-0 bg-[color(from_var(--ring)_oklch_l_c_h_/_0.6)] transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
