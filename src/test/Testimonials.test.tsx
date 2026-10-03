import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component accessibility and RTL support", () => {
  it("renders star rating groups with role img and aria-label", () => {
    render(<Testimonials />);
    const ratingGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingGroups.length).toBeGreaterThan(0);
    expect(ratingGroups[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
