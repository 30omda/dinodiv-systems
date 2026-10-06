import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible ARIA label and role", () => {
    render(<Testimonials />);
    const ratingElements = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingElements.length).toBeGreaterThan(0);
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
