import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with role='img' and accessible aria-labels", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' for bidirectional text support", () => {
    const { container } = render(<Testimonials />);
    const quoteElements = container.querySelectorAll("p[dir='auto']");
    expect(quoteElements.length).toBe(3);
  });
});
