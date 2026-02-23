import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Contato
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="mailto:comercial@deividnf.com.br"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary/30"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sm text-card-foreground">
              comercial@deividnf.com.br
            </span>
          </a>
          <a
            href="mailto:suporte@deividnf.com.br"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary/30"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sm text-card-foreground">
              suporte@deividnf.com.br
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
