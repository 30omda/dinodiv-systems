import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import Index from "@/pages/Index";
import { describe, it, expect } from "vitest";

describe("Skip to main content accessibility link", () => {
  it("renders the skip link in Navbar pointing to #main-content", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole("link", { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink.className).toContain("sr-only");
    expect(skipLink.className).toContain("focus:not-sr-only");
  });

  it("renders main landmark with id='main-content' and tabIndex={-1} on the Index page", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });
});
