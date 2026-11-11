import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/sections/Navbar";
import Index from "@/pages/Index";
import { MemoryRouter } from "react-router-dom";

describe("Skip link accessibility", () => {
  it("renders the skip to main content link with correct href and styles", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole("link", { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
    expect(skipLink).toHaveClass("focus:not-sr-only");
  });

  it("Index page contains main landmark with matching id and focusability", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });
});
