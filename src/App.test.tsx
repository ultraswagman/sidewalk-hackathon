import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders an accessible guided check-in form", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Sidewalk" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByLabelText("What are you dealing with?")).toBeInTheDocument();
    expect(screen.getByLabelText("What kind of support sounds useful?")).toBeInTheDocument();
    expect(screen.getByLabelText("Where in NYC are you, roughly?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Find a next step" })).toBeInTheDocument();
  });

  it("shows urgent resources instead of community suggestions for crisis language", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("What are you dealing with?"), "I might hurt myself");
    await user.click(screen.getByRole("button", { name: "Find a next step" }));

    expect(screen.getByRole("heading", { name: "Use immediate support now" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "NYC 988" })).toBeInTheDocument();
    expect(screen.queryByText("Community step")).not.toBeInTheDocument();
  });

  it("shows a community step, place reset, and official resource for non-crisis support", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByLabelText("What are you dealing with?"),
      "Rent stress is making today feel heavy",
    );
    await user.selectOptions(
      screen.getByLabelText("What kind of support sounds useful?"),
      "Finance",
    );
    await user.selectOptions(screen.getByLabelText("Where in NYC are you, roughly?"), "Queens");
    await user.click(screen.getByRole("button", { name: "Find a next step" }));

    expect(screen.getByRole("heading", { name: "Your next step" })).toBeInTheDocument();
    expect(screen.getByText("Community step")).toBeInTheDocument();
    expect(screen.getByText("Place reset")).toBeInTheDocument();
    expect(screen.getByText("Immediate support")).toBeInTheDocument();
    expect(screen.getByText("Rent-stress walk before the evening rush")).toBeInTheDocument();
  });

  it("asks for context instead of recommending from an empty check-in", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Find a next step" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Tell us a little about today first.",
    );
    expect(screen.queryByText("Community step")).not.toBeInTheDocument();
  });
});
