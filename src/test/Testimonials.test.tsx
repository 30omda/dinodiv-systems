import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials", () => {
  it("renders star rating with accessible role and label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
