import type { FormEvent } from "react";
import { boroughs, suggestionTags, supportTypes } from "./options";
import type { Borough, SupportCategory } from "../../lib/types";

type CheckInFormProps = {
  borough: Borough;
  concern: string;
  formMessage: string;
  onBoroughChange: (borough: Borough) => void;
  onConcernChange: (concern: string) => void;
  onSuggestionSelect: (suggestion: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSupportTypeChange: (supportType: SupportCategory) => void;
  supportType: SupportCategory;
};

export function CheckInForm({
  borough,
  concern,
  formMessage,
  onBoroughChange,
  onConcernChange,
  onSuggestionSelect,
  onSubmit,
  onSupportTypeChange,
  supportType,
}: CheckInFormProps) {
  return (
    <section className="checkin-panel" id="check-in" aria-labelledby="checkin-title">
      <p className="eyebrow">Check in</p>
      <h2 id="checkin-title">What is the closest version of today?</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="concern">What are you dealing with?</label>
        <p id="concern-desc" className="field-hint">
          Write a few words about what is on your mind today.
        </p>
        <div className="suggestion-tags" role="group" aria-label="Quick suggestion tags">
          {suggestionTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onSuggestionSelect(tag)}
              className="tag-button"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="textarea-container">
          <textarea
            id="concern"
            value={concern}
            onChange={(event) => onConcernChange(event.target.value)}
            maxLength={500}
            placeholder="Example: rent stress, school pressure, needing to get out of the apartment"
            rows={5}
            aria-describedby={["concern-desc", formMessage ? "form-message" : ""].filter(Boolean).join(" ")}
          />
          <span className={`char-count ${concern.length >= 450 ? "warn" : ""}`}>
            {concern.length}/500
          </span>
        </div>

        <label htmlFor="supportType">What kind of support sounds useful?</label>
        <select
          id="supportType"
          value={supportType}
          onChange={(event) =>
            onSupportTypeChange(event.target.value as SupportCategory)
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
          onChange={(event) => onBoroughChange(event.target.value as Borough)}
        >
          {boroughs.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button type="submit">Find a next step</button>
        {formMessage ? (
          <p id="form-message" className="form-message" role="status">
            {formMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
