import {
  crisisResources,
  officialResources,
  peerPosts,
  placeResets,
} from "../data/resources";
import type { CheckIn, RecommendationResult } from "./types";

const crisisTerms = [
  "kill myself",
  "suicide",
  "hurt myself",
  "end my life",
  "i want to die",
  "harm myself",
  "hurt someone",
  "immediate danger",
];

export function hasCrisisLanguage(text: string) {
  const normalized = text.toLowerCase();
  return crisisTerms.some((term) => normalized.includes(term));
}

export function getRecommendations(checkIn: CheckIn): RecommendationResult {
  if (hasCrisisLanguage(checkIn.concern)) {
    return {
      mode: "crisis",
      urgentResources: crisisResources,
      officialResources,
      communitySuggestions: [],
      placeReset: null,
    };
  }

  const exactMatch = peerPosts.find(
    (post) =>
      post.category === checkIn.supportType && post.borough === checkIn.borough,
  );
  const categoryMatch = peerPosts.find(
    (post) => post.category === checkIn.supportType,
  );

  return {
    mode: "support",
    urgentResources: [],
    officialResources,
    communitySuggestions: [exactMatch ?? categoryMatch ?? peerPosts[0]],
    placeReset: placeResets[checkIn.borough],
  };
}
