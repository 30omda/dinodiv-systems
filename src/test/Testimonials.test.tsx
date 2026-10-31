import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders accessible star ratings with role='img' and aria-label", () => {
    const { container } = render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings).toHaveLength(3);

    // Each rating contains 5 hidden star icons
    starRatings.forEach((rating) => {
      const icons = rating.querySelectorAll("svg");
      expect(icons).toHaveLength(5);
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  it("renders blockquotes with dir='auto' for proper multilingual text direction", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("blockquote");
    expect(quotes.length).toBe(3);

    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
