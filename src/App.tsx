import { FormEvent, useState } from "react";
import { Footprints, LifeBuoy, ShieldAlert } from "lucide-react";
import { CheckInForm } from "./features/check-in/CheckInForm";
import { ResultsPanel } from "./features/recommendations/ResultsPanel";
import { getRecommendations } from "./lib/recommendations";
import type { Borough, RecommendationResult, SupportCategory } from "./lib/types";
import "./styles.css";

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
      document.getElementById("concern")?.focus();
      return;
    }

    setFormMessage("");
    setResult(getRecommendations({ concern, supportType, borough }));
  }

  function handleConcernChange(nextConcern: string) {
    setConcern(nextConcern);
    if (formMessage) setFormMessage("");
  }

  function handleSuggestionSelect(suggestion: string) {
    setConcern(suggestion);
    setFormMessage("");
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
        <CheckInForm
          borough={borough}
          concern={concern}
          formMessage={formMessage}
          onBoroughChange={setBorough}
          onConcernChange={handleConcernChange}
          onSubmit={handleSubmit}
          onSuggestionSelect={handleSuggestionSelect}
          onSupportTypeChange={setSupportType}
          supportType={supportType}
        />
        <ResultsPanel result={result} />
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
