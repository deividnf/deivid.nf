"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso ter conhecimento técnico para contratar?",
    answer:
      "Não. Todo o trabalho técnico é feito por nós. Você só precisa nos dizer quais são seus desafios e o que precisa acompanhar. Nós cuidamos de tudo.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "O diagnóstico inicial é entregue em poucos dias. A implementação completa depende da complexidade do cenário, mas você começa a ter clareza desde o primeiro relatório.",
  },
  {
    question: "Vocês trabalham com quais ferramentas?",
    answer:
      "Trabalhamos com Excel, Google Sheets, Power BI, bancos de dados e ferramentas de automação. A escolha depende do que faz mais sentido para o seu negócio.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. Trabalhamos com sigilo e confidencialidade total. Os dados do cliente são tratados com proteção e nunca são compartilhados com terceiros.",
  },
  {
    question: "Como funciona o contato após a contratação?",
    answer:
      "Todo o acompanhamento é feito por email, com entregas documentadas e alinhamentos periódicos para garantir que a solução evolui junto com o negócio.",
  },
]

export function FaqSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
