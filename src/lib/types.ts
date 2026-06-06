export type SupportCategory =
  | "Walk"
  | "School"
  | "Finance"
  | "Vent"
  | "Work"
  | "Community";

export type Borough =
  | "Manhattan"
  | "Brooklyn"
  | "Queens"
  | "Bronx"
  | "Staten Island";

export type CheckIn = {
  concern: string;
  supportType: SupportCategory;
  borough: Borough;
};

export type PeerPost = {
  id: string;
  category: SupportCategory;
  borough: Borough;
  title: string;
  description: string;
  placeHint: string;
  timeWindow: string;
  safetyLabel: "mock-demo-only";
};

export type Resource = {
  id: string;
  name: string;
  description: string;
  action: string;
  url?: string;
  kind: "crisis" | "official" | "place";
};

export type OfficialResourceBucket = {
  id: string;
  name: string;
  description: string;
  resources: Resource[];
};

export type PlaceReset = Resource & {
  borough: Borough;
};

export type RecommendationResult =
  | {
      mode: "crisis";
      urgentResources: Resource[];
      officialResourceBuckets: OfficialResourceBucket[];
      communitySuggestions: [];
      placeReset: null;
    }
  | {
      mode: "support";
      urgentResources: [];
      officialResourceBuckets: OfficialResourceBucket[];
      communitySuggestions: PeerPost[];
      placeReset: PlaceReset;
    };
