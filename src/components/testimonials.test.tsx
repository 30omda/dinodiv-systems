import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "./sections/Testimonials";

describe("Testimonials Component Accessibility", () => {
  it("renders rating star containers with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBe(3);
  });

  it("renders testimonial quotes with dir='auto' for bi-directional text support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/i);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
