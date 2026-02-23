export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <span className="text-lg font-bold tracking-tight text-foreground">
          D.NF
        </span>
        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
          <span>
            65.242.797 DEIVID DO NASCIMENTO FERREIRA
          </span>
          <span>CNPJ: 65.242.797/0001-89</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {"© "}
          {new Date().getFullYear()}
          {" D.NF — Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  )
}
