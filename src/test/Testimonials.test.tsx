import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials Component Accessibility", () => {
  it("renders star rating with proper ARIA role and label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("applies dir='auto' to quote paragraphs for bidirectional text support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/".*"/);
    expect(quotes.length).toBe(3);
    quotes.forEach((quote) => {
      expect(quote.getAttribute("dir")).toBe("auto");
    });
  });
});
