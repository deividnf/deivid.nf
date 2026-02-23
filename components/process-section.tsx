const steps = [
  {
    number: "01",
    title: "Entendimento do cenário",
    description:
      "Ouvimos suas necessidades e mapeamos o fluxo atual de dados.",
  },
  {
    number: "02",
    title: "Análise das bases",
    description:
      "Avaliamos a estrutura, qualidade e conexões entre suas fontes.",
  },
  {
    number: "03",
    title: "Diagnóstico estratégico",
    description:
      "Identificamos gargalos e oportunidades de melhoria nos processos.",
  },
  {
    number: "04",
    title: "Implementação",
    description:
      "Organizamos, automatizamos e criamos dashboards sob medida.",
  },
  {
    number: "05",
    title: "Ajustes e evolução",
    description:
      "Refinamos a solução com base no uso real e em novas demandas.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Como funciona
        </h2>

        <div className="mt-16 flex flex-col gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative flex gap-6">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-full w-px bg-border" />
                )}
              </div>

              <div className="pb-10">
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
