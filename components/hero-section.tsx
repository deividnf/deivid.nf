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

      {/* ── Ultra subtle texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-2 md:gap-20 md:pb-32 md:pt-44 lg:gap-24">
        {/* ── Left Column: Copy & CTAs ── */}
        <div className="relative flex flex-col items-start text-left">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-white/70">
              Disponivel para novos projetos
            </span>
          </div>

          {/* Headline glow */}
          <div className="pointer-events-none absolute -left-10 top-16 h-64 w-64 rounded-full bg-blue-500/25 blur-[120px]" />

          {/* Headline */}
          <h1
            className="relative z-10 text-balance text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.8rem]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Clareza operacional para decisoes que movem o seu negocio.
          </h1>

          {/* Sub-headline */}
          <p className="mt-7 max-w-[560px] text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
            Dados, automacao e IA alinhados para decisao executiva com ritmo e
            controle.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.8),0_0_32px_rgba(59,130,246,0.34)] hover:bg-white/95"
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
            <div className="col-span-2 rounded-3xl border border-white/[0.14] bg-[#0B101A]/95 p-6 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Direcao Operacional
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Visao unica para lideranca
                  </p>
                  <p className="mt-2 text-sm text-white/55">
                    Indicadores claros para orientar prioridade, risco e ritmo.
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06]">
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
            <div className="rounded-3xl border border-white/[0.14] bg-[#0B101A]/95 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06]">
                <Zap className="h-5 w-5 text-indigo-400" />
              </div>
              <p className="mt-4 text-xl font-semibold text-white">Execucao sem friccao</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Operacao mais leve
              </p>
              <p className="mt-2 text-xs text-white/35 leading-relaxed">
                Automacoes reduzem retrabalho e protegem o foco do time.
              </p>
            </div>

            {/* Card 3 - Bottom right */}
            <div className="rounded-3xl border border-white/[0.14] bg-[#0B101A]/95 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06]">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="mt-4 text-xl font-semibold text-white">Decisao com contexto</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Leitura de negocio
              </p>
              <p className="mt-2 text-xs text-white/35 leading-relaxed">
                Inteligencia aplicada para agir com confianca e previsibilidade.
              </p>
            </div>

            {/* Card 4 - Small pill card overlay at bottom */}
            <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-white/[0.14] bg-[#0B101A]/95 px-5 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06]">
                <Clock className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Evolucao continua orientada por dados
                </p>
                <p className="text-xs text-white/40">
                  Ajustes estrategicos e incrementais para ganho sustentavel.
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
