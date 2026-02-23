import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const _geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'D.NF | Organização de Dados e Automação para Empresas',
  description:
    'Transforme planilhas e processos manuais em dados organizados, dashboards estratégicos e automações que geram clareza e agilidade para o seu negócio.',
  openGraph: {
    title: 'D.NF | Organização de Dados e Automação para Empresas',
    description:
      'Transforme planilhas e processos manuais em dados organizados, dashboards estratégicos e automações que geram clareza e agilidade para o seu negócio.',
    url: 'https://deividnf.com.br',
    siteName: 'D.NF',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_inter.variable} ${_geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
