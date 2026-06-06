import { MapPinned } from "lucide-react";
import { CommunityCard } from "../../components/CommunityCard";
import { ResourceCard } from "../../components/ResourceCard";
import type { RecommendationResult } from "../../lib/types";

type ResultsPanelProps = {
  result: RecommendationResult | null;
};

export function ResultsPanel({ result }: ResultsPanelProps) {
  return (
    <section className="results-panel" id="results" aria-live="polite" aria-labelledby="results-title">
      <div className="section-heading">
        <p className="eyebrow">Recommendation</p>
        <h2 id="results-title">
          {result?.mode === "crisis" ? "Use immediate support now" : "Your next step"}
        </h2>
      </div>

      {!result ? (
        <div className="empty-state">
          <MapPinned aria-hidden="true" />
          <div>
            <p>Your suggestions will show up here.</p>
            <ul>
              <li>A low-pressure community step</li>
              <li>A public place reset</li>
              <li>An official NYC support option</li>
            </ul>
          </div>
        </div>
      ) : null}

      {result?.mode === "crisis" ? (
        <div className="result-grid">
          {result.urgentResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              label="Immediate support"
              resource={resource}
              urgent
            />
          ))}
        </div>
      ) : null}

      {result?.mode === "support" ? (
        <div className="result-grid">
          <CommunityCard post={result.communitySuggestions[0]} />
          <ResourceCard label="Place reset" resource={result.placeReset} />
          <ResourceCard
            label={result.officialResourceBuckets[0]?.name ?? "Official support"}
            resource={result.officialResourceBuckets[0].resources[0]}
          />
        </div>
      ) : null}
    </section>
  );
}
