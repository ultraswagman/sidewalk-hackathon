# Sidewalk PRD

## Summary

Sidewalk is a demo web app for New York City residents who feel isolated, overwhelmed, or stuck and want one practical next step. The prototype guides a resident through a short check-in, then suggests a community-style next step, an NYC place reset, and an official support resource.

Sidewalk is not therapy, clinical triage, crisis response, or real peer matching. The demo must clearly separate official crisis/support resources from informal community suggestions.

## Primary User

A New Yorker who feels isolated or overwhelmed but is not necessarily in acute crisis.

Example needs:

- Get out of the apartment.
- Talk through school, work, rent, or money stress.
- Be near people without making it a formal thing.
- Find a small, realistic next action in the city.

## MVP Scope

In scope:

- Vite, React, and TypeScript single-page app.
- Guided check-in flow.
- Static mock community posts.
- Static official resource data.
- Deterministic safety intercept.
- Accessible result cards.
- Unit tests written before implementation.
- Vercel-ready build.

Out of scope:

- Real accounts.
- Real peer matching.
- Messaging.
- User-generated content.
- Live location.
- Provider booking.
- Clinical diagnosis.
- LLM-only safety decisions.

## Core Flow

1. User describes what they are dealing with.
2. User chooses a support category.
3. User chooses a rough borough.
4. App checks for crisis language.
5. Crisis language shows immediate support first.
6. Non-crisis language shows community, place, and official support cards.
7. Empty submissions ask for more context instead of generating recommendations.

## Safety Rules

If a check-in includes severe distress, self-harm, harm-to-others, or immediate danger language, Sidewalk must bypass community suggestions and show urgent resources first.

Initial urgent resources:

- NYC 988 for crisis counseling and mental health support.
- 911 for immediate danger.

Community suggestions, parks, cafes, walks, libraries, and restaurants must never be framed as medical care.

## Accessibility Requirements

- All form controls have visible labels.
- Result updates are announced through accessible status/region patterns.
- Empty submission feedback is not color-only.
- Keyboard focus is visible.
- Buttons and controls have usable target sizes.
- Crisis resources are identified by text, not just styling.
- Mobile layout must preserve reading order and avoid overlap.

## Design Direction

Sidewalk should feel calm, practical, and NYC-specific without becoming gimmicky. The tone should be understated: neighborhood blocks, river paths, libraries, public benches, cafes, and ordinary city places as grounding anchors.

Avoid generic wellness-product tropes, vague AI claims, and copy that sounds like clinical advice.

## Testing Requirements

No implementation without tests first.

Current required coverage:

- Crisis language routes to urgent resources.
- Immediate danger routes to urgent resources.
- Non-crisis input returns community, place, and official resources.
- Category fallback works when borough-specific peer data is missing.
- Guided form renders with accessible labels.
- Crisis UI hides community suggestions.
- Non-crisis UI renders all three result types.
- Empty submissions show a status message and do not recommend.

## Success Criteria

The prototype succeeds when:

- A user understands the app within 10 seconds.
- A non-crisis user gets a useful next step.
- A crisis-like user never sees peer/community suggestions first.
- The product feels specific to NYC.
- The app is accessible enough for a serious demo.
- Unit tests and production build pass.
