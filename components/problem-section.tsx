import {
  DatabaseZap,
  Repeat2,
  Timer,
  BarChart3,
  HelpCircle,
} from "lucide-react"

const problems = [
  { icon: DatabaseZap, text: "Bases que não conversam" },
  { icon: Repeat2, text: "Processos manuais repetitivos" },
  { icon: Timer, text: "Consolidação demorada" },
  { icon: BarChart3, text: "Falta de indicadores claros" },
  { icon: HelpCircle, text: "Decisão baseada em achismo" },
]

export function ProblemSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          {
            "Quando a informação está espalhada, a energia do negócio também."
          }
        </h2>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.text}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium leading-relaxed text-card-foreground">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
