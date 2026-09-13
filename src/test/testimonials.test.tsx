import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders rating group with accessible role and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quotes with dir='auto' for multilingual support", () => {
    const { container } = render(<Testimonials />);
    const quoteElements = container.querySelectorAll("p[dir='auto']");
    expect(quoteElements.length).toBeGreaterThan(0);
  });
});
