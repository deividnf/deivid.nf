"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, BarChart3, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

interface HeroSectionProps {
  onOpenModal: () => void
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050508]">
      {/* ── Aurora Mesh Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary indigo orb - top left */}
        <div
          className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #3b4fd8 0%, transparent 70%)",
            filter: "blur(140px)",
          }}
        />
        {/* Secondary purple orb - right center */}
        <div
          className="absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #6d28d9 0%, transparent 70%)",
            filter: "blur(150px)",
          }}
        />
        {/* Tertiary blue orb - bottom center */}
        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* ── Subtle dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2 md:gap-16 md:pb-28 md:pt-44 lg:gap-20">
        {/* ── Left Column: Copy & CTAs ── */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-white/70">
              Disponivel para novos projetos
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-balance text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Seus dados trabalhando{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              por voce
            </span>
            , nao contra voce.
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/50 sm:text-lg">
            Organizo, automatizo e transformo dados espalhados em dashboards e
            processos que geram clareza e agilidade para o seu negocio.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="rounded-full bg-white px-7 py-6 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:bg-white/90"
            >
              Solicitar Diagnostico Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={onOpenModal}
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/[0.12] bg-transparent px-7 py-6 text-sm text-white hover:bg-white/[0.06] hover:text-white"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex items-center gap-4 text-xs text-white/35">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Resposta em 24h
            </span>
          </div>
        </div>

        {/* ── Right Column: Bento Grid ── */}
        <div className="relative flex items-center justify-center md:justify-end">
          <div className="grid w-full max-w-md grid-cols-2 gap-3">
            {/* Card 1 - Large, spanning full width */}
            <div className="col-span-2 rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Eficiencia Operacional
                  </p>
                  <p className="mt-2 text-4xl font-bold text-white">+98%</p>
                  <p className="mt-1 text-sm text-white/45">
                    de precisao nos relatorios
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05]">
                  <BarChart3 className="h-7 w-7 text-blue-400" />
                </div>
              </div>
              {/* Mini bar chart visual */}
              <div className="mt-5 flex items-end gap-1.5">
                {[40, 55, 35, 70, 50, 80, 65, 90, 75, 95, 85, 98].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/30 to-blue-400/60"
                      style={{ height: `${h * 0.5}px` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Card 2 - Bottom left */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05]">
                <Zap className="h-5 w-5 text-indigo-400" />
              </div>
              <p className="mt-4 text-2xl font-bold text-white">3x</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Mais rapido
              </p>
              <p className="mt-2 text-xs text-white/35 leading-relaxed">
                Automacao de processos manuais repetitivos
              </p>
            </div>

            {/* Card 3 - Bottom right */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05]">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="mt-4 text-2xl font-bold text-white">40h</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Economizadas/mes
              </p>
              <p className="mt-2 text-xs text-white/35 leading-relaxed">
                Tempo recuperado com automacoes inteligentes
              </p>
            </div>

            {/* Card 4 - Small pill card overlay at bottom */}
            <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-3.5 backdrop-blur-2xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.05]">
                <Clock className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Entrega media: 5 dias uteis
                </p>
                <p className="text-xs text-white/40">
                  Do diagnostico ao dashboard funcionando
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  )
}
