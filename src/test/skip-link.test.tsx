import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";

describe("Skip to content link", () => {
  it("renders a skip link targeting #main-content and has a matching main landmark", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole("link", { name: /skip to main content/i });
    expect(skipLink).toBeDefined();
    expect(skipLink.getAttribute("href")).toBe("#main-content");

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.getAttribute("tabindex")).toBe("-1");
  });
});
