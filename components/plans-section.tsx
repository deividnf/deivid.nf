"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PlansSectionProps {
  onOpenModal: () => void
}

const plans = [
  {
    title: "Essencial",
    subtitle: "Ideal para quem precisa começar a organizar",
    highlighted: false,
    features: [
      "Diagnóstico inicial de dados",
      "Organização de até 3 bases",
      "1 dashboard de acompanhamento",
      "Relatório de recomendações",
      "Suporte por email",
    ],
  },
  {
    title: "Profissional",
    subtitle: "Para quem busca automação e clareza contínua",
    highlighted: true,
    features: [
      "Diagnóstico completo de dados",
      "Organização ilimitada de bases",
      "Dashboards estratégicos personalizados",
      "Automação de relatórios",
      "Suporte prioritário",
    ],
  },
  {
    title: "Corporativo",
    subtitle: "Solução sob medida para operações complexas",
    highlighted: false,
    features: [
      "Consultoria dedicada",
      "Integração entre sistemas",
      "Segmentação inteligente de dados",
      "Apresentações executivas",
      "Acompanhamento contínuo",
    ],
  },
]

export function PlansSection({ onOpenModal }: PlansSectionProps) {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Planos
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-primary/40 bg-card shadow-[0_0_60px_rgba(59,130,246,0.08)]"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Mais popular
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground">
                {plan.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.subtitle}
              </p>

              <p className="mt-6 text-2xl font-bold text-foreground">
                Sob consulta
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-secondary-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={onOpenModal}
                className={`mt-8 w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Solicitar informações
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
