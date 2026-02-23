import { Clock, ShieldCheck, Compass } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Tempo de volta",
    description: "Menos retrabalho e consolidação manual.",
  },
  {
    icon: ShieldCheck,
    title: "Menos erro",
    description: "Dados organizados e padronizados.",
  },
  {
    icon: Compass,
    title: "Direção",
    description: "Indicadores claros para agir com segurança.",
  },
]

export function ValueSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          {"O que muda quando você tem clareza"}
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
