import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility and layout", () => {
  it("renders star rating with proper ARIA img role and label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute for multilingual support", () => {
    const { container } = render(<Testimonials />);
    const quoteParagraphs = container.querySelectorAll("p[dir='auto']");
    expect(quoteParagraphs.length).toBe(3);
  });
});
