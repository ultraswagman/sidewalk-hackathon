import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResourceCard } from "./ResourceCard";
import type { Resource } from "../lib/types";

const resource: Resource = {
  id: "nyc-988-info",
  name: "NYC 988",
  description: "Mental health and substance use support for NYC residents.",
  action: "Save the number or open the official page.",
  url: "https://www.nyc.gov/site/doh/health/health-topics/988.page",
  kind: "official",
};

describe("ResourceCard", () => {
  it("uses the resource name in the outbound link accessible name", () => {
    render(<ResourceCard label="Official support" resource={resource} />);

    expect(
      screen.getByRole("link", {
        name: "Open NYC 988 official page (opens in a new tab)",
      }),
    ).toHaveAttribute("href", resource.url);
  });
});
