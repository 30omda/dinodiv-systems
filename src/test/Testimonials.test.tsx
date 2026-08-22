import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders accessible rating group with role='img' and aria-label", () => {
    render(<Testimonials />);
    const ratingGroups = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(ratingGroups.length).toBeGreaterThan(0);
    expect(ratingGroups[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("marks individual star icons as aria-hidden", () => {
    const { container } = render(<Testimonials />);
    const starIcons = container.querySelectorAll("svg.lucide-star");
    expect(starIcons.length).toBeGreaterThan(0);
    starIcons.forEach((icon) => {
      expect(icon).toHaveAttribute("aria-hidden", "true");
    });
  });
});
