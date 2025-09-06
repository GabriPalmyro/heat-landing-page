import AndroidGame from "@/components/android-game"

export const metadata = {
  title: "Heat Game - Google Play",
  description: "Baixe Heat Game - O jogo mais quente para casais",
  icons: {
    icon: "/heat-game-logo.png",
  },
}

export default function AndroidPagePt() {
  const reviews = [
    {
      name: "Alex Chen",
      avatar: "/male-asian-avatar.png",
      rating: 5,
      date: "15 de dezembro de 2024",
      review:
        "Gráficos incríveis e jogabilidade! Os efeitos de fogo são incríveis e o modo multiplayer é viciante. Melhor jogo mobile que joguei este ano.",
      helpful: 127,
    },
    {
      name: "Sarah Johnson",
      avatar: "/user-avatar-female-blonde.png",
      rating: 4,
      date: "12 de dezembro de 2024",
      review:
        "Ótimo jogo no geral, mas poderia ter mais níveis. Os controles são suaves e a história é envolvente. Ansioso por atualizações!",
      helpful: 89,
    },
    {
      name: "Mike Rodriguez",
      avatar: "/user-avatar-male-hispanic.png",
      rating: 5,
      date: "10 de dezembro de 2024",
      review:
        "Adoro este jogo! A mecânica de calor é única e as batalhas contra chefes são épicas. Vale cada centavo!",
      helpful: 156,
    },
  ]

  const appInfo = {
    updated: "1 de set. de 2025",
    size: "8 MB",
    installs: "4.000.000+",
    currentVersion: "1.7.0",
    requiresAndroid: "7.0 ou superior",
    contentRating: "Adulto",
    offeredBy: "PineApp",
  }

  const fullDescription = {
    intro: "Com jogos interativos, desafios envolventes e perguntas provocativas, o Heat transforma qualquer momento em uma experiência memorável — seja para dois, entre amigos ou em grupo.",
    whatYouFind: "O que você encontrará no Heat:",
    personalizedGames: "modos como Verdade ou Desafio, Encontro Perfeito, Surpresa, entre outros, criados para criar conexão, cumplicidade e boas risadas.",
    intensityLevels: "escolha entre Leve, Quente, Picante ou Extremo para combinar com o clima do momento.",
    premiumMode: "desbloqueie cartas exclusivas, modos especiais e experiências mais intensas para tornar suas noites ainda mais memoráveis.",
    sophisticatedDesign: "visual moderno e intuitivo, ideal para uso em casa, em viagens ou ocasiões especiais.",
    forAllStyles: "jogabilidade adaptável para casais, grupos de amigos ou experiências para dois.",
    conclusion: "Seja para reacender a chama, criar novas memórias ou apenas se divertir com quem você ama, o Heat é seu parceiro ideal para momentos únicos.",
  }

  const dataSafety = {
    shareDescription: "Fotos e vídeos, Atividade do app e mais 2",
    collectDescription: "Informações pessoais",
  }

  const footer = {
    androidStore: "Android Store",
    kidsFamily: "Crianças e família",
    terms: "Termos de Serviço",
    privacy: "Privacidade",
    about: "Sobre o Android Store",
    company: "Android Commerce Limited",
  }

  return (
    <AndroidGame
      title="Heat Game"
      description="Descubra o Heat, o aplicativo ideal para casais e amigos que querem sair da rotina, criar momentos únicos e fortalecer a conexão de uma forma leve, divertida e provocante."
      fullDescription={fullDescription}
      reviews={reviews}
      appInfo={appInfo}
      dataSafety={dataSafety}
      footer={footer}
    />
  )
}
