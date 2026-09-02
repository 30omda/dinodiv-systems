import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component accessibility and layout", () => {
  it("renders star rating with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto'", () => {
    const { container } = render(<Testimonials />);
    const quoteElements = container.querySelectorAll("p[dir='auto']");
    expect(quoteElements.length).toBe(3);
  });
});
