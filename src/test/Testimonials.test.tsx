import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with role='img' and descriptive aria-label", () => {
    render(<Testimonials />);

    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' attribute", () => {
    const { container } = render(<Testimonials />);

    const quoteElements = container.querySelectorAll("p[dir='auto']");
    expect(quoteElements.length).toBe(3);
  });
});
