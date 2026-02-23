"use client"

import { Button } from "@/components/ui/button"
import { ScanSearch, ArrowRight } from "lucide-react"

interface EntryOfferSectionProps {
  onOpenModal: () => void
}

export function EntryOfferSection({ onOpenModal }: EntryOfferSectionProps) {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 md:p-12">
          {/* Corner glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 blur-[80px]" />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <ScanSearch className="h-8 w-8 text-primary" />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {"Diagnóstico de Dados (Raio-X)"}
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              {
                "Um retrato claro do cenário atual, dos gargalos e um plano de ação objetivo."
              }
            </p>

            <Button
              onClick={onOpenModal}
              size="lg"
              className="mt-8 bg-primary text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.3)] px-8 py-6 text-base"
            >
              Solicitar Diagnostico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
