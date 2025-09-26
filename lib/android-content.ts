import { Locale } from "@/src/i18n"

export type AndroidReview = {
  name: string
  avatar: string
  rating: number
  date: string
  review: string
  helpful: number
}

export type AndroidDescriptionSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "highlight"; label: string; text: string }

export type AndroidAppInfoItem =
  | { type: "text"; label: string; value: string }
  | { type: "badge"; label: string; value: string }

export type AndroidDataSafetyItem = {
  title: string
  description?: string
}

export type AndroidContent = {
  appName: string
  developer: string
  billingLabel: string
  stats: {
    ratingValue: string
    ratingLabel: string
    size: string
    downloadsValue: string
    downloadsLabel: string
    maturityBadge: string
    maturityLabel: string
  }
  install: {
    installLabel: string
    updateLabel: string
    availabilityNote: string
  }
  about: {
    title: string
    intro: string
    expanded: AndroidDescriptionSection[]
    readMoreLabel: string
    readLessLabel: string
  }
  reviews: {
    title: string
    viewAllLabel: string
    averageCountLabel: string
    entries: AndroidReview[]
  }
  appInfo: {
    title: string
    items: AndroidAppInfoItem[]
  }
  dataSafety: {
    title: string
    description: string
    items: AndroidDataSafetyItem[]
    moreDetailsLabel: string
    viewDetailsLabel: string
  }
  footer: {
    storeTitle: string
    storeLinks: string[]
    familyTitle: string
    familyLinks: string[]
    legalLinks: string[]
    companyLabel: string
  }
}

