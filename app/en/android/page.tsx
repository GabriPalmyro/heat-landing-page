import AndroidGame from "@/components/android-game"

export const metadata = {
  title: "Heat Game - Google Play",
  description: "Download Heat Game - The hottest game for couples",
  icons: {
    icon: "/heat-game-logo.png",
  },
}

export default function AndroidPageEn() {
  const reviews = [
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
  ]

  const appInfo = {
    updated: "Sep 1, 2025",
    size: "8 MB",
    installs: "4,000,000+",
    currentVersion: "1.7.0",
    requiresAndroid: "7.0 and up",
    contentRating: "Adult",
    offeredBy: "PineApp",
  }

  const fullDescription = {
    intro: "With interactive games, engaging challenges and thought-provoking questions, Heat transforms any moment into a memorable experience — whether for two, among friends or in a group.",
    whatYouFind: "What you'll find in Heat:",
    personalizedGames: "modes like Truth or Dare, Perfect Date, Surprise, among others, designed to create connection, complicity and good laughs.",
    intensityLevels: "choose between Light, Hot, Spicy or Extreme to match the mood of the moment.",
    premiumMode: "unlock exclusive cards, special modes and more intense experiences to make your nights even more memorable.",
    sophisticatedDesign: "modern and intuitive visual, ideal for use at home, on trips or special occasions.",
    forAllStyles: "adaptable gameplay for couples, groups of friends or experiences for two.",
    conclusion: "Whether to rekindle the flame, create new memories or just have fun with those you love, Heat is your ideal partner for unique moments.",
  }

  const dataSafety = {
    shareDescription: "Photos and videos, App activity and 2 more",
    collectDescription: "Personal info",
  }

  const footer = {
    androidStore: "Android Store",
    kidsFamily: "Kids & family",
    terms: "Terms of Service",
    privacy: "Privacy",
    about: "About Android Store",
    company: "Android Commerce Limited",
  }

  return (
    <AndroidGame
      title="Heat Game"
      description="Discover Heat, the ideal app for couples and friends who want to break out of routine, create unique moments and strengthen connection in a light, fun and provocative way."
      fullDescription={fullDescription}
      reviews={reviews}
      appInfo={appInfo}
      dataSafety={dataSafety}
      footer={footer}
    />
  )
}
