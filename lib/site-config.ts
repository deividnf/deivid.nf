export const siteConfig = {
  contact: {
    specialistEmail: "comercial@deividnf.com.br",
    specialistSubject: "Contato - D.NF",
    specialistBody:
      "Olá, quero falar sobre diagnóstico e estruturação de dados.",
  },
  hero: {
    avatarPath: "/images/profile/avatar.jpg",
    avatarAlt: "Foto de perfil D.NF",
  },
} as const

export const specialistMailto = `mailto:${siteConfig.contact.specialistEmail}?subject=${encodeURIComponent(siteConfig.contact.specialistSubject)}&body=${encodeURIComponent(siteConfig.contact.specialistBody)}`
