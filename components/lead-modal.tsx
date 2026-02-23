"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

interface LeadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LeadModal({ open, onOpenChange }: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setSubmitted(false), 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogHeader className="items-center">
              <DialogTitle className="text-foreground text-xl">
                Recebido!
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-center text-base">
                Em breve entraremos em contato.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={handleClose}
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-foreground text-xl">
                Solicitar Contato
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Preencha os campos abaixo e retornaremos em breve.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-foreground">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Seu nome completo"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact" className="text-foreground">
                  Contato
                </Label>
                <Input
                  id="contact"
                  required
                  placeholder="(00) 00000-0000"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="problem" className="text-foreground">
                  Qual o principal problema hoje?
                </Label>
                <Textarea
                  id="problem"
                  required
                  placeholder="Descreva brevemente o desafio que enfrenta..."
                  rows={3}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <DialogFooter className="gap-2 pt-2">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
