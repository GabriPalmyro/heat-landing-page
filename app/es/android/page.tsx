import AndroidGame from "@/components/android-game"

export const metadata = {
  title: "Heat Game - Google Play",
  description: "Descarga Heat Game - El juego más caliente para parejas",
  icons: {
    icon: "/heat-game-logo.png",
  },
}

export default function AndroidPageEs() {
  const reviews = [
    {
      name: "Alex Chen",
      avatar: "/male-asian-avatar.png",
      rating: 5,
      date: "15 de diciembre de 2024",
      review:
        "¡Gráficos increíbles y jugabilidad fantástica! Los efectos de fuego son impresionantes y el modo multijugador es adictivo. El mejor juego móvil que he jugado este año.",
      helpful: 127,
    },
    {
      name: "Sarah Johnson",
      avatar: "/user-avatar-female-blonde.png",
      rating: 4,
      date: "12 de diciembre de 2024",
      review:
        "Gran juego en general, pero podría usar más niveles. Los controles son suaves y la historia es atractiva. ¡Esperando actualizaciones!",
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
  ]

  const appInfo = {
    updated: "1 de sep. de 2025",
    size: "8 MB",
    installs: "4.000.000+",
    currentVersion: "1.7.0",
    requiresAndroid: "7.0 y versiones posteriores",
    contentRating: "Adulto",
    offeredBy: "PineApp",
  }

  const fullDescription = {
    intro: "Con juegos interactivos, desafíos atractivos y preguntas que hacen pensar, Heat transforma cualquier momento en una experiencia memorable, ya sea para dos, entre amigos o en grupo.",
    whatYouFind: "Lo que encontrarás en Heat:",
    personalizedGames: "modos como Verdad o Reto, Cita Perfecta, Sorpresa, entre otros, diseñados para crear conexión, complicidad y buenas risas.",
    intensityLevels: "elige entre Ligero, Caliente, Picante o Extremo para combinar con el ambiente del momento.",
    premiumMode: "desbloquea cartas exclusivas, modos especiales y experiencias más intensas para hacer tus noches aún más memorables.",
    sophisticatedDesign: "visual moderno e intuitivo, ideal para usar en casa, en viajes u ocasiones especiales.",
    forAllStyles: "jugabilidad adaptable para parejas, grupos de amigos o experiencias para dos.",
    conclusion: "Ya sea para reavivar la llama, crear nuevos recuerdos o simplemente divertirse con quienes amas, Heat es tu compañero ideal para momentos únicos.",
  }

  const dataSafety = {
    shareDescription: "Fotos y videos, Actividad de la app y 2 más",
    collectDescription: "Información personal",
  }

  const footer = {
    androidStore: "Android Store",
    kidsFamily: "Niños y familia",
    terms: "Términos de Servicio",
    privacy: "Privacidad",
    about: "Acerca de Android Store",
    company: "Android Commerce Limited",
  }

  return (
    <AndroidGame
      title="Heat Game"
      description="Descubre Heat, la app ideal para parejas y amigos que quieren salir de la rutina, crear momentos únicos y fortalecer la conexión de manera ligera, divertida y provocativa."
      fullDescription={fullDescription}
      reviews={reviews}
      appInfo={appInfo}
      dataSafety={dataSafety}
      footer={footer}
    />
  )
}
