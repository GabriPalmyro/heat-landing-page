import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagamento Confirmado - Heat Game',
  description: 'Sua assinatura foi ativada com sucesso! Aproveite todos os recursos premium do Heat.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SuccessPaymentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
