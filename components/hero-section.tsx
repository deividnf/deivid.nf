"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { siteConfig, specialistMailto } from "@/lib/site-config"
import { ArrowRight, Zap, BarChart3, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

interface HeroSectionProps {
  onOpenModal: () => void
}

const chartBars = [40, 55, 35, 70, 50, 80, 65, 90, 75, 95, 85, 98]

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const [isChartVisible, setIsChartVisible] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      setIsChartVisible(true)
      return
    }

    const currentChart = chartRef.current
    if (!currentChart) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsChartVisible(entry.isIntersecting)
      },
      { threshold: 0.45 }
    )

    observer.observe(currentChart)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-premium-bg relative min-h-screen overflow-hidden bg-background">
      {/* ── Light Premium Gradient Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blonde glow - top left */}
        <div
          className="hero-ambient-blob absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full opacity-12"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 68%)",
            filter: "blur(160px)",
          }}
        />
        {/* Soft indigo - bottom right */}
        <div
          className="hero-ambient-blob absolute -bottom-20 -right-32 h-[600px] w-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 72%)",
            filter: "blur(140px)",
          }}
        />
        {/* Tertiary subtle accent - center-right */}
        <div
          className="hero-ambient-blob absolute right-1/4 top-1/2 h-[500px] w-[500px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            filter: "blur(150px)",
          }}
        />
      </div>

      {/* ── Subtle dot grid ── */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(26,31,46,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Ultra subtle texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(26,31,46,0.15) 0px, rgba(26,31,46,0.15) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-2 md:gap-20 md:pb-32 md:pt-44 lg:gap-24">
        {/* ── Left Column: Copy & CTAs ── */}
        <div className="relative flex flex-col items-start text-left">
          {/* Headline glow */}
          <div className="pointer-events-none absolute -left-10 top-16 h-64 w-64 rounded-full bg-blue-400/12 blur-[120px]" />

          {/* Headline */}
          <h1
            className="relative z-10 max-w-[16ch] text-balance text-4xl font-extrabold leading-[1.06] text-slate-900 sm:text-5xl lg:text-[3.8rem]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Clareza operacional para decisões que movem o seu negócio.
          </h1>

          {/* Sub-headline */}
          <p className="mt-8 max-w-[560px] text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
            Dados, automação e IA alinhados para decisão executiva com ritmo e
            controle.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="hero-liquid-btn hero-liquid-btn-primary rounded-full border border-slate-300 px-8 py-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              Solicitar Diagnóstico Grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="ghost" className="hero-liquid-btn hero-liquid-btn-ghost rounded-full border border-slate-200/60 px-7 py-6 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900">
              <a href={specialistMailto} aria-label="Falar com Especialista por e-mail">
                Falar com Especialista
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex items-center gap-4 text-xs text-slate-500">
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
            <div className="col-span-2 rounded-3xl border border-slate-200/60 bg-white/95 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Direção Operacional
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    Visão única para liderança
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Indicadores claros para orientar prioridade, risco e ritmo.
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200/40 bg-blue-50">
                  <BarChart3 className="h-7 w-7 text-blue-600" />
                </div>
              </div>
              {/* Mini bar chart visual */}
              <div ref={chartRef} className="hero-chart mt-5 relative flex items-end gap-1.5 overflow-hidden rounded-md">
                <span className="hero-chart-scan" aria-hidden="true" />
                {chartBars.map((height, index) => (
                  <div
                    key={index}
                    className={`hero-chart-bar ${isChartVisible ? "hero-chart-bar-visible" : ""}`}
                    style={{
                      height: `${height * 0.5}px`,
                      animationDelay: `${index * 110}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Card 2 - Bottom left */}
            <div className="rounded-3xl border border-slate-200/60 bg-white/95 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200/40 bg-indigo-50">
                <Zap className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="mt-4 text-xl font-semibold text-slate-900">Execução sem fricção</p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Operação mais leve
              </p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Automações reduzem retrabalho e protegem o foco do time.
              </p>
            </div>

            {/* Card 3 - Bottom right */}
            <div className="rounded-3xl border border-slate-200/60 bg-white/95 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/40 bg-emerald-50">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="mt-4 text-xl font-semibold text-slate-900">Decisão com contexto</p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Leitura de negócio
              </p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Inteligência aplicada para agir com confiança e previsibilidade.
              </p>
            </div>

            {/* Card 4 - Small pill card overlay at bottom */}
            <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/95 px-5 py-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-200/40 bg-amber-50">
                <Clock className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Evolução contínua orientada por dados
                </p>
                <p className="text-xs text-slate-600">
                  Ajustes estratégicos e incrementais para ganho sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
