import { FormEvent, useState } from "react";
import { Footprints, LifeBuoy, MapPinned, ShieldAlert } from "lucide-react";
import { CommunityCard } from "./components/CommunityCard";
import { ResourceCard } from "./components/ResourceCard";
import { getRecommendations } from "./lib/recommendations";
import type { Borough, RecommendationResult, SupportCategory } from "./lib/types";
import "./styles.css";

const supportTypes: SupportCategory[] = [
  "Walk",
  "School",
  "Finance",
  "Vent",
  "Work",
  "Community",
];

const boroughs: Borough[] = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

function App() {
  const [concern, setConcern] = useState("");
  const [supportType, setSupportType] = useState<SupportCategory>("Walk");
  const [borough, setBorough] = useState<Borough>("Brooklyn");
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!concern.trim()) {
      setResult(null);
      setFormMessage("Tell us a little about today first.");
      return;
    }

    setFormMessage("");
    setResult(getRecommendations({ concern, supportType, borough }));
  }

  return (
    <main className="app-shell">
      <header className="site-nav">
        <a className="nav-brand" href="#check-in" aria-label="Sidewalk home">
          <span className="nav-mark" aria-hidden="true">
            <Footprints />
          </span>
          <span>Sidewalk</span>
        </a>
        <nav aria-label="Primary">
          <a href="#check-in">Check in</a>
          <a href="#results">Next step</a>
          <a href="#pilot-note">Pilot note</a>
        </nav>
        <a className="crisis-link" href="https://nyc988.cityofnewyork.us/" target="_blank" rel="noreferrer">
          NYC 988
        </a>
      </header>

      <section className="intro-panel" aria-labelledby="app-title">
        <div>
          <p className="eyebrow">NYC support finder</p>
          <div className="brand-row">
            <span className="brand-mark" aria-hidden="true">
              <Footprints />
            </span>
            <h1 id="app-title">Sidewalk</h1>
          </div>
          <p className="lede">
            Pick the closest version of today. Sidewalk turns it into one
            practical next step, one public place to breathe, and one official
            NYC support option.
          </p>
        </div>
        <p className="safety-copy">
          <ShieldAlert aria-hidden="true" />
          Community support is not emergency care. If someone may be hurt right
          now, use crisis support first.
        </p>
      </section>

      <div className="workspace">
        <section className="checkin-panel" id="check-in" aria-labelledby="checkin-title">
          <p className="eyebrow">Check in</p>
          <h2 id="checkin-title">What is the closest version of today?</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="concern">What are you dealing with?</label>
            <textarea
              id="concern"
              value={concern}
              onChange={(event) => setConcern(event.target.value)}
              placeholder="Example: rent stress, school pressure, needing to get out of the apartment"
              rows={5}
            />

            <label htmlFor="supportType">What kind of support sounds useful?</label>
            <select
              id="supportType"
              value={supportType}
              onChange={(event) =>
                setSupportType(event.target.value as SupportCategory)
              }
            >
              {supportTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <label htmlFor="borough">Where in NYC are you, roughly?</label>
            <select
              id="borough"
              value={borough}
              onChange={(event) => setBorough(event.target.value as Borough)}
            >
              {boroughs.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <button type="submit">Find a next step</button>
            {formMessage ? (
              <p className="form-message" role="status">
                {formMessage}
              </p>
            ) : null}
          </form>
        </section>

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
      </div>

      <aside className="footer-note" id="pilot-note" aria-label="Prototype note">
        <LifeBuoy aria-hidden="true" />
        <p>
          Demo prototype only. Official resources should be verified against NYC
          pages before any public pilot.
        </p>
      </aside>
    </main>
  );
}

export default App;
