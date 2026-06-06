# Sidewalk

Sidewalk is a Vite + React prototype for a low-pressure NYC support finder. A user describes what today feels like, chooses a support type and borough, and receives a practical next step, a public place reset, and an official NYC support option.

This is a demo prototype. It is not medical care, emergency care, therapy, or a live referral system. Official resource links and copy should be verified against NYC source pages before any public pilot.

## Tech Stack

- React 19
- TypeScript
- Vite
- Vitest + Testing Library
- Bun for package management and scripts

## Getting Started

Install dependencies:

```bash
bun install
```

Start the local dev server:

```bash
bun run dev
```

Run the test suite:

```bash
bun run test
```

Run TypeScript validation:

```bash
bun run typecheck
```

Build for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

## Project Structure

```text
src/
  components/              Reusable presentational cards
  data/                    Seed resources and demo peer suggestions
  features/check-in/       Check-in form UI and option lists
  features/recommendations/ Results panel UI
  lib/                     Recommendation logic and shared types
  test/                    Vitest and Testing Library setup
```

## Recommendation Model

The app uses deterministic local data only:

- `src/lib/recommendations.ts` detects crisis language before any community suggestion is shown.
- `src/data/resources.ts` contains mock peer suggestions, place resets, and official support resources.
- No user input is sent to a server or third-party API.

## Testing

Current coverage focuses on behavior that matters for a prototype handoff:

- Crisis language routes to urgent resources.
- Non-crisis check-ins show a community step, place reset, and official resource.
- Empty submissions show a validation message and return focus to the text area.
- Suggestion tags populate the check-in field.
- Resource links have resource-specific accessible names.

Add tests before changing recommendation behavior, safety routing, or form interactions.

## Deployment

The included deployment script targets Vercel:

```bash
bun run deploy
```

Confirm the project is linked to the intended Vercel project before using the production deploy script.
