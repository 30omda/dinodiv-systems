import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with accessible ARIA labels and role", () => {
    render(<Testimonials />);
    const ratingImages = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(ratingImages.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute for multilingual support", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBe(3);
  });
});
