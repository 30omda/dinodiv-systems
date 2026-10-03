import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with role='img' and accessible aria-labels", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quotes and names with dir='auto' for proper RTL/LTR handling", () => {
    const { container } = render(<Testimonials />);
    const dirAutoElements = container.querySelectorAll('[dir="auto"]');
    expect(dirAutoElements.length).toBeGreaterThan(0);
  });
});
