"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ValueSection } from "@/components/value-section"
import { ServicesSection } from "@/components/services-section"
import { EntryOfferSection } from "@/components/entry-offer-section"
import { PlansSection } from "@/components/plans-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal() {
    setModalOpen(true)
  }

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} />
        <ProblemSection />
        <ValueSection />
        <ServicesSection />
        <EntryOfferSection onOpenModal={openModal} />
        <PlansSection onOpenModal={openModal} />
        <ProcessSection />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <LeadModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
