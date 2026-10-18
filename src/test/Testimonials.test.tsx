import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating groups with role='img' and accessible aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
    starRatings.forEach((rating) => {
      expect(rating).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });

  it("renders testimonial quotes with dir='auto' for bidirectional text alignment", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/i);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
