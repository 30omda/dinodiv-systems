import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with proper ARIA attributes", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quotes with dir='auto' for correct text directionality", () => {
    const { container } = render(<Testimonials />);
    const blockquotes = container.querySelectorAll("blockquote");
    expect(blockquotes.length).toBeGreaterThan(0);
    blockquotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
