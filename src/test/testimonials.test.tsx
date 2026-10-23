import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with role='img' and proper aria-label", () => {
    render(<Testimonials />);

    const starGroups = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
    starGroups.forEach((group) => {
      expect(group).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });

  it("renders quote elements with dir='auto' for bidirectional text support", () => {
    const { container } = render(<Testimonials />);

    const quoteParagraphs = container.querySelectorAll("p[dir='auto']");
    expect(quoteParagraphs.length).toBe(3);
  });
});
