import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with role='img' and descriptive aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders client quotes with dir='auto' attribute for proper RTL support", () => {
    render(<Testimonials />);
    const quoteParagraphs = screen.getAllByText(/"/);
    quoteParagraphs.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
