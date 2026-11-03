import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible group role and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBe(3);

    starRatings.forEach((ratingGroup) => {
      const svgs = ratingGroup.querySelectorAll("svg");
      expect(svgs.length).toBe(5);
      svgs.forEach((svg) => {
        expect(svg).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  it("renders quote paragraphs with dir='auto' for multilingual bidirectional layout", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBe(3);
  });
});
