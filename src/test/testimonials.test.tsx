import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating containers with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img");
    expect(starContainers.length).toBeGreaterThan(0);
    starContainers.forEach((container) => {
      expect(container).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });

  it("renders testimonial quote paragraphs with dir='auto'", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/".*"/);
    expect(quotes.length).toBe(3);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
