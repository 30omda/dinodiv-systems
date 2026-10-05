import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating groups with role='img' and descriptive aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
    starGroups.forEach((group) => {
      expect(group).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });

  it("renders testimonial quotes with dir='auto'", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/".*"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
