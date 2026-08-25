import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star rating groups with accessibility roles and labels", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
    starRatings.forEach((rating) => {
      expect(rating).toBeInTheDocument();
    });
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/^".*"$/);
    expect(quotes.length).toBe(3);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
