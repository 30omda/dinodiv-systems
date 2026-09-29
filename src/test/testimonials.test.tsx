import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility and rendering", () => {
  it("renders star rating containers with proper role and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("sets dir='auto' on testimonial quotes for bidirectional text support", () => {
    const { container } = render(<Testimonials />);
    const quoteParagraphs = container.querySelectorAll("p[dir='auto']");
    expect(quoteParagraphs.length).toBe(3);
  });
});
