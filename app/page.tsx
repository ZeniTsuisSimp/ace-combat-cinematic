import { HudNavbar } from "@/components/hud-navbar"
import { HeroCinematic } from "@/components/hero-cinematic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function Page() {
  return (
    <main className="relative">
      <HudNavbar />
      <HeroCinematic />

      <section id="missions" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 md:px-6" aria-label="Missions">
        <h2 className="text-balance text-2xl font-semibold">Missions</h2>
        <p className="mt-2 text-foreground/80">
          Select from high‑intensity operations with dynamic weather and multi‑vector objectives.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Operation Dawn",
              copy: "Low‑visibility intercept across a coastal front with scattered storm cells.",
              alt: "Dawn operation mission",
              delay: "0ms",
            },
            {
              title: "Ghost Line",
              copy: "Silent strike on enemy radar nets across mountainous terrain.",
              alt: "Ghost Line mission",
              delay: "80ms",
            },
            {
              title: "Sky Fortress",
              copy: "High‑altitude defense with mixed fighter and drone threats.",
              alt: "Sky Fortress mission",
              delay: "160ms",
            },
          ].map((m) => (
            <Card
              key={m.title}
              className="hud-glow/0 transition-all duration-300 hover:translate-y-[-2px] hover:ring-1 hover:ring-[color(from_var(--ring)_oklch_l_c_h_/_0.35)] animate-fade-up"
              style={{ animationDelay: m.delay }}
              aria-label={m.alt}
            >
              <CardHeader>
                <CardTitle className="text-lg">{m.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80">{m.copy}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="aircraft" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 md:px-6" aria-label="Aircraft">
        <h2 className="text-balance text-2xl font-semibold">Aircraft</h2>
        <p className="mt-2 text-foreground/80">
          Fly top‑tier airframes tuned for agility, stealth, and precision engagement.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "F‑22 Raptor", role: "Air Superiority", speed: "Mach 2.25", delay: "0ms" },
            { name: "Su‑57 Felon", role: "Multirole Stealth", speed: "Mach 2.0", delay: "80ms" },
            { name: "Eurofighter Typhoon", role: "Multirole", speed: "Mach 2.0", delay: "160ms" },
          ].map((a) => (
            <Card
              key={a.name}
              className="transition-all duration-300 hover:translate-y-[-2px] hover:ring-1 hover:ring-[color(from_var(--ring)_oklch_l_c_h_/_0.35)] animate-fade-up"
              style={{ animationDelay: a.delay }}
              aria-label={`${a.name} specifications`}
            >
              <CardHeader>
                <CardTitle className="text-lg">{a.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">Role</span>
                  <span className="font-medium">{a.role}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">Top Speed</span>
                  <span className="font-medium">{a.speed}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="settings" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 md:px-6" aria-label="Settings">
        <h2 className="text-balance text-2xl font-semibold">Settings</h2>
        <p className="mt-2 text-foreground/80">
          Configure HUD clarity, units, and motion parameters for optimal situational awareness.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">HUD Brightness</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80">
              <Slider defaultValue={[70]} max={100} step={1} aria-label="HUD brightness" />
              <p className="mt-2 text-xs text-foreground/60">Adjust luminance for night ops.</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-up" style={{ animationDelay: "80ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Metric Units</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-foreground/80">
              <span className="text-foreground/80">Toggle between imperial and metric readouts.</span>
              <Switch aria-label="Use metric units" />
            </CardContent>
          </Card>

          <Card className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Motion Blur</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-foreground/80">
              <span className="text-foreground/80">Subtle blur during high‑speed flybys.</span>
              <Switch aria-label="Enable motion blur" />
            </CardContent>
          </Card>

          <Card className="animate-fade-up" style={{ animationDelay: "240ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Audio Dynamic Range</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80">
              <Slider defaultValue={[50]} max={100} step={1} aria-label="Audio dynamic range" />
              <p className="mt-2 text-xs text-foreground/60">Balance comms, cockpit, and engine audio.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="overview"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 md:px-6 animate-fade-up"
        aria-label="Overview"
        style={{ animationDelay: "80ms" }}
      >
        <h2 className="text-balance text-2xl font-semibold">Overview</h2>
        <p className="mt-2 text-foreground/80">
          A cinematic, minimal interface inspired by modern aerospace systems. Transparent glass panels, neon accents,
          and HUD‑grade typography deliver immersion without sacrificing clarity.
        </p>
      </section>
    </main>
  )
}
