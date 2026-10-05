import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating containers with role img and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
    starRatings.forEach((rating) => {
      expect(rating).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });

  it("renders quote paragraphs with dir='auto' for bidirectional text support", () => {
    const { container } = render(<Testimonials />);
    const quoteParagraphs = container.querySelectorAll("p[dir='auto']");
    expect(quoteParagraphs.length).toBe(3);
  });
});
