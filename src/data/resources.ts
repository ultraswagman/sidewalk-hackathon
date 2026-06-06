import type { Borough, PeerPost, PlaceReset, Resource } from "../lib/types";

export const crisisResources: Resource[] = [
  {
    id: "nyc-988",
    name: "NYC 988",
    description:
      "Free, confidential crisis counseling and mental health support for New Yorkers.",
    action: "Call or text 988, or use the official NYC 988 site.",
    url: "https://www.nyc.gov/site/doh/health/health-topics/988.page",
    kind: "crisis",
  },
  {
    id: "emergency-911",
    name: "911",
    description: "For immediate danger or a medical emergency.",
    action: "Call 911 now if someone may be hurt right away.",
    kind: "crisis",
  },
];

export const officialResources: Resource[] = [
  {
    id: "nyc-988-info",
    name: "NYC 988",
    description:
      "Mental health and substance use support, information, and referrals for NYC residents.",
    action: "Save the number or open the official page.",
    url: "https://www.nyc.gov/site/doh/health/health-topics/988.page",
    kind: "official",
  },
];

export const peerPosts: PeerPost[] = [
  {
    id: "finance-queens",
    category: "Finance",
    borough: "Queens",
    title: "Rent-stress walk before the evening rush",
    description:
      "A low-pressure loop for people who need to talk through money stress without fixing everything today.",
    placeHint: "A familiar block, a library table, or a park edge nearby.",
    timeWindow: "After work",
    safetyLabel: "mock-demo-only",
  },
  {
    id: "walk-manhattan",
    category: "Walk",
    borough: "Manhattan",
    title: "Hudson River reset",
    description:
      "Concrete jungle day, river-path answer. Walk near the water and let the next hour get smaller.",
    placeHint: "Hudson River Greenway",
    timeWindow: "Late afternoon",
    safetyLabel: "mock-demo-only",
  },
  {
    id: "school-brooklyn",
    category: "School",
    borough: "Brooklyn",
    title: "Study-pressure decompression",
    description:
      "Sit near other people, name the assignment that is too loud, and pick one small next move.",
    placeHint: "Library branch or quiet cafe table",
    timeWindow: "Tonight",
    safetyLabel: "mock-demo-only",
  },
  {
    id: "vent-bronx",
    category: "Vent",
    borough: "Bronx",
    title: "Ten-minute stoop-style vent",
    description:
      "For the days when you do not need a lecture. Just a little room to say the thing out loud.",
    placeHint: "Neighborhood sidewalk or community center bench",
    timeWindow: "Early evening",
    safetyLabel: "mock-demo-only",
  },
  {
    id: "community-staten-island",
    category: "Community",
    borough: "Staten Island",
    title: "Be near people without making it a whole thing",
    description:
      "A simple public-place reset for anyone who wants company-adjacent time.",
    placeHint: "Library, park path, or neighborhood restaurant counter",
    timeWindow: "Weekend midday",
    safetyLabel: "mock-demo-only",
  },
];

export const placeResets: Record<Borough, PlaceReset> = {
  Manhattan: {
    id: "place-manhattan",
    name: "Hudson River edge",
    description: "A waterline walk when the city feels too close.",
    action: "Take ten minutes near the river before deciding the next thing.",
    borough: "Manhattan",
    kind: "place",
  },
  Brooklyn: {
    id: "place-brooklyn",
    name: "Library table or park bench",
    description: "A public place where you can be around people without performing.",
    action: "Sit, breathe, and make the next step smaller.",
    borough: "Brooklyn",
    kind: "place",
  },
  Queens: {
    id: "place-queens",
    name: "Neighborhood cafe or familiar block",
    description: "A grounded place with ordinary city noise and no big ceremony.",
    action: "Walk one block, then pick one person or resource to contact.",
    borough: "Queens",
    kind: "place",
  },
  Bronx: {
    id: "place-bronx",
    name: "Community center bench",
    description: "A public reset point when home feels too small for the day.",
    action: "Stay visible, stay near people, and let the next ten minutes pass.",
    borough: "Bronx",
    kind: "place",
  },
  "Staten Island": {
    id: "place-staten-island",
    name: "Park path or library branch",
    description: "A quieter place to be near people without needing to explain much.",
    action: "Bring the day outside and choose one concrete next step.",
    borough: "Staten Island",
    kind: "place",
  },
};