export const androidContent: Record<Locale, AndroidContent> = {
  pt: {
    appName: "Heat Game",
    developer: "Heat Apps",
    billingLabel: "Compras no app",
    stats: {
      ratingValue: "4.8",
      ratingLabel: "4K avaliações",
      size: "85 MB",
      downloadsValue: "500K",
      downloadsLabel: "Downloads",
      maturityBadge: "18+",
      maturityLabel: "Adulto",
    },
    install: {
      installLabel: "Instalar",
      updateLabel: "Atualizar",
      availabilityNote: "Este app está disponível para o seu dispositivo",
    },
    about: {
      title: "Sobre este app",
      intro:
        "Descubra o Heat, o app ideal para casais e amigos que querem sair da rotina, criar momentos únicos e fortalecer a conexão de forma leve, divertida e provocante.",
      expanded: [
        {
          type: "paragraph",
          text:
            "Com jogos interativos, desafios envolventes e perguntas que provocam reflexão, o Heat transforma qualquer momento em uma experiência memorável — seja a dois, entre amigos ou em grupo.",
        },
        {
          type: "heading",
          text: "O que você encontrará no Heat:",
        },
        {
          type: "highlight",
          label: "Jogos personalizados:",
          text: "modos como Verdade ou Desafio, Encontro Perfeito, Surpresa, entre outros, pensados para criar conexão, cumplicidade e boas risadas.",
        },
        {
          type: "highlight",
          label: "Níveis de intensidade:",
          text: "escolha entre Leve, Quente, Picante ou Extremo para combinar com o clima do momento.",
        },
        {
          type: "highlight",
          label: "Modo premium:",
          text: "desbloqueie cartas exclusivas, modos especiais e experiências mais intensas para tornar suas noites ainda mais memoráveis.",
        },
        {
          type: "highlight",
          label: "Design sofisticado:",
          text: "visual moderno e intuitivo, ideal para usar em casa, em viagens ou ocasiões especiais.",
        },
        {
          type: "highlight",
          label: "Para todos os estilos:",
          text: "jogabilidade adaptável para casais, grupos de amigos ou experiências a dois.",
        },
        {
          type: "paragraph",
          text:
            "Seja para reacender a chama, criar novas memórias ou simplesmente se divertir com quem você ama, o Heat é seu parceiro ideal para momentos únicos.",
        },
      ],
      readMoreLabel: "Ler mais",
      readLessLabel: "Ler menos",
    },
    reviews: {
      title: "Avaliações",
      viewAllLabel: "Ver todas",
      averageCountLabel: "2.1M avaliações",
      entries: [
        {
          name: "Alex Chen",
          avatar: "/male-asian-avatar.png",
          rating: 5,
          date: "15 de dezembro de 2024",
          review:
            "Gráficos e jogabilidade incríveis! Os efeitos de fogo são incríveis e o modo multiplayer é viciante. O melhor jogo mobile que joguei este ano.",
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
            "Absolutamente amo este jogo! As mecânicas de calor são únicas e as batalhas contra chefes são épicas. Vale cada centavo!",
          helpful: 156,
        },
      ],
    },
    appInfo: {
      title: "Informações do app",
      items: [
        { type: "text", label: "Atualizado", value: "1 de set. de 2025" },
        { type: "text", label: "Tamanho", value: "85 MB" },
        { type: "text", label: "Instalações", value: "500.000+" },
        { type: "text", label: "Versão atual", value: "1.7.2" },
        { type: "text", label: "Requer Android", value: "7.0 ou superior" },
        { type: "badge", label: "Classificação do conteúdo", value: "Adulto" },
        { type: "text", label: "Oferecido por", value: "Heat Apps" },
      ],
    },
    dataSafety: {
      title: "Segurança dos dados",
      description:
        "A segurança começa com o entendimento de como os desenvolvedores coletam e compartilham seus dados. As práticas de privacidade e segurança de dados podem variar de acordo com o uso, região e idade.",
      items: [
        {
          title: "Este app pode compartilhar estes tipos de dados com terceiros",
          description: "Fotos e vídeos, Atividade do app e mais 2",
        },
        {
          title: "Este app pode coletar estes tipos de dados",
          description: "Informações pessoais",
        },
        {
          title: "Os dados são criptografados em trânsito",
        },
        {
          title: "Você pode solicitar a exclusão dos dados",
        },
      ],
      moreDetailsLabel: "Mais detalhes",
      viewDetailsLabel: "Ver detalhes",
    },
    footer: {
      storeTitle: "Android Store",
      storeLinks: [
        "Store Pass",
        "Store Points",
        "Cartões-presente",
        "Resgatar",
        "Política de reembolso",
        "Console do desenvolvedor",
      ],
      familyTitle: "Crianças e família",
      familyLinks: ["Guia dos pais", "Compartilhamento familiar"],
      legalLinks: ["Termos de Serviço", "Privacidade", "Sobre a Android Store"],
      companyLabel: "Android Commerce Limited",
    },
  },
  en: {
    appName: "Heat Game",
    developer: "Heat Apps",
    billingLabel: "In-app purchases",
    stats: {
      ratingValue: "4.8",
      ratingLabel: "4K reviews",
      size: "85 MB",
      downloadsValue: "500K",
      downloadsLabel: "Downloads",
      maturityBadge: "18+",
      maturityLabel: "Adult",
    },
    install: {
      installLabel: "Install",
      updateLabel: "Update",
      availabilityNote: "This app is available for your device",
    },
    about: {
      title: "About this app",
      intro:
        "Discover Heat, the ideal app for couples and friends who want to break out of routine, create unique moments and strengthen connection in a light, fun and provocative way.",
      expanded: [
        {
          type: "paragraph",
          text:
            "With interactive games, engaging challenges and thought-provoking questions, Heat transforms any moment into a memorable experience — whether for two, among friends or in a group.",
        },
        {
          type: "heading",
          text: "What you'll find in Heat:",
        },
        {
          type: "highlight",
          label: "Personalized games:",
          text: "modes like Truth or Dare, Perfect Date, Surprise, among others, designed to create connection, complicity and good laughs.",
        },
        {
          type: "highlight",
          label: "Intensity levels:",
          text: "choose between Light, Hot, Spicy or Extreme to match the mood of the moment.",
        },
        {
          type: "highlight",
          label: "Premium mode:",
          text: "unlock exclusive cards, special modes and more intense experiences to make your nights even more memorable.",
        },
        {
          type: "highlight",
          label: "Sophisticated design:",
          text: "modern and intuitive visual, ideal for use at home, on trips or special occasions.",
        },
        {
          type: "highlight",
          label: "For all styles:",
          text: "adaptable gameplay for couples, groups of friends or experiences for two.",
        },
        {
          type: "paragraph",
          text:
            "Whether to rekindle the flame, create new memories or just have fun with those you love, Heat is your ideal partner for unique moments.",
        },
      ],
      readMoreLabel: "Read more",
      readLessLabel: "Read less",
    },
    reviews: {
      title: "Ratings and reviews",
      viewAllLabel: "View all",
      averageCountLabel: "2.1M reviews",
      entries: [
        {
          name: "Alex Chen",
          avatar: "/male-asian-avatar.png",
          rating: 5,
          date: "December 15, 2024",
          review:
            "Amazing graphics and gameplay! The fire effects are incredible and the multiplayer mode is addictive. Best mobile game I've played this year.",
          helpful: 127,
        },
        {
          name: "Sarah Johnson",
          avatar: "/user-avatar-female-blonde.png",
          rating: 4,
          date: "December 12, 2024",
          review:
            "Great game overall but could use more levels. The controls are smooth and the storyline is engaging. Looking forward to updates!",
          helpful: 89,
        },
        {
          name: "Mike Rodriguez",
          avatar: "/user-avatar-male-hispanic.png",
          rating: 5,
          date: "December 10, 2024",
          review:
            "Absolutely love this game! The heat mechanics are unique and the boss battles are epic. Worth every penny!",
          helpful: 156,
        },
      ],
    },
    appInfo: {
      title: "App info",
      items: [
        { type: "text", label: "Updated", value: "Sep 1, 2025" },
        { type: "text", label: "Size", value: "85 MB" },
        { type: "text", label: "Installs", value: "500,000+" },
        { type: "text", label: "Current version", value: "1.7.2" },
        { type: "text", label: "Requires Android", value: "7.0 and up" },
        { type: "badge", label: "Content rating", value: "Adult" },
        { type: "text", label: "Offered by", value: "Heat Apps" },
      ],
    },
    dataSafety: {
      title: "Data safety",
      description:
        "Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age.",
      items: [
        {
          title: "This app may share these data types with third parties",
          description: "Photos and videos, App activity and 2 more",
        },
        {
          title: "This app may collect these data types",
          description: "Personal info",
        },
        {
          title: "Data is encrypted in transit",
        },
        {
          title: "You can request that data be deleted",
        },
      ],
      moreDetailsLabel: "More details",
      viewDetailsLabel: "See details",
    },
    footer: {
      storeTitle: "Android Store",
      storeLinks: [
        "Store Pass",
        "Store Points",
        "Gift cards",
        "Redeem",
        "Refund policy",
        "Developer Console",
      ],
      familyTitle: "Kids & family",
      familyLinks: ["Parent Guide", "Family sharing"],
      legalLinks: ["Terms of Service", "Privacy", "About Android Store"],
      companyLabel: "Android Commerce Limited",
    },
  },
  es: {
    appName: "Heat Game",
    developer: "Heat Apps",
    billingLabel: "Compras en la app",
    stats: {
      ratingValue: "4.8",
      ratingLabel: "4K reseñas",
      size: "85 MB",
      downloadsValue: "500K",
      downloadsLabel: "Descargas",
      maturityBadge: "18+",
      maturityLabel: "Adulto",
    },
    install: {
      installLabel: "Instalar",
      updateLabel: "Actualizar",
      availabilityNote: "Esta app está disponible para tu dispositivo",
    },
    about: {
      title: "Acerca de esta app",
      intro:
        "Descubre Heat, la app ideal para parejas y amigos que quieren salir de la rutina, crear momentos únicos y fortalecer la conexión de manera ligera, divertida y provocativa.",
      expanded: [
        {
          type: "paragraph",
          text:
            "Con juegos interactivos, desafíos envolventes y preguntas que invitan a reflexionar, Heat transforma cualquier momento en una experiencia memorable, ya sea en pareja, entre amigos o en grupo.",
        },
        {
          type: "heading",
          text: "Lo que encontrarás en Heat:",
        },
        {
          type: "highlight",
          label: "Juegos personalizados:",
          text: "modos como Verdad o Reto, Cita Perfecta, Sorpresa y otros, diseñados para crear conexión, complicidad y buenas risas.",
        },
        {
          type: "highlight",
          label: "Niveles de intensidad:",
          text: "elige entre Light, Hot, Picante o Extremo para combinar con el ambiente del momento.",
        },
        {
          type: "highlight",
          label: "Modo premium:",
          text: "desbloquea cartas exclusivas, modos especiales y experiencias más intensas para hacer tus noches aún más memorables.",
        },
        {
          type: "highlight",
          label: "Diseño sofisticado:",
          text: "visual moderno e intuitivo, ideal para usar en casa, en viajes u ocasiones especiales.",
        },
        {
          type: "highlight",
          label: "Para todos los estilos:",
          text: "jugabilidad adaptable para parejas, grupos de amigos o experiencias en pareja.",
        },
        {
          type: "paragraph",
          text:
            "Ya sea para reavivar la llama, crear nuevos recuerdos o simplemente divertirte con quienes amas, Heat es tu compañero ideal para momentos únicos.",
        },
      ],
      readMoreLabel: "Leer más",
      readLessLabel: "Leer menos",
    },
    reviews: {
      title: "Calificaciones y reseñas",
      viewAllLabel: "Ver todas",
      averageCountLabel: "2.1M reseñas",
      entries: [
        {
          name: "Alex Chen",
          avatar: "/male-asian-avatar.png",
          rating: 5,
          date: "15 de diciembre de 2024",
          review:
            "¡Gráficos y jugabilidad increíbles! Los efectos de fuego son increíbles y el modo multijugador es adictivo. El mejor juego móvil que he jugado este año.",
          helpful: 127,
        },
        {
          name: "Sarah Johnson",
          avatar: "/user-avatar-female-blonde.png",
          rating: 4,
          date: "12 de diciembre de 2024",
          review:
            "Gran juego en general, pero podría tener más niveles. Los controles son suaves y la historia es atractiva. ¡Esperando actualizaciones!",
          helpful: 89,
        },
        {
          name: "Mike Rodriguez",
          avatar: "/user-avatar-male-hispanic.png",
          rating: 5,
          date: "10 de diciembre de 2024",
          review:
            "¡Absolutamente amo este juego! Las mecánicas de calor son únicas y las batallas contra jefes son épicas. ¡Vale cada centavo!",
          helpful: 156,
        },
      ],
    },
    appInfo: {
      title: "Información de la app",
      items: [
        { type: "text", label: "Actualizada", value: "1 sept. 2025" },
        { type: "text", label: "Tamaño", value: "85 MB" },
        { type: "text", label: "Instalaciones", value: "500,000+" },
        { type: "text", label: "Versión actual", value: "1.7.2" },
        { type: "text", label: "Requiere Android", value: "7.0 o superior" },
        { type: "badge", label: "Clasificación de contenido", value: "Adulto" },
        { type: "text", label: "Ofrecida por", value: "Heat Apps" },
      ],
    },
    dataSafety: {
      title: "Seguridad de datos",
      description:
        "La seguridad comienza con comprender cómo los desarrolladores recopilan y comparten tus datos. Las prácticas de privacidad y seguridad de datos pueden variar según el uso, la región y la edad.",
      items: [
        {
          title: "Esta app puede compartir estos tipos de datos con terceros",
          description: "Fotos y videos, Actividad de la app y 2 más",
        },
        {
          title: "Esta app puede recopilar estos tipos de datos",
          description: "Información personal",
        },
        {
          title: "Los datos se cifran en tránsito",
        },
        {
          title: "Puedes solicitar que se eliminen los datos",
        },
      ],
      moreDetailsLabel: "Más detalles",
      viewDetailsLabel: "Ver detalles",
    },
    footer: {
      storeTitle: "Android Store",
      storeLinks: [
        "Store Pass",
        "Store Points",
        "Tarjetas de regalo",
        "Canjear",
        "Política de reembolso",
        "Consola para desarrolladores",
      ],
      familyTitle: "Niños y familia",
      familyLinks: ["Guía para padres", "Compartir en familia"],
      legalLinks: ["Términos del Servicio", "Privacidad", "Acerca de Android Store"],
      companyLabel: "Android Commerce Limited",
    },
  },
}
