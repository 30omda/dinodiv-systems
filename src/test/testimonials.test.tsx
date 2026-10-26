import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating containers with correct role and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute for bidirectional text support", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBe(3);
  });
});
