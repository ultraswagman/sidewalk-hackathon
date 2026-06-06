# Design Document: Sidewalk UX/UI Overhaul

**Date:** 2026-06-06  
**Status:** Approved  
**Topic:** Cohesive UX/UI Overhaul for Sidewalk Support Finder  

This document outlines the visual and interaction improvements for the Sidewalk application, bringing it up to a premium, accessible, and modern standard.

---

## 1. Typography & Global Aesthetics

### Google Font Integration
* **Font Family:** `Plus Jakarta Sans`
* **Weights:** `400` (Regular), `500` (Medium), `700` (Bold), `800` (Extra Bold)
* **Integration:** Loaded via `<link>` in `index.html` and applied as the primary font family in `styles.css`.

### Navigation Glassmorphism
* Apply modern backdrop filters and translucent borders to `.site-nav` to establish a floating, premium aesthetic.
* Implement smooth transition states for nav links.
* Elevate the visual weight of the "NYC 988" crisis link with active scaling and rich shadows.

---

## 2. Form UX & Interactions

### Clickable Suggestion Tags
* Introduce a row of common scenario suggestion tags under the concern input label:
  * `"Rent stress"`
  * `"School pressure"`
  * `"Needing a walk"`
  * `"Job hunting"`
  * `"Just need to vent"`
* Clicking a tag automatically fills the textarea, focuses it, and clears any validation errors.

### Character Counter
* Restrict input to `500` characters (`maxLength={500}`).
* Add a visual counter displaying `current/max` characters.
* Apply a warn state (amber/orange text color) when the input length exceeds `450` characters.

### Validation & Accessibility
* Connect the validation error message to the textarea using `aria-describedby` dynamically when active.
* Add helper text for screen readers using `aria-describedby` for the default instruction state.
* Smoothly animate error messages (`height` and `opacity` transition).
* Add active press states to the submit button (`transform: scale(0.98)`).

---

## 3. Recommendations Layout & Animations

### Card Design & Details
* Redesign `CommunityCard` and `ResourceCard` components to include small Lucide metadata icons (e.g. clock for time window, map pin for location/borough).
* Add modern box-shadow levels and border-radius configurations.
* Implement hover lift animations (`translateY(-2px)`) with shadow transitions.

### Result Transitions
* Add a smooth fade-in and slide-up keyframe animation (`slideUpFade`) to the results panel when a recommendation is generated, replacing the instant layout pop.

### Crisis Highlight
* Overhaul the urgent/crisis state with a soft warm-red gradient, an alert badge, and prominent layout hierarchy.

---

## 4. Implementation Steps

1. **index.html**: Import Google Font `Plus Jakarta Sans`.
2. **styles.css**: Update font family, colors, layouts, hover animations, scrollbar styling, and focus rings.
3. **App.tsx**: Add suggestion tags, character counter, input limits, and updated aria tags.
4. **CommunityCard.tsx & ResourceCard.tsx**: Integrate metadata icons (Lucide) and visual enhancements.
5. **Validation & Verification**: Run tests, check layout responsiveness, and verify accessibility focus flow.
