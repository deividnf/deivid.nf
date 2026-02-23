"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  onOpenModal: () => void
}

export function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-white/[0.14] bg-black/45 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
            : "border-white/[0.08] bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <span className="text-lg font-bold tracking-tight text-white">
          D.NF
        </span>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {[
            { label: "Servicos", href: "#servicos" },
            { label: "Processo", href: "#processo" },
            { label: "Planos", href: "#planos" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3.5 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-3.5 bottom-0 h-px scale-x-0 bg-blue-400/80 shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Button
            onClick={onOpenModal}
            variant="ghost"
            className="rounded-full border border-white/[0.12] bg-transparent px-5 text-sm text-white hover:bg-white/[0.08] hover:text-white"
          >
            Falar Conosco
          </Button>
          <Button
            onClick={onOpenModal}
            className="rounded-full bg-white px-5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(59,130,246,0.28)] hover:bg-white/90"
          >
            Diagnostico Gratis
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 flex flex-col gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.06] p-4 backdrop-blur-xl md:hidden">
          {[
            { label: "Servicos", href: "#servicos" },
            { label: "Processo", href: "#processo" },
            { label: "Planos", href: "#planos" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1 flex flex-col gap-2 border-t border-white/[0.08] pt-3">
            <Button
              onClick={() => {
                setMobileOpen(false)
                onOpenModal()
              }}
              variant="ghost"
              className="w-full rounded-full border border-white/[0.12] bg-transparent text-sm text-white hover:bg-white/[0.08] hover:text-white"
            >
              Falar Conosco
            </Button>
            <Button
              onClick={() => {
                setMobileOpen(false)
                onOpenModal()
              }}
              className="w-full rounded-full bg-white text-sm font-semibold text-black hover:bg-white/90"
            >
              Diagnostico Gratis
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
