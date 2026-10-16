import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders testimonial quote paragraphs with dir='auto'", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    quotes.forEach((quote) => {
      expect(quote.getAttribute("dir")).toBe("auto");
    });
  });
});
