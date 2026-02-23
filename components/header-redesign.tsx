"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

interface HeaderRedesignProps {
  onOpenModal: () => void
}

export function HeaderRedesign({ onOpenModal }: HeaderRedesignProps) {
  const [scrolled, setScrolled] = useState(false)

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
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-6 py-3 ${
          scrolled
            ? "border border-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "border border-neutral-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <span className="text-xl font-bold tracking-tight text-neutral-900">
          D.NF
        </span>

        {/* Mini Profile Card */}
        <div className="hidden md:flex">
          <div className="flex w-full max-w-fit items-center gap-3 rounded-full border border-neutral-400 bg-white px-4 py-2">
            {/* Avatar */}
            <div className="relative h-9 w-9 flex-shrink-0 overflow-visible rounded-full border border-blue-300/60 shadow-[0_0_10px_rgba(37,99,235,0.12)]">
              <Image
                src={siteConfig.hero.avatarPath}
                alt={siteConfig.hero.avatarAlt}
                width={36}
                height={36}
                className="h-full w-full rounded-full object-cover"
                priority
              />
              {/* Status dot */}
              <span className="absolute -bottom-[1px] -right-[1px] h-2 w-2 rounded-full border border-white bg-emerald-400" />
            </div>

            {/* Text */}
            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-semibold text-neutral-900">
                Deivid NF
              </p>
              <p className="truncate text-xs text-neutral-600">
                Disponível para serviços
              </p>
            </div>

            {/* CTA */}
            <button onClick={onOpenModal} className="ml-2 flex-shrink-0 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Contato
            </button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Button
            onClick={onOpenModal}
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white"
          >
            Contato
          </Button>
        </div>
      </nav>
    </header>
  )
}
