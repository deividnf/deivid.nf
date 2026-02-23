import {
  LayoutDashboard,
  Database,
  FileBarChart,
  Users,
  Presentation,
} from "lucide-react"

const services = [
  {
    icon: LayoutDashboard,
    title: "Dashboards Estratégicos",
    description:
      "Visualizações claras para acompanhar indicadores essenciais.",
  },
  {
    icon: Database,
    title: "Organização de Bases",
    description: "Unificação e padronização de planilhas.",
  },
  {
    icon: FileBarChart,
    title: "Automação de Relatórios",
    description: "Relatórios que atualizam automaticamente.",
  },
  {
    icon: Users,
    title: "Segmentação Inteligente",
    description: "Organização estratégica de clientes e serviços.",
  },
  {
    icon: Presentation,
    title: "Apresentação de Resultados",
    description: "Estruturação visual para decisões e reuniões.",
  },
]

export function ServicesSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Serviços
        </h2>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-card-foreground">
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
