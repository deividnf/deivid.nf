import { Monitor, BarChart3, FileSpreadsheet } from "lucide-react"

const demos = [
  {
    icon: Monitor,
    title: "Dashboard Web",
    description: "Painel interativo com indicadores em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Modelo Power BI",
    description: "Dashboard analítico com visualizações estratégicas.",
  },
  {
    icon: FileSpreadsheet,
    title: "Consolidação automatizada",
    description: "Fluxo automatizado de unificação de planilhas.",
  },
]

export function PortfolioSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Modelos Demonstrativos
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {demos.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30"
            >
              {/* Abstract data visual */}
              <div className="flex h-40 w-full items-center justify-center bg-secondary">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/10 blur-xl" />
                  </div>
                  <item.icon className="relative h-12 w-12 text-primary/60" />
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Modelos demonstrativos para ilustrar capacidade técnica.
        </p>
      </div>
    </section>
  )
}
