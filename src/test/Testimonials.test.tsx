import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating groups with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders testimonial quote text with dir='auto' attribute", () => {
    const { container } = render(<Testimonials />);
    const quoteElements = container.querySelectorAll("p[dir='auto']");
    expect(quoteElements.length).toBeGreaterThan(0);
  });
});
