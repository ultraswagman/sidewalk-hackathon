import { describe, expect, it } from "vitest";
import { getRecommendations } from "./recommendations";

describe("getRecommendations", () => {
  it("routes crisis language to official urgent resources before community suggestions", () => {
    const result = getRecommendations({
      concern: "I might hurt myself tonight",
      supportType: "Vent",
      borough: "Brooklyn",
    });

    expect(result.mode).toBe("crisis");
    expect(result.urgentResources[0]?.name).toBe("NYC 988");
    expect(result.communitySuggestions).toHaveLength(0);
  });

  it("returns community, place, and official resources for a non-crisis check-in", () => {
    const result = getRecommendations({
      concern: "Rent stress is making the day feel impossible",
      supportType: "Finance",
      borough: "Queens",
    });

    expect(result.mode).toBe("support");
    expect(result.communitySuggestions[0]?.category).toBe("Finance");
    expect(result.placeReset?.borough).toBe("Queens");
    expect(result.officialResources[0]?.name).toBe("NYC 988");
  });

  it("treats immediate danger as a crisis even without self-harm wording", () => {
    const result = getRecommendations({
      concern: "Someone nearby is in immediate danger",
      supportType: "Community",
      borough: "Bronx",
    });

    expect(result.mode).toBe("crisis");
    expect(result.urgentResources.map((resource) => resource.name)).toContain("911");
  });

  it("falls back to the selected category when the selected borough has no exact peer match", () => {
    const result = getRecommendations({
      concern: "I need a walk and a little air",
      supportType: "Walk",
      borough: "Queens",
    });

    expect(result.mode).toBe("support");
    expect(result.communitySuggestions[0]?.category).toBe("Walk");
    expect(result.placeReset?.borough).toBe("Queens");
  });
});
