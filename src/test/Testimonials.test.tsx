import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating groups with role='img' and accessible labels", () => {
    render(<Testimonials />);
    const ratingImages = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(ratingImages.length).toBeGreaterThan(0);
    expect(ratingImages[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("renders testimonial quotes inside blockquote elements with dir='auto'", () => {
    const { container } = render(<Testimonials />);
    const blockquotes = container.querySelectorAll("blockquote");
    expect(blockquotes.length).toBeGreaterThan(0);
    blockquotes.forEach((blockquote) => {
      expect(blockquote).toHaveAttribute("dir", "auto");
    });
  });
});
